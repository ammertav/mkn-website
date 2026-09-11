/**
 * Hasil Tracer Study Program Magister Kenotariatan UNISSULA, TA 2024/2025.
 *
 * SUMBER: "Laporan Tracer Study Magister (S2) Kenotariatan Tahun Akademik
 * 2024/2025", disusun Program Studi dan ditandatangani Ketua Program Studi.
 * Seluruh persentase disalin dari laporan tersebut. Angka yang merupakan hasil
 * hitung ulang ditandai di komentar masing-masing.
 *
 * Penayangan ini sekaligus menindaklanjuti rekomendasi Audit Mutu Internal
 * 2024 agar hasil tracer study disosialisasikan melalui laman program studi.
 *
 * Dua hal pada laporan sumber yang diselaraskan dengan grafiknya sendiri:
 *   - Status pekerjaan "Lainnya" tertulis "35 orang" di teks, tetapi Grafik 11
 *     menunjukkan 35%. Yang dipakai 35%, sejalan dengan kategori lain.
 *   - Masa tunggu "lebih dari 1 tahun" tertulis 3% di teks sehingga jumlahnya
 *     102%, sedangkan Grafik 15 menunjukkan 1%. Yang dipakai 1%.
 * Keduanya perlu dikonfirmasi ke Gugus Penjaminan Mutu.
 */

export const sumberTracer = {
  judul: {
    id: "Laporan Tracer Study Magister (S2) Kenotariatan Tahun Akademik 2024/2025",
    en: "Tracer Study Report, Master of Notarial Law, Academic Year 2024/2025",
  },
  penyusun: {
    id: "Program Magister Kenotariatan, Fakultas Hukum UNISSULA",
    en: "Master of Notarial Law Programme, Faculty of Law, UNISSULA",
  },
};

/** Angka utama. Nilai berdesimal ditulis per bahasa karena pemisahnya berbeda. */
export const ringkasanTracer = [
  {
    nilai: { id: "183", en: "183" },
    label: { id: "Alumni responden", en: "Alumni respondents" },
    keterangan: {
      id: "dari 313 lulusan TA 2023/2024",
      en: "of 313 graduates of AY 2023/2024",
    },
  },
  {
    // Hasil hitung ulang: 183 ÷ 313. Laporan sumber tidak mencantumkannya.
    nilai: { id: "58,47%", en: "58.47%" },
    label: { id: "Tingkat respons", en: "Response rate" },
    keterangan: { id: "183 responden ÷ 313 lulusan", en: "183 respondents ÷ 313 graduates" },
  },
  {
    // 78% sudah bekerja sejak lulus + 18% kurang dari 3 bulan.
    nilai: { id: "96%", en: "96%" },
    label: {
      id: "Bekerja kurang dari tiga bulan",
      en: "Employed within three months",
    },
    keterangan: {
      id: "termasuk 78% yang sudah bekerja sejak lulus",
      en: "including 78% already employed at graduation",
    },
  },
  {
    // 45% sangat relevan + 34% relevan.
    nilai: { id: "79%", en: "79%" },
    label: {
      id: "Menilai kurikulum relevan",
      en: "Rate the curriculum relevant",
    },
    keterangan: {
      id: "45% sangat relevan, 34% relevan",
      en: "45% highly relevant, 34% relevant",
    },
  },
];

export const metodeTracer = [
  {
    label: { id: "Sasaran alumni", en: "Alumni surveyed" },
    nilai: {
      id: "Lulusan Tahun Akademik 2023/2024 (313 orang)",
      en: "Graduates of Academic Year 2023/2024 (313 people)",
    },
  },
  {
    label: { id: "Pengguna lulusan", en: "Graduate users" },
    nilai: {
      id: "Notaris tempat alumni magang dan klien alumni yang telah membuka kantor",
      en: "Notaries hosting alumni internships and clients of alumni who run their own offices",
    },
  },
  {
    label: { id: "Pengumpulan data", en: "Data collection" },
    nilai: {
      id: "Kuesioner daring melalui WhatsApp dan laman Program Studi, dengan bantuan IKANOTSULA",
      en: "Online questionnaire via WhatsApp and the programme website, assisted by IKANOTSULA",
    },
  },
  {
    label: { id: "Verifikasi", en: "Verification" },
    nilai: {
      id: "Konfirmasi telepon secara acak kepada dua sampai tiga responden",
      en: "Random telephone confirmation with two to three respondents",
    },
  },
];

/**
 * Status pekerjaan alumni (Grafik 11), diurutkan dari yang terbesar.
 * `bidang: "notariat"` menandai pekerjaan di bidang kenotariatan dan
 * pertanahan; jumlahnya 36% (22 + 10 + 4 + 0 + 0), hasil hitung ulang.
 */
export const statusPekerjaan = {
  butir: [
    { label: { id: "Lainnya", en: "Other" }, nilai: 35, bidang: "lain" },
    {
      label: { id: "Staf kantor Notaris/PPAT", en: "Notary/PPAT office staff" },
      nilai: 22,
      bidang: "notariat",
    },
    { label: { id: "PPAT", en: "Land deed official (PPAT)" }, nilai: 10, bidang: "notariat" },
    { label: { id: "Pegawai perbankan", en: "Banking employee" }, nilai: 9, bidang: "lain" },
    { label: { id: "Pengusaha", en: "Entrepreneur" }, nilai: 9, bidang: "lain" },
    { label: { id: "Advokat", en: "Advocate" }, nilai: 8, bidang: "lain" },
    {
      label: { id: "PNS (Kementerian ATR/BPN)", en: "Civil servant (Ministry of ATR/BPN)" },
      nilai: 4,
      bidang: "notariat",
    },
    { label: { id: "POLRI/TNI", en: "Police/Armed forces" }, nilai: 3, bidang: "lain" },
    { label: { id: "Notaris", en: "Notary" }, nilai: 0, bidang: "notariat" },
    { label: { id: "Notaris dan PPAT", en: "Notary and PPAT" }, nilai: 0, bidang: "notariat" },
  ],
  jumlahBidangNotariat: 36,
  catatan: {
    id:
      "Belum ada alumni angkatan ini yang berstatus Notaris. Menurut laporan, pengangkatan " +
      "Notaris memerlukan waktu paling cepat dua tahun sejak gelar Magister Kenotariatan " +
      "diperoleh, dan sebagian lulusan yang telah lulus ujian masih menunggu surat keputusan " +
      "penempatan.",
    en:
      "No graduate of this cohort holds notary status yet. According to the report, " +
      "appointment as a notary takes at least two years after the Master of Notarial Law is " +
      "awarded, and some graduates who have passed the examination are still awaiting their " +
      "placement decree.",
  },
};

/** Relevansi pendidikan terhadap pekerjaan (Grafik 12), urutan skala dipertahankan. */
export const relevansiKurikulum = [
  { label: { id: "Sangat relevan", en: "Highly relevant" }, nilai: 45 },
  { label: { id: "Relevan", en: "Relevant" }, nilai: 34 },
  { label: { id: "Cukup relevan", en: "Fairly relevant" }, nilai: 8 },
  { label: { id: "Tidak relevan", en: "Not relevant" }, nilai: 13 },
  { label: { id: "Sangat tidak relevan", en: "Not relevant at all" }, nilai: 0 },
];

/**
 * Kepuasan alumni terhadap layanan (Grafik 13–14). Tidak ada responden yang
 * menjawab tidak puas maupun sangat tidak puas, jadi skala hanya memuat tiga
 * jenjang teratas. Urutan skala dari yang paling rendah ke paling tinggi.
 */
export const kepuasanLayanan = {
  skala: [
    { kunci: "cukupPuas", label: { id: "Cukup puas", en: "Fairly satisfied" } },
    { kunci: "puas", label: { id: "Puas", en: "Satisfied" } },
    { kunci: "sangatPuas", label: { id: "Sangat puas", en: "Very satisfied" } },
  ],
  butir: [
    {
      label: { id: "Pengajaran dosen", en: "Teaching by lecturers" },
      nilai: { sangatPuas: 66, puas: 24, cukupPuas: 10 },
    },
    {
      label: { id: "Fasilitas yang tersedia", en: "Available facilities" },
      nilai: { sangatPuas: 73, puas: 22, cukupPuas: 5 },
    },
    {
      label: { id: "Pelayanan staf Tata Usaha", en: "Administrative staff service" },
      nilai: { sangatPuas: 71, puas: 26, cukupPuas: 3 },
    },
  ],
  catatan: {
    id: "Tidak ada responden yang menjawab tidak puas maupun sangat tidak puas.",
    en: "No respondent answered dissatisfied or very dissatisfied.",
  },
};

/** Waktu memperoleh pekerjaan (Grafik 15). Lihat catatan kepala berkas soal 1%. */
export const masaTunggu = [
  { label: { id: "Sudah bekerja sejak lulus", en: "Employed at graduation" }, nilai: 78 },
  { label: { id: "Kurang dari 3 bulan", en: "Within 3 months" }, nilai: 18 },
  { label: { id: "Kurang dari 1 tahun", en: "Within 1 year" }, nilai: 3 },
  { label: { id: "Lebih dari 1 tahun", en: "More than 1 year" }, nilai: 1 },
];

/**
 * Penilaian pengguna lulusan atas kinerja alumni (Grafik 1–10), skala 1–4.
 * Seluruh jawaban jatuh pada "Sangat baik" atau "Baik"; tidak ada nilai
 * "Cukup" maupun "Kurang". Jumlah responden pengguna tidak disebut laporan.
 */
export const penilaianPengguna = {
  skala: [
    { kunci: "baik", label: { id: "Baik", en: "Good" } },
    { kunci: "sangatBaik", label: { id: "Sangat baik", en: "Very good" } },
  ],
  butir: [
    {
      label: { id: "Integritas (etika dan moral)", en: "Integrity (ethics and morals)" },
      nilai: { sangatBaik: 93, baik: 7 },
    },
    {
      label: { id: "Keahlian bidang ilmu", en: "Expertise in the field" },
      nilai: { sangatBaik: 98, baik: 2 },
    },
    {
      label: { id: "Keluasan wawasan antardisiplin", en: "Interdisciplinary breadth" },
      nilai: { sangatBaik: 98, baik: 2 },
    },
    { label: { id: "Kepemimpinan", en: "Leadership" }, nilai: { sangatBaik: 92, baik: 8 } },
    { label: { id: "Kerja sama dalam tim", en: "Teamwork" }, nilai: { sangatBaik: 85, baik: 15 } },
    {
      label: { id: "Kemampuan bahasa asing", en: "Foreign language skills" },
      nilai: { sangatBaik: 69, baik: 31 },
    },
    { label: { id: "Komunikasi", en: "Communication" }, nilai: { sangatBaik: 84, baik: 16 } },
    {
      label: { id: "Penggunaan teknologi informasi", en: "Use of information technology" },
      nilai: { sangatBaik: 95, baik: 5 },
    },
    { label: { id: "Pengembangan diri", en: "Self-development" }, nilai: { sangatBaik: 94, baik: 6 } },
  ],
  keseluruhan: { sangatBaik: 92, baik: 8 },
  catatan: {
    id:
      "Kemampuan bahasa asing menjadi satu-satunya aspek yang oleh laporan dinyatakan perlu " +
      "diberi bekal tambahan, karena sebagian pengguna lulusan memberi nilai Baik.",
    en:
      "Foreign language skills are the only aspect the report flags for additional " +
      "preparation, as some graduate users rated it Good.",
  },
};

/** Saran pengguna lulusan, dirapikan ejaannya dari daftar pada laporan sumber. */
export const saranPengguna = [
  {
    id: "Materi tentang advokat, terutama yang berkaitan dengan perlindungan hukum bagi Notaris dan PPAT.",
    en: "Material on advocacy, particularly legal protection for notaries and PPATs.",
  },
  {
    id: "Penekanan lebih pada hukum tanah nasional, khususnya konversi hak dari hukum adat.",
    en: "Greater emphasis on national land law, especially the conversion of customary land rights.",
  },
  {
    id: "Materi tentang tata cara pendaftaran tanah.",
    en: "Material on land registration procedures.",
  },
  {
    id: "PPAT baru masih mengandalkan contoh akta dari rekan dan menyusun akta dengan cara menyalin.",
    en: "New PPATs still rely on colleagues' sample deeds and draft deeds by copying.",
  },
  {
    id: "Lulusan harus memegang teguh kode etik jabatan.",
    en: "Graduates must uphold the professional code of ethics.",
  },
  {
    id: "Sebagai mitra BPN, PPAT perlu mengenal struktur organisasi dan nomenklatur Kantor Pertanahan.",
    en: "As partners of the land agency, PPATs should know the organisation and nomenclature of land offices.",
  },
  {
    id: "Masih banyak berkas yang masuk ke BPN tidak tepat, misalnya akta kuasa kepada diri sendiri.",
    en: "Many files submitted to the land agency are still flawed, such as a power of attorney granted to oneself.",
  },
  {
    id: "Hukum pertanahan perlu ditambah materi konversi tanah dan pendaftaran tanah.",
    en: "Land law should add material on land conversion and land registration.",
  },
  {
    id: "Banyak lulusan belum menguasai bahan ujian Anggota Luar Biasa INI, AD/ART organisasi, dan kewajiban magang di BPN.",
    en: "Many graduates have not mastered the INI extraordinary membership exam, the association's statutes, and the land agency internship requirement.",
  },
  {
    id: "Pembekalan bagi mahasiswa sebelum lulus.",
    en: "Pre-graduation preparation for students.",
  },
];
