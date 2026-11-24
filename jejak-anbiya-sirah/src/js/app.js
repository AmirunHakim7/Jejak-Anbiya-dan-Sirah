/**
 * Pengawal Utama Aplikasi — Jejak Anbiya & Sirah
 * Menguruskan navigasi tab, mod gelap, notifikasi toast, dan pendaftaran PWA Service Worker.
 */
(function (root) {
  const VALID_TABS = ['sirah', 'nabi', 'salasilah', 'doa'];
  let toastTimer = null;

  function showToast(message) {
    const toastEl = document.getElementById('app-toast');
    const textEl = document.getElementById('app-toast-text');
    if (!toastEl || !textEl) return;

    textEl.textContent = message;
    toastEl.hidden = false;

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.hidden = true;
    }, 2600);
  }

  function switchTab(tabName, options) {
    const opts = Object.assign({ updateHash: true, scrollTop: true }, options);
    const target = VALID_TABS.includes(tabName) ? tabName : 'sirah';

    // Update desktop nav + mobile bottom tab states
    document.querySelectorAll('[data-tab]').forEach((btn) => {
      const isMatch = btn.getAttribute('data-tab') === target;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-selected', String(isMatch));
    });

    // Show/hide panels
    VALID_TABS.forEach((name) => {
      const panel = document.getElementById(`panel-${name}`);
      if (!panel) return;
      const active = name === target;
      panel.hidden = !active;
      panel.classList.toggle('is-active', active);
    });

    root.JejakApp.storage.setActiveTab(target);

    if (opts.updateHash && window.location.hash !== `#${target}`) {
      try {
        history.replaceState(null, '', `#${target}`);
      } catch (e) {}
    }

    if (opts.scrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (target === 'sirah' && root.JejakApp.onSirahShown) {
      root.JejakApp.onSirahShown();
    }
    if (target === 'salasilah' && root.JejakApp.onSalasilahShown) {
      root.JejakApp.onSalasilahShown();
    }
  }

  function initThemeToggle() {
    const initialTheme = root.JejakApp.storage.getTheme();
    root.JejakApp.storage.setTheme(initialTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      root.JejakApp.storage.setTheme(next);
      if (root.JejakApp.updateSirahMapTheme) {
        root.JejakApp.updateSirahMapTheme(next);
      }
      showToast(next === 'dark' ? 'Mod Gelap diaktifkan' : 'Mod Terang diaktifkan');
    });
  }

  function registerServiceWorker() {
    if (
      'serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ) {
      navigator.serviceWorker.register('./sw.js').catch(() => {
        // Ignore registration error in restricted environments
      });
    }
  }

  function bootstrap() {
    initThemeToggle();

    // Render initial Lucide icons in static shell
    if (root.lucide) {
      root.lucide.createIcons();
    }

    // Initialize shared modal & 4 feature views
    root.JejakApp.initModal();
    root.JejakApp.initSirahView();
    root.JejakApp.initNabiView();
    root.JejakApp.initSalasilahView();
    root.JejakApp.initDoaView();

    // Navigation click handlers
    document.querySelectorAll('[data-tab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        switchTab(btn.getAttribute('data-tab'));
      });
    });

    const brandHome = document.getElementById('brand-home');
    if (brandHome) {
      brandHome.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('sirah');
      });
    }

    // Resolve starting tab from hash or saved preference
    const hashTab = window.location.hash.replace('#', '');
    const initialTab = VALID_TABS.includes(hashTab)
      ? hashTab
      : root.JejakApp.storage.getActiveTab();
    switchTab(initialTab, { updateHash: false, scrollTop: false });

    window.addEventListener('hashchange', () => {
      const next = window.location.hash.replace('#', '');
      if (VALID_TABS.includes(next)) {
        switchTab(next, { updateHash: false });
      }
    });

    registerServiceWorker();
  }

  root.JejakApp = root.JejakApp || {};
  root.JejakApp.showToast = showToast;
  root.JejakApp.switchTab = switchTab;
  root.JejakApp.navigateToDoa = function (doaId) {
    switchTab('doa', { scrollTop: false });
    if (root.JejakApp.highlightDoa) {
      root.JejakApp.highlightDoa(doaId);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})(window);
