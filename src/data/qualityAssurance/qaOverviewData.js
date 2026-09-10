/**
 * Gugus Penjaminan Mutu — MKn UNISSULA.
 */

import { BERKAS } from "./berkas";

export const qualityMetrics = [
  { value: "PPEPP", label: { id: "SIKLUS MUTU", en: "QUALITY CYCLE" } },
  {
    value: "23",
    label: {
      id: "DOKUMEN DISAHKAN SK DEKAN",
      en: "DOCUMENTS APPROVED BY DEAN'S DECREE",
    },
  },
  {
    value: "21",
    label: { id: "STANDAR MUTU", en: "QUALITY STANDARDS" },
  },
  {
    value: "19",
    label: { id: "FORMULIR MUTU", en: "QUALITY FORMS" },
  },
];

export const cakupanDokumen = {
  id: "Angka 23 mengikuti Lampiran Keputusan Dekan Nomor 1098/A.1/SA-H/X/2025, yang memuat Kebijakan Mutu, Pedoman Penerapan Siklus SPMI, dan 21 dokumen standar. Manual SPMI dan Formulir SPMI ditampilkan di situs ini karena berkasnya berkode resmi, meskipun belum tercantum pada lampiran SK tersebut.",
  en: "The number 23 follows the Annex of Dean's Decree Number 1098/A.1/SA-H/X/2025, which includes Quality Policy, Guidelines for Implementation of SPMI Cycle, and 21 standards documents. The SPMI Manual and SPMI Forms are displayed on this site as they have official document codes, although not yet listed in the decree's annex.",
};

/** Susunan Gugus Penjaminan Mutu Program Studi Magister Kenotariatan. */
export const committeeMembers = [
  {
    name: "Prof. Dr. Soegianto, S.H., M.Kn., M.H.",
    position: { id: "Ketua", en: "Head" },
  },
  {
    name: "Dr. Denny Suwondo, S.H., M.H.",
    position: { id: "Sekretaris", en: "Secretary" },
  },
  {
    name: "Anugrah Surya Kusuma, S.H., M.H.",
    position: { id: "Anggota", en: "Member" },
  },
];

export const committeeMeta = {
  dasar: {
    id: "Diajukan melalui surat Nomor 932/A.1/MKN-FH/SA/IX/2026 kepada Dekan Fakultas Hukum UNISSULA, dalam rangka persiapan akreditasi ACQUIN Program Magister Kenotariatan.",
    en: "Proposed through letter Number 932/A.1/MKN-FH/SA/IX/2026 to the Dean of Faculty of Law UNISSULA, in preparation for the ACQUIN accreditation of the Master of Notarial Law Program.",
  },
};

/** Berkas pembentukan gugus penjaminan mutu. */
export const committeeDocuments = [
  {
    code: "932/A.1/MKN-FH/SA/IX/2026",
    title: {
      id: "Permohonan Gugus Penjaminan Mutu Program Studi Magister Kenotariatan",
      en: "Application for Quality Assurance Unit of Master of Notarial Law Program",
    },
    meta: {
      id: "Surat Ketua Program Studi kepada Dekan Fakultas Hukum",
      en: "Letter of Head of Study Program to Dean of Faculty of Law",
    },
    fileUrl: BERKAS + "Permohonan-Gugus-Penjaminan-Mutu.pdf",
  },
  {
    code: "SK Dekan",
    title: {
      id: "Keputusan Dekan tentang Gugus Penjaminan Mutu",
      en: "Dean's Decree on Quality Assurance Unit",
    },
    meta: {
      id: "Pindaian tanpa lapisan teks — nomor dan tanggal belum terbaca",
      en: "Scanned document without OCR layer — number and date unverified",
    },
    fileUrl: BERKAS + "SK-Dekan-Gugus-Penjaminan-Mutu.pdf",
  },
];

/** Perangkat penjaminan mutu tingkat fakultas. */
export const facultyRoles = [
  {
    process: { id: "Dirumuskan", en: "Formulated by" },
    name: "Prof. Dr. Hj. Sri Endah Wahyuningsih, S.H., M.Hum.",
    role: {
      id: "Unit Penjaminan Mutu Internal Fakultas Hukum UNISSULA",
      en: "Internal Quality Assurance Unit of Faculty of Law UNISSULA",
    },
  },
  {
    process: { id: "Dipertimbangkan", en: "Deliberated by" },
    name: "Dr. Nanang Sri Darmadi, S.H., M.H.",
    role: {
      id: "Ketua Senat Fakultas Hukum UNISSULA",
      en: "Chairman of the Senate of Faculty of Law UNISSULA",
    },
  },
  {
    process: { id: "Disetujui", en: "Approved by" },
    name: "Dr. Ida Musofiana, S.H., M.H.",
    role: {
      id: "Wakil Dekan I Fakultas Hukum UNISSULA",
      en: "Vice Dean I of Faculty of Law UNISSULA",
    },
  },
  {
    process: { id: "Ditetapkan", en: "Enacted by" },
    name: "Prof. Dr. H. Jawade Hafidz, S.H., M.H.",
    role: {
      id: "Dekan Fakultas Hukum UNISSULA",
      en: "Dean of Faculty of Law UNISSULA",
    },
  },
  {
    process: { id: "Dikendalikan", en: "Controlled by" },
    name: "Dr. Lathifah Hanim, S.H., M.Hum., M.Kn.",
    role: {
      id: "Kepala Penjaminan Mutu Fakultas Hukum UNISSULA",
      en: "Head of Quality Assurance of Faculty of Law UNISSULA",
    },
  },
];

/** Lima tahap siklus SPMI. Kode A–E dipakai pada penomoran formulir mutu. */
export const qualityCycles = [
  {
    code: "A",
    stage: { id: "Penetapan", en: "Determination" },
    desc: {
      id: "Standar mutu dirumuskan, dibahas, dan ditetapkan sebagai acuan penyelenggaraan pendidikan, penelitian, pengabdian kepada masyarakat, dan pengelolaan fakultas.",
      en: "Quality standards are formulated, discussed, and established as benchmarks for education, research, community service, and faculty management.",
    },
  },
  {
    code: "B",
    stage: { id: "Pelaksanaan", en: "Implementation" },
    desc: {
      id: "Standar yang telah ditetapkan disosialisasikan, diturunkan menjadi program kerja, lalu dijalankan unit kerja dan program studi.",
      en: "Established standards are socialized, translated into work programs, and executed by work units and study programs.",
    },
  },
  {
    code: "C",
    stage: { id: "Evaluasi", en: "Evaluation" },
    desc: {
      id: "Ketercapaian standar diukur melalui evaluasi diri, audit mutu internal, survei pemangku kepentingan, dan evaluasi dosen oleh mahasiswa.",
      en: "Standard achievements are measured through self-evaluation, internal quality audits, stakeholder surveys, and student evaluations of faculty.",
    },
  },
  {
    code: "D",
    stage: { id: "Pengendalian", en: "Control" },
    desc: {
      id: "Temuan evaluasi ditindaklanjuti melalui permintaan tindakan koreksi, rencana tindak lanjut, rapat tinjauan manajemen, dan verifikasi status temuan.",
      en: "Evaluation findings are followed up through correction action requests, action plans, management review meetings, and verification of findings status.",
    },
  },
  {
    code: "E",
    stage: { id: "Peningkatan", en: "Improvement" },
    desc: {
      id: "Standar dinaikkan melalui usulan peningkatan (kaizen) dan pembandingan (benchmarking), lalu dilaporkan dalam laporan pelaksanaan SPMI tahunan.",
      en: "Standards are upgraded through kaizen proposals and benchmarking, then documented in the annual SPMI implementation report.",
    },
  },
];

/** Empat jenis dokumen yang membentuk arsitektur SPMI. */
export const documentArchitecture = [
  {
    code: "KBJ",
    name: { id: "Kebijakan Mutu", en: "Quality Policy" },
    count: { id: "1 dokumen", en: "1 document" },
    desc: {
      id: "Arah, asas, prinsip, dan tujuan penjaminan mutu.",
      en: "Direction, foundations, principles, and goals of quality assurance.",
    },
    href: "/quality-assurance/qa-documents/qa-policy",
  },
  {
    code: "MAN · PPS",
    name: { id: "Manual Mutu", en: "Quality Manual" },
    count: { id: "2 dokumen", en: "2 documents" },
    desc: {
      id: "Cara kerja setiap tahap siklus PPEPP beserta kualifikasi pelaksananya.",
      en: "Operational procedures for each PPEPP cycle stage and personnel qualifications.",
    },
    href: "/quality-assurance/qa-documents/qa-manual-standard",
  },
  {
    code: "STD",
    name: { id: "Standar Mutu", en: "Quality Standards" },
    count: { id: "21 dokumen", en: "21 documents" },
    desc: {
      id: "Tolok ukur yang harus dipenuhi pada bidang akademik dan non-akademik.",
      en: "Benchmarks to be fulfilled across academic and non-academic domains.",
    },
    href: "/quality-assurance/qa-documents/qa-standar",
  },
  {
    code: "FRM",
    name: { id: "Formulir Mutu", en: "Quality Forms" },
    count: { id: "19 formulir", en: "19 forms" },
    desc: {
      id: "Sarana perekam bukti pelaksanaan standar pada setiap tahap siklus.",
      en: "Recording instruments providing evidence of standards implementation across cycle stages.",
    },
    href: "/quality-assurance/qa-documents/qa-forms",
  },
];

/** Landasan hukum, dikutip dari Keputusan Dekan Nomor 1098/A.1/SA-H/X/2025. */
export const legalBasis = [
  {
    id: "Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional",
    en: "Law Number 20 of 2003 concerning National Education System",
  },
  {
    id: "Undang-Undang Nomor 12 Tahun 2012 tentang Pendidikan Tinggi",
    en: "Law Number 12 of 2012 concerning Higher Education",
  },
  {
    id: "Peraturan Pemerintah Nomor 4 Tahun 2014 tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi",
    en: "Government Regulation Number 4 of 2014 concerning Higher Education Implementation and Management",
  },
  {
    id: "Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 53 Tahun 2023 tentang Penjaminan Mutu Pendidikan Tinggi",
    en: "Minister of Education, Culture, Research, and Technology Regulation Number 53 of 2023 concerning Higher Education Quality Assurance",
  },
  {
    id: "Anggaran Dasar Yayasan Badan Wakaf Sultan Agung, Akta Notaris Tan A Sioe Nomor 86 Tahun 1950, terakhir diubah dengan Akta Notaris M. Hafidh, S.H. Nomor 20 Tahun 2018",
    en: "Articles of Association of Sultan Agung Waqf Board Foundation, Notary Deed of Tan A Sioe No. 86/1950, last amended by Notary Deed of M. Hafidh, S.H. No. 20/2018",
  },
  {
    id: "Statuta Universitas Islam Sultan Agung (UNISSULA) Tahun 2019",
    en: "Statutes of Sultan Agung Islamic University (UNISSULA) Year 2019",
  },
];

export const legalBasisCatatan = {
  id: "Kebijakan SPMI Fakultas Hukum Revisi 03 mencatat terbitnya Permendiktisaintek Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi yang menggantikan Permendikbudristek Nomor 53 Tahun 2023.",
  en: "The SPMI Policy of Faculty of Law Revision 03 notes the issuance of Permendiktisaintek Number 39 of 2025 concerning Higher Education Quality Assurance superseding Permendikbudristek Number 53 of 2023.",
};
