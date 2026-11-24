/**
 * Modal / Drawer Biodata Penuh Nabi & Rasul
 * Dikongsi oleh Tab 25 Nabi, Tab Pokok Salasilah, dan Tab Doa Anbiya.
 */
(function (root) {
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  let backdropEl;
  let bodyEl;
  let orderTagEl;
  let lastFocusedEl = null;

  function closeModal() {
    if (!backdropEl) return;
    backdropEl.hidden = true;
    document.body.style.overflow = '';
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus();
    }
  }

  function openProphetModal(prophetId) {
    const nabiList = (root.JejakData && root.JejakData.nabi) || [];
    const doaList = (root.JejakData && root.JejakData.doa) || [];
    const prophet = nabiList.find((item) => item.id === prophetId);
    if (!prophet || !backdropEl || !bodyEl) return;

    lastFocusedEl = document.activeElement;
    const orderFormatted = String(prophet.order).padStart(2, '0');
    orderTagEl.textContent = `NABI & RASUL #${orderFormatted}`;

    const relatedDuas = doaList.filter((d) => prophet.doaIds.includes(d.id));
    const kitabDisplay = prophet.kitab
      ? prophet.kitab
      : prophet.suhuf
        ? prophet.suhuf
        : 'Tiada kitab khusus (menyambung syariat wahyu terdahulu)';

    bodyEl.innerHTML = `
      <div class="modal-hero">
        <div class="modal-arabic" dir="rtl" lang="ar">${escapeHtml(prophet.arabic)}</div>
        <h2 class="modal-title" id="modal-prophet-name">${escapeHtml(prophet.name)}</h2>
        <p class="modal-gelaran">${escapeHtml(prophet.gelaran)}</p>
        <div class="modal-badges">
          ${
            prophet.ululAzmi
              ? '<span class="badge-ulul"><i data-lucide="award" class="icon-xs"></i> Rasul Ulul Azmi</span>'
              : ''
          }
          ${
            prophet.kitab
              ? `<span class="badge-kitab"><i data-lucide="book-marked" class="icon-xs"></i> ${escapeHtml(prophet.kitab)}</span>`
              : ''
          }
          ${
            !prophet.kitab && prophet.suhuf
              ? `<span class="badge-kitab"><i data-lucide="scroll-text" class="icon-xs"></i> ${escapeHtml(prophet.suhuf)}</span>`
              : ''
          }
        </div>
      </div>

      <div class="modal-meta-grid">
        <div class="modal-meta-card">
          <span class="modal-meta-label">Kaum &amp; Lokasi Dakwah</span>
          <span class="modal-meta-value">${escapeHtml(prophet.kaumLokasi)}</span>
        </div>
        <div class="modal-meta-card">
          <span class="modal-meta-label">Kitab / Suhuf Wahyu</span>
          <span class="modal-meta-value">${escapeHtml(kitabDisplay)}</span>
        </div>
        <div class="modal-meta-card" style="grid-column: 1 / -1;">
          <span class="modal-meta-label">Jalur Salasilah</span>
          <span class="modal-meta-value">${escapeHtml(prophet.lineageBranch)}</span>
        </div>
      </div>

      <div class="modal-section">
        <h3 class="modal-section-title">Mukjizat Utama</h3>
        <ul class="mukjizat-list">
          ${prophet.mukjizat.map((m) => `<li>${escapeHtml(m)}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h3 class="modal-section-title">Riwayat Ringkas</h3>
        <div class="modal-bio">
          ${prophet.biography.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
        </div>
      </div>

      <div class="modal-section">
        <h3 class="modal-section-title">Rujukan Surah Al-Quran</h3>
        <div class="surah-pill-list">
          ${prophet.surahRefs.map((ref) => `<span class="surah-pill">${escapeHtml(ref)}</span>`).join('')}
        </div>
      </div>

      ${
        relatedDuas.length > 0
          ? `
        <div class="modal-section" style="margin-bottom: 0;">
          <h3 class="modal-section-title">Doa Berkaitan di Pustaka Doa</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${relatedDuas
              .map(
                (doa) => `
              <button class="btn-primary-link" type="button" data-jump-doa="${escapeHtml(doa.id)}">
                <i data-lucide="sparkles" class="icon-xs"></i>
                <span>${escapeHtml(doa.title)} (${escapeHtml(doa.reference)})</span>
                <i data-lucide="arrow-right" class="icon-xs"></i>
              </button>
            `
              )
              .join('')}
          </div>
        </div>
      `
          : ''
      }
    `;

    bodyEl.querySelectorAll('[data-jump-doa]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const doaId = btn.getAttribute('data-jump-doa');
        closeModal();
        if (root.JejakApp && typeof root.JejakApp.navigateToDoa === 'function') {
          root.JejakApp.navigateToDoa(doaId);
        }
      });
    });

    backdropEl.hidden = false;
    document.body.style.overflow = 'hidden';
    bodyEl.scrollTop = 0;

    if (root.lucide) {
      root.lucide.createIcons({ nodes: [backdropEl] });
    }
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function initModal() {
    backdropEl = document.getElementById('prophet-modal');
    bodyEl = document.getElementById('prophet-modal-body');
    orderTagEl = document.getElementById('modal-prophet-order');
    const closeBtn = document.getElementById('modal-close-btn');

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    if (backdropEl) {
      backdropEl.addEventListener('click', (e) => {
        if (e.target === backdropEl) closeModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdropEl && !backdropEl.hidden) {
        closeModal();
      }
    });
  }

  root.JejakApp = root.JejakApp || {};
  root.JejakApp.initModal = initModal;
  root.JejakApp.openProphetModal = openProphetModal;
  root.JejakApp.closeProphetModal = closeModal;
})(window);
