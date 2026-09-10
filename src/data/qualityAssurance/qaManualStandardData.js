/**
 * Manual Mutu — Fakultas Hukum UNISSULA.
 */

import { BERKAS } from "./berkas";

export const manualDocuments = [
  {
    code: "MAN/SA-FH/MUTU-01",
    title: {
      id: "Manual Sistem Penjaminan Mutu Internal (SPMI)",
      en: "Internal Quality Assurance System (SPMI) Manual",
    },
    meta: {
      id: "Revisi 03 · 30 September 2025 · 23 halaman",
      en: "Revision 03 · September 30, 2025 · 23 pages",
    },
    fileUrl: BERKAS + "MAN-SA-FH-MUTU-01-Manual-SPMI.pdf",
  },
  {
    code: "PPS/SA-FH/MUTU-01",
    title: {
      id: "Pedoman Penerapan Siklus SPMI",
      en: "Guidelines for Implementation of SPMI Cycle",
    },
    meta: {
      id: "Revisi 03 · 30 September 2025 · 27 halaman",
      en: "Revision 03 · September 30, 2025 · 27 pages",
    },
    fileUrl: BERKAS + "PPS-SA-FH-MUTU-01-Pedoman-Penerapan-Siklus-SPMI.pdf",
  },
];

/**
 * Lima manual yang menyusun siklus PPEPP.
 */
export const manualStages = [
  {
    code: "P",
    stage: {
      id: "Penetapan Standar",
      en: "Standards Determination",
    },
    bab: "Bab IV",
    desc: {
      id: "Mengatur cara merumuskan dan menetapkan standar mutu baru maupun revisi standar yang sudah berlaku.",
      en: "Governing the formulation and establishment of new quality standards as well as revisions of active standards.",
    },
  },
  {
    code: "P",
    stage: {
      id: "Pelaksanaan Standar",
      en: "Standards Implementation",
    },
    bab: "Bab V",
    desc: {
      id: "Mengatur cara menurunkan standar yang telah ditetapkan menjadi program kerja dan menjalankannya di unit kerja serta program studi.",
      en: "Governing the translation of established standards into operational programs and executing them in work units and study programs.",
    },
  },
  {
    code: "E",
    stage: {
      id: "Evaluasi Pelaksanaan Standar",
      en: "Standards Evaluation",
    },
    bab: "Bab VI",
    desc: {
      id: "Mengatur cara mengukur ketercapaian standar melalui evaluasi diri, audit mutu internal, dan survei pemangku kepentingan.",
      en: "Governing measurement of standard achievement through self-evaluation, internal quality audits, and stakeholder surveys.",
    },
  },
  {
    code: "P",
    stage: {
      id: "Pengendalian Pelaksanaan Standar",
      en: "Standards Control",
    },
    bab: "Bab VII",
    desc: {
      id: "Mengatur tindak lanjut atas hasil evaluasi, mulai dari tindakan koreksi sampai rapat tinjauan manajemen.",
      en: "Governing follow-ups on evaluation findings, ranging from corrective actions to management review meetings.",
    },
  },
  {
    code: "P",
    stage: {
      id: "Peningkatan Standar",
      en: "Standards Improvement",
    },
    bab: "Bab VIII",
    desc: {
      id: "Mengatur cara menaikkan mutu standar setelah satu siklus selesai, termasuk melalui pembandingan dengan institusi lain.",
      en: "Governing standards upgrading upon cycle completion, including benchmarking with peer institutions.",
    },
  },
];

/** Empat pokok bahasan yang selalu ada pada setiap manual. */
export const manualStructure = [
  {
    title: { id: "Tujuan", en: "Objective" },
    desc: {
      id: "Alasan dan sasaran yang hendak dicapai oleh manual pada tahap tersebut.",
      en: "Rationale and targets to be attained by the manual in the corresponding phase.",
    },
  },
  {
    title: { id: "Luas lingkup", en: "Scope" },
    desc: {
      id: "Batas keberlakuan manual, termasuk unit kerja dan kegiatan yang tercakup.",
      en: "Boundaries of manual applicability, encompassing operational units and covered activities.",
    },
  },
  {
    title: { id: "Langkah-langkah", en: "Procedures" },
    desc: {
      id: "Urutan tindakan yang harus dijalankan agar tahap tersebut terlaksana.",
      en: "Sequential actions that must be executed to fulfill the corresponding phase.",
    },
  },
  {
    title: {
      id: "Kualifikasi pejabat/petugas",
      en: "Personnel Qualifications",
    },
    desc: {
      id: "Pihak yang berwenang menjalankan tahap tersebut beserta syarat jabatannya.",
      en: "Authorized parties responsible for executing the phase along with prerequisite qualifications.",
    },
  },
];

/** Bab III — kerangka pengantar yang sama pada kedua dokumen. */
export const manualScope = [
  {
    id: "Landasan yuridis manual dan pedoman penerapan siklus SPMI",
    en: "Juridical foundation of manual and SPMI cycle implementation guidelines",
  },
  {
    id: "Fungsi manual dalam penyelenggaraan penjaminan mutu",
    en: "Function of the manual in quality assurance operations",
  },
  {
    id: "Macam manual yang berlaku di Fakultas Hukum UNISSULA",
    en: "Types of manuals applicable at the Faculty of Law UNISSULA",
  },
  {
    id: "Definisi istilah yang dipakai dalam dokumen mutu",
    en: "Definitions of terms utilized in quality documentation",
  },
];
