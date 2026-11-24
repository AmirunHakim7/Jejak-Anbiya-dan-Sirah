/**
 * Tab 4: Pustaka Doa Para Nabi (Doa Anbiya)
 * Carian, tapisan tema & Simpanan (localStorage), Salin Doa satu klik + Toast.
 */
(function (root) {
  let activeFilter = 'Semua';
  let searchQuery = '';
  let bookmarks = new Set();
  let highlightedDoaId = null;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function updateSavedCount() {
    const badge = document.getElementById('doa-saved-count');
    if (badge) {
      badge.textContent = String(bookmarks.size);
    }
  }

  function getFilteredDoa() {
    const list = (root.JejakData && root.JejakData.doa) || [];
    const q = searchQuery.trim().toLowerCase();

    return list.filter((d) => {
      if (activeFilter === 'Disimpan' && !bookmarks.has(d.id)) return false;
      if (activeFilter !== 'Semua' && activeFilter !== 'Disimpan' && d.theme !== activeFilter) {
        return false;
      }
      if (!q) return true;
      const hay = [d.prophetName, d.title, d.context, d.translation, d.reference, d.theme]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }

  async function copyDoaText(doa) {
    const formatted = `${doa.title} (${doa.prophetName})\n\n${doa.arabic}\n\nMaksudnya:\n"${doa.translation}"\n— ${doa.reference}\n\n(Sumber: Jejak Anbiya & Sirah)`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(formatted);
      } else {
        const ta = document.createElement('textarea');
        ta.value = formatted;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      if (root.JejakApp && root.JejakApp.showToast) {
        root.JejakApp.showToast(`Doa ${doa.prophetName} berjaya disalin`);
      }
    } catch (err) {
      if (root.JejakApp && root.JejakApp.showToast) {
        root.JejakApp.showToast('Tidak dapat menyalin secara automatik');
      }
    }
  }

  function renderDoaGrid() {
    const grid = document.getElementById('doa-grid');
    if (!grid) return;

    const list = getFilteredDoa();

    if (!list.length) {
      const emptyMsg =
        activeFilter === 'Disimpan'
          ? 'Anda belum menyimpan mana-mana doa lagi. Tekan butang "Simpan" pada doa pilihan untuk akses pantas.'
          : 'Tiada doa yang sepadan dengan kata kunci carian anda.';

      grid.innerHTML = `
        <div class="empty-state">
          <i data-lucide="sparkles" class="icon-md"></i>
          <h3>${activeFilter === 'Disimpan' ? 'Senarai Simpanan Kosong' : 'Tiada Doa Ditemui'}</h3>
          <p>${emptyMsg}</p>
        </div>
      `;
      if (root.lucide) root.lucide.createIcons({ nodes: [grid] });
      return;
    }

    grid.innerHTML = list
      .map((doa) => {
        const isSaved = bookmarks.has(doa.id);
        const isHighlighted = doa.id === highlightedDoaId;
        return `
          <article class="doa-card ${isHighlighted ? 'is-highlighted' : ''}" id="card-${escapeHtml(doa.id)}" data-doa-id="${escapeHtml(doa.id)}">
            <div class="doa-card-top">
              <button class="doa-prophet-btn" type="button" data-open-prophet="${escapeHtml(doa.prophetId)}">
                <i data-lucide="user-round" class="icon-xs"></i>
                <span>${escapeHtml(doa.prophetName)}</span>
              </button>
              <span class="doa-theme-pill">${escapeHtml(doa.theme)}</span>
            </div>

            <h2 class="doa-title">${escapeHtml(doa.title)}</h2>
            <p class="doa-context">${escapeHtml(doa.context)}</p>

            <div class="doa-arabic-box">
              <p class="doa-arabic-text" dir="rtl" lang="ar">${escapeHtml(doa.arabic)}</p>
            </div>

            <p class="doa-translation">"${escapeHtml(doa.translation)}"</p>

            <div class="doa-footer">
              <span class="doa-ref">${escapeHtml(doa.reference)}</span>
              <div class="doa-actions">
                <button class="btn-outline-sm" type="button" data-copy-doa="${escapeHtml(doa.id)}">
                  <i data-lucide="copy" class="icon-xs"></i>
                  <span>Salin Doa</span>
                </button>
                <button class="btn-outline-sm ${isSaved ? 'is-saved' : ''}" type="button" data-save-doa="${escapeHtml(doa.id)}" aria-pressed="${isSaved}">
                  <i data-lucide="${isSaved ? 'bookmark-check' : 'bookmark'}" class="icon-xs"></i>
                  <span>${isSaved ? 'Disimpan' : 'Simpan'}</span>
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join('');

    const allDoa = (root.JejakData && root.JejakData.doa) || [];

    grid.querySelectorAll('[data-open-prophet]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const prophetId = btn.getAttribute('data-open-prophet');
        if (root.JejakApp && root.JejakApp.openProphetModal) {
          root.JejakApp.openProphetModal(prophetId);
        }
      });
    });

    grid.querySelectorAll('[data-copy-doa]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-copy-doa');
        const doa = allDoa.find((d) => d.id === id);
        if (doa) copyDoaText(doa);
      });
    });

    grid.querySelectorAll('[data-save-doa]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-save-doa');
        bookmarks = root.JejakApp.storage.toggleBookmarkedDoa(id);
        updateSavedCount();
        renderDoaGrid();
        if (root.JejakApp && root.JejakApp.showToast) {
          root.JejakApp.showToast(
            bookmarks.has(id) ? 'Doa disimpan ke senarai pilihan' : 'Doa dibuang daripada simpanan'
          );
        }
      });
    });

    if (root.lucide) {
      root.lucide.createIcons({ nodes: [grid] });
    }
  }

  function highlightDoa(doaId) {
    activeFilter = 'Semua';
    searchQuery = '';
    highlightedDoaId = doaId;

    const searchInput = document.getElementById('doa-search');
    if (searchInput) searchInput.value = '';

    const filterWrap = document.getElementById('doa-filters');
    if (filterWrap) {
      filterWrap.querySelectorAll('[data-doa-filter]').forEach((b) => {
        b.classList.toggle('is-active', b.getAttribute('data-doa-filter') === 'Semua');
      });
    }

    renderDoaGrid();

    requestAnimationFrame(() => {
      const card = document.getElementById(`card-${doaId}`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    setTimeout(() => {
      highlightedDoaId = null;
      const card = document.getElementById(`card-${doaId}`);
      if (card) card.classList.remove('is-highlighted');
    }, 3200);
  }

  function initDoaView() {
    bookmarks = root.JejakApp.storage.getBookmarkedDoa();
    updateSavedCount();
    renderDoaGrid();

    const searchInput = document.getElementById('doa-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderDoaGrid();
      });
    }

    const filterWrap = document.getElementById('doa-filters');
    if (filterWrap) {
      filterWrap.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-doa-filter]');
        if (!btn) return;
        activeFilter = btn.getAttribute('data-doa-filter');
        filterWrap.querySelectorAll('[data-doa-filter]').forEach((b) => b.classList.toggle('is-active', b === btn));
        renderDoaGrid();
      });
    }
  }

  root.JejakApp = root.JejakApp || {};
  root.JejakApp.initDoaView = initDoaView;
  root.JejakApp.highlightDoa = highlightDoa;
})(window);
