/**
 * Pengurusan Storan Tempatan (localStorage) & Tema Mod Gelap
 */
(function (root) {
  const KEYS = {
    theme: 'jejak_theme',
    sirahCompleted: 'jejak_sirah_completed',
    doaBookmarks: 'jejak_doa_bookmarks',
    activeTab: 'jejak_active_tab'
  };

  function readJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (err) {
      return fallback;
    }
  }

  function writeJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      // Ignore storage quota errors cleanly
    }
  }

  const storage = {
    getTheme() {
      try {
        const saved = localStorage.getItem(KEYS.theme);
        if (saved === 'dark' || saved === 'light') return saved;
      } catch (e) {}
      const prefersDark =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    },

    setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      const meta = document.getElementById('meta-theme-color');
      if (meta) {
        meta.setAttribute('content', theme === 'dark' ? '#121614' : '#0F4C3A');
      }
      try {
        localStorage.setItem(KEYS.theme, theme);
      } catch (e) {}
    },

    getCompletedSirah() {
      const arr = readJSON(KEYS.sirahCompleted, []);
      return new Set(Array.isArray(arr) ? arr : []);
    },

    toggleCompletedSirah(id) {
      const set = this.getCompletedSirah();
      if (set.has(id)) {
        set.delete(id);
      } else {
        set.add(id);
      }
      writeJSON(KEYS.sirahCompleted, Array.from(set));
      return set;
    },

    getBookmarkedDoa() {
      const arr = readJSON(KEYS.doaBookmarks, []);
      return new Set(Array.isArray(arr) ? arr : []);
    },

    toggleBookmarkedDoa(id) {
      const set = this.getBookmarkedDoa();
      if (set.has(id)) {
        set.delete(id);
      } else {
        set.add(id);
      }
      writeJSON(KEYS.doaBookmarks, Array.from(set));
      return set;
    },

    getActiveTab() {
      try {
        return localStorage.getItem(KEYS.activeTab) || 'sirah';
      } catch (e) {
        return 'sirah';
      }
    },

    setActiveTab(tab) {
      try {
        localStorage.setItem(KEYS.activeTab, tab);
      } catch (e) {}
    }
  };

  root.JejakApp = root.JejakApp || {};
  root.JejakApp.storage = storage;
})(window);
