/**
 * Kalender Akademik Semester Gasal 2026/2027 — Program Magister (S2) Kenotariatan.
 *
 * SUMBER: dokumen resmi "Kaldik 2026-1 MKN.docx" yang ditetapkan di Semarang,
 * 14 Juli 2026 oleh Ketua Program Magister Kenotariatan. Nama kegiatan, tanggal,
 * dan keterangan disalin apa adanya dari tabel dokumen tersebut.
 *
 * REVISI DOKUMEN: pada versi terbaru, No. 11 (Batas pendaftaran Ujian tesis
 * Wisuda 99) diperbaiki dari "25 November 2025" menjadi "25 November 2026".
 *
 * DUA TANGGAL YANG MASIH PERLU DIKONFIRMASI KE PRODI — ditulis sesuai dokumen,
 * tetapi tahunnya tampak keliru ketik karena semester gasal 2026/2027 berjalan
 * September 2026 – Februari 2027:
 *   - No. 10  Ujian Akhir Semester 1-2  "5 - 17 Januari 2026"     (mestinya 2027?)
 *   - No. 19  Kegiatan Ilmiah  "Januari - Februari 2026"          (mestinya 2027?)
 * Jangan diperbaiki sepihak — mintakan koreksi resmi lebih dulu.
 */

/** Satu baris tabel kalender. `penting` menandai batas waktu yang ditebalkan di dokumen. */
export const kegiatanKalender = [
  {
    no: 1,
    kegiatan: { id: "Heregistrasi, KRS Online", en: "Re-registration, Online KRS" },
    waktu: {
      id: "29 Agustus – 5 September 2026",
      en: "29 August – 5 September 2026",
    },
    keterangan: {
      id: "Membayar biaya kuliah · KRS by sistem admin",
      en: "Tuition payment · KRS via the admin system",
    },
  },
  {
    no: 2,
    kegiatan: { id: "Penjelasan Tesis, KKL", en: "Thesis and KKL Briefing" },
    waktu: { id: "12 September 2026", en: "12 September 2026" },
    keterangan: { id: "Semester 2", en: "Semester 2" },
  },
  {
    no: 3,
    kegiatan: { id: "Pengajuan Judul Tesis", en: "Thesis Title Submission" },
    waktu: { id: "Mulai 12 September 2026", en: "From 12 September 2026" },
    keterangan: { id: "Semester 2", en: "Semester 2" },
  },
  {
    no: 4,
    kegiatan: {
      id: "Penjelasan Akademik dan Matrikulasi",
      en: "Academic Briefing and Matriculation",
    },
    waktu: { id: "12–13 September 2026", en: "12–13 September 2026" },
    keterangan: { id: "Mahasiswa baru", en: "New students" },
  },
  {
    no: 5,
    kegiatan: { id: "Awal Kuliah", en: "Start of Classes" },
    waktu: { id: "19 September 2026", en: "19 September 2026" },
    keterangan: null,
  },
  {
    no: 6,
    kegiatan: {
      id: "Batas Pendaftaran Ujian Tesis Wisuda 98",
      en: "Registration Deadline, Thesis Defence for the 98th Graduation",
    },
    waktu: { id: "18 Agustus 2026", en: "18 August 2026" },
    keterangan: null,
    penting: true,
  },
  {
    no: 7,
    kegiatan: {
      id: "Penglepasan Fakultas Hukum ke-98",
      en: "98th Faculty of Law Farewell Ceremony",
    },
    waktu: { id: "18 September 2026", en: "18 September 2026" },
    keterangan: null,
  },
  {
    no: 8,
    kegiatan: { id: "Wisuda UNISSULA ke-98", en: "98th UNISSULA Graduation" },
    waktu: { id: "19 September 2026", en: "19 September 2026" },
    keterangan: null,
  },
  {
    no: 9,
    kegiatan: {
      id: "Ujian Akhir Semester — Semester 3",
      en: "Final Semester Examinations — Semester 3",
    },
    waktu: { id: "14–22 Desember 2026", en: "14–22 December 2026" },
    keterangan: null,
  },
  {
    no: 10,
    kegiatan: {
      id: "Ujian Akhir Semester — Semester 1–2",
      en: "Final Semester Examinations — Semesters 1–2",
    },
    waktu: { id: "5–17 Januari 2026", en: "5–17 January 2026" },
    keterangan: null,
  },
  {
    no: 11,
    kegiatan: {
      id: "Batas Pendaftaran Ujian Tesis Wisuda 99",
      en: "Registration Deadline, Thesis Defence for the 99th Graduation",
    },
    waktu: { id: "25 November 2026", en: "25 November 2026" },
    keterangan: { id: "Semester 4–8", en: "Semesters 4–8" },
    penting: true,
  },
  {
    no: 12,
    kegiatan: {
      id: "Penglepasan Fakultas Hukum ke-99",
      en: "99th Faculty of Law Farewell Ceremony",
    },
    waktu: { id: "11 Desember 2026", en: "11 December 2026" },
    keterangan: { id: "Semester 4–8", en: "Semesters 4–8" },
  },
  {
    no: 13,
    kegiatan: { id: "Wisuda UNISSULA ke-99", en: "99th UNISSULA Graduation" },
    waktu: { id: "12 Desember 2026", en: "12 December 2026" },
    keterangan: { id: "Semester 4–8", en: "Semesters 4–8" },
  },
  {
    no: 14,
    kegiatan: {
      id: "Batas Submit Artikel Jurnal Ilmiah",
      en: "Deadline for Submitting a Scholarly Journal Article",
    },
    waktu: { id: "25 November 2026", en: "25 November 2026" },
    keterangan: { id: "Syarat wisuda", en: "Graduation requirement" },
  },
  {
    no: 15,
    kegiatan: { id: "KKL Luar Negeri", en: "Overseas Field Study (KKL)" },
    waktu: { id: "Februari 2027", en: "February 2027" },
    keterangan: {
      id: "Semester 2 dan Semester 3–8 yang belum ikut KKL",
      en: "Semester 2 and Semesters 3–8 students who have not yet joined a KKL",
    },
  },
  {
    no: 16,
    kegiatan: { id: "KKL Dalam Negeri", en: "Domestic Field Study (KKL)" },
    waktu: { id: "Januari 2027", en: "January 2027" },
    keterangan: {
      id: "Semester 2 dan Semester 3–8 yang belum ikut KKL",
      en: "Semester 2 and Semesters 3–8 students who have not yet joined a KKL",
    },
  },
  {
    no: 17,
    kegiatan: { id: "TOEFL", en: "TOEFL" },
    waktu: { id: "6–7 Februari 2027", en: "6–7 February 2027" },
    keterangan: {
      id: "Semester 2 dan Semester 3–8 yang belum ikut TOEFL",
      en: "Semester 2 and Semesters 3–8 students who have not yet taken the TOEFL",
    },
  },
  {
    no: 18,
    kegiatan: { id: "Pengisian EDOM", en: "EDOM (Lecturer Evaluation) Completion" },
    waktu: { id: "4–8 Januari 2027", en: "4–8 January 2027" },
    keterangan: null,
  },
  {
    no: 19,
    kegiatan: { id: "Kegiatan Ilmiah", en: "Scholarly Activities" },
    waktu: { id: "Januari – Februari 2026", en: "January – February 2026" },
    keterangan: null,
  },
  {
    no: 20,
    kegiatan: {
      id: "Batas Pendaftaran Ujian Tesis Wisuda 100",
      en: "Registration Deadline, Thesis Defence for the 100th Graduation",
    },
    waktu: { id: "20 Februari 2027", en: "20 February 2027" },
    keterangan: null,
    penting: true,
  },
  {
    no: 21,
    kegiatan: {
      id: "Penglepasan Fakultas Hukum ke-100",
      en: "100th Faculty of Law Farewell Ceremony",
    },
    waktu: { id: "26 Maret 2027", en: "26 March 2027" },
    keterangan: null,
  },
  {
    no: 22,
    kegiatan: { id: "Wisuda UNISSULA ke-100", en: "100th UNISSULA Graduation" },
    waktu: { id: "27 Maret 2027", en: "27 March 2027" },
    keterangan: null,
  },
];

/** Teks halaman Kalender Akademik. */
export const halaman = {
  meta: {
    title: { id: "Kalender Akademik | MKn UNISSULA", en: "Academic Calendar | MKn UNISSULA" },
    description: {
      id:
        "Kalender akademik Semester Gasal 2026/2027 Program Studi Magister Kenotariatan " +
        "UNISSULA — heregistrasi, awal kuliah, ujian akhir semester, KKL, TOEFL, batas " +
        "pendaftaran ujian tesis, dan jadwal wisuda.",
      en:
        "The Odd Semester 2026/2027 academic calendar of the UNISSULA Master of Notarial Law " +
        "Study Programme — re-registration, start of classes, final examinations, field study, " +
        "TOEFL, thesis defence deadlines, and graduation dates.",
    },
  },
  judul: { id: "Kalender Akademik", en: "Academic Calendar" },
  semester: { id: "Semester Gasal 2026/2027", en: "Odd Semester 2026/2027" },
  intro: {
    id:
      "Jadwal resmi kegiatan akademik Program Magister (S2) Kenotariatan sepanjang Semester " +
      "Gasal 2026/2027: heregistrasi, awal kuliah, ujian akhir semester, kuliah kerja " +
      "lapangan, TOEFL, batas pendaftaran ujian tesis, hingga wisuda.",
    en:
      "The official schedule of academic activities of the Master of Notarial Law programme " +
      "throughout Odd Semester 2026/2027: re-registration, start of classes, final " +
      "examinations, field study, TOEFL, thesis defence deadlines, and graduation.",
  },
  kolom: {
    no: { id: "No", en: "No" },
    kegiatan: { id: "Jenis Kegiatan", en: "Activity" },
    waktu: { id: "Pelaksanaan", en: "Date" },
    keterangan: { id: "Keterangan", en: "Notes" },
  },
};
