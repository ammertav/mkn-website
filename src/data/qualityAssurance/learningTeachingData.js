/**
 * Laporan pembelajaran Program Studi Magister Kenotariatan UNISSULA.
 *
 * SUMBER: "Laporan Monev Pembelajaran Semester Gasal Tahun Akademik 2024/2025
 * Program Magister Kenotariatan" (Semarang, 25 Februari 2025) dan "... Semester
 * Genap Tahun Akademik 2024/2025" (Semarang, 25 Agustus 2025), keduanya
 * ditandatangani Ketua Program Magister Kenotariatan.
 *
 * PRINSIP: setiap teks dan angka yang tampil harus tertulis di laporan. Yang
 * dirapikan hanya salah ketik yang tidak mengubah isi ("dilakuakan" menjadi
 * "dilakukan").
 *
 * CATATAN:
 *   - Kehadiran mahasiswa semester genap: Bab II laporan genap menulis "semester
 *     Genap tahun akademik 2023/2024 ... rata-rata 89,13%" (kalimat yang sama
 *     persis dengan laporan gasal), sedangkan Bab III Penutup laporan genap
 *     menulis "sebesar 88%". Yang ditampilkan angka Penutup.
 *   - Data per dosen, daftar mata kuliah, dan rekapitulasi mahasiswa per
 *     angkatan tidak ditampilkan; halaman ini hanya memuat angka tingkat
 *     program studi yang dinyatakan di laporan.
 *   - Butir "Keterserapan lulusan di tingkat Internasional" ada sebagai
 *     instrumen, tetapi isinya tidak dilaporkan, jadi tidak diberi angka.
 */

export const sumberMonev = [
  {
    judul: {
      id: "Laporan Monev Pembelajaran Semester Gasal Tahun Akademik 2024/2025",
      en: "Learning Monitoring and Evaluation Report, Odd Semester AY 2024/2025",
    },
    tanggal: { id: "25 Februari 2025", en: "25 February 2025" },
  },
  {
    judul: {
      id: "Laporan Monev Pembelajaran Semester Genap Tahun Akademik 2024/2025",
      en: "Learning Monitoring and Evaluation Report, Even Semester AY 2024/2025",
    },
    tanggal: { id: "25 Agustus 2025", en: "25 August 2025" },
  },
];

/** Angka semester genap 2024/2025 beserta keterangan yang tertulis di laporan. */
export const sorotanMonev = [
  {
    nilai: { id: "100%", en: "100%" },
    label: { id: "Kehadiran dosen", en: "Lecturer attendance" },
    keterangan: { id: "kriteria sangat baik", en: "rated very good" },
  },
  {
    nilai: { id: "88%", en: "88%" },
    label: { id: "Kehadiran mahasiswa", en: "Student attendance" },
    keterangan: { id: "kesimpulan laporan", en: "report conclusion" },
  },
  {
    nilai: { id: "100%", en: "100%" },
    label: { id: "Kelengkapan RPS dan Kontrak Perkuliahan", en: "Course plans and learning contracts" },
    keterangan: { id: "kriteria sangat baik", en: "rated very good" },
  },
  {
    nilai: { id: "48%", en: "48%" },
    label: { id: "Kelulusan tepat waktu", en: "On-time graduation" },
    keterangan: {
      id: "353 lulus tepat waktu dari 738 mahasiswa diterima",
      en: "353 on-time graduates of 738 admitted students",
    },
  },
];

/** Perbandingan angka yang tertulis pada kedua laporan. */
export const indikatorMonev = [
  {
    kelompok: { id: "Realisasi perkuliahan", en: "Course delivery" },
    butir: [
      {
        label: { id: "Kelengkapan RPS dan Kontrak Perkuliahan", en: "Course plans and learning contracts complete" },
        gasal: { id: "100%", en: "100%" },
        genap: { id: "100%", en: "100%" },
      },
      {
        label: {
          id: "Pencapaian kesesuaian materi perkuliahan dengan RPP",
          en: "Lecture content matching the lesson plan (RPP)",
        },
        gasal: { id: "100%", en: "100%" },
        genap: { id: "100%", en: "100%" },
      },
      {
        label: { id: "Kehadiran dosen dalam memberi perkuliahan", en: "Lecturer attendance" },
        gasal: { id: "100%", en: "100%" },
        genap: { id: "100%", en: "100%" },
      },
      {
        label: { id: "Kehadiran mahasiswa dalam menghadiri perkuliahan", en: "Student attendance" },
        gasal: { id: "89,13%", en: "89.13%" },
        genap: { id: "88%", en: "88%" },
      },
    ],
  },
  {
    kelompok: { id: "Kelulusan", en: "Graduation" },
    butir: [
      {
        label: { id: "Rata-rata masa studi (tahun)", en: "Average study duration (years)" },
        gasal: { id: "1,72", en: "1.72" },
        genap: { id: "1,74", en: "1.74" },
      },
      {
        label: { id: "Keberhasilan studi", en: "Study success rate" },
        gasal: { id: "89%", en: "89%" },
        genap: { id: "81%", en: "81%" },
      },
      {
        label: { id: "Jumlah mahasiswa diterima", en: "Students admitted" },
        gasal: { id: "758", en: "758" },
        genap: { id: "738", en: "738" },
      },
      {
        label: { id: "Jumlah lulus tepat waktu", en: "On-time graduates" },
        gasal: { id: "388", en: "388" },
        genap: { id: "353", en: "353" },
      },
      {
        label: { id: "Prosentase kelulusan tepat waktu", en: "On-time graduation rate" },
        gasal: { id: "51%", en: "51%" },
        genap: { id: "48%", en: "48%" },
      },
    ],
  },
];

/** Bab II huruf e, "Penggunaan Teknologi Informasi" (kalimat sama di kedua laporan). */
export const modaPembelajaran = {
  id:
    "Pelaksanaan perkuliahan dilakukan dengan blended learning, yakni dilakukan secara tatap muka " +
    "(luring) maupun melalui media Zoom/daring, serta menggunakan sistem informasi. Dalam " +
    "pembelajaran telah menggunakan multimedia pembelajaran.",
  en:
    "Courses are delivered through blended learning, namely face-to-face (offline) sessions and " +
    "sessions via Zoom/online, as well as through the information system. Learning already makes " +
    "use of learning multimedia.",
};

/** Bab I huruf D, "Instrumen Monev Proses Pembelajaran". */
export const instrumenMonev = [
  {
    butir: { id: "Realisasi perkuliahan, meliputi:", en: "Course delivery, covering:" },
    rincian: [
      {
        id: "Kelengkapan Rencana Pembelajaran Semester (RPS) dan Kontrak Perkuliahan;",
        en: "Completeness of the Semester Learning Plan (RPS) and learning contract;",
      },
      {
        id: "Pencapaian materi dan kesesuaian materi yang disampaikan di kelas dengan Rencana Pelaksanaan Pembelajaran (RPP);",
        en: "Coverage of material and alignment of material delivered in class with the Lesson Plan (RPP);",
      },
      { id: "Kehadiran dosen dalam perkuliahan;", en: "Lecturer attendance in classes;" },
      { id: "Kehadiran mahasiswa dalam mengikuti perkuliahan.", en: "Student attendance in classes." },
    ],
  },
  { butir: { id: "Rekapitulasi mahasiswa aktif per angkatan;", en: "Recapitulation of active students by intake;" } },
  { butir: { id: "Tingkat kelulusan;", en: "Graduation rate;" } },
  { butir: { id: "Keberhasilan studi;", en: "Study success;" } },
  { butir: { id: "Keterserapan lulusan di tingkat internasional.", en: "Graduate absorption at the international level." } },
];
