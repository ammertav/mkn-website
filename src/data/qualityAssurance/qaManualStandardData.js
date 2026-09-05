/**
 * Manual Mutu — Fakultas Hukum UNISSULA.
 *
 * SUMBER:
 *   - Manual Sistem Penjaminan Mutu Internal (SPMI) Fakultas Hukum UNISSULA,
 *     Kode MAN/SA-FH/MUTU-01, Revisi 03, 30 September 2025, 23 halaman
 *   - Pedoman Penerapan Siklus SPMI, Kode PPS/SA-FH/MUTU-01, Revisi 03,
 *     30 September 2025, 27 halaman
 *
 * Kedua dokumen memakai kerangka yang sama: satu bab untuk tiap tahap siklus
 * PPEPP, masing-masing memuat tujuan, luas lingkup, langkah-langkah, dan
 * kualifikasi pejabat pelaksana.
 */

import { BERKAS } from "./berkas";

export const manualDocuments = [
  {
    code: "MAN/SA-FH/MUTU-01",
    title: "Manual Sistem Penjaminan Mutu Internal (SPMI)",
    meta: "Revisi 03 · 30 September 2025 · 23 halaman",
    fileUrl: BERKAS + "MAN-SA-FH-MUTU-01-Manual-SPMI.pdf",
  },
  {
    code: "PPS/SA-FH/MUTU-01",
    title: "Pedoman Penerapan Siklus SPMI",
    meta: "Revisi 03 · 30 September 2025 · 27 halaman",
    fileUrl: BERKAS + "PPS-SA-FH-MUTU-01-Pedoman-Penerapan-Siklus-SPMI.pdf",
  },
];

/**
 * Lima manual yang menyusun siklus PPEPP.
 *
 * Isi tiap manual mengikuti empat pokok bahasan yang sama pada dokumen sumber.
 */
export const manualStages = [
  {
    code: "P",
    stage: "Penetapan Standar",
    bab: "Bab IV",
    desc:
      "Mengatur cara merumuskan dan menetapkan standar mutu baru maupun revisi standar yang " +
      "sudah berlaku.",
  },
  {
    code: "P",
    stage: "Pelaksanaan Standar",
    bab: "Bab V",
    desc:
      "Mengatur cara menurunkan standar yang telah ditetapkan menjadi program kerja dan " +
      "menjalankannya di unit kerja serta program studi.",
  },
  {
    code: "E",
    stage: "Evaluasi Pelaksanaan Standar",
    bab: "Bab VI",
    desc:
      "Mengatur cara mengukur ketercapaian standar melalui evaluasi diri, audit mutu internal, " +
      "dan survei pemangku kepentingan.",
  },
  {
    code: "P",
    stage: "Pengendalian Pelaksanaan Standar",
    bab: "Bab VII",
    desc:
      "Mengatur tindak lanjut atas hasil evaluasi, mulai dari tindakan koreksi sampai rapat " +
      "tinjauan manajemen.",
  },
  {
    code: "P",
    stage: "Peningkatan Standar",
    bab: "Bab VIII",
    desc:
      "Mengatur cara menaikkan mutu standar setelah satu siklus selesai, termasuk melalui " +
      "pembandingan dengan institusi lain.",
  },
];

/** Empat pokok bahasan yang selalu ada pada setiap manual. */
export const manualStructure = [
  {
    title: "Tujuan",
    desc: "Alasan dan sasaran yang hendak dicapai oleh manual pada tahap tersebut.",
  },
  {
    title: "Luas lingkup",
    desc: "Batas keberlakuan manual, termasuk unit kerja dan kegiatan yang tercakup.",
  },
  {
    title: "Langkah-langkah",
    desc: "Urutan tindakan yang harus dijalankan agar tahap tersebut terlaksana.",
  },
  {
    title: "Kualifikasi pejabat/petugas",
    desc: "Pihak yang berwenang menjalankan tahap tersebut beserta syarat jabatannya.",
  },
];

/** Bab III — kerangka pengantar yang sama pada kedua dokumen. */
export const manualScope = [
  "Landasan yuridis manual dan pedoman penerapan siklus SPMI",
  "Fungsi manual dalam penyelenggaraan penjaminan mutu",
  "Macam manual yang berlaku di Fakultas Hukum UNISSULA",
  "Definisi istilah yang dipakai dalam dokumen mutu",
];
