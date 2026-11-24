/**
 * Pokok Salasilah Interaktif 25 Nabi & Rasul
 * Koordinat hierarki SVG/HTML menghubungkan Nabi Adam a.s. → Nuh a.s. → Ibrahim a.s.
 * lalu bercabang jelas ke garis Nabi Ismail a.s. (→ Muhammad SAW) dan Nabi Ishaq a.s. (→ Bani Israil).
 */
(function (root) {
  const salasilahData = {
    canvas: {
      width: 1560,
      height: 1320
    },
    /**
     * Label bahagian / cabang pada kanvas untuk kejelasan visual muzium
     */
    zoneLabels: [
      {
        id: 'zone-root',
        text: 'TERAS AWAL KEMANUSIAAN',
        x: 730,
        y: 28,
        tone: 'neutral'
      },
      {
        id: 'zone-arab-baidah',
        text: 'CABANG SAM BIN NUH (ARAB BA\'IDAH)',
        x: 205,
        y: 350,
        tone: 'muted'
      },
      {
        id: 'zone-ismail',
        text: 'CABANG NABI ISMAIL A.S. (ARAB MUSTA\'RIBAH & QURAISY)',
        x: 285,
        y: 595,
        tone: 'emerald'
      },
      {
        id: 'zone-ishaq',
        text: 'CABANG NABI ISHAQ A.S. (BANI ISRAIL)',
        x: 1005,
        y: 595,
        tone: 'gold'
      }
    ],
    /**
     * Setiap nod mewakili salah seorang daripada 25 Nabi (prophetId merujuk terus ke src/data/nabi.js)
     * x, y adalah titik tengah kad nod pada kanvas 1460 x 1220.
     */
    nodes: [
      // Generasi 1–3: Teras Utama
      { id: 'adam', prophetId: 'adam', x: 730, y: 85, branch: 'root', note: 'Bapa Manusia' },
      { id: 'idris', prophetId: 'idris', x: 730, y: 195, branch: 'root', note: 'Jalur Syith' },
      { id: 'nuh', prophetId: 'nuh', x: 730, y: 305, branch: 'root', note: 'Ulul Azmi' },

      // Cabang Sam bin Nuh (Kiri)
      { id: 'hud', prophetId: 'hud', x: 145, y: 425, branch: 'sam', note: 'Kaum \'Ad' },
      { id: 'soleh', prophetId: 'soleh', x: 335, y: 425, branch: 'sam', note: 'Kaum Thamud' },

      // Teras Ibrahim & kerabat sezaman
      { id: 'ibrahim', prophetId: 'ibrahim', x: 730, y: 465, branch: 'root', note: 'Abul Anbiya' },
      { id: 'lut', prophetId: 'lut', x: 1030, y: 465, branch: 'kerabat', note: 'Anak Saudara' },
      { id: 'syuaib', prophetId: 'syuaib', x: 545, y: 655, branch: 'madyan', note: 'Jalur Madyan' },

      // Cabang Utama 1: Nabi Ismail a.s. → Nabi Muhammad SAW (Kiri Bawah)
      { id: 'ismail', prophetId: 'ismail', x: 285, y: 655, branch: 'ismail', note: 'Putera Sulung' },
      { id: 'muhammad', prophetId: 'muhammad', x: 285, y: 1085, branch: 'ismail', note: 'Khatamul Anbiya' },

      // Cabang Utama 2: Nabi Ishaq a.s. → Bani Israil (Kanan)
      { id: 'ishaq', prophetId: 'ishaq', x: 1005, y: 655, branch: 'ishaq', note: 'Putera Kedua' },

      // Sub-cabang Al-'Ish (Esau) bin Ishaq
      { id: 'ayyub', prophetId: 'ayyub', x: 670, y: 785, branch: 'ishaq', note: 'Jalur Al-\'Ish' },
      { id: 'zulkifli', prophetId: 'zulkifli', x: 670, y: 920, branch: 'ishaq', note: 'Putera Ayyub' },

      // Sub-cabang Yaakub (Israil) bin Ishaq
      { id: 'yaakub', prophetId: 'yaakub', x: 1060, y: 785, branch: 'ishaq', note: 'Israil (12 Suku)' },

      // Putera & Keturunan Yaakub: Lawi, Yusuf/Bunyamin, Yahudza
      { id: 'musa', prophetId: 'musa', x: 845, y: 925, branch: 'ishaq', note: 'Suku Lawi' },
      { id: 'harun', prophetId: 'harun', x: 1015, y: 925, branch: 'ishaq', note: 'Suku Lawi' },
      { id: 'ilyas', prophetId: 'ilyas', x: 845, y: 1065, branch: 'ishaq', note: 'Jalur Harun' },
      { id: 'ilyasa', prophetId: 'ilyasa', x: 1015, y: 1065, branch: 'ishaq', note: 'Murid Ilyas' },

      { id: 'yusuf', prophetId: 'yusuf', x: 1185, y: 925, branch: 'ishaq', note: 'Putera Yaakub' },
      { id: 'yunus', prophetId: 'yunus', x: 1185, y: 1065, branch: 'ishaq', note: 'Suku Bunyamin' },

      { id: 'daud', prophetId: 'daud', x: 1365, y: 835, branch: 'ishaq', note: 'Suku Yahudza' },
      { id: 'sulaiman', prophetId: 'sulaiman', x: 1365, y: 948, branch: 'ishaq', note: 'Putera Daud' },
      { id: 'zakaria', prophetId: 'zakaria', x: 1365, y: 1062, branch: 'ishaq', note: 'Jalur Sulaiman' },
      { id: 'yahya', prophetId: 'yahya', x: 1255, y: 1185, branch: 'ishaq', note: 'Putera Zakaria' },
      { id: 'isa', prophetId: 'isa', x: 1445, y: 1185, branch: 'ishaq', note: 'Jalur Maryam' }
    ],
    /**
     * Garis penghubung:
     * type: 'direct' (garis padu — hubungan bapa/anak langsung atau hampir langsung)
     * type: 'lineage' (garis putus-putus — melalui beberapa generasi keturunan)
     * type: 'kin' (garis halus — kerabat/saudara/anak murid)
     */
    edges: [
      { from: 'adam', to: 'idris', type: 'lineage', label: 'Keturunan Syith' },
      { from: 'idris', to: 'nuh', type: 'lineage' },
      { from: 'nuh', to: 'hud', type: 'lineage', label: 'Sam bin Nuh' },
      { from: 'nuh', to: 'soleh', type: 'lineage' },
      { from: 'nuh', to: 'ibrahim', type: 'lineage', label: 'Sam bin Nuh' },
      { from: 'ibrahim', to: 'lut', type: 'kin', label: 'Anak Saudara (Haran)' },
      { from: 'ibrahim', to: 'ismail', type: 'direct', accent: 'emerald' },
      { from: 'ibrahim', to: 'syuaib', type: 'lineage', label: 'Madyan' },
      { from: 'ibrahim', to: 'ishaq', type: 'direct', accent: 'gold' },

      // Jalur Ismail → Muhammad SAW
      {
        from: 'ismail',
        to: 'muhammad',
        type: 'lineage',
        accent: 'emerald',
        label: 'Adnan → Qusay → Abdul Muttalib → Abdullah'
      },

      // Jalur Ishaq → Bani Israil
      { from: 'ishaq', to: 'ayyub', type: 'lineage', accent: 'gold', label: 'Al-\'Ish' },
      { from: 'ayyub', to: 'zulkifli', type: 'direct', accent: 'gold' },
      { from: 'ishaq', to: 'yaakub', type: 'direct', accent: 'gold' },

      { from: 'yaakub', to: 'musa', type: 'lineage', accent: 'gold', label: 'Suku Lawi' },
      { from: 'yaakub', to: 'harun', type: 'lineage', accent: 'gold' },
      { from: 'harun', to: 'ilyas', type: 'lineage', accent: 'gold' },
      { from: 'ilyas', to: 'ilyasa', type: 'kin', accent: 'gold', label: 'Penerus' },

      { from: 'yaakub', to: 'yusuf', type: 'direct', accent: 'gold' },
      { from: 'yaakub', to: 'yunus', type: 'lineage', accent: 'gold', label: 'Bunyamin' },

      { from: 'yaakub', to: 'daud', type: 'lineage', accent: 'gold', label: 'Yahudza' },
      { from: 'daud', to: 'sulaiman', type: 'direct', accent: 'gold' },
      { from: 'sulaiman', to: 'zakaria', type: 'lineage', accent: 'gold' },
      { from: 'zakaria', to: 'yahya', type: 'direct', accent: 'gold' },
      { from: 'sulaiman', to: 'isa', type: 'lineage', accent: 'gold', label: 'Maryam binti Imran' }
    ]
  };

  root.JejakData = root.JejakData || {};
  root.JejakData.salasilah = salasilahData;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = salasilahData;
  }
})(typeof window !== 'undefined' ? window : globalThis);
