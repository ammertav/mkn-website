// ─── Kurikulum ───────────────────────────────────────────────────
export const semesters = [
  {
    id: 1, title: "Semester 1",
    courses: [
      { code: "MKN101", name: "Filsafat & Teori Hukum Lanjutan", sks: 3 },
      { code: "MKN102", name: "Hukum Perjanjian & Kontrak Bisnis", sks: 3 },
      { code: "MKN103", name: "Hukum Agraria & Pendaftaran Hak Atas Tanah", sks: 3 },
      { code: "MKN104", name: "Hukum Jaminan & Lembaga Pembiayaan", sks: 3 },
      { code: "MKN105", name: "Metodologi Penelitian Hukum Kenotariatan", sks: 2 },
    ],
  },
  {
    id: 2, title: "Semester 2",
    courses: [
      { code: "MKN201", name: "Pembuatan Akta Otentik I (Akta Badan Usaha)", sks: 3 },
      { code: "MKN202", name: "Hukum Perusahaan & Merger/Akuisisi", sks: 3 },
      { code: "MKN203", name: "Hukum Waris (Islam, Adat & Barat)", sks: 3 },
      { code: "MKN204", name: "Etika Profesi & Tanggung Jawab Notaris", sks: 2 },
      { code: "MKN205", name: "Hukum Pajak Kenotariatan & BPHTB", sks: 2 },
    ],
  },
  {
    id: 3, title: "Semester 3",
    courses: [
      { code: "MKN301", name: "Pembuatan Akta Otentik II (Akta PPAT & Agraria)", sks: 3 },
      { code: "MKN302", name: "Hukum Kepailitan & Penundaan Kewajiban Pembayaran Utang", sks: 3 },
      { code: "MKN303", name: "Hukum Pasar Modal & Transaksi Elektronik", sks: 3 },
      { code: "MKN304", name: "Seminar Proposal Tesis", sks: 2 },
    ],
  },
  {
    id: 4, title: "Semester 4",
    courses: [
      { code: "MKN401", name: "Praktik Kemahiran Kenotariatan & Magang", sks: 4 },
      { code: "MKN402", name: "Tesis & Publikasi Jurnal Ilmiah", sks: 6 },
    ],
  },
];

// ─── Profil Lulusan ───────────────────────────────────────────────
export const graduateProfiles = [
  {
    title: "Notaris & Pejabat Pembuat Akta Tanah (PPAT)",
    desc: "Pejabat umum yang berwenang membuat akta otentik mengenai semua perbuatan, perjanjian, dan ketetapan yang diharuskan oleh peraturan perundang-undangan serta akta peralihan hak atas tanah dengan integritas dan etika tinggi.",
    skills: ["Legal Drafting Akta", "Penyuluhan Hukum", "Pendaftaran Hak Atas Tanah"],
  },
  {
    title: "Konsultan Hukum Korporasi (Corporate Legal Counsel)",
    desc: "Tenaga ahli hukum profesional yang memberikan konsultasi dan analisis hukum dalam aksi korporasi, merger, akuisisi, restrukturisasi perusahaan, dan kepatuhan regulasi bisnis.",
    skills: ["Due Diligence", "Perancangan Kontrak Bisnis", "Corporate Compliance"],
  },
  {
    title: "Praktisi Hukum Lembaga Keuangan & Perbankan Syariah",
    desc: "Spesialis hukum di industri perbankan dan lembaga keuangan syariah/konvensional dalam menangani perjanjian pembiayaan, pengikatan jaminan, dan mitigasi risiko hukum.",
    skills: ["Hukum Perbankan Syariah", "Pengikatan Hak Tanggungan & Fidusia"],
  },
  {
    title: "Akademisi & Peneliti Hukum",
    desc: "Pendidik dan peneliti yang mengembangkan keilmuan hukum kenotariatan dan keperdataan melalui publikasi ilmiah nasional maupun internasional bereputasi.",
    skills: ["Metodologi Penelitian", "Publikasi Ilmiah", "Pengembangan Teori Hukum"],
  },
];

// ─── ILOs ─────────────────────────────────────────────────────────
export const ilos = [
  { code: "ILO 1", category: "Sikap & Nilai Keislaman", desc: "Menjunjung tinggi nilai moral, etika profesi kenotariatan, integritas, dan nilai-nilai keislaman dalam menjalankan jabatan dan pengabdian kepada masyarakat." },
  { code: "ILO 2", category: "Penguasaan Pengetahuan", desc: "Menguasai teori hukum lanjutan, hukum keperdataan, hukum bisnis, hukum agraria, dan hukum Islam secara komprehensif dan mendalam." },
  { code: "ILO 3", category: "Keterampilan Khusus (Legal Drafting)", desc: "Mampu menyusun, menganalisis, dan memvalidasi berbagai bentuk akta otentik serta dokumen hukum dengan ketelitian dan kepastian hukum yang kuat." },
  { code: "ILO 4", category: "Penyelesaian Masalah & Penalaran Hukum", desc: "Mampu memecahkan problematika hukum kenotariatan yang kompleks melalui pendekatan interdisipliner atau multidisipliner secara solutif." },
  { code: "ILO 5", category: "Riset & Pengembangan Keilmuan", desc: "Mampu menghasilkan karya penelitian hukum yang inovatif, teruji, dan dipublikasikan pada jurnal ilmiah terakreditasi." },
];

// ─── Panduan Akademik ─────────────────────────────────────────────
export const academicGuidelines = [
  { title: "Buku Pedoman Akademik Program MKn 2024/2025", desc: "Panduan lengkap mengenai kurikulum, sistem kredit semester (SKS), evaluasi belajar, dan tata tertib akademik.", size: "PDF (2.4 MB)" },
  { title: "Panduan Penulisan & Prosedur Ujian Tesis", desc: "Format baku penulisan usulan penelitian (proposal), bimbingan, ujian komprehensif, dan sidang tesis.", size: "PDF (1.8 MB)" },
  { title: "Pedoman Magang Laboratorium Kenotariatan & Kantor Notaris/PPAT", desc: "Tata cara dan lembar kerja pelaksanaan magang praktik kemahiran kenotariatan.", size: "PDF (1.2 MB)" },
  { title: "Standar Operasional Prosedur (SOP) Yudisium & Wisuda", desc: "Syarat administratif, bebas pustaka, dan publikasi ilmiah untuk kelulusan program magister.", size: "PDF (950 KB)" },
];

// ─── Kalender Akademik ────────────────────────────────────────────
export const academicCalendar = [
  {
    period: "Semester Gasal 2024/2025",
    events: [
      { date: "1 - 15 Agustus 2024",  name: "Registrasi Ulang & Pembayaran Biaya Pendidikan" },
      { date: "16 - 25 Agustus 2024", name: "Pengisian Kartu Rencana Studi (KRS) Online" },
      { date: "02 September 2024",    name: "Awal Perkuliahan Semester Gasal" },
      { date: "21 - 31 Oktober 2024", name: "Ujian Tengah Semester (UTS) Gasal" },
      { date: "02 - 14 Januari 2025", name: "Ujian Akhir Semester (UAS) Gasal" },
      { date: "20 Januari 2025",      name: "Batas Akhir Input Nilai & Yudisium Periode I" },
    ],
  },
  {
    period: "Semester Genap 2024/2025",
    events: [
      { date: "01 - 14 Februari 2025", name: "Her-Registrasi & Pengisian KRS Genap" },
      { date: "17 Februari 2025",      name: "Awal Perkuliahan Semester Genap" },
      { date: "14 - 25 April 2025",    name: "Ujian Tengah Semester (UTS) Genap" },
      { date: "16 - 28 Juni 2025",     name: "Ujian Akhir Semester (UAS) Genap" },
      { date: "Juli 2025",             name: "Sidang Tesis & Wisuda Magister Periode II" },
    ],
  },
];
