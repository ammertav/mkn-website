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
 *
 * DWIBAHASA: teks Indonesia adalah rumusan resmi dokumen sumber. Teks Inggris
 * adalah TERJEMAHAN KERJA untuk pembaca internasional, bukan versi resmi; bila
 * terjadi perbedaan penafsiran, versi Indonesia yang berlaku. Sel berisi kode,
 * angka, dan tanda hubung tetap string biasa karena sama di kedua bahasa —
 * useT() meneruskannya apa adanya.
 */

export const sorotEvaluasi = [
  {
    angka: "41 sks",
    label: { id: "Beban studi Kurikulum OBE 2026", en: "2026 OBE curriculum study load" },
  },
  { angka: "4", label: { id: "Rumusan CPL", en: "Learning outcome statements" } },
  { angka: "80%", label: { id: "Ambang ketercapaian CPL", en: "Attainment threshold" } },
  { angka: "3,00", label: { id: "IPK minimum kelulusan", en: "Minimum GPA to graduate" } },
];

/** Pasal 3 — prinsip penilaian. */
export const prinsipPenilaian = [
  {
    tanda: "1",
    judul: { id: "Edukatif", en: "Educative" },
    keterangan: {
      id: "Penilaian memotivasi mahasiswa memperbaiki cara belajar dan meraih capaian pembelajaran.",
      en:
        "Assessment motivates students to improve how they learn and to reach the intended " +
        "learning outcomes.",
    },
  },
  {
    tanda: "2",
    judul: { id: "Otentik", en: "Authentic" },
    keterangan: {
      id:
        "Berorientasi pada proses dan hasil belajar yang mencerminkan kemampuan profesional " +
        "Notaris/PPAT, terutama melalui unjuk kerja perancangan akta.",
      en:
        "Oriented towards learning processes and results that reflect professional Notary/PPAT " +
        "competence, above all through performance in deed drafting.",
    },
  },
  {
    tanda: "3",
    judul: { id: "Objektif", en: "Objective" },
    keterangan: {
      id: "Didasarkan pada rubrik yang disepakati dan bebas dari pengaruh subjektivitas penilai.",
      en: "Based on agreed rubrics and free from the influence of the assessor’s subjectivity.",
    },
  },
  {
    tanda: "4",
    judul: { id: "Akuntabel", en: "Accountable" },
    keterangan: {
      id:
        "Dilaksanakan sesuai prosedur dan kriteria yang jelas serta dapat ditelusuri sampai " +
        "tingkat butir penilaian.",
      en:
        "Carried out according to clear procedures and criteria, and traceable down to the " +
        "level of the individual assessment item.",
    },
  },
  {
    tanda: "5",
    judul: { id: "Transparan", en: "Transparent" },
    keterangan: {
      id: "Prosedur dan kriteria penilaian dapat diakses mahasiswa sejak awal semester.",
      en:
        "Assessment procedures and criteria are accessible to students from the start of the " +
        "semester.",
    },
  },
  {
    tanda: "6",
    judul: { id: "Islami", en: "Islamic" },
    keterangan: {
      id:
        "Menjunjung kejujuran akademik dan integritas sebagai bagian dari strategi Budaya " +
        "Akademik Islami (BudAI).",
      en:
        "Upholding academic honesty and integrity as part of the Islamic Academic Culture " +
        "(BudAI) strategy.",
    },
  },
];

/** Tabel 1 — bobot komponen penilaian menurut jenis mata kuliah. */
export const bobotKolom = [
  { id: "Jenis Mata Kuliah", en: "Course Type" },
  { id: "Ujian (UTS+UAS)", en: "Examinations (Mid + Final)" },
  { id: "Tugas / Portofolio", en: "Assignments / Portfolio" },
  { id: "Partisipasi", en: "Participation" },
  { id: "Unjuk Kerja", en: "Performance" },
  { id: "Produk / Proyek", en: "Product / Project" },
];
export const bobotBaris = [
  [
    {
      id: "MK teori 2 sks (kuliah, case method, seminar)",
      en: "Theory course, 2 credits (lecture, case method, seminar)",
    },
    "40%",
    "30%",
    "20%",
    "10%",
    "—",
  ],
  [
    {
      id: "MK teori-praktik 2 sks (kuliah dan praktik terbimbing)",
      en: "Theory-and-practice course, 2 credits (lecture and guided practice)",
    },
    "40%",
    "25%",
    "15%",
    "20%",
    "—",
  ],
  [
    {
      id: "MK rumpun Teknik Pembuatan Akta 3 sks (TPA I, II, III)",
      en: "Deed Drafting cluster course, 3 credits (TPA I, II, III)",
    },
    "40%",
    "25%",
    "10%",
    "20%",
    "5%",
  ],
  [
    {
      id: "MK Laboratorium Akta 1 sks (praktik penuh)",
      en: "Deed Drafting Laboratory course, 1 credit (full practice)",
    },
    "—",
    "30%",
    "10%",
    "40%",
    "20%",
  ],
  [
    { id: "MK Islam Disiplin Ilmu 3 sks", en: "Islam as a Discipline of Knowledge, 3 credits" },
    "50%",
    "30%",
    "20%",
    "—",
    "—",
  ],
  [{ id: "Tesis 4 sks", en: "Thesis, 4 credits" }, "—", "—", "—", "—", "100%"],
];

export const bobotCatatan = [
  {
    id: "Jumlah seluruh komponen penilaian pada setiap mata kuliah adalah 100%.",
    en: "The assessment components of every course total 100%.",
  },
  {
    id:
      "Setiap butir penilaian wajib dipetakan kepada Sub-CPMK dan CPL yang diukurnya pada " +
      "halaman asesmen Rencana Pembelajaran Semester.",
    en:
      "Every assessment item must be mapped, on the assessment page of the Semester Learning " +
      "Plan, to the Sub-CLO and the learning outcome it measures.",
  },
  {
    id:
      "Perubahan bobot komponen hanya dapat dilakukan melalui revisi Rencana Pembelajaran " +
      "Semester yang disetujui Koordinator Mata Kuliah dan Ketua Program Studi.",
    en:
      "Component weights may be changed only through a revision of the Semester Learning Plan " +
      "approved by the Course Coordinator and the Head of the Study Programme.",
  },
];

/** Tabel 2 — skala nilai hasil belajar. */
export const skalaKolom = [
  { id: "Rentang Nilai Angka", en: "Numerical Range" },
  { id: "Nilai Huruf", en: "Letter Grade" },
  { id: "Bobot", en: "Grade Point" },
  { id: "Predikat", en: "Descriptor" },
];
export const skalaBaris = [
  ["80,00 – 100,00", "A", "4,00", { id: "Sangat Baik", en: "Excellent" }],
  ["75,00 – 79,99", "AB", "3,50", { id: "Lebih dari Baik", en: "Very Good" }],
  ["70,00 – 74,99", "B", "3,00", { id: "Baik", en: "Good" }],
  ["65,00 – 69,99", "BC", "2,50", { id: "Lebih dari Cukup", en: "More than Satisfactory" }],
  ["60,00 – 64,99", "C", "2,00", { id: "Cukup", en: "Satisfactory" }],
  ["55,00 – 59,99", "CD", "1,50", { id: "Kurang dari Cukup", en: "Less than Satisfactory" }],
  ["50,00 – 54,99", "D", "1,00", { id: "Kurang", en: "Poor" }],
  ["45,00 – 49,99", "E", "0,50", { id: "Gagal", en: "Fail" }],
];

export const batasKelulusan = [
  {
    id: "Nilai lulus mata kuliah pada Program Magister Kenotariatan adalah sekurang-kurangnya B.",
    en: "The pass mark for a course in the Master of Notarial Law programme is at least B.",
  },
  {
    id:
      "Khusus penilaian Usulan Proposal Tesis dan Ujian Tesis, mahasiswa dinyatakan lulus " +
      "apabila memperoleh nilai sekurang-kurangnya B.",
    en:
      "For the Thesis Proposal and the Thesis Examination in particular, a student passes on " +
      "obtaining a mark of at least B.",
  },
  {
    id: "Nilai ujian diumumkan secara terbuka melalui Sistem Informasi Akademik.",
    en: "Examination results are announced openly through the Academic Information System.",
  },
];

/** Pasal 6 — perhitungan ketercapaian berjenjang. */
export const langkahKetercapaian = [
  {
    tahap: { id: "Nilai CPMK", en: "CLO score" },
    uraian: {
      id: "Σ (nilai butir penilaian × bobot butir penilaian yang mengukur CPMK tersebut)",
      en: "Σ (assessment item score × weight of the assessment item measuring that CLO)",
    },
  },
  {
    tahap: { id: "Ketercapaian CPMK", en: "CLO attainment" },
    uraian: {
      id: "(Nilai CPMK ÷ Nilai maksimum) × 100",
      en: "(CLO score ÷ maximum score) × 100",
    },
  },
  {
    tahap: {
      id: "Ketercapaian CPL pada satu mata kuliah",
      en: "Learning outcome attainment within one course",
    },
    uraian: {
      id: "Rata-rata ketercapaian seluruh CPMK yang menurunkan CPL tersebut",
      en: "The mean attainment of all CLOs derived from that learning outcome",
    },
  },
  {
    tahap: { id: "Ketercapaian mata kuliah", en: "Course attainment" },
    uraian: {
      id: "Rata-rata ketercapaian seluruh CPL yang dibebankan pada mata kuliah",
      en: "The mean attainment of all learning outcomes assigned to the course",
    },
  },
  {
    tahap: {
      id: "Ketercapaian CPL tingkat program studi",
      en: "Learning outcome attainment at programme level",
    },
    uraian: {
      id: "Rata-rata ketercapaian CPL pada seluruh mata kuliah pengukurnya",
      en: "The mean attainment of the learning outcome across all courses that measure it",
    },
  },
];

export const catatanKetercapaian = [
  {
    id:
      "Ambang ketercapaian ditetapkan sebesar 80,00%, digunakan secara identik pada Annex 17 " +
      "Laporan Evaluasi Ketercapaian CPL dan pada Laporan Evaluasi Hasil Belajar Program Studi.",
    en:
      "The attainment threshold is set at 80.00% and is applied identically in Annex 17 of the " +
      "Learning Outcome Attainment Evaluation Report and in the Study Programme Learning " +
      "Results Evaluation Report.",
  },
  {
    id:
      "Jumlah mata kuliah pengukur setiap CPL mengikuti Tabel 10 Dokumen Kurikulum OBE 2026: " +
      "CPL 1 sebanyak 21 mata kuliah, CPL 2 sebanyak 14, CPL 3 sebanyak 10, dan CPL 4 sebanyak " +
      "3, apabila 5 mata kuliah pilihan dihitung terpisah.",
    en:
      "The number of courses measuring each learning outcome follows Table 10 of the 2026 OBE " +
      "Curriculum Document: 21 courses for CPL 1, 14 for CPL 2, 10 for CPL 3, and 3 for CPL 4, " +
      "when the five electives are counted separately.",
  },
];

/** Pasal 7 — kategori ketercapaian dan tindak lanjut. */
export const kategoriKolom = [
  { id: "Rentang Ketercapaian", en: "Attainment Range" },
  { id: "Kategori", en: "Category" },
  { id: "Status", en: "Status" },
  { id: "Tindak Lanjut", en: "Follow-up" },
];
export const kategoriBaris = [
  [
    "≥ 90,00%",
    { id: "Sangat Baik", en: "Excellent" },
    { id: "Tercapai", en: "Attained" },
    {
      id: "Dipertahankan dan dijadikan rujukan praktik baik",
      en: "Maintain and adopt as a reference for good practice",
    },
  ],
  [
    "80,00% – 89,99%",
    { id: "Baik", en: "Good" },
    { id: "Tercapai", en: "Attained" },
    {
      id: "Ditingkatkan melalui penajaman instrumen penilaian",
      en: "Improve by sharpening the assessment instruments",
    },
  ],
  [
    "70,00% – 79,99%",
    { id: "Cukup", en: "Satisfactory" },
    { id: "Belum Tercapai", en: "Not Attained" },
    {
      id: "Perbaikan metode pembelajaran dan rubrik pada semester berikutnya",
      en: "Revise teaching methods and rubrics in the following semester",
    },
  ],
  [
    "< 70,00%",
    { id: "Kurang", en: "Poor" },
    { id: "Belum Tercapai", en: "Not Attained" },
    {
      id: "Peninjauan menyeluruh RPS, bahan kajian, dan bentuk penilaian",
      en: "Comprehensive review of the Semester Learning Plan, subject matter, and assessment",
    },
  ],
];

/** Pasal 8 — remidiasi dan perbaikan nilai. */
export const remidiasi = [
  {
    id:
      "Mahasiswa yang belum lulus suatu mata kuliah diberi kesempatan perbaikan (remidi) " +
      "paling banyak 2 kali.",
    en:
      "A student who has not passed a course is given at most two opportunities to retake the " +
      "assessment.",
  },
  {
    id:
      "Mahasiswa yang telah lulus tetapi belum puas dengan nilainya dapat mengikuti remidi " +
      "dengan persetujuan dan jadwal yang ditetapkan dosen penguji.",
    en:
      "A student who has passed but is dissatisfied with the mark may retake the assessment " +
      "with the approval and on the schedule set by the examiner.",
  },
  {
    id:
      "Apabila setelah dua kali remidi belum juga lulus, mahasiswa wajib menempuh kembali mata " +
      "kuliah tersebut dengan mencatatkan diri pada bagian akademik.",
    en:
      "If the student still has not passed after two retakes, the course must be taken again, " +
      "with registration at the academic office.",
  },
  {
    id:
      "Biaya ujian perbaikan ditetapkan per mata uji dan dibayarkan setiap kali mengikuti ujian " +
      "perbaikan.",
    en: "The retake examination fee is set per subject examined and is payable on each retake.",
  },
  {
    id: "Nilai hasil remidi yang digunakan adalah nilai tertinggi di antara nilai asli dan nilai remidi.",
    en: "The mark recorded is the higher of the original mark and the retake mark.",
  },
];

/** Pasal 9 — syarat kelulusan program studi. */
export const syaratKelulusan = [
  { id: "Lulus seluruh mata kuliah yang dipersyaratkan", en: "Passing all required courses" },
  { id: "Lulus Ujian Tesis", en: "Passing the Thesis Examination" },
  {
    id: "Mengumpulkan 41 sks dengan IPK sekurang-kurangnya 3,00 dan tidak terdapat nilai C",
    en: "Accumulating 41 credits with a GPA of at least 3.00 and no grade of C",
  },
  {
    id: "Menyerahkan salinan Sertifikat Magang",
    en: "Submitting a copy of the Internship Certificate",
  },
  {
    id: "Menyerahkan salinan Sertifikat TOEFL LIKE dengan nilai sekurang-kurangnya 525",
    en: "Submitting a copy of a TOEFL-LIKE certificate with a score of at least 525",
  },
  {
    id: "Menyerahkan salinan publikasi karya ilmiah pada jurnal cetak maupun daring",
    en: "Submitting a copy of a scholarly publication in a print or online journal",
  },
  {
    id: "Menyelesaikan seluruh kewajiban administrasi dan keuangan",
    en: "Settling all administrative and financial obligations",
  },
];

/** Tabel 3 — predikat kelulusan. */
export const predikatKolom = [
  { id: "Indeks Prestasi Kumulatif", en: "Grade Point Average" },
  { id: "Predikat", en: "Distinction" },
  { id: "Ketentuan Khusus", en: "Special Condition" },
];
export const predikatBaris = [
  [
    "3,76 – 4,00",
    { id: "Dengan Pujian (Cum Laude)", en: "With Distinction (Cum Laude)" },
    {
      id:
        "Hanya diberikan kepada mahasiswa yang menyelesaikan studi paling lama 2 tahun dengan " +
        "nilai Ujian Tesis A",
      en:
        "Awarded only to students who complete their studies within two years with a grade of " +
        "A in the Thesis Examination",
    },
  ],
  ["3,50 – 3,75", { id: "Sangat Memuaskan", en: "Very Satisfactory" }, "—"],
  ["3,00 – 3,49", { id: "Memuaskan", en: "Satisfactory" }, "—"],
];

/** Pasal 10 — siklus evaluasi dan perbaikan berkelanjutan. */
export const siklusKolom = [
  { id: "Waktu", en: "Timing" },
  { id: "Kegiatan", en: "Activity" },
  { id: "Penanggung Jawab", en: "Responsible Party" },
  { id: "Luaran", en: "Output" },
];
export const siklusBaris = [
  [
    { id: "Setiap akhir semester", en: "At the end of each semester" },
    {
      id: "Rekapitulasi nilai dan perhitungan ketercapaian CPMK per mata kuliah",
      en: "Compiling marks and calculating CLO attainment for each course",
    },
    {
      id: "Dosen pengampu dan Koordinator Mata Kuliah",
      en: "Course lecturers and the Course Coordinator",
    },
    {
      id: "Lembar perhitungan ketercapaian (Lampiran A)",
      en: "Attainment calculation sheet (Annex A)",
    },
  ],
  [
    { id: "Setiap akhir semester", en: "At the end of each semester" },
    {
      id: "Evaluasi kepuasan mahasiswa terhadap pembelajaran",
      en: "Evaluation of student satisfaction with teaching",
    },
    { id: "Gugus Penjaminan Mutu", en: "Quality Assurance Cluster" },
    { id: "Laporan hasil survei", en: "Survey report" },
  ],
  [
    { id: "Setiap akhir tahun akademik", en: "At the end of each academic year" },
    {
      id: "Penyusunan Laporan Evaluasi Hasil Belajar dan Laporan Evaluasi Ketercapaian CPL",
      en:
        "Preparing the Learning Results Evaluation Report and the Learning Outcome Attainment " +
        "Evaluation Report",
    },
    {
      id: "Gugus Penjaminan Mutu bersama Program Studi",
      en: "Quality Assurance Cluster together with the Study Programme",
    },
    {
      id: "Laporan Evaluasi Hasil Belajar dan Annex 17",
      en: "Learning Results Evaluation Report and Annex 17",
    },
  ],
  [
    {
      id: "Paling lambat 30 hari setelah laporan ditetapkan",
      en: "No later than 30 days after the report is adopted",
    },
    {
      id: "Rapat tinjauan manajemen program studi",
      en: "Study programme management review meeting",
    },
    { id: "Ketua Program Studi", en: "Head of the Study Programme" },
    { id: "Notulen dan rencana tindak lanjut", en: "Minutes and follow-up plan" },
  ],
  [
    { id: "Setiap tahun", en: "Annually" },
    {
      id: "Peninjauan Rencana Pembelajaran Semester",
      en: "Review of the Semester Learning Plans",
    },
    { id: "Tim Dosen Rumpun Mata Kuliah", en: "Course Cluster Lecturer Team" },
    { id: "RPS hasil revisi", en: "Revised Semester Learning Plans" },
  ],
  [
    { id: "Setiap 1–2 tahun", en: "Every one to two years" },
    { id: "Peninjauan kurikulum", en: "Curriculum review" },
    { id: "Tim Kurikulum Program Studi", en: "Study Programme Curriculum Team" },
    { id: "Dokumen kurikulum hasil peninjauan", en: "Reviewed curriculum document" },
  ],
];

/**
 * Lampiran B — ekuivalensi Kurikulum 2021 ke Kurikulum OBE 2026.
 *
 * Nama mata kuliah Kurikulum 2026 memakai terjemahan yang sama dengan
 * kurikulumData.js agar kedua halaman konsisten.
 */
export const ekuivalensiKolom = [
  { id: "Kode 2021", en: "2021 Code" },
  { id: "Mata Kuliah Kurikulum 2021", en: "2021 Curriculum Course" },
  { id: "sks", en: "Credits" },
  { id: "Kode 2026", en: "2026 Code" },
  { id: "Mata Kuliah Kurikulum OBE 2026", en: "2026 OBE Curriculum Course" },
  { id: "sks", en: "Credits" },
  { id: "Keterangan", en: "Notes" },
];

const SETARA_PENUH = { id: "Setara penuh", en: "Fully equivalent" };
const BOBOT_1_KE_2 = {
  id: "Setara; bobot naik dari 1 menjadi 2 sks",
  en: "Equivalent; weight increased from 1 to 2 credits",
};

export const ekuivalensiBaris = [
  [
    "HN218008026",
    {
      id: "Teori Hukum, Penemuan Hukum dan Metode Penelitian Hukum",
      en: "Legal Theory, Legal Discovery, and Legal Research Methods",
    },
    "2",
    "HN268008001",
    {
      id: "Teori Hukum, Penemuan Hukum dan Metode Penelitian Hukum",
      en: "Legal Theory, Legal Discovery, and Legal Research Methods",
    },
    "2",
    SETARA_PENUH,
  ],
  [
    "HN218008027",
    {
      id: "Hukum Perikatan/Perjanjian, Jaminan dan Pembuatan Akta Jaminan",
      en: "Law of Obligations/Contracts, Securities, and Drafting of Security Deeds",
    },
    "2",
    "HN268008002",
    {
      id: "Hukum Perikatan, Perjanjian dan Jaminan",
      en: "Law of Obligations, Contracts, and Securities",
    },
    "2",
    SETARA_PENUH,
  ],
  [
    "HN218008028",
    {
      id: "Hukum Perbankan dan Pembuatan Akta Syariah",
      en: "Banking Law and Drafting of Sharia Deeds",
    },
    "2",
    "HN268008003",
    { id: "Hukum Perbankan dan Perbankan Syariah", en: "Banking Law and Islamic Banking" },
    "2",
    SETARA_PENUH,
  ],
  [
    "HN218008029",
    {
      id: "Hukum Notaris dan Kode Etik Notaris",
      en: "Notarial Law and the Notarial Code of Ethics",
    },
    "2",
    "HN268008004",
    {
      id: "Peraturan Jabatan Notaris dan Kode Etik Notaris",
      en: "Notarial Office Regulations and the Notarial Code of Ethics",
    },
    "2",
    SETARA_PENUH,
  ],
  [
    "HN218008030",
    { id: "Teknik Pembuatan Akta Umum (TPA I)", en: "Drafting of General Deeds (TPA I)" },
    "3",
    "HN268008005",
    { id: "Teknik Pembuatan Akta Umum (TPA I)", en: "Drafting of General Deeds (TPA I)" },
    "3",
    SETARA_PENUH,
  ],
  [
    "HN218008031",
    { id: "Laboratorium Akta 1", en: "Deed Drafting Laboratory 1" },
    "1",
    "HN268008006",
    { id: "Laboratorium Akta 1", en: "Deed Drafting Laboratory 1" },
    "1",
    SETARA_PENUH,
  ],
  [
    "HN218008032",
    { id: "Hukum Harta Kekayaan dan Pewarisan", en: "Property and Inheritance Law" },
    "2",
    "HN268008008",
    { id: "Hukum Keluarga dan Waris", en: "Family and Inheritance Law" },
    "2",
    SETARA_PENUH,
  ],
  [
    "HN218008033",
    { id: "Hukum Pajak, Kepailitan dan Lelang", en: "Tax Law, Bankruptcy, and Auctions" },
    "2",
    "HN268009002",
    {
      id: "Hukum Pajak, Kepailitan dan Lelang (P)",
      en: "Tax Law, Bankruptcy, and Auctions (Elective)",
    },
    "2",
    {
      id: "Status berubah: wajib menjadi mata kuliah pilihan",
      en: "Status changed: from compulsory to elective",
    },
  ],
  [
    "HN218008034",
    {
      id: "Teknik Pembuatan Akta Badan Hukum (TPA II)",
      en: "Drafting of Legal Entity Deeds (TPA II)",
    },
    "3",
    "HN268008009",
    {
      id: "Teknik Pembuatan Akta Badan Usaha (TPA II)",
      en: "Drafting of Business Entity Deeds (TPA II)",
    },
    "3",
    {
      id: "Setara; cakupan diperluas ke badan usaha tidak berbadan hukum",
      en: "Equivalent; scope extended to unincorporated business entities",
    },
  ],
  [
    "HH216007035",
    { id: "Peradaban Islam", en: "Islamic Civilisation" },
    "2",
    "HN268007011",
    { id: "Islam Disiplin Ilmu", en: "Islam as a Discipline of Knowledge" },
    "3",
    {
      id: "Diserap sebagian; bersama HH216007036 diakui setara Islam Disiplin Ilmu",
      en:
        "Partially absorbed; together with HH216007036 recognised as equivalent to Islam as a " +
        "Discipline of Knowledge",
    },
  ],
  [
    "HH216007036",
    { id: "Islam Disiplin Ilmu", en: "Islam as a Discipline of Knowledge" },
    "2",
    "HN268007011",
    { id: "Islam Disiplin Ilmu", en: "Islam as a Discipline of Knowledge" },
    "3",
    {
      id: "Setara; bobot naik dari 2 menjadi 3 sks",
      en: "Equivalent; weight increased from 2 to 3 credits",
    },
  ],
  [
    "HN218008037",
    { id: "Laboratorium Akta 2", en: "Deed Drafting Laboratory 2" },
    "1",
    "HN268008011",
    { id: "Laboratorium Akta 2", en: "Deed Drafting Laboratory 2" },
    "1",
    SETARA_PENUH,
  ],
  [
    "HN218008038",
    { id: "Teknik Pembuatan Akta Khusus (TPA III)", en: "Drafting of Special Deeds (TPA III)" },
    "3",
    "HN268008013",
    { id: "Teknik Pembuatan Akta Khusus (TPA III)", en: "Drafting of Special Deeds (TPA III)" },
    "3",
    {
      id: "Setara; bahan kajian berubah menjadi BK35, BK36, dan BK31",
      en: "Equivalent; subject matter changed to BK35, BK36, and BK31",
    },
  ],
  [
    "HN218008039",
    {
      id: "Hukum Agraria, kePPATan dan Teknik Pembuatan Akta PPAT",
      en: "Agrarian Law, the PPAT Office, and Drafting of PPAT Deeds",
    },
    "3",
    "HN268008012 + HN268008010 + HN268008016",
    {
      id: "Hukum Pertanahan + Politik Hukum kePPATan, Kode Etik PPAT + Teknik Pembuatan Akta PPAT",
      en:
        "Land Law + Legal Policy on the PPAT Office and PPAT Code of Ethics + Drafting of PPAT " +
        "Deeds",
    },
    "2 + 2 + 2",
    {
      id: "Dipecah menjadi tiga mata kuliah; wajib menempuh ketiganya",
      en: "Split into three courses; all three must be taken",
    },
  ],
  [
    "HN218008040",
    { id: "Laboratorium Akta 3", en: "Deed Drafting Laboratory 3" },
    "1",
    "HN268008014",
    { id: "Laboratorium Akta 3", en: "Deed Drafting Laboratory 3" },
    "1",
    SETARA_PENUH,
  ],
  [
    "HN218009041",
    {
      id: "Filsafat Ilmu dan Filsafat Hukum Islam (P)",
      en: "Philosophy of Science and Islamic Legal Philosophy (Elective)",
    },
    "1",
    "HN268009001",
    { id: "Filsafat Hukum Islam (P)", en: "Islamic Legal Philosophy (Elective)" },
    "2",
    BOBOT_1_KE_2,
  ],
  [
    "HN218009042",
    {
      id: "Hukum Perusahaan dan Pasar Modal (P)",
      en: "Company Law and Capital Markets (Elective)",
    },
    "1",
    "HN268008007",
    {
      id: "Hukum Perusahaan dan Perkembangan Pasar Modal",
      en: "Company Law and Capital Market Developments",
    },
    "2",
    {
      id: "Status berubah: pilihan menjadi wajib; bobot naik menjadi 2 sks",
      en: "Status changed: from elective to compulsory; weight increased to 2 credits",
    },
  ],
  [
    "HN218009043",
    {
      id: "Cyber Administrasi Badan Hukum dan Bisnis Internasional (P)",
      en: "Cyber Administration of Legal Entities and International Business (Elective)",
    },
    "1",
    "HN268009005",
    {
      id: "Cyber Administrasi Badan Hukum dan Bisnis Internasional (P)",
      en: "Cyber Administration of Legal Entities and International Business (Elective)",
    },
    "2",
    BOBOT_1_KE_2,
  ],
  [
    "HN218009044",
    {
      id: "Hak Kekayaan Intelektual (HAKI) (P)",
      en: "Intellectual Property Rights (HAKI) (Elective)",
    },
    "1",
    "HN268009003",
    {
      id: "Hak Kekayaan Intelektual (HAKI) (P)",
      en: "Intellectual Property Rights (HAKI) (Elective)",
    },
    "2",
    BOBOT_1_KE_2,
  ],
  [
    "HN218009045",
    { id: "Hukum Ekonomi Syariah (P)", en: "Islamic Economic Law (Elective)" },
    "1",
    "HN268009004",
    { id: "Hukum Ekonomi Syariah (P)", en: "Islamic Economic Law (Elective)" },
    "2",
    BOBOT_1_KE_2,
  ],
  [
    "HN218012046",
    { id: "Tesis", en: "Thesis" },
    "4",
    "HN268012001",
    { id: "Tesis", en: "Thesis" },
    "4",
    SETARA_PENUH,
  ],
  [
    "—",
    { id: "Tidak ada padanan pada Kurikulum 2021", en: "No counterpart in the 2021 curriculum" },
    "—",
    "HN268008015",
    { id: "Pembuatan Kontrak Internasional", en: "International Contract Drafting" },
    "2",
    {
      id: "Mata kuliah baru; wajib ditempuh mahasiswa yang beralih ke Kurikulum OBE 2026",
      en: "New course; compulsory for students transferring to the 2026 OBE curriculum",
    },
  ],
];

export const ekuivalensiCatatan = [
  {
    id:
      "Pengakuan ekuivalensi ditetapkan dengan Surat Keputusan Ketua Program Studi atas usul " +
      "Tim Kurikulum.",
    en:
      "Equivalence is granted by decree of the Head of the Study Programme on the proposal of " +
      "the Curriculum Team.",
  },
  {
    id: "Nilai mata kuliah yang dinyatakan setara diakui apa adanya dan tidak dihitung ulang.",
    en:
      "Marks for courses declared equivalent are recognised as they stand and are not " +
      "recalculated.",
  },
  {
    id:
      "Mahasiswa yang beralih ke Kurikulum OBE 2026 wajib memenuhi beban studi 41 sks; " +
      "kekurangan beban dipenuhi melalui mata kuliah yang belum berpadanan, terutama Pembuatan " +
      "Kontrak Internasional serta pemecahan mata kuliah Hukum Agraria, kePPATan dan Teknik " +
      "Pembuatan Akta PPAT.",
    en:
      "Students transferring to the 2026 OBE curriculum must meet the 41-credit study load; any " +
      "shortfall is made up through courses without a counterpart, chiefly International " +
      "Contract Drafting and the three courses into which Agrarian Law, the PPAT Office, and " +
      "Drafting of PPAT Deeds was split.",
  },
  {
    id:
      "Mahasiswa yang tinggal menempuh Tesis pada saat pemberlakuan kurikulum baru tetap " +
      "menyelesaikan studi dengan Kurikulum 2021.",
    en:
      "Students who have only the Thesis left when the new curriculum takes effect complete " +
      "their studies under the 2021 curriculum.",
  },
];

/** Teks halaman Panduan Evaluasi Pembelajaran. */
export const halaman = {
  meta: {
    title: {
      id: "Panduan Evaluasi Pembelajaran | MKn UNISSULA",
      en: "Learning Evaluation Guidelines | MKn UNISSULA",
    },
    description: {
      id:
        "Panduan Evaluasi Pembelajaran Program Studi Magister Kenotariatan UNISSULA — bobot " +
        "komponen penilaian, skala nilai, ketercapaian CPL, remidiasi, dan predikat kelulusan.",
      en:
        "The Learning Evaluation Guidelines of the UNISSULA Master of Notarial Law Study " +
        "Programme — assessment component weights, grading scale, learning outcome attainment, " +
        "retakes, and graduation distinctions.",
    },
  },
  judul: { id: "Panduan Evaluasi Pembelajaran", en: "Learning Evaluation Guidelines" },
  intro: {
    id:
      "Ketentuan pengukuran, analisis, dan tindak lanjut ketercapaian Capaian Pembelajaran " +
      "Lulusan pada Kurikulum OBE Tahun 2026, berlaku bagi seluruh mata kuliah teori, rumpun " +
      "Teknik Pembuatan Akta, Laboratorium Akta, mata kuliah pilihan, dan Tesis.",
    en:
      "Provisions on measuring, analysing, and following up the attainment of Intended Learning " +
      "Outcomes under the 2026 OBE curriculum, applying to all theory courses, the Deed " +
      "Drafting cluster, the Deed Drafting Laboratory, electives, and the Thesis.",
  },
  seksi: {
    prinsip: { id: "Enam Prinsip Penilaian", en: "Six Principles of Assessment" },
    bobot: { id: "Bobot Komponen Penilaian", en: "Assessment Component Weights" },
    bobotKeterangan: {
      id:
        "Komponen dan bobot ditetapkan dalam Rencana Pembelajaran Semester masing-masing mata " +
        "kuliah dengan mengacu pada pola berikut.",
      en:
        "Components and weights are set in each course’s Semester Learning Plan following the " +
        "pattern below.",
    },
    skala: { id: "Skala Nilai dan Batas Kelulusan", en: "Grading Scale and Pass Mark" },
    ketercapaian: { id: "Perhitungan Ketercapaian", en: "Calculating Attainment" },
    ketercapaianKeterangan: {
      id: "Perhitungan dilakukan berjenjang dari butir penilaian sampai tingkat program studi.",
      en: "The calculation proceeds in stages, from the assessment item up to programme level.",
    },
    kategori: {
      id: "Kategori Ketercapaian dan Tindak Lanjut",
      en: "Attainment Categories and Follow-up",
    },
    remidiasi: { id: "Remidiasi dan Perbaikan Nilai", en: "Retakes and Mark Improvement" },
    kelulusan: {
      id: "Syarat Kelulusan dan Predikat",
      en: "Graduation Requirements and Distinctions",
    },
    kelulusanKeterangan: {
      id:
        "Mahasiswa berhak menyandang gelar Magister Kenotariatan (M.Kn.) apabila memenuhi " +
        "seluruh syarat berikut.",
      en:
        "A student is entitled to the degree of Magister Kenotariatan (M.Kn.) on meeting all of " +
        "the following requirements.",
    },
    siklus: {
      id: "Siklus Evaluasi dan Perbaikan Berkelanjutan",
      en: "Evaluation Cycle and Continuous Improvement",
    },
    ekuivalensi: {
      id: "Ekuivalensi Kurikulum 2021 ke Kurikulum OBE 2026",
      en: "Equivalence from the 2021 Curriculum to the 2026 OBE Curriculum",
    },
    ekuivalensiKeterangan: {
      id:
        "Berlaku bagi mahasiswa angkatan Kurikulum 2021 (36 sks) yang belum menyelesaikan " +
        "studi. Mata kuliah yang dinyatakan setara diakui tanpa perlu ditempuh kembali; selisih " +
        "beban studi dipenuhi dengan menempuh mata kuliah yang belum berpadanan.",
      en:
        "Applies to students admitted under the 2021 curriculum (36 credits) who have not yet " +
        "completed their studies. Courses declared equivalent are recognised without being " +
        "retaken; any shortfall in study load is made up by taking courses without a counterpart.",
    },
  },
  namaDokumen: { id: "Panduan Evaluasi Pembelajaran", en: "Learning Evaluation Guidelines" },
};
