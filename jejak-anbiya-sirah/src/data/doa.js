/**
 * Pustaka Doa Para Nabi (Doa Anbiya)
 * Koleksi doa-doa al-Quran yang dilafazkan oleh para Nabi a.s.
 * lengkap dengan teks Arab berbaris (tashkeel), terjemahan Bahasa Melayu & konteks.
 */
(function (root) {
  const doaAnbiya = [
    {
      id: 'doa-adam',
      prophetId: 'adam',
      prophetName: 'Nabi Adam a.s.',
      title: 'Doa Taubat & Memohon Keampunan',
      theme: 'Taubat',
      context:
        'Dilafazkan oleh Nabi Adam a.s. dan Hawa setelah tersilap memakan buah larangan di syurga lalu menyesali perbuatan mereka dengan penuh kerendahan hati.',
      arabic:
        'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
      translation:
        'Wahai Tuhan kami, kami telah menganiaya diri kami sendiri, dan kalau Engkau tidak mengampunkan kami dan memberi rahmat kepada kami, nescaya menjadilah kami dari orang-orang yang rugi.',
      reference: 'Surah Al-A\'raf, 7:23'
    },
    {
      id: 'doa-nuh-perlindungan',
      prophetId: 'nuh',
      prophetName: 'Nabi Nuh a.s.',
      title: 'Doa Memohon Perlindungan daripada Perkara Tanpa Ilmu',
      theme: 'Taubat',
      context:
        'Dipanjatkan oleh Nabi Nuh a.s. setelah ditegur oleh Allah SWT ketika merayu untuk menyelamatkan anaknya yang enggan beriman dalam peristiwa banjir besar.',
      arabic:
        'رَبِّ إِنِّي أَعُوذُ بِكَ أَنْ أَسْأَلَكَ مَا لَيْسَ لِي بِهِ عِلْمٌ ۖ وَإِلَّا تَغْفِرْ لِي وَتَرْحَمْنِي أَكُن مِّنَ الْخَاسِرِينَ',
      translation:
        'Wahai Tuhanku, sesungguhnya aku berlindung kepada-Mu daripada memohon kepada-Mu sesuatu yang aku tidak mempunyai pengetahuan mengenainya; dan jika Engkau tidak mengampunkan dosaku dan memberi rahmat kepadaku, nescaya aku menjadi dari orang-orang yang rugi.',
      reference: 'Surah Hud, 11:47'
    },
    {
      id: 'doa-nuh-keluarga',
      prophetId: 'nuh',
      prophetName: 'Nabi Nuh a.s.',
      title: 'Doa Keampunan Buat Diri, Ibu Bapa & Mukminin',
      theme: 'Keluarga',
      context:
        'Munajat penuh kasih sayang Nabi Nuh a.s. memohon keampunan buat dirinya, kedua ibu bapanya, dan setiap insan beriman yang memasuki rumahnya.',
      arabic:
        'رَّبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ',
      translation:
        'Wahai Tuhanku! Ampunkanlah bagiku, dan bagi kedua ibu bapaku, serta bagi sesiapa yang masuk ke rumahku dengan keadaan beriman; dan (ampunkanlah) bagi sekalian orang-orang yang beriman, lelaki dan perempuan.',
      reference: 'Surah Nuh, 71:28'
    },
    {
      id: 'doa-ibrahim-solat',
      prophetId: 'ibrahim',
      prophetName: 'Nabi Ibrahim a.s.',
      title: 'Doa Zuriat yang Tekun Mendirikan Solat',
      theme: 'Keluarga',
      context:
        'Dipanjatkan oleh Nabi Ibrahim a.s. setelah menempatkan keluarganya di lembah Mekah yang tandus, memohon agar keturunannya sentiasa memelihara solat.',
      arabic:
        'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ ۝ رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ',
      translation:
        'Wahai Tuhanku! Jadikanlah daku orang yang mendirikan solat dan demikianlah juga zuriat keturunanku. Wahai Tuhan kami, perkenankanlah doa permohonanku. Wahai Tuhan kami! Berilah ampun bagiku dan bagi kedua ibu bapaku serta bagi orang-orang yang beriman, pada masa berlakunya hitungan amal dan pembalasan.',
      reference: 'Surah Ibrahim, 14:40–41'
    },
    {
      id: 'doa-ibrahim-ismail',
      prophetId: 'ismail',
      prophetName: 'Nabi Ibrahim a.s. & Nabi Ismail a.s.',
      title: 'Doa Diterima Amal Ketika Membina Kaabah',
      theme: 'Syukur',
      context:
        'Dibaca bersama oleh Nabi Ibrahim a.s. dan puteranya Nabi Ismail a.s. tatkala meninggikan binaan asas Baitullah (Kaabah) dengan penuh keikhlasan.',
      arabic:
        'رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ ۝ رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ',
      translation:
        'Wahai Tuhan kami! Terimalah daripada kami (amal kami); sesungguhnya Engkaulah Yang Maha Mendengar lagi Maha Mengetahui. Wahai Tuhan kami! Jadikanlah kami berdua orang-orang yang berserah diri kepada-Mu, dan jadikanlah daripada keturunan kami umat yang berserah diri kepada-Mu.',
      reference: 'Surah Al-Baqarah, 2:127–128'
    },
    {
      id: 'doa-lut',
      prophetId: 'lut',
      prophetName: 'Nabi Lut a.s.',
      title: 'Doa Perlindungan daripada Keburukan Sekeliling',
      theme: 'Ketabahan',
      context:
        'Dilafazkan oleh Nabi Lut a.s. ketika kaumnya berdegil meneruskan kemungkaran dan mengancam untuk mengusir Baginda serta pengikutnya yang beriman.',
      arabic:
        'رَبِّ نَجِّنِي وَأَهْلِي مِمَّا يَعْمَلُونَ',
      translation:
        'Wahai Tuhanku, selamatkanlah daku dan keluargaku dari apa yang mereka lakukan.',
      reference: 'Surah Asy-Syu\'ara, 26:169'
    },
    {
      id: 'doa-yusuf',
      prophetId: 'yusuf',
      prophetName: 'Nabi Yusuf a.s.',
      title: 'Doa Husnul Khatimah & Bersama Orang Soleh',
      theme: 'Syukur',
      context:
        'Munajat kesyukuran Nabi Yusuf a.s. selepas dipertemukan semula dengan ayahanda Nabi Yaakub a.s. serta dianugerahkan kedudukan tinggi di Mesir.',
      arabic:
        'فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ أَنتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ ۖ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ',
      translation:
        'Wahai Tuhan yang menciptakan langit dan bumi, Engkaulah Pelindungku di dunia dan di akhirat; sempurnakanlah ajalku (ketika mati) dalam keadaan Islam, dan hubungkanlah daku dengan orang-orang yang soleh.',
      reference: 'Surah Yusuf, 12:101'
    },
    {
      id: 'doa-syuaib',
      prophetId: 'syuaib',
      prophetName: 'Nabi Syu\'aib a.s.',
      title: 'Doa Memohon Keputusan yang Benar',
      theme: 'Ketabahan',
      context:
        'Dibaca oleh Nabi Syu\'aib a.s. ketika berhadapan ancaman pengusiran oleh pembesar kaum Madyan yang menolak seruan keadilan ekonomi dan tauhid.',
      arabic:
        'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ',
      translation:
        'Wahai Tuhan kami, hukumkanlah antara kami dan kaum kami dengan kebenaran (keadilan), kerana Engkau jualah sebaik-baik Hakim.',
      reference: 'Surah Al-A\'raf, 7:89'
    },
    {
      id: 'doa-ayyub',
      prophetId: 'ayyub',
      prophetName: 'Nabi Ayyub a.s.',
      title: 'Doa Ketabahan di Saat Ujian Berat',
      theme: 'Ketabahan',
      context:
        'Rintihan penuh adab Nabi Ayyub a.s. setelah bertahun-tahun diuji kehilangan harta, anak-anak, serta penyakit berat tanpa sedikit pun mengeluh terhadap takdir Allah.',
      arabic:
        'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
      translation:
        '(Ya Tuhanku), sesungguhnya aku ditimpa penyakit (dan kesusahan), sedang Engkaulah sahaja Yang Lebih Mengasihani daripada segala yang mengasihani.',
      reference: 'Surah Al-Anbiya\', 21:83'
    },
    {
      id: 'doa-musa-dada',
      prophetId: 'musa',
      prophetName: 'Nabi Musa a.s.',
      title: 'Doa Melapangkan Dada & Memudahkan Urusan',
      theme: 'Urusan & Ilmu',
      context:
        'Dipanjatkan oleh Nabi Musa a.s. sewaktu menerima perintah agung untuk berdakwah kepada Firaun yang zalim, memohon ketenangan hati dan kefasihan tutur kata.',
      arabic:
        'رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۝ يَفْقَهُوا قَوْلِي',
      translation:
        'Wahai Tuhanku, lapangkanlah bagiku dadaku, dan mudahkanlah bagiku tugasku, dan lepaskanlah simpulan daripada lidahku, supaya mereka faham perkataanku.',
      reference: 'Surah Taha, 20:25–28'
    },
    {
      id: 'doa-musa-kebaikan',
      prophetId: 'musa',
      prophetName: 'Nabi Musa a.s.',
      title: 'Doa Memohon Kebaikan Ketika Kesempitan',
      theme: 'Urusan & Ilmu',
      context:
        'Dibaca oleh Nabi Musa a.s. ketika berehat di bawah pohon di negeri Madyan dalam keadaan lapar dan musafir selepas membantu dua orang wanita memberi minum ternakan mereka.',
      arabic:
        'رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ',
      translation:
        'Wahai Tuhanku, sesungguhnya aku sangat berhajat kepada sebarang rezeki dan kebaikan yang Engkau turunkan kepadaku.',
      reference: 'Surah Al-Qasas, 28:24'
    },
    {
      id: 'doa-sulaiman',
      prophetId: 'sulaiman',
      prophetName: 'Nabi Sulaiman a.s.',
      title: 'Doa Mensyukuri Nikmat & Beramal Soleh',
      theme: 'Syukur',
      context:
        'Lafaz syukur Nabi Sulaiman a.s. sambil tersenyum ketika mendengar bicara seekor semut yang mengingatkan kawanannya agar menjauhi laluan bala tentera Baginda.',
      arabic:
        'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ',
      translation:
        'Wahai Tuhanku, ilhamkanlah daku supaya tetap bersyukur akan nikmat-Mu yang Engkau kurniakan kepadaku dan kepada ibu bapaku, dan supaya aku tetap mengerjakan amal soleh yang Engkau redai; dan masukkanlah daku — dengan limpah rahmat-Mu — dalam kumpulan hamba-hamba-Mu yang soleh.',
      reference: 'Surah An-Naml, 27:19'
    },
    {
      id: 'doa-yunus',
      prophetId: 'yunus',
      prophetName: 'Nabi Yunus a.s.',
      title: 'Doa Tasbih di Dalam Kegelapan Perut Ikan Nun',
      theme: 'Taubat',
      context:
        'Seruan tauhid dan pengakuan kelemahan diri oleh Nabi Yunus a.s. dari dalam tiga lapisan kegelapan (malam, lautan dalam, dan perut ikan) sehingga Allah menyelamatkan Baginda.',
      arabic:
        'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
      translation:
        'Sesungguhnya tiada Tuhan (yang berhak disembah) melainkan Engkau (Ya Allah)! Maha Suci Engkau; sesungguhnya aku adalah dari orang-orang yang menganiaya diri sendiri.',
      reference: 'Surah Al-Anbiya\', 21:87'
    },
    {
      id: 'doa-zakaria',
      prophetId: 'zakaria',
      prophetName: 'Nabi Zakaria a.s.',
      title: 'Doa Memohon Zuriat yang Baik & Berkat',
      theme: 'Keluarga',
      context:
        'Dipanjatkan oleh Nabi Zakaria a.s. di dalam mihrab walaupun telah lanjut usia, setelah menyaksikan kekuasaan Allah mengurniakan rezeki luar biasa kepada Maryam.',
      arabic:
        'رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ',
      translation:
        'Wahai Tuhanku! Kurniakanlah kepadaku dari sisi-Mu zuriat keturunan yang baik; sesungguhnya Engkau sentiasa Mendengar (menerima) doa permohonan.',
      reference: 'Surah Ali \'Imran, 3:38'
    },
    {
      id: 'doa-muhammad',
      prophetId: 'muhammad',
      prophetName: 'Nabi Muhammad SAW',
      title: 'Doa Sapu Jagat (Kebaikan Dunia & Akhirat)',
      theme: 'Syukur',
      context:
        'Doa al-Quran yang paling kerap dibaca dan diamalkan oleh Rasulullah SAW sebagaimana diriwayatkan oleh Anas bin Malik r.a., menghimpunkan segala kebaikan dunia dan akhirat.',
      arabic:
        'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      translation:
        'Wahai Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan peliharalah kami daripada azab neraka.',
      reference: 'Surah Al-Baqarah, 2:201'
    }
  ];

  root.JejakData = root.JejakData || {};
  root.JejakData.doa = doaAnbiya;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = doaAnbiya;
  }
})(typeof window !== 'undefined' ? window : globalThis);
