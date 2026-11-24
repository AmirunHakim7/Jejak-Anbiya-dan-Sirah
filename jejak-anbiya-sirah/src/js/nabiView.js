/**
 * Tab 2: Biodata 25 Nabi & Rasul
 * Grid responsif dengan carian masa nyata dan tapisan Semua / Ulul Azmi / Penerima Kitab.
 */
(function (root) {
  let activeFilter = 'semua';
  let searchQuery = '';

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getFilteredNabi() {
    const list = (root.JejakData && root.JejakData.nabi) || [];
    const q = searchQuery.trim().toLowerCase();

    return list.filter((p) => {
      if (activeFilter === 'ulul-azmi' && !p.ululAzmi) return false;
      if (activeFilter === 'kitab' && !p.kitab) return false;

      if (!q) return true;
      const haystack = [
        p.name,
        p.arabic,
        p.gelaran,
        p.kaumLokasi,
        p.kitab || '',
        p.suhuf || '',
        p.surahRefs.join(' ')
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }

  function renderNabiGrid() {
    const grid = document.getElementById('nabi-grid');
    const countBar = document.getElementById('nabi-count-bar');
    if (!grid) return;

    const total = ((root.JejakData && root.JejakData.nabi) || []).length;
    const filtered = getFilteredNabi();

    if (countBar) {
      countBar.textContent = `Menunjukkan ${filtered.length} daripada ${total} Nabi & Rasul`;
    }

    if (!filtered.length) {
      grid.innerHTML = `
        <div class="empty-state">
          <i data-lucide="book-open" class="icon-md"></i>
          <h3>Tiada rekod Nabi ditemui</h3>
          <p>Cuba gunakan kata kunci lain seperti "Musa", "Khalilullah", "Taurat", atau "Mesir".</p>
        </div>
      `;
      if (root.lucide) root.lucide.createIcons({ nodes: [grid] });
      return;
    }

    grid.innerHTML = filtered
      .map((p) => {
        const orderStr = String(p.order).padStart(2, '0');
        return `
          <button class="nabi-card ${p.ululAzmi ? 'is-ulul-azmi' : ''}" type="button" data-prophet-id="${escapeHtml(p.id)}">
            <div class="nabi-card-header">
              <span class="nabi-number">NO. ${orderStr}</span>
              <span class="nabi-arabic" dir="rtl" lang="ar">${escapeHtml(p.arabic)}</span>
            </div>
            <h2 class="nabi-name">${escapeHtml(p.name)}</h2>
            <p class="nabi-gelaran">${escapeHtml(p.gelaran)}</p>
            <p class="nabi-location">${escapeHtml(p.kaumLokasi)}</p>

            <div class="nabi-badges">
              ${
                p.ululAzmi
                  ? '<span class="badge-ulul"><i data-lucide="award" class="icon-xs"></i> Ulul Azmi</span>'
                  : ''
              }
              ${
                p.kitab
                  ? `<span class="badge-kitab"><i data-lucide="book-marked" class="icon-xs"></i> ${escapeHtml(p.kitab)}</span>`
                  : ''
              }
              <span class="card-cta-arrow">
                Biodata
                <i data-lucide="arrow-up-right" class="icon-xs"></i>
              </span>
            </div>
          </button>
        `;
      })
      .join('');

    grid.querySelectorAll('[data-prophet-id]').forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-prophet-id');
        if (root.JejakApp && root.JejakApp.openProphetModal) {
          root.JejakApp.openProphetModal(id);
        }
      });
    });

    if (root.lucide) {
      root.lucide.createIcons({ nodes: [grid] });
    }
  }

  function initNabiView() {
    renderNabiGrid();

    const searchInput = document.getElementById('nabi-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderNabiGrid();
      });
    }

    const filterWrap = document.getElementById('nabi-filters');
    if (filterWrap) {
      filterWrap.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-nabi-filter]');
        if (!btn) return;
        activeFilter = btn.getAttribute('data-nabi-filter');
        filterWrap.querySelectorAll('[data-nabi-filter]').forEach((b) => b.classList.toggle('is-active', b === btn));
        renderNabiGrid();
      });
    }
  }

  root.JejakApp = root.JejakApp || {};
  root.JejakApp.initNabiView = initNabiView;
})(window);
