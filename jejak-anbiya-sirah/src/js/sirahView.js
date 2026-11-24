/**
 * Tab 1: Garis Masa Sirah + Peta Interaktif Leaflet.js
 * Menyokong tapisan Fasa/Kategori, penandaan Selesai (localStorage),
 * paparan split-view desktop & togol mudah alih, serta penyegerakan peta masa nyata.
 */
(function (root) {
  let map = null;
  let tileLayer = null;
  let routePolyline = null;
  let markersById = new Map();

  let selectedPhase = 'Semua';
  let selectedCategory = 'Semua';
  let activeEventId = null;
  let completedSet = new Set();

  const OSM_TILE_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getEvents() {
    return (root.JejakData && root.JejakData.sirah) || [];
  }

  function getFilteredEvents() {
    return getEvents().filter((ev) => {
      const matchPhase = selectedPhase === 'Semua' || ev.phase === selectedPhase;
      const matchCategory = selectedCategory === 'Semua' || ev.category === selectedCategory;
      return matchPhase && matchCategory;
    });
  }

  function getPhaseClass(phase) {
    if (phase === 'Fasa Mekah') return 'tag-phase-mekah';
    if (phase === 'Fasa Madinah') return 'tag-phase-madinah';
    return 'tag-phase-sebelum';
  }

  function updateProgressUI() {
    const total = getEvents().length;
    const count = completedSet.size;
    const pct = total > 0 ? Math.round((count / total) * 100) : 0;

    const textEl = document.getElementById('sirah-progress-text');
    const fillEl = document.getElementById('sirah-progress-fill');
    const barWrap = document.getElementById('sirah-progress-bar-wrap');

    if (textEl) textEl.textContent = `${count}/${total} Peristiwa Dibaca`;
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (barWrap) {
      barWrap.setAttribute('aria-valuemax', String(total));
      barWrap.setAttribute('aria-valuenow', String(count));
    }
  }

  function createPinIcon(orderNumber, isActive) {
    return root.L.divIcon({
      className: 'jejak-pin-wrapper',
      html: `<div class="jejak-pin ${isActive ? 'is-active' : ''}"><span>${orderNumber}</span></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -28]
    });
  }

  function setMapTileTheme() {
    if (!map || !root.L || tileLayer) return;
    tileLayer = root.L.tileLayer(OSM_TILE_URL, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',
      maxZoom: 18
    }).addTo(map);
  }

  function initMap() {
    const mapContainer = document.getElementById('sirah-map');
    if (!mapContainer || !root.L || map) return;

    map = root.L.map(mapContainer, {
      center: [22.8, 39.5],
      zoom: 6,
      zoomControl: true,
      scrollWheelZoom: false
    });

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setMapTileTheme(currentTheme);
  }

  function syncMarkers(events) {
    if (!map || !root.L) return;

    markersById.forEach((marker) => map.removeLayer(marker));
    markersById.clear();

    if (routePolyline) {
      map.removeLayer(routePolyline);
      routePolyline = null;
    }

    const coords = [];

    events.forEach((ev) => {
      coords.push(ev.coordinates);
      const isActive = ev.id === activeEventId;
      const marker = root.L.marker(ev.coordinates, {
        icon: createPinIcon(ev.order, isActive),
        zIndexOffset: isActive ? 500 : 0
      }).addTo(map);

      marker.bindPopup(`
        <div class="map-popup">
          <div class="map-popup-phase">${escapeHtml(ev.phase)} · ${escapeHtml(ev.yearMasihi)}</div>
          <h4 class="map-popup-title">${escapeHtml(ev.title)}</h4>
          <p class="map-popup-meta">${escapeHtml(ev.locationName)}</p>
        </div>
      `);

      marker.on('click', () => {
        selectEvent(ev.id, { panMap: false, scrollCard: true });
      });

      markersById.set(ev.id, marker);
    });

    if (coords.length > 1) {
      routePolyline = root.L.polyline(coords, {
        color: '#C5A059',
        weight: 2,
        opacity: 0.65,
        dashArray: '6, 8'
      }).addTo(map);
    }
  }

  function fitAllMarkers() {
    if (!map || !root.L) return;
    const events = getFilteredEvents();
    if (!events.length) return;
    const bounds = root.L.latLngBounds(events.map((e) => e.coordinates));
    map.fitBounds(bounds, { padding: [44, 44], maxZoom: 11 });
  }

  function selectEvent(eventId, options) {
    const opts = Object.assign({ panMap: true, scrollCard: false, switchMobileToMap: false }, options);
    const events = getEvents();
    const ev = events.find((item) => item.id === eventId);
    if (!ev) return;

    activeEventId = eventId;

    // Update timeline card highlight
    document.querySelectorAll('.sirah-card').forEach((card) => {
      card.classList.toggle('is-selected', card.getAttribute('data-event-id') === eventId);
    });

    if (opts.scrollCard) {
      const cardEl = document.querySelector(`.sirah-card[data-event-id="${eventId}"]`);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    // Update map header & caption
    const locLabel = document.getElementById('sirah-active-location');
    const captionEl = document.getElementById('sirah-map-caption');
    if (locLabel) locLabel.textContent = ev.locationName;
    if (captionEl) {
      captionEl.textContent = `#${ev.order} ${ev.title} — ${ev.yearMasihi} (${ev.yearHijrah}), Usia Baginda ${ev.prophetAge}`;
    }

    // Switch to map on mobile if explicitly requested via "Lihat di Peta"
    if (opts.switchMobileToMap && window.innerWidth < 1024) {
      setMobileView('map');
    }

    // Update marker styling & fly map smoothly
    if (map && root.L) {
      markersById.forEach((marker, id) => {
        const item = events.find((e) => e.id === id);
        if (!item) return;
        const active = id === eventId;
        marker.setIcon(createPinIcon(item.order, active));
        marker.setZIndexOffset(active ? 500 : 0);
      });

      const targetMarker = markersById.get(eventId);
      if (opts.panMap) {
        setTimeout(() => {
          map.invalidateSize();
          map.flyTo(ev.coordinates, ev.zoom || 11, {
            duration: 1.05,
            easeLinearity: 0.25
          });
          if (targetMarker) targetMarker.openPopup();
        }, opts.switchMobileToMap ? 120 : 10);
      } else if (targetMarker) {
        targetMarker.openPopup();
      }
    }
  }

  function renderTimeline() {
    const container = document.getElementById('sirah-timeline-list');
    if (!container) return;

    const events = getFilteredEvents();

    if (!events.length) {
      container.innerHTML = `
        <div class="empty-state">
          <i data-lucide="compass" class="icon-md"></i>
          <h3>Tiada peristiwa sepadan</h3>
          <p>Cuba ubah gabungan tapisan fasa atau kategori untuk melihat peristiwa Sirah yang lain.</p>
        </div>
      `;
      syncMarkers([]);
      if (root.lucide) root.lucide.createIcons({ nodes: [container] });
      return;
    }

    if (!activeEventId || !events.some((e) => e.id === activeEventId)) {
      activeEventId = events[0].id;
    }

    container.innerHTML = events
      .map((ev) => {
        const isDone = completedSet.has(ev.id);
        const isSelected = ev.id === activeEventId;
        return `
          <article class="sirah-card ${isSelected ? 'is-selected' : ''} ${isDone ? 'is-completed' : ''}" data-event-id="${escapeHtml(ev.id)}" tabindex="0">
            <div class="sirah-card-top">
              <div class="sirah-date-meta">
                <span class="date-chip">${escapeHtml(ev.yearMasihi)} · ${escapeHtml(ev.yearHijrah)}</span>
                <span class="age-chip">Usia: ${escapeHtml(ev.prophetAge)}</span>
              </div>
              <div class="sirah-tags">
                <span class="tag-badge ${getPhaseClass(ev.phase)}">${escapeHtml(ev.phase)}</span>
                <span class="tag-badge tag-category">${escapeHtml(ev.category)}</span>
              </div>
            </div>

            <h2 class="sirah-title">${ev.order}. ${escapeHtml(ev.title)}</h2>
            <div class="sirah-location-line">
              <i data-lucide="map-pin" class="icon-xs text-gold"></i>
              <span>${escapeHtml(ev.locationName)}</span>
            </div>

            <p class="sirah-summary">${escapeHtml(ev.summary)}</p>

            <div class="sirah-insight-grid">
              <div class="insight-box">
                <span class="insight-label">Pengajaran Utama</span>
                <p class="insight-text">${escapeHtml(ev.pengajaran)}</p>
              </div>
              <div class="insight-box is-wahyu">
                <span class="insight-label">Kaitan Wahyu / Asbabun Nuzul</span>
                <p class="insight-text"><span class="insight-ref">${escapeHtml(ev.wahyu.ref)}</span> — ${escapeHtml(ev.wahyu.note)}</p>
              </div>
            </div>

            <div class="sirah-card-actions">
              <button class="btn-done ${isDone ? 'is-completed' : ''}" type="button" data-toggle-done="${escapeHtml(ev.id)}" aria-pressed="${isDone}">
                <i data-lucide="${isDone ? 'check-circle-2' : 'circle'}" class="icon-xs"></i>
                <span>${isDone ? 'Selesai Dibaca' : 'Tanda Selesai'}</span>
              </button>

              <button class="btn-map-jump" type="button" data-jump-map="${escapeHtml(ev.id)}">
                <i data-lucide="navigation" class="icon-xs"></i>
                <span>Fokus Peta</span>
              </button>
            </div>
          </article>
        `;
      })
      .join('');

    // Wire events
    container.querySelectorAll('.sirah-card').forEach((card) => {
      const id = card.getAttribute('data-event-id');
      card.addEventListener('click', (e) => {
        if (e.target.closest('[data-toggle-done]') || e.target.closest('[data-jump-map]')) return;
        selectEvent(id, { panMap: true, scrollCard: false });
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.target.closest('button')) return;
          e.preventDefault();
          selectEvent(id, { panMap: true, scrollCard: false });
        }
      });
    });

    container.querySelectorAll('[data-toggle-done]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-toggle-done');
        completedSet = root.JejakApp.storage.toggleCompletedSirah(id);
        updateProgressUI();
        renderTimeline();
        if (completedSet.has(id) && root.JejakApp.showToast) {
          root.JejakApp.showToast('Peristiwa ditanda selesai dibaca');
        }
      });
    });

    container.querySelectorAll('[data-jump-map]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-jump-map');
        selectEvent(id, { panMap: true, scrollCard: false, switchMobileToMap: true });
      });
    });

    syncMarkers(events);

    const activeObj = events.find((e) => e.id === activeEventId);
    if (activeObj) {
      const locLabel = document.getElementById('sirah-active-location');
      if (locLabel) locLabel.textContent = activeObj.locationName;
    }

    if (root.lucide) {
      root.lucide.createIcons({ nodes: [container] });
    }
  }

  function setMobileView(viewName) {
    const splitEl = document.getElementById('sirah-split');
    if (splitEl) {
      splitEl.setAttribute('data-mobile-view', viewName);
    }
    document.querySelectorAll('[data-sirah-mobile]').forEach((btn) => {
      const active = btn.getAttribute('data-sirah-mobile') === viewName;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    if (viewName === 'map' && map) {
      setTimeout(() => map.invalidateSize(), 80);
    }
  }

  function initSirahView() {
    completedSet = root.JejakApp.storage.getCompletedSirah();
    updateProgressUI();
    initMap();
    renderTimeline();

    // Focus initial event cleanly on map
    const first = getEvents()[0];
    if (first && map) {
      setTimeout(() => {
        map.invalidateSize();
        selectEvent(first.id, { panMap: true, scrollCard: false });
      }, 200);
    }

    // Phase filter buttons
    const phaseWrap = document.getElementById('sirah-phase-filters');
    if (phaseWrap) {
      phaseWrap.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-phase]');
        if (!btn) return;
        selectedPhase = btn.getAttribute('data-phase');
        phaseWrap.querySelectorAll('[data-phase]').forEach((b) => b.classList.toggle('is-active', b === btn));
        renderTimeline();
        fitAllMarkers();
      });
    }

    // Category filter buttons
    const catWrap = document.getElementById('sirah-category-filters');
    if (catWrap) {
      catWrap.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-category]');
        if (!btn) return;
        selectedCategory = btn.getAttribute('data-category');
        catWrap.querySelectorAll('[data-category]').forEach((b) => b.classList.toggle('is-active', b === btn));
        renderTimeline();
        fitAllMarkers();
      });
    }

    // Mobile segmented view buttons
    document.querySelectorAll('[data-sirah-mobile]').forEach((btn) => {
      btn.addEventListener('click', () => {
        setMobileView(btn.getAttribute('data-sirah-mobile'));
      });
    });

    // Fit all markers button
    const fitBtn = document.getElementById('sirah-map-fit');
    if (fitBtn) {
      fitBtn.addEventListener('click', fitAllMarkers);
    }

    window.addEventListener('resize', () => {
      if (map) {
        setTimeout(() => map.invalidateSize(), 120);
      }
    });
  }

  root.JejakApp = root.JejakApp || {};
  root.JejakApp.initSirahView = initSirahView;
  root.JejakApp.onSirahShown = function () {
    if (map) {
      setTimeout(() => map.invalidateSize(), 90);
    }
  };
  root.JejakApp.updateSirahMapTheme = setMapTileTheme;
})(window);
