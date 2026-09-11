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
  {
    angka: { id: "41 sks", en: "41 credits" },
    label: { id: "Beban studi Kurikulum OBE 2026", en: "OBE 2026 Curriculum study load" },
  },
  {
    angka: "4",
    label: { id: "Rumusan CPL", en: "Programme Learning Outcomes" },
  },
  {
    angka: "80%",
    label: { id: "Ambang ketercapaian CPL", en: "PLO achievement threshold" },
  },
  {
    angka: { id: "3,00", en: "3.00" },
    label: { id: "IPK minimum kelulusan", en: "Minimum graduation GPA" },
  },
];

/** Pasal 3 — prinsip penilaian. */
export const prinsipPenilaian = [
  {
    tanda: "1",
    judul: { id: "Profesional dan Islami", en: "Professional and Islamic" },
    keterangan: {
      id: "Penilaian tidak hanya pada aspek kognitif, tetapi juga pada integritas moral dan etika profesi yang dijiwai oleh strategi Budaya Akademik Islami (BudAI).",
      en: "Assessment encompasses not only cognitive aspects, but also moral integrity and professional ethics inspired by the Islamic Academic Culture (BudAI) strategy.",
    },
  },
  {
    tanda: "2",
    judul: { id: "Berorientasi pada Kemahiran Praktis", en: "Practical Proficiency Oriented" },
    keterangan: {
      id: "Mahasiswa dinilai dari kemampuannya memberikan solusi atas problem hukum di masyarakat, khususnya dalam bidang pertanahan dan kenotariatan.",
      en: "Students are assessed on their ability to solve real-world legal problems in society, particularly in land law and notarial practice.",
    },
  },
  {
    tanda: "3",
    judul: { id: "Integratif", en: "Integrative" },
    keterangan: {
      id: "Penilaian menggabungkan aspek akademik magister (Level 8 KKNI) dengan aspek keahlian profesi pejabat umum.",
      en: "Assessment integrates master's academic competencies (KKNI Level 8) with the professional expertise required of public certifying officers.",
    },
  },
  {
    tanda: "4",
    judul: { id: "Akuntabel dan Transparan", en: "Accountable and Transparent" },
    keterangan: {
      id: "Dilakukan melalui sistem penjaminan mutu yang terukur untuk menjamin lulusan memiliki reputasi di tingkat nasional maupun internasional.",
      en: "Conducted through a measurable quality assurance system to guarantee that graduates possess national and international repute.",
    },
  },
];

/** Tabel 1 — bobot komponen penilaian menurut jenis mata kuliah. */
export const bobotKolom = [
  { id: "Jenis Mata Kuliah", en: "Course Category" },
  { id: "Ujian (UTS+UAS)", en: "Examinations (Midterm+Final)" },
  { id: "Tugas / Portofolio", en: "Assignments / Portfolio" },
  { id: "Partisipasi", en: "Participation" },
  { id: "Unjuk Kerja", en: "Performance" },
  { id: "Produk / Proyek", en: "Product / Project" },
];

export const bobotBaris = [
  [
    { id: "MK teori 2 sks (kuliah, case method, seminar)", en: "2-credit Theory Course (lecture, case method, seminar)" },
    "40%", "30%", "20%", "10%", "—"
  ],
  [
    { id: "MK teori-praktik 2 sks (kuliah dan praktik terbimbing)", en: "2-credit Theory-Practice Course (lecture and guided practice)" },
    "40%", "25%", "15%", "20%", "—"
  ],
  [
    { id: "MK rumpun Teknik Pembuatan Akta 3 sks (TPA I, II, III)", en: "3-credit Deed Drafting Cluster Course (TPA I, II, III)" },
    "40%", "25%", "10%", "20%", "5%"
  ],
  [
    { id: "MK Laboratorium Akta 1 sks (praktik penuh)", en: "1-credit Deed Laboratory Course (full practice)" },
    "—", "30%", "10%", "40%", "20%"
  ],
  [
    { id: "MK Islam Disiplin Ilmu 3 sks", en: "3-credit Islamic Disciplinary Course" },
    "50%", "30%", "20%", "—", "—"
  ],
  [
    { id: "Tesis 4 sks", en: "4-credit Master's Thesis" },
    "—", "—", "—", "—", "100%"
  ],
];

export const bobotCatatan = [
  {
    id: "Jumlah seluruh komponen penilaian pada setiap mata kuliah adalah 100%.",
    en: "The total of all assessment components for each course equals 100%.",
  },
  {
    id: "Setiap butir penilaian wajib dipetakan kepada Sub-CPMK dan CPL yang diukurnya pada halaman asesmen Rencana Pembelajaran Semester.",
    en: "Each assessment item must be mapped to the measured Sub-CLO and PLO on the assessment section of the Semester Learning Plan (RPS).",
  },
  {
    id: "Perubahan bobot komponen hanya dapat dilakukan melalui revisi Rencana Pembelajaran Semester yang disetujui Koordinator Mata Kuliah dan Ketua Program Studi.",
    en: "Modifications to component weights may only be made through RPS revisions approved by the Course Coordinator and Head of Study Programme.",
  },
];

/** Tabel 2 — skala nilai hasil belajar. */
export const skalaKolom = [
  { id: "Rentang Nilai Angka", en: "Numerical Score Range" },
  { id: "Nilai Huruf", en: "Letter Grade" },
  { id: "Bobot", en: "Grade Point" },
  { id: "Predikat", en: "Predicate" },
];

export const skalaBaris = [
  ["80,00 – 100,00", "A", "4,00", { id: "Sangat Baik", en: "Excellent" }],
  ["75,00 – 79,99", "AB", "3,50", { id: "Lebih dari Baik", en: "Very Good" }],
  ["70,00 – 74,99", "B", "3,00", { id: "Baik", en: "Good" }],
  ["65,00 – 69,99", "BC", "2,50", { id: "Lebih dari Cukup", en: "Above Satisfactory" }],
  ["60,00 – 64,99", "C", "2,00", { id: "Cukup", en: "Satisfactory" }],
  ["55,00 – 59,99", "CD", "1,50", { id: "Kurang dari Cukup", en: "Marginal" }],
  ["50,00 – 54,99", "D", "1,00", { id: "Kurang", en: "Poor" }],
  ["45,00 – 49,99", "E", "0,50", { id: "Gagal", en: "Fail" }],
];

export const batasKelulusan = [
  {
    id: "Nilai lulus mata kuliah pada Program Magister Kenotariatan adalah sekurang-kurangnya B.",
    en: "The passing grade for courses in the Master of Notarial Law Programme is at least B.",
  },
  {
    id: "Khusus penilaian Usulan Proposal Tesis dan Ujian Tesis, mahasiswa dinyatakan lulus apabila memperoleh nilai sekurang-kurangnya B.",
    en: "Specifically for Thesis Proposal and Thesis Examination assessments, students must achieve a minimum grade of B to pass.",
  },
  {
    id: "Nilai ujian diumumkan secara terbuka melalui Sistem Informasi Akademik.",
    en: "Examination results are published openly through the Academic Information System.",
  },
];

/** Pasal 6 — perhitungan ketercapaian berjenjang. */
export const langkahKetercapaian = [
  {
    tahap: { id: "Nilai CPMK", en: "CLO Score" },
    uraian: {
      id: "Σ (nilai butir penilaian × bobot butir penilaian yang mengukur CPMK tersebut)",
      en: "Σ (assessment item score × weight of the item measuring that CLO)",
    },
  },
  {
    tahap: { id: "Ketercapaian CPMK", en: "CLO Achievement Rate" },
    uraian: {
      id: "(Nilai CPMK ÷ Nilai maksimum) × 100",
      en: "(CLO score ÷ Maximum score) × 100",
    },
  },
  {
    tahap: { id: "Ketercapaian CPL pada satu mata kuliah", en: "PLO Achievement in a Course" },
    uraian: {
      id: "Rata-rata ketercapaian seluruh CPMK yang menurunkan CPL tersebut",
      en: "Average achievement rate of all CLOs deriving that PLO",
    },
  },
  {
    tahap: { id: "Ketercapaian mata kuliah", en: "Course Achievement Rate" },
    uraian: {
      id: "Rata-rata ketercapaian seluruh CPL yang dibebankan pada mata kuliah",
      en: "Average achievement rate of all PLOs assigned to the course",
    },
  },
  {
    tahap: { id: "Ketercapaian CPL tingkat program studi", en: "Programme-Level PLO Achievement" },
    uraian: {
      id: "Rata-rata ketercapaian CPL pada seluruh mata kuliah pengukurnya",
      en: "Average PLO achievement rate across all measuring courses",
    },
  },
];

export const catatanKetercapaian = [
  {
    id: "Ambang ketercapaian ditetapkan sebesar 80,00%, digunakan secara identik pada Annex 17 Laporan Evaluasi Ketercapaian CPL dan pada Laporan Evaluasi Hasil Belajar Program Studi.",
    en: "The achievement threshold is set at 80.00%, applied identically in Annex 17 PLO Achievement Evaluation Report and in the Programme Learning Outcomes Evaluation Report.",
  },
  {
    id: "Jumlah mata kuliah pengukur setiap CPL mengikuti Tabel 10 Dokumen Kurikulum OBE 2026: CPL 1 sebanyak 21 mata kuliah, CPL 2 sebanyak 14, CPL 3 sebanyak 10, dan CPL 4 sebanyak 3, apabila 5 mata kuliah pilihan dihitung terpisah.",
    en: "The number of courses measuring each PLO follows Table 10 of the OBE 2026 Curriculum Document: PLO 1 has 21 courses, PLO 2 has 14, PLO 3 has 10, and PLO 4 has 3, counting the 5 elective courses separately.",
  },
];

/** Pasal 7 — kategori ketercapaian dan tindak lanjut. */
export const kategoriKolom = [
  { id: "Rentang Ketercapaian", en: "Achievement Range" },
  { id: "Kategori", en: "Category" },
  { id: "Status", en: "Status" },
  { id: "Tindak Lanjut", en: "Follow-Up Action" },
];

export const kategoriBaris = [
  [
    "≥ 90,00%",
    { id: "Sangat Baik", en: "Excellent" },
    { id: "Tercapai", en: "Achieved" },
    { id: "Dipertahankan dan dijadikan rujukan praktik baik", en: "Maintained and referenced as best practice" },
  ],
  [
    "80,00% – 89,99%",
    { id: "Baik", en: "Good" },
    { id: "Tercapai", en: "Achieved" },
    { id: "Ditingkatkan melalui penajaman instrumen penilaian", en: "Enhanced through refinement of assessment instruments" },
  ],
  [
    "70,00% – 79,99%",
    { id: "Cukup", en: "Sufficient" },
    { id: "Belum Tercapai", en: "Not Yet Achieved" },
    { id: "Perbaikan metode pembelajaran dan rubrik pada semester berikutnya", en: "Improvement of learning methods and rubrics in the subsequent semester" },
  ],
  [
    "< 70,00%",
    { id: "Kurang", en: "Insufficient" },
    { id: "Belum Tercapai", en: "Not Yet Achieved" },
    { id: "Peninjauan menyeluruh RPS, bahan kajian, dan bentuk penilaian", en: "Comprehensive review of RPS, study materials, and assessment forms" },
  ],
];

/** Pasal 8 — remidiasi dan perbaikan nilai. */
export const remidiasi = [
  {
    id: "Mahasiswa yang belum lulus suatu mata kuliah diberi kesempatan perbaikan (remidi) paling banyak 2 kali.",
    en: "Students who have not passed a course are given remedial examination opportunities up to 2 times.",
  },
  {
    id: "Mahasiswa yang telah lulus tetapi belum puas dengan nilainya dapat mengikuti remidi dengan persetujuan dan jadwal yang ditetapkan dosen penguji.",
    en: "Students who have passed but wish to improve their grades may take remedial exams with approval and scheduling by the examining lecturer.",
  },
  {
    id: "Apabila setelah dua kali remidi belum juga lulus, mahasiswa wajib menempuh kembali mata kuliah tersebut dengan mencatatkan diri pada bagian akademik.",
    en: "If a student has not passed after two remedial attempts, they must re-enroll in the course through academic registration.",
  },
  {
    id: "Biaya ujian perbaikan ditetapkan per mata uji dan dibayarkan setiap kali mengikuti ujian perbaikan.",
    en: "Remedial examination fees are determined per course and payable each time a student undertakes a remedial exam.",
  },
  {
    id: "Nilai hasil remidi yang digunakan adalah nilai tertinggi di antara nilai asli dan nilai remidi.",
    en: "The recorded course grade will be the highest score between the original grade and the remedial grade.",
  },
];

/** Pasal 9 — syarat kelulusan program studi. */
export const syaratKelulusan = [
  { id: "Lulus seluruh mata kuliah yang dipersyaratkan", en: "Passed all required curriculum courses" },
  { id: "Lulus Ujian Tesis", en: "Passed the Master's Thesis Examination" },
  { id: "Mengumpulkan 41 sks dengan IPK sekurang-kurangnya 3,00 dan tidak terdapat nilai C", en: "Accumulated 41 credits with a minimum GPA of 3.00 and no grade of C" },
  { id: "Menyerahkan salinan Sertifikat Magang", en: "Submitted a verified copy of the Internship Certificate" },
  { id: "Menyerahkan salinan Sertifikat TOEFL LIKE dengan nilai sekurang-kurangnya 525", en: "Submitted a TOEFL-LIKE Certificate with a minimum score of 525" },
  { id: "Menyerahkan salinan publikasi karya ilmiah pada jurnal cetak maupun daring", en: "Submitted proof of scientific publication in a printed or online journal" },
  { id: "Menyelesaikan seluruh kewajiban administrasi dan keuangan", en: "Fulfilled all administrative and financial obligations" },
];

/** Tabel 3 — predikat kelulusan. */
export const predikatKolom = [
  { id: "Indeks Prestasi Kumulatif", en: "Cumulative Grade Point Average" },
  { id: "Predikat", en: "Honors Predicate" },
  { id: "Ketentuan Khusus", en: "Special Conditions" },
];

export const predikatBaris = [
  [
    "3,76 – 4,00",
    { id: "Dengan Pujian (Cum Laude)", en: "With Praise (Cum Laude)" },
    {
      id: "Hanya diberikan kepada mahasiswa yang menyelesaikan studi paling lama 2 tahun dengan nilai Ujian Tesis A",
      en: "Awarded only to students who complete their studies within 2 years with a Thesis Exam grade of A",
    },
  ],
  ["3,50 – 3,75", { id: "Sangat Memuaskan", en: "Very Satisfactory" }, "—"],
  ["3,00 – 3,49", { id: "Memuaskan", en: "Satisfactory" }, "—"],
];

/** Pasal 10 — siklus evaluasi dan perbaikan berkelanjutan. */
export const siklusKolom = [
  { id: "Waktu", en: "Timeline" },
  { id: "Kegiatan", en: "Activity" },
  { id: "Penanggung Jawab", en: "Responsible Party" },
  { id: "Luaran", en: "Output" },
];

export const siklusBaris = [
  [
    { id: "Setiap akhir semester", en: "End of every semester" },
    { id: "Rekapitulasi nilai dan perhitungan ketercapaian CPMK per mata kuliah", en: "Grade recapitulation and CLO achievement calculation per course" },
    { id: "Dosen pengampu dan Koordinator Mata Kuliah", en: "Course Lecturers and Course Coordinator" },
    { id: "Lembar perhitungan ketercapaian (Lampiran A)", en: "Achievement calculation sheet (Appendix A)" },
  ],
  [
    { id: "Setiap akhir semester", en: "End of every semester" },
    { id: "Evaluasi kepuasan mahasiswa terhadap pembelajaran", en: "Evaluation of student learning satisfaction" },
    { id: "Gugus Penjaminan Mutu", en: "Quality Assurance Unit" },
    { id: "Laporan hasil survei", en: "Survey results report" },
  ],
  [
    { id: "Setiap akhir tahun akademik", en: "End of every academic year" },
    { id: "Penyusunan Laporan Evaluasi Hasil Belajar dan Laporan Evaluasi Ketercapaian CPL", en: "Preparation of Learning Outcomes and PLO Achievement Evaluation Reports" },
    { id: "Gugus Penjaminan Mutu bersama Program Studi", en: "Quality Assurance Unit with Study Programme" },
    { id: "Laporan Evaluasi Hasil Belajar dan Annex 17", en: "Learning Evaluation Report and Annex 17" },
  ],
  [
    { id: "Paling lambat 30 hari setelah laporan ditetapkan", en: "Within 30 days after report adoption" },
    { id: "Rapat tinjauan manajemen program studi", en: "Study programme management review meeting" },
    { id: "Ketua Program Studi", en: "Head of Study Programme" },
    { id: "Notulen dan rencana tindak lanjut", en: "Minutes and follow-up action plan" },
  ],
  [
    { id: "Setiap tahun", en: "Annually" },
    { id: "Peninjauan Rencana Pembelajaran Semester", en: "Semester Learning Plan (RPS) review" },
    { id: "Tim Dosen Rumpun Mata Kuliah", en: "Course Cluster Lecturer Team" },
    { id: "RPS hasil revisi", en: "Revised RPS document" },
  ],
  [
    { id: "Setiap 1–2 tahun", en: "Every 1–2 years" },
    { id: "Peninjauan kurikulum", en: "Curriculum review" },
    { id: "Tim Kurikulum Program Studi", en: "Study Programme Curriculum Team" },
    { id: "Dokumen kurikulum hasil peninjauan", en: "Reviewed curriculum document" },
  ],
];

/** Lampiran B — ekuivalensi Kurikulum 2021 ke Kurikulum OBE 2026. */
export const ekuivalensiKolom = [
  { id: "Kode 2021", en: "2021 Code" },
  { id: "Mata Kuliah Kurikulum 2021", en: "2021 Curriculum Course" },
  { id: "sks", en: "Credits" },
  { id: "Kode 2026", en: "2026 Code" },
  { id: "Mata Kuliah Kurikulum OBE 2026", en: "OBE 2026 Curriculum Course" },
  { id: "sks", en: "Credits" },
  { id: "Keterangan", en: "Equivalency Status" },
];

export const ekuivalensiBaris = [
  [
    "HN218008026",
    { id: "Teori Hukum, Penemuan Hukum dan Metode Penelitian Hukum", en: "Legal Theory, Legal Interpretation and Legal Research Methods" },
    "2",
    "HN268008001",
    { id: "Teori Hukum, Penemuan Hukum dan Metode Penelitian Hukum", en: "Legal Theory, Legal Interpretation and Legal Research Methods" },
    "2",
    { id: "Setara penuh", en: "Fully equivalent" }
  ],
  [
    "HN218008027",
    { id: "Hukum Perikatan/Perjanjian, Jaminan dan Pembuatan Akta Jaminan", en: "Law of Obligations, Contracts, Security and Security Deed Drafting" },
    "2",
    "HN268008002",
    { id: "Hukum Perikatan, Perjanjian dan Jaminan", en: "Law of Obligations, Contracts, and Securities" },
    "2",
    { id: "Setara penuh", en: "Fully equivalent" }
  ],
  [
    "HN218008028",
    { id: "Hukum Perbankan dan Pembuatan Akta Syariah", en: "Banking Law and Sharia Deed Drafting" },
    "2",
    "HN268008003",
    { id: "Hukum Perbankan dan Perbankan Syariah", en: "Banking Law and Islamic Banking" },
    "2",
    { id: "Setara penuh", en: "Fully equivalent" }
  ],
  [
    "HN218008029",
    { id: "Hukum Notaris dan Kode Etik Notaris", en: "Notarial Law and Notary Code of Ethics" },
    "2",
    "HN268008004",
    { id: "Peraturan Jabatan Notaris dan Kode Etik Notaris", en: "Notary Office Regulations and Code of Ethics" },
    "2",
    { id: "Setara penuh", en: "Fully equivalent" }
  ],
  [
    "HN218008030",
    { id: "Teknik Pembuatan Akta Umum (TPA I)", en: "General Deed Drafting Techniques (TPA I)" },
    "3",
    "HN268008005",
    { id: "Teknik Pembuatan Akta Umum (TPA I)", en: "General Deed Drafting Techniques (TPA I)" },
    "3",
    { id: "Setara penuh", en: "Fully equivalent" }
  ],
  [
    "HN218008031",
    { id: "Laboratorium Akta 1", en: "Deed Laboratory 1" },
    "1",
    "HN268008006",
    { id: "Laboratorium Akta 1", en: "Deed Laboratory 1" },
    "1",
    { id: "Setara penuh", en: "Fully equivalent" }
  ],
  [
    "HN218008032",
    { id: "Hukum Harta Kekayaan dan Pewarisan", en: "Property and Inheritance Law" },
    "2",
    "HN268008008",
    { id: "Hukum Keluarga dan Waris", en: "Family and Inheritance Law" },
    "2",
    { id: "Setara penuh", en: "Fully equivalent" }
  ],
  [
    "HN218008033",
    { id: "Hukum Pajak, Kepailitan dan Lelang", en: "Tax Law, Bankruptcy, and Auction" },
    "2",
    "HN268009002",
    { id: "Hukum Pajak, Kepailitan dan Lelang (P)", en: "Tax Law, Bankruptcy, and Auction (Elective)" },
    "2",
    { id: "Status berubah: wajib menjadi mata kuliah pilihan", en: "Status updated: compulsory changed to elective course" }
  ],
  [
    "HN218008034",
    { id: "Teknik Pembuatan Akta Badan Hukum (TPA II)", en: "Legal Entity Deed Drafting Techniques (TPA II)" },
    "3",
    "HN268008009",
    { id: "Teknik Pembuatan Akta Badan Usaha (TPA II)", en: "Business Entity Deed Drafting Techniques (TPA II)" },
    "3",
    { id: "Setara; cakupan diperluas ke badan usaha tidak berbadan hukum", en: "Equivalent; scope expanded to non-legal entity business forms" }
  ],
  [
    "HH216007035",
    { id: "Peradaban Islam", en: "Islamic Civilization" },
    "2",
    "HN268007011",
    { id: "Islam Disiplin Ilmu", en: "Islamic Disciplinary Studies" },
    "3",
    { id: "Diserap sebagian; bersama HH216007036 diakui setara Islam Disiplin Ilmu", en: "Partially absorbed; recognized together with HH216007036 as equivalent to Islamic Disciplinary Studies" }
  ],
  [
    "HH216007036",
    { id: "Islam Disiplin Ilmu", en: "Islamic Disciplinary Studies" },
    "2",
    "HN268007011",
    { id: "Islam Disiplin Ilmu", en: "Islamic Disciplinary Studies" },
    "3",
    { id: "Setara; bobot naik dari 2 menjadi 3 sks", en: "Equivalent; credits increased from 2 to 3" }
  ],
  [
    "HN218008037",
    { id: "Laboratorium Akta 2", en: "Deed Laboratory 2" },
    "1",
    "HN268008011",
    { id: "Laboratorium Akta 2", en: "Deed Laboratory 2" },
    "1",
    { id: "Setara penuh", en: "Fully equivalent" }
  ],
  [
    "HN218008038",
    { id: "Teknik Pembuatan Akta Khusus (TPA III)", en: "Specific Deed Drafting Techniques (TPA III)" },
    "3",
    "HN268008013",
    { id: "Teknik Pembuatan Akta Khusus (TPA III)", en: "Specific Deed Drafting Techniques (TPA III)" },
    "3",
    { id: "Setara; bahan kajian berubah menjadi BK35, BK36, dan BK31", en: "Equivalent; study material aligned with BK35, BK36, and BK31" }
  ],
  [
    "HN218008039",
    { id: "Hukum Agraria, kePPATan dan Teknik Pembuatan Akta PPAT", en: "Agrarian Law, PPAT Regulations, and PPAT Deed Drafting" },
    "3",
    "HN268008012 + HN268008010 + HN268008016",
    { id: "Hukum Pertanahan + Politik Hukum kePPATan, Kode Etik PPAT + Teknik Pembuatan Akta PPAT", en: "Land Law + Legal Politics & Code of Ethics of PPAT + PPAT Deed Drafting" },
    "2 + 2 + 2",
    { id: "Dipecah menjadi tiga mata kuliah; wajib menempuh ketiganya", en: "Split into three courses; all three must be completed" }
  ],
  [
    "HN218008040",
    { id: "Laboratorium Akta 3", en: "Deed Laboratory 3" },
    "1",
    "HN268008014",
    { id: "Laboratorium Akta 3", en: "Deed Laboratory 3" },
    "1",
    { id: "Setara penuh", en: "Fully equivalent" }
  ],
  [
    "HN218009041",
    { id: "Filsafat Ilmu dan Filsafat Hukum Islam (P)", en: "Philosophy of Science and Islamic Legal Philosophy (Elective)" },
    "1",
    "HN268009001",
    { id: "Filsafat Hukum Islam (P)", en: "Islamic Legal Philosophy (Elective)" },
    "2",
    { id: "Setara; bobot naik dari 1 menjadi 2 sks", en: "Equivalent; credits increased from 1 to 2" }
  ],
  [
    "HN218009042",
    { id: "Hukum Perusahaan dan Pasar Modal (P)", en: "Corporate and Capital Markets Law (Elective)" },
    "1",
    "HN268008007",
    { id: "Hukum Perusahaan dan Perkembangan Pasar Modal", en: "Corporate Law and Capital Markets Developments" },
    "2",
    { id: "Status berubah: pilihan menjadi wajib; bobot naik menjadi 2 sks", en: "Status updated: elective changed to compulsory; credits increased to 2" }
  ],
  [
    "HN218009043",
    { id: "Cyber Administrasi Badan Hukum dan Bisnis Internasional (P)", en: "Cyber Administration of Legal Entities and International Business (Elective)" },
    "1",
    "HN268009005",
    { id: "Cyber Administrasi Badan Hukum dan Bisnis Internasional (P)", en: "Cyber Administration of Legal Entities and International Business (Elective)" },
    "2",
    { id: "Setara; bobot naik dari 1 menjadi 2 sks", en: "Equivalent; credits increased from 1 to 2" }
  ],
  [
    "HN218009044",
    { id: "Hak Kekayaan Intelektual (HAKI) (P)", en: "Intellectual Property Rights (IPR) (Elective)" },
    "1",
    "HN268009003",
    { id: "Hak Kekayaan Intelektual (HAKI) (P)", en: "Intellectual Property Rights (IPR) (Elective)" },
    "2",
    { id: "Setara; bobot naik dari 1 menjadi 2 sks", en: "Equivalent; credits increased from 1 to 2" }
  ],
  [
    "HN218009045",
    { id: "Hukum Ekonomi Syariah (P)", en: "Islamic Economic Law (Elective)" },
    "1",
    "HN268009004",
    { id: "Hukum Ekonomi Syariah (P)", en: "Islamic Economic Law (Elective)" },
    "2",
    { id: "Setara; bobot naik dari 1 menjadi 2 sks", en: "Equivalent; credits increased from 1 to 2" }
  ],
  [
    "HN218012046",
    { id: "Tesis", en: "Master's Thesis" },
    "4",
    "HN268012001",
    { id: "Tesis", en: "Master's Thesis" },
    "4",
    { id: "Setara penuh", en: "Fully equivalent" }
  ],
  [
    "—",
    { id: "Tidak ada padanan pada Kurikulum 2021", en: "No equivalent course in Curriculum 2021" },
    "—",
    "HN268008015",
    { id: "Pembuatan Kontrak Internasional", en: "International Contract Drafting" },
    "2",
    { id: "Mata kuliah baru; wajib ditempuh mahasiswa yang beralih ke Kurikulum OBE 2026", en: "New course; mandatory for students transitioning to Curriculum OBE 2026" }
  ],
];

export const ekuivalensiCatatan = [
  {
    id: "Pengakuan ekuivalensi ditetapkan dengan Surat Keputusan Ketua Program Studi atas usul Tim Kurikulum.",
    en: "Equivalency recognition is formally determined by a Decree of the Head of Study Programme upon recommendation of the Curriculum Team.",
  },
  {
    id: "Nilai mata kuliah yang dinyatakan setara diakui apa adanya dan tidak dihitung ulang.",
    en: "Grades for equivalent courses are recognized as-is without recalculation.",
  },
  {
    id: "Mahasiswa yang beralih ke Kurikulum OBE 2026 wajib memenuhi beban studi 41 sks; kekurangan beban dipenuhi melalui mata kuliah yang belum berpadanan, terutama Pembuatan Kontrak Internasional serta pemecahan mata kuliah Hukum Agraria, kePPATan dan Teknik Pembuatan Akta PPAT.",
    en: "Students transitioning to Curriculum OBE 2026 must fulfill the 41-credit study load; credit deficiencies are completed through unmatched courses, notably International Contract Drafting and the decoupled Land Law, PPAT Regulations, and PPAT Deed Drafting courses.",
  },
  {
    id: "Mahasiswa yang tinggal menempuh Tesis pada saat pemberlakuan kurikulum baru tetap menyelesaikan studi dengan Kurikulum 2021.",
    en: "Students who only have the Master's Thesis remaining upon enactment of the new curriculum will complete their degree under Curriculum 2021.",
  },
];
