/**
 * Tingkat kelulusan Program Magister Kenotariatan UNISSULA.
 *
 * SUMBER UTAMA: "Laporan Monev Pembelajaran Semester Genap Tahun Akademik
 * 2024/2025", Program Magister Kenotariatan FH UNISSULA, 25 Agustus 2025,
 * ditandatangani Ketua Program Studi — bagian "Rekapitulasi Lulusan Semester
 * Genap 2024/2025" yang dihitung per angkatan semester.
 *
 * Laporan yang sama juga memuat hitungan per tahun akademik, tetapi menyatakan
 * hasilnya "tidak sesuai dengan yang sebenarnya" karena penerimaan mahasiswa
 * berlangsung setiap semester. Karena itu yang ditayangkan hanya hitungan per
 * semester.
 *
 * IPK lulusan tidak ada di laporan Monev; angkanya diambil dari Laporan Audit
 * Mutu Internal (AMI) 2024, 21 November 2024.
 *
 * CATATAN UNTUK VERIFIKASI: tiga angka ringkasan disalin apa adanya, tetapi
 * tidak seluruhnya dapat dihitung ulang dari tabel angkatan di laporan yang
 * sama. Rata-rata masa studi hanya cocok untuk dua angkatan terakhir (misalnya
 * angkatan 20221 tertulis 1,63 tahun, sedangkan sebaran lulusannya menghasilkan
 * ±1,91 tahun), dan jumlah lulus tepat waktu tertulis 353, sedangkan lulusan
 * pada semester ke-3 dan ke-4 menurut tabel berjumlah 402. Mohon dikonfirmasi
 * ke Gugus Penjaminan Mutu.
 */

export const sumberKelulusan = [
  {
    judul: {
      id: "Laporan Monev Pembelajaran Semester Genap TA 2024/2025",
      en: "Learning Monitoring and Evaluation Report, Even Semester AY 2024/2025",
    },
    tanggal: { id: "25 Agustus 2025", en: "25 August 2025" },
    cakupan: {
      id: "Rekapitulasi lulusan, masa studi, keberhasilan studi, dan kelulusan tepat waktu",
      en: "Graduate recapitulation, study duration, study success, and on-time graduation",
    },
  },
  {
    judul: {
      id: "Laporan Audit Mutu Internal (AMI) 2024",
      en: "Internal Quality Audit (AMI) Report 2024",
    },
    tanggal: { id: "21 November 2024", en: "21 November 2024" },
    cakupan: { id: "Rata-rata IPK lulusan", en: "Average graduate GPA" },
  },
];

export const ringkasanKelulusan = [
  {
    nilai: { id: "1,74 tahun", en: "1.74 years" },
    label: { id: "Rata-rata masa studi", en: "Average study duration" },
    keterangan: {
      id: "Monev Genap TA 2024/2025",
      en: "Even Semester AY 2024/2025 monitoring",
    },
  },
  {
    nilai: { id: "81%", en: "81%" },
    label: { id: "Keberhasilan studi", en: "Study success rate" },
    keterangan: {
      id: "Monev Genap TA 2024/2025",
      en: "Even Semester AY 2024/2025 monitoring",
    },
  },
  {
    nilai: { id: "48%", en: "48%" },
    label: { id: "Lulus tepat waktu", en: "On-time graduation" },
    keterangan: {
      id: "353 dari 738 mahasiswa, lulus dalam 3–4 semester",
      en: "353 of 738 students, graduating in 3–4 semesters",
    },
  },
  {
    nilai: { id: "3,72", en: "3.72" },
    label: { id: "Rata-rata IPK lulusan", en: "Average graduate GPA" },
    keterangan: {
      id: "Audit Mutu Internal, November 2024",
      en: "Internal Quality Audit, November 2024",
    },
  },
];

/**
 * Semester kelulusan, sesuai kode periode Sistem Informasi Akademik:
 * digit terakhir 1 = gasal, 2 = genap; empat digit awal = tahun awal TA.
 * Kolom 20211 dan 20212 pada laporan sumber tidak berisi lulusan, jadi tidak
 * ditampilkan.
 */
export const periodeLulus = [
  { kode: "20221", label: { id: "Gasal 2022/2023", en: "Odd 2022/23" } },
  { kode: "20222", label: { id: "Genap 2022/2023", en: "Even 2022/23" } },
  { kode: "20231", label: { id: "Gasal 2023/2024", en: "Odd 2023/24" } },
  { kode: "20232", label: { id: "Genap 2023/2024", en: "Even 2023/24" } },
  { kode: "20241", label: { id: "Gasal 2024/2025", en: "Odd 2024/25" } },
  { kode: "20242", label: { id: "Genap 2024/2025", en: "Even 2024/25" } },
];

/** Rekapitulasi per angkatan masuk, disalin dari laporan Monev Genap 2024/2025. */
export const rekapAngkatan = [
  {
    kode: "20211",
    angkatan: { id: "Gasal 2021/2022", en: "Odd 2021/22" },
    diterima: 100,
    lulus: { 20221: 38, 20222: 22, 20231: 7, 20232: 2, 20241: 6, 20242: 6 },
    jumlahLulus: 81,
    masaStudi: { id: "1,99", en: "1.99" },
  },
  {
    kode: "20212",
    angkatan: { id: "Genap 2021/2022", en: "Even 2021/22" },
    diterima: 91,
    lulus: { 20222: 51, 20231: 15, 20232: 8, 20241: 5, 20242: 3 },
    jumlahLulus: 82,
    masaStudi: { id: "1,74", en: "1.74" },
  },
  {
    kode: "20221",
    angkatan: { id: "Gasal 2022/2023", en: "Odd 2022/23" },
    diterima: 115,
    lulus: { 20231: 42, 20232: 23, 20241: 18, 20242: 4 },
    jumlahLulus: 87,
    masaStudi: { id: "1,63", en: "1.63" },
  },
  {
    kode: "20222",
    angkatan: { id: "Genap 2022/2023", en: "Even 2022/23" },
    diterima: 119,
    lulus: { 20232: 1, 20241: 67, 20242: 12 },
    jumlahLulus: 80,
    masaStudi: { id: "1,88", en: "1.88" },
  },
  {
    kode: "20231",
    angkatan: { id: "Gasal 2023/2024", en: "Odd 2023/24" },
    diterima: 169,
    lulus: { 20241: 54, 20242: 40 },
    jumlahLulus: 94,
    masaStudi: { id: "1,71", en: "1.71" },
  },
  {
    kode: "20232",
    angkatan: { id: "Genap 2023/2024", en: "Even 2023/24" },
    diterima: 144,
    lulus: { 20242: 49 },
    jumlahLulus: 49,
    masaStudi: { id: "1,50", en: "1.50" },
  },
];
