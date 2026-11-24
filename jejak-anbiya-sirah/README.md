# Jejak Anbiya & Sirah

Aplikasi web pendidikan Islam (PWA-ready) yang minimalis, responsif, dan berkonsepkan editorial muzium dalam **Bahasa Melayu**.

## Ciri Utama
1. **Garis Masa Sirah Nabawiyah (`Sirah`)** — 18 peristiwa kronologi (Tahun Gajah hingga Kewafatan Rasulullah SAW) yang disegerakkan dengan peta interaktif Leaflet.js, tapisan Fasa/Kategori, kaitan wahyu (*Asbabun Nuzul*), serta penandaan kemajuan bacaan (`localStorage`).
2. **Biodata 25 Nabi & Rasul (`25 Nabi`)** — Direktori lengkap 25 Nabi (Adam a.s. hingga Muhammad SAW) dengan carian masa nyata, tapisan *Ulul Azmi* & *Penerima Kitab*, modal biodata terperinci, mukjizat, rujukan surah, dan pautan terus ke Doa Anbiya.
3. **Pokok Salasilah Interaktif (`Salasilah`)** — Carta nasab interaktif (pan & zum) menghubungkan 25 Nabi daripada Nabi Adam a.s. → Nuh a.s. → Ibrahim a.s. hingga percabangan **Nabi Ismail a.s.** (→ Nabi Muhammad SAW) dan **Nabi Ishaq a.s.** (→ Bani Israil).
4. **Pustaka Doa Para Nabi (`Doa Anbiya`)** — 15 doa al-Quran para Nabi lengkap dengan teks Arab berbaris (`dir="rtl"`), terjemahan Bahasa Melayu, konteks, butang **Salin Doa** satu klik, dan fungsi **Simpan / Bookmark** (`localStorage`).

## Struktur Fail Data
Semua kandungan sejarah diasingkan dengan kemas untuk penyelenggaraan mudah:
- `src/data/sirah.js` — Data peristiwa kronologi & koordinat peta Sirah
- `src/data/nabi.js` — Data biodata 25 Nabi & Rasul
- `src/data/salasilah.js` — Struktur nod & garis percabangan salasilah
- `src/data/doa.js` — Himpunan Doa Para Nabi daripada al-Quran

## Cara Menjalankan
- **Buka terus:** Dwi-klik `index.html` di pelayar web (Chrome / Edge / Safari).
- **Mod PWA Tempatan (Windows PowerShell, tanpa Node.js):**
  ```powershell
  powershell -ExecutionPolicy Bypass -File .\serve.ps1
  ```
  Kemudian buka `http://localhost:4173` di pelayar.
