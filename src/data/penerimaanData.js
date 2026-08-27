// ─── Data Persyaratan Penerimaan Mahasiswa Baru ─────────────────────
export const admissionRequirements = [
  {
    id: 1,
    title: "Latar Belakang Akademik",
    points: [
      "Lulusan Program Sarjana Ilmu Hukum (S.H.) dari Perguruan Tinggi Negeri atau Swasta yang terakreditasi oleh BAN-PT / LAM-PTKes.",
      "Memiliki Indeks Prestasi Kumulatif (IPK) minimal 2.75 (skala 4.00) untuk lulusan PTN/PTS terakreditasi A/Unggul, atau 3.00 untuk akreditasi B/Baik Sekali.",
      "Memiliki integritas moral, etika, dan dedikasi tinggi terhadap pengembangan ilmu hukum dan etika jabatan notaris.",
    ],
  },
  {
    id: 2,
    title: "Dokumen Persyaratan Inti",
    points: [
      "Salinan Ijazah dan Transkrip Nilai Sarjana Hukum (S1) yang telah dilegalisasi oleh pimpinan fakultas/universitas asal.",
      "Salinan Kartu Tanda Penduduk (KTP), Kartu Keluarga (KK), dan Akta Kelahiran.",
      "Pas foto formal berwarna terbaru ukuran 3x4 dan 4x6 (latar belakang merah).",
      "Surat Rekomendasi Akademik dari 2 (dua) orang dosen bergelar Doktor / Guru Besar atau atasan instansi kerja.",
      "Surat Keterangan Bebas Narkoba dari instansi kesehatan resmi dan Surat Keterangan Catatan Kepolisian (SKCK).",
      "Surat Pernyataan Kesanggupan Membayar Biaya Pendidikan bermaterai Rp10.000.",
    ],
  },
  {
    id: 3,
    title: "Prosedur dan Alur Seleksi",
    description:
      "Pendaftaran mahasiswa baru Program Magister Kenotariatan UNISSULA dilaksanakan secara online melalui portal resmi PMB UNISSULA dengan tahapan sebagai berikut:",
    steps: [
      "Membuat akun pendaftaran dan mengisi formulir online di portal PMB UNISSULA.",
      "Melakukan pembayaran biaya seleksi pendaftaran melalui Virtual Account Bank mitra.",
      "Mengunggah berkas dokumen persyaratan administrasi dalam format PDF/JPG.",
      "Mengikuti Ujian Seleksi Masuk (Tes Potensi Akademik, Bahasa Inggris, dan Wawancara Keilmuan Hukum).",
      "Pengumuman kelulusan dan proses her-registrasi (daftar ulang) calon mahasiswa baru.",
    ],
  },
];

// ─── Data Statistik Tingkat Kelulusan ──────────────────────────────
export const graduationStats = [
  { value: "96.4%", label: "Tingkat Kelulusan Tepat Waktu", desc: "Mahasiswa menyelesaikan studi dalam rentang 4 semester." },
  { value: "3.82", label: "Rata-rata IPK Lulusan", desc: "Standar capaian akademik lulusan program magister kenotariatan." },
  { value: "100%", label: "Tingkat Penyelesaian Tesis", desc: "Seluruh lulusan berhasil mempublikasikan karya ilmiah bereputasi." },
  { value: "88.6%", label: "Lulus Ujian Pengangkatan Notaris (UPN)", desc: "Persentase kelulusan ujian profesi kenotariatan nasional." },
];

export const graduationHistory = [
  { period: "Tahun Akademik 2023/2024", totalGraduates: 142, cumlaudeCount: 68, avgStudyTime: "1.8 Tahun" },
  { period: "Tahun Akademik 2022/2023", totalGraduates: 135, cumlaudeCount: 62, avgStudyTime: "1.9 Tahun" },
  { period: "Tahun Akademik 2021/2022", totalGraduates: 128, cumlaudeCount: 54, avgStudyTime: "2.0 Tahun" },
];

// ─── Data Penelitian Dosen ─────────────────────────────────────────
export const lecturerResearches = [
  {
    id: 1,
    title: "Rekonstruksi Pertanggungjawaban Perdata Notaris Terhadap Kebenaran Formil dan Materil Akta Partij",
    author: "Prof. Dr. H. Gunarto, S.H., M.Hum.",
    year: "2024",
    category: "Hukum Kenotariatan & Kode Etik",
    journal: "Jurnal Pembaharuan Hukum (SINTA 2)",
  },
  {
    id: 2,
    title: "Pendaftaran Hak Tanggungan Elektronik (HT-el) Berbasis Kepastian Hukum dalam Transaksi Perbankan Syariah",
    author: "Dr. Hj. Anis Mashdurohatun, S.H., M.Hum.",
    year: "2023",
    category: "Hukum Agraria & Perbankan",
    journal: "International Journal of Law and Society (Scopus Q2)",
  },
  {
    id: 3,
    title: "Perlindungan Hukum Bagi Para Pihak dalam Pembuatan Akta Perjanjian Pengikatan Jual Beli (PPJB) Berbasis Digital",
    author: "Dr. H. Bambang Tri Bawono, S.H., M.H.",
    year: "2023",
    category: "Hukum Kontrak & Siber",
    journal: "Jurnal Akta Kenotariatan (SINTA 2)",
  },
  {
    id: 4,
    title: "Kedudukan Notaris Sebagai Kuasa Pembuat Akta Pendirian Perseroan Perorangan Pasca UU Cipta Kerja",
    author: "Dr. Sri Endah Wahyuningsih, S.H., M.Hum.",
    year: "2024",
    category: "Hukum Perusahaan",
    journal: "Diponegoro Law Review (Scopus Q3)",
  },
];

// ─── Data Pengabdian Dosen ─────────────────────────────────────────
export const communityServices = [
  {
    id: 1,
    title: "Klinik Konsultasi Hukum Pertanahan dan Waris Gratis Bagi Warga Kurang Mampu",
    location: "Kecamatan Genuk, Kota Semarang",
    year: "2024",
    lead: "Dr. Hj. Anis Mashdurohatun, S.H., M.Hum. & Tim Dosen MKn",
    desc: "Memberikan pendampingan dan konsultasi hukum gratis terkait sengketa pembagian waris dan tata cara pengurusan sertipikat tanah.",
  },
  {
    id: 2,
    title: "Penyuluhan Hukum Pencegahan Sengketa Agraria dan Pendaftaran Tanah Sistematis Lengkap (PTSL)",
    location: "Kabupaten Demak, Jawa Tengah",
    year: "2023",
    lead: "Prof. Dr. H. Gunarto, S.H., M.Hum.",
    desc: "Sosialisasi pentingnya legalitas kepemilikan hak atas tanah serta tata tertib pembuatan akta peralihan hak bagi aparatur desa.",
  },
  {
    id: 3,
    title: "Edukasi Etika Bisnis dan Penyusunan Kontrak Kemitraan Bagi Pelaku UMKM",
    location: "Kawasan Industri Kreatif Semarang Barat",
    year: "2024",
    lead: "Dr. H. Bambang Tri Bawono, S.H., M.H.",
    desc: "Pelatihan legal drafting kontrak sederhana bagi pelaku usaha mikro guna memitigasi risiko hukum perdata dalam transaksi usaha.",
  },
];
