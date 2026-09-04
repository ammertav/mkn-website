/**
 * Panduan Evaluasi Pembelajaran — MKn UNISSULA.
 *
 * SUMBER: dokumen resmi prodi "Panduan Evaluasi Pembelajaran MKn UNISSULA.docx".
 * Seluruh tabel disalin utuh; klausul bernomor diringkas seperlunya tanpa
 * mengubah ketentuan.
 *
 * TIDAK DITAMPILKAN di halaman: Pasal 1 (definisi istilah), Pasal 2 (sembilan
 * dasar hukum), dan Lampiran A (format lembar perhitungan). Ketiganya bersifat
 * definisional atau formulir internal; dokumen lengkap tetap rujukan resmi.
 *
 * Butir bertanda [Usulan] pada dokumen BELUM ditetapkan Program Studi.
 * Penandanya tidak dirender — lihat catatan pada checklist konten.
 */

export const sorotEvaluasi = [
  { angka: "41 sks", label: "Beban studi Kurikulum OBE 2026" },
  { angka: "4", label: "Rumusan CPL" },
  { angka: "80%", label: "Ambang ketercapaian CPL" },
  { angka: "3,00", label: "IPK minimum kelulusan" },
];

/** Pasal 3 — prinsip penilaian. */
export const prinsipPenilaian = [
  {
    "tanda": "1",
    "judul": "Profesional dan Islami",
    "keterangan": "Penilaian tidak hanya pada aspek kognitif, tetapi juga pada integritas moral dan etika profesi yang dijiwai oleh strategi Budaya Akademik Islami (BudAI)."
  },
  {
    "tanda": "2",
    "judul": "Berorientasi pada Kemahiran Praktis",
    "keterangan": "Mahasiswa dinilai dari kemampuannya memberikan solusi atas problem hukum di masyarakat, khususnya dalam bidang pertanahan dan kenotariatan."
  },
  {
    "tanda": "3",
    "judul": "Integratif",
    "keterangan": "Penilaian menggabungkan aspek akademik magister (Level 8 KKNI) dengan aspek keahlian profesi pejabat umum."
  },
  {
    "tanda": "4",
    "judul": "Akuntabel dan Transparan",
    "keterangan": "Dilakukan melalui sistem penjaminan mutu yang terukur untuk menjamin lulusan memiliki reputasi di tingkat nasional maupun internasional."
  },
];

/** Tabel 1 — bobot komponen penilaian menurut jenis mata kuliah. */
export const bobotKolom = [
  "Jenis Mata Kuliah",
  "Ujian (UTS+UAS)",
  "Tugas / Portofolio",
  "Partisipasi",
  "Unjuk Kerja",
  "Produk / Proyek",
];
export const bobotBaris = [
  ["MK teori 2 sks (kuliah, case method, seminar)", "40%", "30%", "20%", "10%", "—"],
  ["MK teori-praktik 2 sks (kuliah dan praktik terbimbing)", "40%", "25%", "15%", "20%", "—"],
  ["MK rumpun Teknik Pembuatan Akta 3 sks (TPA I, II, III)", "40%", "25%", "10%", "20%", "5%"],
  ["MK Laboratorium Akta 1 sks (praktik penuh)", "—", "30%", "10%", "40%", "20%"],
  ["MK Islam Disiplin Ilmu 3 sks", "50%", "30%", "20%", "—", "—"],
  ["Tesis 4 sks", "—", "—", "—", "—", "100%"],
];

export const bobotCatatan = [
  "Jumlah seluruh komponen penilaian pada setiap mata kuliah adalah 100%.",
  "Setiap butir penilaian wajib dipetakan kepada Sub-CPMK dan CPL yang diukurnya pada halaman asesmen Rencana Pembelajaran Semester.",
  "Perubahan bobot komponen hanya dapat dilakukan melalui revisi Rencana Pembelajaran Semester yang disetujui Koordinator Mata Kuliah dan Ketua Program Studi.",
];

/** Tabel 2 — skala nilai hasil belajar. */
export const skalaKolom = ["Rentang Nilai Angka", "Nilai Huruf", "Bobot", "Predikat"];
export const skalaBaris = [
  ["80,00 – 100,00", "A", "4,00", "Sangat Baik"],
  ["75,00 – 79,99", "AB", "3,50", "Lebih dari Baik"],
  ["70,00 – 74,99", "B", "3,00", "Baik"],
  ["65,00 – 69,99", "BC", "2,50", "Lebih dari Cukup"],
  ["60,00 – 64,99", "C", "2,00", "Cukup"],
  ["55,00 – 59,99", "CD", "1,50", "Kurang dari Cukup"],
  ["50,00 – 54,99", "D", "1,00", "Kurang"],
  ["45,00 – 49,99", "E", "0,50", "Gagal"],
];

export const batasKelulusan = [
  "Nilai lulus mata kuliah pada Program Magister Kenotariatan adalah sekurang-kurangnya B.",
  "Khusus penilaian Usulan Proposal Tesis dan Ujian Tesis, mahasiswa dinyatakan lulus apabila memperoleh nilai sekurang-kurangnya B.",
  "Nilai ujian diumumkan secara terbuka melalui Sistem Informasi Akademik.",
];

/** Pasal 6 — perhitungan ketercapaian berjenjang. */
export const langkahKetercapaian = [
  {
    tahap: "Nilai CPMK",
    uraian: "Σ (nilai butir penilaian × bobot butir penilaian yang mengukur CPMK tersebut)",
  },
  {
    tahap: "Ketercapaian CPMK",
    uraian: "(Nilai CPMK ÷ Nilai maksimum) × 100",
  },
  {
    tahap: "Ketercapaian CPL pada satu mata kuliah",
    uraian: "Rata-rata ketercapaian seluruh CPMK yang menurunkan CPL tersebut",
  },
  {
    tahap: "Ketercapaian mata kuliah",
    uraian: "Rata-rata ketercapaian seluruh CPL yang dibebankan pada mata kuliah",
  },
  {
    tahap: "Ketercapaian CPL tingkat program studi",
    uraian: "Rata-rata ketercapaian CPL pada seluruh mata kuliah pengukurnya",
  },
];

export const catatanKetercapaian = [
  "Ambang ketercapaian ditetapkan sebesar 80,00%, digunakan secara identik pada Annex 17 Laporan Evaluasi Ketercapaian CPL dan pada Laporan Evaluasi Hasil Belajar Program Studi.",
  "Jumlah mata kuliah pengukur setiap CPL mengikuti Tabel 10 Dokumen Kurikulum OBE 2026: CPL 1 sebanyak 21 mata kuliah, CPL 2 sebanyak 14, CPL 3 sebanyak 10, dan CPL 4 sebanyak 3, apabila 5 mata kuliah pilihan dihitung terpisah.",
];

/** Pasal 7 — kategori ketercapaian dan tindak lanjut. */
export const kategoriKolom = ["Rentang Ketercapaian", "Kategori", "Status", "Tindak Lanjut"];
export const kategoriBaris = [
  ["≥ 90,00%", "Sangat Baik", "Tercapai", "Dipertahankan dan dijadikan rujukan praktik baik"],
  ["80,00% – 89,99%", "Baik", "Tercapai", "Ditingkatkan melalui penajaman instrumen penilaian"],
  [
    "70,00% – 79,99%",
    "Cukup",
    "Belum Tercapai",
    "Perbaikan metode pembelajaran dan rubrik pada semester berikutnya",
  ],
  [
    "< 70,00%",
    "Kurang",
    "Belum Tercapai",
    "Peninjauan menyeluruh RPS, bahan kajian, dan bentuk penilaian",
  ],
];

/** Pasal 8 — remidiasi dan perbaikan nilai. */
export const remidiasi = [
  "Mahasiswa yang belum lulus suatu mata kuliah diberi kesempatan perbaikan (remidi) paling banyak 2 kali.",
  "Mahasiswa yang telah lulus tetapi belum puas dengan nilainya dapat mengikuti remidi dengan persetujuan dan jadwal yang ditetapkan dosen penguji.",
  "Apabila setelah dua kali remidi belum juga lulus, mahasiswa wajib menempuh kembali mata kuliah tersebut dengan mencatatkan diri pada bagian akademik.",
  "Biaya ujian perbaikan ditetapkan per mata uji dan dibayarkan setiap kali mengikuti ujian perbaikan.",
  "Nilai hasil remidi yang digunakan adalah nilai tertinggi di antara nilai asli dan nilai remidi.",
];

/** Pasal 9 — syarat kelulusan program studi. */
export const syaratKelulusan = [
  "Lulus seluruh mata kuliah yang dipersyaratkan",
  "Lulus Ujian Tesis",
  "Mengumpulkan 41 sks dengan IPK sekurang-kurangnya 3,00 dan tidak terdapat nilai C",
  "Menyerahkan salinan Sertifikat Magang",
  "Menyerahkan salinan Sertifikat TOEFL LIKE dengan nilai sekurang-kurangnya 525",
  "Menyerahkan salinan publikasi karya ilmiah pada jurnal cetak maupun daring",
  "Menyelesaikan seluruh kewajiban administrasi dan keuangan",
];

/** Tabel 3 — predikat kelulusan. */
export const predikatKolom = ["Indeks Prestasi Kumulatif", "Predikat", "Ketentuan Khusus"];
export const predikatBaris = [
  [
    "3,76 – 4,00",
    "Dengan Pujian (Cum Laude)",
    "Hanya diberikan kepada mahasiswa yang menyelesaikan studi paling lama 2 tahun dengan nilai Ujian Tesis A",
  ],
  ["3,50 – 3,75", "Sangat Memuaskan", "—"],
  ["3,00 – 3,49", "Memuaskan", "—"],
];

/** Pasal 10 — siklus evaluasi dan perbaikan berkelanjutan. */
export const siklusKolom = ["Waktu", "Kegiatan", "Penanggung Jawab", "Luaran"];
export const siklusBaris = [
  [
    "Setiap akhir semester",
    "Rekapitulasi nilai dan perhitungan ketercapaian CPMK per mata kuliah",
    "Dosen pengampu dan Koordinator Mata Kuliah",
    "Lembar perhitungan ketercapaian (Lampiran A)",
  ],
  [
    "Setiap akhir semester",
    "Evaluasi kepuasan mahasiswa terhadap pembelajaran",
    "Gugus Penjaminan Mutu",
    "Laporan hasil survei",
  ],
  [
    "Setiap akhir tahun akademik",
    "Penyusunan Laporan Evaluasi Hasil Belajar dan Laporan Evaluasi Ketercapaian CPL",
    "Gugus Penjaminan Mutu bersama Program Studi",
    "Laporan Evaluasi Hasil Belajar dan Annex 17",
  ],
  [
    "Paling lambat 30 hari setelah laporan ditetapkan",
    "Rapat tinjauan manajemen program studi",
    "Ketua Program Studi",
    "Notulen dan rencana tindak lanjut",
  ],
  [
    "Setiap tahun",
    "Peninjauan Rencana Pembelajaran Semester",
    "Tim Dosen Rumpun Mata Kuliah",
    "RPS hasil revisi",
  ],
  [
    "Setiap 1–2 tahun",
    "Peninjauan kurikulum",
    "Tim Kurikulum Program Studi",
    "Dokumen kurikulum hasil peninjauan",
  ],
];

/** Lampiran B — ekuivalensi Kurikulum 2021 ke Kurikulum OBE 2026. */
export const ekuivalensiKolom = [
  "Kode 2021",
  "Mata Kuliah Kurikulum 2021",
  "sks",
  "Kode 2026",
  "Mata Kuliah Kurikulum OBE 2026",
  "sks",
  "Keterangan",
];
export const ekuivalensiBaris = [
  ["HN218008026", "Teori Hukum, Penemuan Hukum dan Metode Penelitian Hukum", "2", "HN268008001", "Teori Hukum, Penemuan Hukum dan Metode Penelitian Hukum", "2", "Setara penuh"],
  ["HN218008027", "Hukum Perikatan/Perjanjian, Jaminan dan Pembuatan Akta Jaminan", "2", "HN268008002", "Hukum Perikatan, Perjanjian dan Jaminan", "2", "Setara penuh"],
  ["HN218008028", "Hukum Perbankan dan Pembuatan Akta Syariah", "2", "HN268008003", "Hukum Perbankan dan Perbankan Syariah", "2", "Setara penuh"],
  ["HN218008029", "Hukum Notaris dan Kode Etik Notaris", "2", "HN268008004", "Peraturan Jabatan Notaris dan Kode Etik Notaris", "2", "Setara penuh"],
  ["HN218008030", "Teknik Pembuatan Akta Umum (TPA I)", "3", "HN268008005", "Teknik Pembuatan Akta Umum (TPA I)", "3", "Setara penuh"],
  ["HN218008031", "Laboratorium Akta 1", "1", "HN268008006", "Laboratorium Akta 1", "1", "Setara penuh"],
  ["HN218008032", "Hukum Harta Kekayaan dan Pewarisan", "2", "HN268008008", "Hukum Keluarga dan Waris", "2", "Setara penuh"],
  ["HN218008033", "Hukum Pajak, Kepailitan dan Lelang", "2", "HN268009002", "Hukum Pajak, Kepailitan dan Lelang (P)", "2", "Status berubah: wajib menjadi mata kuliah pilihan"],
  ["HN218008034", "Teknik Pembuatan Akta Badan Hukum (TPA II)", "3", "HN268008009", "Teknik Pembuatan Akta Badan Usaha (TPA II)", "3", "Setara; cakupan diperluas ke badan usaha tidak berbadan hukum"],
  ["HH216007035", "Peradaban Islam", "2", "HN268007011", "Islam Disiplin Ilmu", "3", "Diserap sebagian; bersama HH216007036 diakui setara Islam Disiplin Ilmu"],
  ["HH216007036", "Islam Disiplin Ilmu", "2", "HN268007011", "Islam Disiplin Ilmu", "3", "Setara; bobot naik dari 2 menjadi 3 sks"],
  ["HN218008037", "Laboratorium Akta 2", "1", "HN268008011", "Laboratorium Akta 2", "1", "Setara penuh"],
  ["HN218008038", "Teknik Pembuatan Akta Khusus (TPA III)", "3", "HN268008013", "Teknik Pembuatan Akta Khusus (TPA III)", "3", "Setara; bahan kajian berubah menjadi BK35, BK36, dan BK31"],
  ["HN218008039", "Hukum Agraria, kePPATan dan Teknik Pembuatan Akta PPAT", "3", "HN268008012 + HN268008010 + HN268008016", "Hukum Pertanahan + Politik Hukum kePPATan, Kode Etik PPAT + Teknik Pembuatan Akta PPAT", "2 + 2 + 2", "Dipecah menjadi tiga mata kuliah; wajib menempuh ketiganya"],
  ["HN218008040", "Laboratorium Akta 3", "1", "HN268008014", "Laboratorium Akta 3", "1", "Setara penuh"],
  ["HN218009041", "Filsafat Ilmu dan Filsafat Hukum Islam (P)", "1", "HN268009001", "Filsafat Hukum Islam (P)", "2", "Setara; bobot naik dari 1 menjadi 2 sks"],
  ["HN218009042", "Hukum Perusahaan dan Pasar Modal (P)", "1", "HN268008007", "Hukum Perusahaan dan Perkembangan Pasar Modal", "2", "Status berubah: pilihan menjadi wajib; bobot naik menjadi 2 sks"],
  ["HN218009043", "Cyber Administrasi Badan Hukum dan Bisnis Internasional (P)", "1", "HN268009005", "Cyber Administrasi Badan Hukum dan Bisnis Internasional (P)", "2", "Setara; bobot naik dari 1 menjadi 2 sks"],
  ["HN218009044", "Hak Kekayaan Intelektual (HAKI) (P)", "1", "HN268009003", "Hak Kekayaan Intelektual (HAKI) (P)", "2", "Setara; bobot naik dari 1 menjadi 2 sks"],
  ["HN218009045", "Hukum Ekonomi Syariah (P)", "1", "HN268009004", "Hukum Ekonomi Syariah (P)", "2", "Setara; bobot naik dari 1 menjadi 2 sks"],
  ["HN218012046", "Tesis", "4", "HN268012001", "Tesis", "4", "Setara penuh"],
  ["—", "Tidak ada padanan pada Kurikulum 2021", "—", "HN268008015", "Pembuatan Kontrak Internasional", "2", "Mata kuliah baru; wajib ditempuh mahasiswa yang beralih ke Kurikulum OBE 2026"],
];

export const ekuivalensiCatatan = [
  "Pengakuan ekuivalensi ditetapkan dengan Surat Keputusan Ketua Program Studi atas usul Tim Kurikulum.",
  "Nilai mata kuliah yang dinyatakan setara diakui apa adanya dan tidak dihitung ulang.",
  "Mahasiswa yang beralih ke Kurikulum OBE 2026 wajib memenuhi beban studi 41 sks; kekurangan beban dipenuhi melalui mata kuliah yang belum berpadanan, terutama Pembuatan Kontrak Internasional serta pemecahan mata kuliah Hukum Agraria, kePPATan dan Teknik Pembuatan Akta PPAT.",
  "Mahasiswa yang tinggal menempuh Tesis pada saat pemberlakuan kurikulum baru tetap menyelesaikan studi dengan Kurikulum 2021.",
];
