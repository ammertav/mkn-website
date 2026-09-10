// ─── Data Persyaratan Penerimaan Mahasiswa Baru ─────────────────────
export const admissionRequirements = [
  {
    id: 1,
    title: {
      id: "Latar Belakang Akademik",
      en: "Academic Background",
    },
    points: [
      {
        id: "Lulusan Program Sarjana Ilmu Hukum (S.H.) dari Perguruan Tinggi Negeri atau Swasta yang terakreditasi oleh BAN-PT / LAM-PTKes.",
        en: "Graduates of Bachelor of Laws (LL.B. / S.H.) program from state or private universities accredited by BAN-PT / LAM-PTKes.",
      },
      {
        id: "Memiliki Indeks Prestasi Kumulatif (IPK) minimal 2.75 (skala 4.00) untuk lulusan PTN/PTS terakreditasi A/Unggul, atau 3.00 untuk akreditasi B/Baik Sekali.",
        en: "Minimum Cumulative Grade Point Average (GPA) of 2.75 (4.00 scale) for graduates from 'A/Unggul' accredited universities, or 3.00 for 'B/Baik Sekali' accredited institutions.",
      },
      {
        id: "Memiliki integritas moral, etika, dan dedikasi tinggi terhadap pengembangan ilmu hukum dan etika jabatan notaris.",
        en: "Possess moral integrity, ethics, and high dedication to the advancement of legal studies and the notary code of conduct.",
      },
    ],
  },
  {
    id: 2,
    title: {
      id: "Dokumen Persyaratan Inti",
      en: "Required Core Documents",
    },
    points: [
      {
        id: "Salinan Ijazah dan Transkrip Nilai Sarjana Hukum (S1) yang telah dilegalisasi oleh pimpinan fakultas/universitas asal.",
        en: "Certified copy of Bachelor of Laws diploma and academic transcript legalized by the faculty/university leadership.",
      },
      {
        id: "Salinan Kartu Tanda Penduduk (KTP), Kartu Keluarga (KK), dan Akta Kelahiran.",
        en: "Copy of National Identity Card (KTP), Family Card (KK), and Birth Certificate.",
      },
      {
        id: "Pas foto formal berwarna terbaru ukuran 3x4 dan 4x6 (latar belakang merah).",
        en: "Recent formal color photographs of sizes 3x4 and 4x6 cm (red background).",
      },
      {
        id: "Surat Rekomendasi Akademik dari 2 (dua) orang dosen bergelar Doktor / Guru Besar atau atasan instansi kerja.",
        en: "Academic letters of recommendation from 2 (two) lecturers with Doctorate / Professor degrees or current workplace supervisor.",
      },
      {
        id: "Surat Keterangan Bebas Narkoba dari instansi kesehatan resmi dan Surat Keterangan Catatan Kepolisian (SKCK).",
        en: "Drug-free medical certificate from an official healthcare provider and Police Record Certificate (SKCK).",
      },
      {
        id: "Surat Pernyataan Kesanggupan Membayar Biaya Pendidikan bermaterai Rp10.000.",
        en: "Signed statement of willingness to pay tuition fees affixed with Rp10,000 duty stamp.",
      },
    ],
  },
  {
    id: 3,
    title: {
      id: "Prosedur dan Alur Seleksi",
      en: "Selection Procedure & Workflow",
    },
    description: {
      id: "Pendaftaran mahasiswa baru Program Magister Kenotariatan UNISSULA dilaksanakan secara online melalui portal resmi PMB UNISSULA dengan tahapan sebagai berikut:",
      en: "New student admission for the UNISSULA Master of Notarial Law Program is conducted online via the official UNISSULA PMB portal with the following stages:",
    },
    steps: [
      {
        id: "Membuat akun pendaftaran dan mengisi formulir online di portal PMB UNISSULA.",
        en: "Create an admission account and complete the online application form at the UNISSULA PMB portal.",
      },
      {
        id: "Melakukan pembayaran biaya seleksi pendaftaran melalui Virtual Account Bank mitra.",
        en: "Pay the registration and admission test fee via designated partner bank Virtual Account.",
      },
      {
        id: "Mengunggah berkas dokumen persyaratan administrasi dalam format PDF/JPG.",
        en: "Upload administrative required documents in PDF/JPG format.",
      },
      {
        id: "Mengikuti Ujian Seleksi Masuk (Tes Potensi Akademik, Bahasa Inggris, dan Wawancara Keilmuan Hukum).",
        en: "Take the Entrance Examination (Academic Potential Test, English Proficiency, and Legal Science Interview).",
      },
      {
        id: "Pengumuman kelulusan dan proses her-registrasi (daftar ulang) calon mahasiswa baru.",
        en: "Announcement of selection results and re-registration (enrollment) process for accepted candidates.",
      },
    ],
  },
];

// ─── Data Statistik Tingkat Kelulusan ──────────────────────────────
export const graduationStats = [
  {
    value: "96.4%",
    label: {
      id: "Tingkat Kelulusan Tepat Waktu",
      en: "On-Time Graduation Rate",
    },
    desc: {
      id: "Mahasiswa menyelesaikan studi dalam rentang 4 semester.",
      en: "Students completing study within the designated 4-semester duration.",
    },
  },
  {
    value: "3.82",
    label: {
      id: "Rata-rata IPK Lulusan",
      en: "Average Graduate GPA",
    },
    desc: {
      id: "Standar capaian akademik lulusan program magister kenotariatan.",
      en: "Academic benchmark for master of notarial law graduates.",
    },
  },
  {
    value: "100%",
    label: {
      id: "Tingkat Penyelesaian Tesis",
      en: "Thesis Completion Rate",
    },
    desc: {
      id: "Seluruh lulusan berhasil mempublikasikan karya ilmiah bereputasi.",
      en: "All graduates successfully publish reputable scientific papers.",
    },
  },
  {
    value: "88.6%",
    label: {
      id: "Lulus Ujian Pengangkatan Notaris (UPN)",
      en: "Passed National Notary Exam (UPN)",
    },
    desc: {
      id: "Persentase kelulusan ujian profesi kenotariatan nasional.",
      en: "National pass percentage for the professional notary appointment exam.",
    },
  },
];

export const graduationHistory = [
  {
    period: {
      id: "Tahun Akademik 2023/2024",
      en: "Academic Year 2023/2024",
    },
    totalGraduates: 142,
    cumlaudeCount: 68,
    avgStudyTime: {
      id: "1.8 Tahun",
      en: "1.8 Years",
    },
  },
  {
    period: {
      id: "Tahun Akademik 2022/2023",
      en: "Academic Year 2022/2023",
    },
    totalGraduates: 135,
    cumlaudeCount: 62,
    avgStudyTime: {
      id: "1.9 Tahun",
      en: "1.9 Years",
    },
  },
  {
    period: {
      id: "Tahun Akademik 2021/2022",
      en: "Academic Year 2021/2022",
    },
    totalGraduates: 128,
    cumlaudeCount: 54,
    avgStudyTime: {
      id: "2.0 Tahun",
      en: "2.0 Years",
    },
  },
];

// ─── Data Penelitian Dosen ─────────────────────────────────────────
export const lecturerResearches = [
  {
    id: 1,
    title: {
      id: "Rekonstruksi Pertanggungjawaban Perdata Notaris Terhadap Kebenaran Formil dan Materil Akta Partij",
      en: "Reconstruction of Civil Liability of Notaries Regarding Formal and Material Truth in Party Deeds",
    },
    author: "Prof. Dr. H. Gunarto, S.H., M.Hum.",
    year: "2024",
    category: {
      id: "Hukum Kenotariatan & Kode Etik",
      en: "Notarial Law & Code of Ethics",
    },
    journal: "Jurnal Pembaharuan Hukum (SINTA 2)",
  },
  {
    id: 2,
    title: {
      id: "Pendaftaran Hak Tanggungan Elektronik (HT-el) Berbasis Kepastian Hukum dalam Transaksi Perbankan Syariah",
      en: "Electronic Mortgage Registration (HT-el) Based on Legal Certainty in Islamic Banking Transactions",
    },
    author: "Dr. Hj. Anis Mashdurohatun, S.H., M.Hum.",
    year: "2023",
    category: {
      id: "Hukum Agraria & Perbankan",
      en: "Agrarian Law & Banking",
    },
    journal: "International Journal of Law and Society (Scopus Q2)",
  },
  {
    id: 3,
    title: {
      id: "Perlindungan Hukum Bagi Para Pihak dalam Pembuatan Akta Perjanjian Pengikatan Jual Beli (PPJB) Berbasis Digital",
      en: "Legal Protection for Parties in Digital-Based Conditional Sale and Purchase Agreements (PPJB)",
    },
    author: "Dr. H. Bambang Tri Bawono, S.H., M.H.",
    year: "2023",
    category: {
      id: "Hukum Kontrak & Siber",
      en: "Contract & Cyber Law",
    },
    journal: "Jurnal Akta Kenotariatan (SINTA 2)",
  },
  {
    id: 4,
    title: {
      id: "Kedudukan Notaris Sebagai Kuasa Pembuat Akta Pendirian Perseroan Perorangan Pasca UU Cipta Kerja",
      en: "Position of Notaries as Authorized Drafters of Individual Company Incorporation Deeds Post Job Creation Law",
    },
    author: "Dr. Sri Endah Wahyuningsih, S.H., M.Hum.",
    year: "2024",
    category: {
      id: "Hukum Perusahaan",
      en: "Corporate Law",
    },
    journal: "Diponegoro Law Review (Scopus Q3)",
  },
];

// ─── Data Pengabdian Dosen ─────────────────────────────────────────
export const communityServices = [
  {
    id: 1,
    title: {
      id: "Klinik Konsultasi Hukum Pertanahan dan Waris Gratis Bagi Warga Kurang Mampu",
      en: "Free Land and Inheritance Legal Consultation Clinic for Underprivileged Citizens",
    },
    location: {
      id: "Kecamatan Genuk, Kota Semarang",
      en: "Genuk District, Semarang City",
    },
    year: "2024",
    lead: "Dr. Hj. Anis Mashdurohatun, S.H., M.Hum. & Tim Dosen MKn",
    desc: {
      id: "Memberikan pendampingan dan konsultasi hukum gratis terkait sengketa pembagian waris dan tata cara pengurusan sertipikat tanah.",
      en: "Providing free legal assistance and consultation regarding inheritance distribution disputes and land title certificate procedures.",
    },
  },
  {
    id: 2,
    title: {
      id: "Penyuluhan Hukum Pencegahan Sengketa Agraria dan Pendaftaran Tanah Sistematis Lengkap (PTSL)",
      en: "Legal Counseling on Agrarian Dispute Prevention and Complete Systematic Land Registration (PTSL)",
    },
    location: {
      id: "Kabupaten Demak, Jawa Tengah",
      en: "Demak Regency, Central Java",
    },
    year: "2023",
    lead: "Prof. Dr. H. Gunarto, S.H., M.Hum.",
    desc: {
      id: "Sosialisasi pentingnya legalitas kepemilikan hak atas tanah serta tata tertib pembuatan akta peralihan hak bagi aparatur desa.",
      en: "Dissemination on the importance of legal land ownership rights and orderly deed-making procedures for transfer of rights for village apparatus.",
    },
  },
  {
    id: 3,
    title: {
      id: "Edukasi Etika Bisnis dan Penyusunan Kontrak Kemitraan Bagi Pelaku UMKM",
      en: "Business Ethics Education and Partnership Contract Drafting for MSMEs",
    },
    location: {
      id: "Kawasan Industri Kreatif Semarang Barat",
      en: "West Semarang Creative Industry Area",
    },
    year: "2024",
    lead: "Dr. H. Bambang Tri Bawono, S.H., M.H.",
    desc: {
      id: "Pelatihan legal drafting kontrak sederhana bagi pelaku usaha mikro guna memitigasi risiko hukum perdata dalam transaksi usaha.",
      en: "Basic contract legal drafting training for micro-entrepreneurs to mitigate civil legal risks in business transactions.",
    },
  },
];
