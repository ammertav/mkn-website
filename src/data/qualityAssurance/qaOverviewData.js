/**
 * Gugus Penjaminan Mutu — MKn UNISSULA.
 *
 * SUMBER:
 *   - Surat Nomor 932/A.1/MKN-FH/SA/IX/2026 tanggal 2 September 2026 perihal
 *     Permohonan Gugus Penjaminan Mutu, ditandatangani Ketua Program Magister
 *     Kenotariatan Dr. Nanang Sri Darmadi, S.H., M.H. (NIDN 0615087903)
 *   - Keputusan Dekan FH UNISSULA Nomor 1098/A.1/SA-H/X/2025 tanggal
 *     2 Oktober 2025 tentang Pengesahan Dokumen Mutu FH UNISSULA Tahun 2025
 *   - Kebijakan SPMI FH UNISSULA, KBJ/SA-FH/MUTU-01, Revisi 03,
 *     30 September 2025
 *
 * PERLU KONFIRMASI PRODI:
 *   - Berkas "S2 MKN FH SK DEKAN FH PENJAMINAN MUTU" berupa pindaian tanpa
 *     lapisan teks, sehingga nomor dan tanggal SK penetapan gugus belum dapat
 *     dibaca. Susunan gugus di bawah ini diambil dari surat permohonannya,
 *     bukan dari SK penetapannya.
 *   - Surat permohonan bertanggal 2 September 2026, sedangkan SK Dokumen Mutu
 *     bertanggal 2 Oktober 2025. Mohon dipastikan tahun pada surat permohonan.
 */

import { BERKAS } from "./berkas";

export const qualityMetrics = [
  { value: "PPEPP", label: "SIKLUS MUTU" },
  { value: "23", label: "DOKUMEN DISAHKAN SK DEKAN" },
  { value: "21", label: "STANDAR MUTU" },
  { value: "19", label: "FORMULIR MUTU" },
];

/**
 * Catatan cakupan angka di atas.
 *
 * TEMUAN YANG PERLU DIKONFIRMASI PRODI — Lampiran SK Nomor 1098/A.1/SA-H/X/2025
 * memuat 23 dokumen, yaitu Kebijakan Mutu (1), Pedoman Penerapan Siklus SPMI
 * (1), dan 21 dokumen standar. Manual SPMI (MAN/SA-FH/MUTU-01) serta Formulir
 * SPMI (FRM/SA-FH/MUTU-02) TIDAK tercantum pada lampiran tersebut, padahal
 * kedua berkas ada, berkode resmi, dan memakai blok pengesahan yang sama.
 * Mohon dipastikan apakah keduanya perlu ditambahkan ke lampiran SK.
 */
export const cakupanDokumen =
  "Angka 23 mengikuti Lampiran Keputusan Dekan Nomor 1098/A.1/SA-H/X/2025, yang memuat " +
  "Kebijakan Mutu, Pedoman Penerapan Siklus SPMI, dan 21 dokumen standar. Manual SPMI dan " +
  "Formulir SPMI ditampilkan di situs ini karena berkasnya berkode resmi, meskipun belum " +
  "tercantum pada lampiran SK tersebut.";

/** Susunan Gugus Penjaminan Mutu Program Studi Magister Kenotariatan. */
export const committeeMembers = [
  {
    name: "Prof. Dr. Soegianto, S.H., M.Kn., M.H.",
    position: "Ketua",
  },
  {
    name: "Dr. Denny Suwondo, S.H., M.H.",
    position: "Sekretaris",
  },
  {
    name: "Anugrah Surya Kusuma, S.H., M.H.",
    position: "Anggota",
  },
];

export const committeeMeta = {
  dasar:
    "Diajukan melalui surat Nomor 932/A.1/MKN-FH/SA/IX/2026 kepada Dekan Fakultas Hukum " +
    "UNISSULA, dalam rangka persiapan akreditasi ACQUIN Program Magister Kenotariatan.",
};

/** Berkas pembentukan gugus penjaminan mutu. */
export const committeeDocuments = [
  {
    code: "932/A.1/MKN-FH/SA/IX/2026",
    title: "Permohonan Gugus Penjaminan Mutu Program Studi Magister Kenotariatan",
    meta: "Surat Ketua Program Studi kepada Dekan Fakultas Hukum",
    fileUrl: BERKAS + "Permohonan-Gugus-Penjaminan-Mutu.pdf",
  },
  {
    code: "SK Dekan",
    title: "Keputusan Dekan tentang Gugus Penjaminan Mutu",
    meta: "Pindaian tanpa lapisan teks — nomor dan tanggal belum terbaca",
    fileUrl: BERKAS + "SK-Dekan-Gugus-Penjaminan-Mutu.pdf",
  },
];

/**
 * Perangkat penjaminan mutu tingkat fakultas.
 *
 * Diambil dari blok pengesahan yang identik pada Kebijakan SPMI, Manual SPMI,
 * Pedoman Penerapan Siklus SPMI, dan seluruh dokumen standar.
 */
export const facultyRoles = [
  {
    process: "Dirumuskan",
    name: "Prof. Dr. Hj. Sri Endah Wahyuningsih, S.H., M.Hum.",
    role: "Unit Penjaminan Mutu Internal Fakultas Hukum UNISSULA",
  },
  {
    process: "Dipertimbangkan",
    name: "Dr. Nanang Sri Darmadi, S.H., M.H.",
    role: "Ketua Senat Fakultas Hukum UNISSULA",
  },
  {
    process: "Disetujui",
    name: "Dr. Ida Musofiana, S.H., M.H.",
    role: "Wakil Dekan I Fakultas Hukum UNISSULA",
  },
  {
    process: "Ditetapkan",
    name: "Prof. Dr. H. Jawade Hafidz, S.H., M.H.",
    role: "Dekan Fakultas Hukum UNISSULA",
  },
  {
    process: "Dikendalikan",
    name: "Dr. Lathifah Hanim, S.H., M.Hum., M.Kn.",
    role: "Kepala Penjaminan Mutu Fakultas Hukum UNISSULA",
  },
];

/** Lima tahap siklus SPMI. Kode A–E dipakai pada penomoran formulir mutu. */
export const qualityCycles = [
  {
    code: "A",
    stage: "Penetapan",
    desc:
      "Standar mutu dirumuskan, dibahas, dan ditetapkan sebagai acuan penyelenggaraan " +
      "pendidikan, penelitian, pengabdian kepada masyarakat, dan pengelolaan fakultas.",
  },
  {
    code: "B",
    stage: "Pelaksanaan",
    desc:
      "Standar yang telah ditetapkan disosialisasikan, diturunkan menjadi program kerja, " +
      "lalu dijalankan unit kerja dan program studi.",
  },
  {
    code: "C",
    stage: "Evaluasi",
    desc:
      "Ketercapaian standar diukur melalui evaluasi diri, audit mutu internal, survei " +
      "pemangku kepentingan, dan evaluasi dosen oleh mahasiswa.",
  },
  {
    code: "D",
    stage: "Pengendalian",
    desc:
      "Temuan evaluasi ditindaklanjuti melalui permintaan tindakan koreksi, rencana tindak " +
      "lanjut, rapat tinjauan manajemen, dan verifikasi status temuan.",
  },
  {
    code: "E",
    stage: "Peningkatan",
    desc:
      "Standar dinaikkan melalui usulan peningkatan (kaizen) dan pembandingan " +
      "(benchmarking), lalu dilaporkan dalam laporan pelaksanaan SPMI tahunan.",
  },
];

/** Empat jenis dokumen yang membentuk arsitektur SPMI. */
export const documentArchitecture = [
  {
    code: "KBJ",
    name: "Kebijakan Mutu",
    count: "1 dokumen",
    desc: "Arah, asas, prinsip, dan tujuan penjaminan mutu.",
    href: "/quality-assurance/qa-documents/qa-policy",
  },
  {
    code: "MAN · PPS",
    name: "Manual Mutu",
    count: "2 dokumen",
    // PPS tercantum pada lampiran SK, MAN belum — lihat `cakupanDokumen`.
    desc: "Cara kerja setiap tahap siklus PPEPP beserta kualifikasi pelaksananya.",
    href: "/quality-assurance/qa-documents/qa-manual-standard",
  },
  {
    code: "STD",
    name: "Standar Mutu",
    count: "21 dokumen",
    desc: "Tolok ukur yang harus dipenuhi pada bidang akademik dan non-akademik.",
    href: "/quality-assurance/qa-documents/qa-standar",
  },
  {
    code: "FRM",
    name: "Formulir Mutu",
    count: "19 formulir",
    desc: "Sarana perekam bukti pelaksanaan standar pada setiap tahap siklus.",
    href: "/quality-assurance/qa-documents/qa-forms",
  },
];

/** Landasan hukum, dikutip dari Keputusan Dekan Nomor 1098/A.1/SA-H/X/2025. */
export const legalBasis = [
  "Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional",
  "Undang-Undang Nomor 12 Tahun 2012 tentang Pendidikan Tinggi",
  "Peraturan Pemerintah Nomor 4 Tahun 2014 tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi",
  "Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 53 Tahun 2023 tentang Penjaminan Mutu Pendidikan Tinggi",
  "Anggaran Dasar Yayasan Badan Wakaf Sultan Agung, Akta Notaris Tan A Sioe Nomor 86 Tahun 1950, terakhir diubah dengan Akta Notaris M. Hafidh, S.H. Nomor 20 Tahun 2018",
  "Statuta Universitas Islam Sultan Agung (UNISSULA) Tahun 2019",
];

export const legalBasisCatatan =
  "Kebijakan SPMI Fakultas Hukum Revisi 03 mencatat terbitnya Permendiktisaintek Nomor 39 " +
  "Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi yang menggantikan " +
  "Permendikbudristek Nomor 53 Tahun 2023.";
