/**
 * Garis Masa Sirah Nabawiyah — 18 Peristiwa Kronologi Utama
 * Daripada kelahiran Baginda SAW (Tahun Gajah) hingga kewafatan di Madinah.
 */
(function (root) {
  const sirahEvents = [
    {
      id: 'sirah-01',
      order: 1,
      title: 'Kelahiran Nabi Muhammad SAW (Tahun Gajah)',
      yearMasihi: '570 M',
      yearHijrah: '53 SH',
      prophetAge: '0 tahun',
      phase: 'Sebelum Kenabian',
      category: 'Wahyu',
      locationName: 'Syi\'ib Bani Hasyim, Mekah',
      coordinates: [21.4251, 39.8292],
      zoom: 14,
      summary:
        'Baginda SAW dilahirkan pada hari Isnin, 12 Rabiulawal di kota Mekah dalam tahun berlakunya serangan tentera bergajah pimpinan Abrahah yang dimusnahkan oleh burung Ababil demi memelihara kemuliaan Kaabah.',
      pengajaran:
        'Allah SWT memelihara rumah-Nya dan mempersiapkan persekitaran kelahiran Rasul terakhir dengan tanda-tanda kekuasaan-Nya, sekalipun manusia melihat ancaman itu mustahil ditewaskan.',
      wahyu: {
        ref: 'Surah Al-Fil (105:1–5)',
        note: 'Mengisahkan bagaimana Allah menggagalkan tipu daya tentera bergajah Abrahah yang ingin meruntuhkan Kaabah menjelang kelahiran Baginda SAW.'
      }
    },
    {
      id: 'sirah-02',
      order: 2,
      title: 'Peletakan Hajarul Aswad & Gelaran Al-Amin',
      yearMasihi: '605 M',
      yearHijrah: '18 SH',
      prophetAge: '35 tahun',
      phase: 'Sebelum Kenabian',
      category: 'Diplomasi',
      locationName: 'Kaabah, Masjidil Haram, Mekah',
      coordinates: [21.4225, 39.8262],
      zoom: 15,
      summary:
        'Ketika pembinaan semula Kaabah, kabilah-kabilah Quraisy hampir berperang merebut kehormatan meletakkan Hajarul Aswad. Nabi Muhammad SAW menghamparkan serbannya, meletakkan batu itu di tengah, lalu meminta setiap ketua kabilah memegang penjuru kain bersama-sama.',
      pengajaran:
        'Kebijaksanaan, integriti, dan kepercayaan masyarakat (Al-Amin) mampu meredakan konflik besar melalui penyelesaian inklusif yang memuliakan semua pihak.',
      wahyu: {
        ref: 'Surah Al-Qalam (68:4)',
        note: 'Pengiktirafan Allah SWT terhadap keagungan budi pekerti Baginda SAW yang telah terserlah lama sebelum kerasulan.'
      }
    },
    {
      id: 'sirah-03',
      order: 3,
      title: 'Penurunan Wahyu Pertama di Gua Hira',
      yearMasihi: '610 M',
      yearHijrah: '13 SH',
      prophetAge: '40 tahun',
      phase: 'Fasa Mekah',
      category: 'Wahyu',
      locationName: 'Gua Hira, Jabal Nur',
      coordinates: [21.4575, 39.8592],
      zoom: 14,
      summary:
        'Ketika Baginda beruzlah dan bertahannuth di Gua Hira pada bulan Ramadan, Malaikat Jibril a.s. datang membawa wahyu pertama: "Iqra\'!" (Bacalah!). Peristiwa agung ini menandakan bermulanya risalah kenabian untuk seluruh alam.',
      pengajaran:
        'Peradaban Islam bermula dengan ilmu, pembacaan, dan kesedaran tauhid. Sokongan pasangan seperti Saidatina Khadijah r.a. menjadi penguat jiwa di saat awal memikul amanah besar.',
      wahyu: {
        ref: 'Surah Al-\'Alaq (96:1–5)',
        note: 'Lima ayat pertama al-Quran yang diturunkan di Gua Hira, memerintahkan pembacaan dengan nama Tuhan Yang Maha Pencipta.'
      }
    },
    {
      id: 'sirah-04',
      order: 4,
      title: 'Dakwah Secara Terbuka di Bukit Safa',
      yearMasihi: '613 M',
      yearHijrah: '10 SH',
      prophetAge: '43 tahun',
      phase: 'Fasa Mekah',
      category: 'Wahyu',
      locationName: 'Bukit Safa, Mekah',
      coordinates: [21.4216, 39.8276],
      zoom: 15,
      summary:
        'Setelah tiga tahun berdakwah secara rahsia, Baginda SAW diperintahkan menyeru kaum kerabat dan seluruh penduduk Mekah secara terang-terangan dari atas Bukit Safa. Abu Lahab menentang keras seruan tauhid tersebut.',
      pengajaran:
        'Dakwah memerlukan strategi berperingkat — membina asas akidah yang kukuh terlebih dahulu sebelum melangkah ke medan terbuka dengan keberanian dan hikmah.',
      wahyu: {
        ref: 'Surah Asy-Syu\'ara (26:214) & Al-Masad (111:1–5)',
        note: 'Perintah memberi peringatan kepada kaum kerabat terdekat serta turunnya Surah Al-Masad menjawab celaan Abu Lahab di Bukit Safa.'
      }
    },
    {
      id: 'sirah-05',
      order: 5,
      title: 'Hijrah Pertama ke Habsyah (Abyssinia)',
      yearMasihi: '615 M',
      yearHijrah: '8 SH',
      prophetAge: '45 tahun',
      phase: 'Fasa Mekah',
      category: 'Hijrah',
      locationName: 'Axum, Kerajaan Habsyah (Ethiopia)',
      coordinates: [14.131, 38.7205],
      zoom: 8,
      summary:
        'Akibat penindasan kejam musyrikin Quraisy, Baginda SAW mengizinkan serombongan sahabat berhijrah ke Habsyah yang diperintah oleh Raja Najasyi yang adil. Ja\'far bin Abi Talib membacakan Surah Maryam di istana sehingga Raja Najasyi menangis dan memberi perlindungan penuh.',
      pengajaran:
        'Islam mengiktiraf nilai keadilan sejagat dan kebijaksanaan diplomasi dalam melindungi nyawa serta kebebasan beragama golongan yang ditindas.',
      wahyu: {
        ref: 'Surah Az-Zumar (39:10) & Surah Maryam (19:16–36)',
        note: 'Ayat mengenai keluasan bumi Allah untuk berhijrah, dan bacaan Surah Maryam oleh Ja\'far r.a. yang menyentuh hati Raja Najasyi.'
      }
    },
    {
      id: 'sirah-06',
      order: 6,
      title: 'Pemboikotan di Lembah Syi\'ib Abi Talib',
      yearMasihi: '616–619 M',
      yearHijrah: '7–4 SH',
      prophetAge: '46–49 tahun',
      phase: 'Fasa Mekah',
      category: 'Diplomasi',
      locationName: 'Lembah Syi\'ib Abi Talib, Mekah',
      coordinates: [21.4258, 39.8315],
      zoom: 15,
      summary:
        'Pemimpin Quraisy menandatangani piagam pemboikotan sosial dan ekonomi selama tiga tahun terhadap Bani Hasyim dan Bani Muttalib. Umat Islam terpaksa bertahan dalam kelaparan sehingga akhirnya piagam itu dimakan anai-anai kecuali kalimah nama Allah.',
      pengajaran:
        'Kesabaran berjamaah dan keteguhan prinsip ketika diuji kesempitan akan melahirkan generasi yang tidak mudah tergugat oleh tekanan duniawi.',
      wahyu: {
        ref: 'Surah Al-\'Ankabut (29:2–3)',
        note: 'Penegasan bahawa iman pasti diuji untuk membuktikan ketulusan orang-orang yang benar dalam perjuangan mereka.'
      }
    },
    {
      id: 'sirah-07',
      order: 7,
      title: 'Tahun Dukacita (\'Am al-Huzn) & Dakwah ke Taif',
      yearMasihi: '619 M',
      yearHijrah: '4 SH',
      prophetAge: '49 tahun',
      phase: 'Fasa Mekah',
      category: 'Diplomasi',
      locationName: 'Taif, Wilayah Hijaz',
      coordinates: [21.2703, 40.4158],
      zoom: 11,
      summary:
        'Selepas kewafatan isteri tercinta Khadijah r.a. dan bapa saudara Abu Talib, Baginda berjalan kaki ke Taif mencari sokongan dakwah. Baginda dilontar batu sehingga berdarah, namun tetap menolak tawaran malaikat untuk menghempap mereka dengan gunung, sebaliknya mendoakan hidayah buat keturunan mereka.',
      pengajaran:
        'Sifat rahmah mengatasi dendam. Saat pintu pertolongan manusia tertutup rapat, munajat ikhlas kepada Allah membuka ruang pertolongan dari arah yang tidak disangka.',
      wahyu: {
        ref: 'Surah Al-Ahqaf (46:29–32)',
        note: 'Merekodkan peristiwa sekumpulan jin di Lembah Nakhlah yang mendengar bacaan al-Quran Baginda dalam perjalanan pulang dari Taif lalu beriman.'
      }
    },
    {
      id: 'sirah-08',
      order: 8,
      title: 'Peristiwa Agung Isra\' dan Mikraj',
      yearMasihi: '621 M',
      yearHijrah: '2 SH',
      prophetAge: '51 tahun',
      phase: 'Fasa Mekah',
      category: 'Wahyu',
      locationName: 'Masjidil Aqsa, Baitulmaqdis',
      coordinates: [31.7767, 35.2345],
      zoom: 11,
      summary:
        'Sebagai penghiburan agung selepas Tahun Dukacita, Allah memperjalankan Baginda SAW pada satu malam dari Masjidil Haram ke Masjidil Aqsa (Isra\'), mengimamkan para nabi terdahulu, kemudian diangkat menembusi langit ketujuh hingga Sidratul Muntaha (Mikraj) untuk menerima kefarduan solat lima waktu.',
      pengajaran:
        'Solat ialah hadiah langsung dari langit dan mi\'raj rohani buat setiap mukmin, manakala Masjidil Aqsa kekal terikat kukuh dalam akidah dan sejarah umat Islam.',
      wahyu: {
        ref: 'Surah Al-Isra\' (17:1) & An-Najm (53:13–18)',
        note: 'Ayat pembukaan Surah Al-Isra\' merakamkan mukjizat perjalanan malam dari Masjidil Haram ke Masjidil Aqsa yang diberkati sekelilingnya.'
      }
    },
    {
      id: 'sirah-09',
      order: 9,
      title: 'Bai\'ah Aqabah Pertama & Kedua',
      yearMasihi: '621–622 M',
      yearHijrah: '2–1 SH',
      prophetAge: '51–52 tahun',
      phase: 'Fasa Mekah',
      category: 'Diplomasi',
      locationName: 'Aqabah, Mina, Mekah',
      coordinates: [21.4133, 39.8933],
      zoom: 14,
      summary:
        'Pada musim haji, rombongan suku Aus dan Khazraj dari Yathrib (Madinah) bertemu Baginda secara rahsia di Aqabah dan mengikat janji setia (bai\'ah) untuk beriman, mempertahankan Rasulullah SAW, serta mengundang Baginda memimpin masyarakat Yathrib.',
      pengajaran:
        'Kejayaan perubahan besar menuntut perancangan rapi, persediaan masyarakat melalui pendidikan (seperti perutusan Mus\'ab bin Umair r.a.), dan perjanjian komitmen yang jelas.',
      wahyu: {
        ref: 'Surah Al-Mumtahanah (60:12)',
        note: 'Prinsip asas bai\'ah dalam Islam meliputi tauhid, akhlak mulia, dan ketaatan dalam perkara makruf.'
      }
    },
    {
      id: 'sirah-10',
      order: 10,
      title: 'Hijrah Agung ke Madinah & Gua Thur',
      yearMasihi: '622 M',
      yearHijrah: '1 H',
      prophetAge: '53 tahun',
      phase: 'Fasa Madinah',
      category: 'Hijrah',
      locationName: 'Masjid Quba, Madinah al-Munawwarah',
      coordinates: [24.4393, 39.6173],
      zoom: 12,
      summary:
        'Setelah komplot pembunuhan Quraisy gagal, Baginda bersama Saidina Abu Bakar as-Siddiq r.a. berlindung tiga hari di Gua Thur sebelum menempuh laluan pesisir menuju Yathrib. Ketibaan Baginda disambut penuh kesyukuran di Quba, tempat didirikan masjid pertama dalam Islam.',
      pengajaran:
        'Tawakal sejati berjalan seiring dengan ikhtiar strategi yang teliti. Hijrah menjadi titik mula takwim Islam dan kelahiran sebuah tamadun berteraskan tauhid.',
      wahyu: {
        ref: 'Surah At-Taubah (9:40) & Al-Anfal (8:30)',
        note: 'Merakamkan detik cemas di Gua Thur dengan kalimah penenang: "Janganlah engkau berdukacita, sesungguhnya Allah bersama kita."'
      }
    },
    {
      id: 'sirah-11',
      order: 11,
      title: 'Pembinaan Masjid Nabawi & Piagam Madinah',
      yearMasihi: '622 M',
      yearHijrah: '1 H',
      prophetAge: '53 tahun',
      phase: 'Fasa Madinah',
      category: 'Diplomasi',
      locationName: 'Masjid Nabawi, Madinah al-Munawwarah',
      coordinates: [24.4672, 39.6111],
      zoom: 14,
      summary:
        'Setibanya di pusat Madinah, Baginda membina Masjid Nabawi sebagai nadi ibadah, ilmu dan pentadbiran, mempersaudarakan golongan Muhajirin dan Ansar, serta menggubal Sahifah Madinah (Piagam Madinah) yang menjamin hak, keselamatan, dan keharmonian warga majmuk.',
      pengajaran:
        'Negara yang sejahtera dibina atas tiga tonggak: kekuatan rohani (masjid), ukhuwah sosial yang tulus, dan keluhuran perlembagaan yang adil buat seluruh rakyat.',
      wahyu: {
        ref: 'Surah At-Taubah (9:108) & Ali \'Imran (3:103)',
        note: 'Pujian terhadap masjid yang dibina atas dasar takwa dan seruan berpegang teguh kepada tali Allah demi perpaduan ummah.'
      }
    },
    {
      id: 'sirah-12',
      order: 12,
      title: 'Perang Badar al-Kubra',
      yearMasihi: '624 M',
      yearHijrah: '2 H',
      prophetAge: '55 tahun',
      phase: 'Fasa Madinah',
      category: 'Ghazwah',
      locationName: 'Lembah Badar',
      coordinates: [23.7764, 38.7915],
      zoom: 11,
      summary:
        'Berlaku pada 17 Ramadan tahun ke-2 Hijrah. Seramai 313 tentera Muslimin dengan kelengkapan serba kekurangan berhadapan dengan sekitar 1,000 tentera bersenjata lengkap Quraisy. Dengan doa penuh rintihan Rasulullah SAW, Allah menurunkan bantuan malaikat sehingga tercapai kemenangan gemilang.',
      pengajaran:
        'Kemenangan hakiki bukan ditentukan oleh jumlah angka atau kekuatan material semata-mata, tetapi oleh keikhlasan, disiplin syura, dan pergantungan mutlak kepada Allah.',
      wahyu: {
        ref: 'Surah Al-Anfal (8:9–17) & Ali \'Imran (3:123)',
        note: 'Menjelaskan pertolongan Allah di Badar dengan seribu malaikat dan menamakan hari tersebut sebagai Yaumul Furqan (Hari Pembeza antara hak dan batil).'
      }
    },
    {
      id: 'sirah-13',
      order: 13,
      title: 'Perang Uhud',
      yearMasihi: '625 M',
      yearHijrah: '3 H',
      prophetAge: '56 tahun',
      phase: 'Fasa Madinah',
      category: 'Ghazwah',
      locationName: 'Bukit Uhud, Madinah',
      coordinates: [24.5034, 39.6119],
      zoom: 13,
      summary:
        'Tentera Quraisy mara dengan 3,000 bala tentera menuntut bela. Pasukan Islam hampir menang sebelum sebahagian pemanah di Bukit Rumat meninggalkan posisi kerana menyangka perang telah tamat, membolehkan pasukan berkuda musuh menyerang balas. Tujuh puluh sahabat termasuk Saidina Hamzah r.a. gugur syahid.',
      pengajaran:
        'Kepatuhan kepada arahan kepimpinan dan menjaga amanah tugas adalah penentu kejayaan kolektif; kegagalan sementara pula menjadi madrasah penyucian jiwa.',
      wahyu: {
        ref: 'Surah Ali \'Imran (3:152–159)',
        note: 'Analisis ilahi terhadap punca ujian di Uhud, pesanan agar tidak berputus asa, dan perintah untuk terus bermesyuarat serta berlemah lembut.'
      }
    },
    {
      id: 'sirah-14',
      order: 14,
      title: 'Perang Khandaq (Al-Ahzab)',
      yearMasihi: '627 M',
      yearHijrah: '5 H',
      prophetAge: '58 tahun',
      phase: 'Fasa Madinah',
      category: 'Ghazwah',
      locationName: 'Kawasan Parit Utara, Madinah',
      coordinates: [24.482, 39.596],
      zoom: 13,
      summary:
        'Gabungan 10,000 tentera bersekutu mengepung Madinah. Atas cadangan Salman al-Farisi r.a., umat Islam menggali parit pertahanan yang luas di utara kota dengan Rasulullah SAW sendiri turut memecahkan batu. Akhirnya Allah menghantar angin kencang yang mematahkan semangat musuh sehingga mereka berundur.',
      pengajaran:
        'Keterbukaan menerima idea kreatif dari luar kebiasaan serta kepimpinan melalui teladan (turun padang bersama pasukan) melahirkan daya tahan luar biasa.',
      wahyu: {
        ref: 'Surah Al-Ahzab (33:9–25)',
        note: 'Mengenang nikmat Allah menghantar angin ribut dan tentera yang tidak kelihatan, serta mengisytiharkan Rasulullah SAW sebagai Uswatun Hasanah.'
      }
    },
    {
      id: 'sirah-15',
      order: 15,
      title: 'Perjanjian Hudaibiyah',
      yearMasihi: '628 M',
      yearHijrah: '6 H',
      prophetAge: '59 tahun',
      phase: 'Fasa Madinah',
      category: 'Diplomasi',
      locationName: 'Hudaibiyah (Asy-Syumaisi)',
      coordinates: [21.4414, 39.6042],
      zoom: 11,
      summary:
        'Ketika 1,400 Muslimin berihram menuju Mekah untuk umrah secara aman, Quraisy menghalang mereka di Hudaibiyah. Baginda memeterai gencatan senjata selama 10 tahun. Walaupun syaratnya kelihatan berat pada zahir, keamanan itu membuka pintu dakwah besar-besaran hingga ribuan manusia memeluk Islam dalam masa dua tahun.',
      pengajaran:
        'Diplomasi berpandangan jauh kadangkala menuntut kesediaan berkompromi pada perkara teknikal demi mencapai kemenangan strategik dan keamanan jangka panjang.',
      wahyu: {
        ref: 'Surah Al-Fath (48:1–18)',
        note: 'Allah SWT menyifatkan Perjanjian Hudaibiyah sebagai "Fathan Mubina" (Kemenangan yang Nyata) dan memuji Bai\'ah Ridhwan di bawah pokok.'
      }
    },
    {
      id: 'sirah-16',
      order: 16,
      title: 'Pembukaan Kota Mekah (Fathu Makkah)',
      yearMasihi: '630 M',
      yearHijrah: '8 H',
      prophetAge: '61 tahun',
      phase: 'Fasa Madinah',
      category: 'Ghazwah',
      locationName: 'Masjidil Haram, Mekah al-Mukarramah',
      coordinates: [21.4225, 39.8262],
      zoom: 13,
      summary:
        'Selepas Quraisy mencabuli Perjanjian Hudaibiyah, Rasulullah SAW memimpin 10,000 tentera memasuki Mekah pada bulan Ramadan hampir tanpa pertumpahan darah. Baginda menundukkan kepala penuh tawaduk, membersihkan 360 berhala di sekitar Kaabah, dan mengisytiharkan pengampunan umum kepada bekas penentangnya.',
      pengajaran:
        'Kemenangan sejati disambut dengan kerendahan hati, kesyukuran, dan pengampunan — bukan kesombongan atau balas dendam.',
      wahyu: {
        ref: 'Surah An-Nasr (110:1–3) & Al-Isra\' (17:81)',
        note: 'Baginda membaca ayat "Telah datang kebenaran dan lenyaplah kebatilan" saat meruntuhkan berhala, manakala Surah An-Nasr mengingatkan agar bertasbih dan beristighfar saat mencapai kejayaan.'
      }
    },
    {
      id: 'sirah-17',
      order: 17,
      title: 'Haji Wada\' & Khutbah Terakhir',
      yearMasihi: '632 M',
      yearHijrah: '10 H',
      prophetAge: '63 tahun',
      phase: 'Fasa Madinah',
      category: 'Wahyu',
      locationName: 'Padang Arafah, Mekah',
      coordinates: [21.3549, 39.9841],
      zoom: 12,
      summary:
        'Lebih 100,000 umat Islam berhimpun di Padang Arafah mendengar khutbah perpisahan Rasulullah SAW. Baginda menegaskan kemuliaan nyawa dan harta, pemansuhan riba dan semangat perkauman, penghormatan terhadap hak wanita, serta wasiat berpegang teguh kepada al-Quran dan Sunnah.',
      pengajaran:
        'Piagam kemanusiaan sejagat Islam meletakkan ketakwaan sebagai satu-satunya ukuran kemuliaan, menghapuskan segala bentuk diskriminasi keturunan atau warna kulit.',
      wahyu: {
        ref: 'Surah Al-Ma\'idah (5:3)',
        note: 'Ayat penyempurnaan agama: "Pada hari ini, Aku telah sempurnakan bagi kamu agama kamu, dan Aku telah cukupkan nikmat-Ku kepada kamu."'
      }
    },
    {
      id: 'sirah-18',
      order: 18,
      title: 'Kewafatan Rasulullah SAW',
      yearMasihi: '632 M',
      yearHijrah: '11 H',
      prophetAge: '63 tahun',
      phase: 'Fasa Madinah',
      category: 'Wahyu',
      locationName: 'Raudhah, Masjid Nabawi, Madinah',
      coordinates: [24.4672, 39.6111],
      zoom: 15,
      summary:
        'Pada hari Isnin, 12 Rabiulawal tahun ke-11 Hijrah, Baginda SAW kembali ke rahmatullah di pangkuan Saidatina Aisyah r.a. sambil melafazkan "Ar-Rafiqul A\'la" (Teman Yang Maha Tinggi) dan berpesan agar menjaga solat serta berbuat baik kepada golongan lemah.',
      pengajaran:
        'Walaupun jasad Baginda telah tiada, risalah tauhid, al-Quran, dan teladan akhlak Baginda kekal hidup sebagai panduan abadi ummah hingga hari kiamat.',
      wahyu: {
        ref: 'Surah Ali \'Imran (3:144)',
        note: 'Ayat yang dibacakan oleh Saidina Abu Bakar as-Siddiq r.a. untuk menenangkan para sahabat: barang siapa menyembah Allah, sesungguhnya Allah Maha Hidup dan tidak akan mati.'
      }
    }
  ];

  root.JejakData = root.JejakData || {};
  root.JejakData.sirah = sirahEvents;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = sirahEvents;
  }
})(typeof window !== 'undefined' ? window : globalThis);
