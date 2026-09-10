/**
 * Standar Mutu — Fakultas Hukum UNISSULA.
 */

import { BERKAS } from "./berkas";

export const standarMeta = {
  total: 21,
  revisi: { id: "Revisi 03", en: "Revision 03" },
  tanggal: { id: "30 September 2025", en: "September 30, 2025" },
  sk: {
    id: "Keputusan Dekan Nomor 1098/A.1/SA-H/X/2025 tanggal 2 Oktober 2025",
    en: "Dean's Decree Number 1098/A.1/SA-H/X/2025 dated October 2, 2025",
  },
};

/** Setiap dokumen standar memuat sepuluh pokok yang sama. */
export const standarStructure = [
  {
    id: "Visi, misi, tujuan, dan sasaran Fakultas Hukum",
    en: "Vision, mission, goals, and objectives of the Faculty of Law",
  },
  {
    id: "Rasional penetapan standar",
    en: "Rationale for standard establishment",
  },
  {
    id: "Pihak yang bertanggung jawab memenuhi standar",
    en: "Parties responsible for fulfilling the standard",
  },
  {
    id: "Definisi istilah",
    en: "Definition of terms",
  },
  {
    id: "Pernyataan isi standar",
    en: "Standard statement content",
  },
  {
    id: "Indikator ketercapaian",
    en: "Achievement indicators",
  },
  {
    id: "Strategi pencapaian standar",
    en: "Strategies for standard achievement",
  },
  {
    id: "Dokumen terkait",
    en: "Related documents",
  },
  {
    id: "Referensi",
    en: "References",
  },
  {
    id: "Formulir yang digunakan",
    en: "Forms utilized",
  },
];

/**
 * Empat kelompok standar.
 */
export const standarGroups = [
  {
    group: { id: "Standar Pendidikan", en: "Educational Standards" },
    code: "A.1",
    desc: {
      id: "Delapan standar yang mengatur luaran, proses, dan masukan penyelenggaraan pendidikan.",
      en: "Eight standards governing outcomes, processes, and inputs of educational operations.",
    },
    items: [
      {
        code: "STD/SA-FH/A.1/01",
        name: { id: "Standar Kompetensi Lulusan", en: "Graduate Competency Standard" },
        cluster: { id: "Luaran pendidikan", en: "Educational outcomes" },
        file: BERKAS + "STD-SA-FH-A1-01-Standar-Kompetensi-Lulusan.pdf",
      },
      {
        code: "STD/SA-FH/A.1/02",
        name: { id: "Standar Proses Pembelajaran", en: "Learning Process Standard" },
        cluster: { id: "Proses pendidikan", en: "Educational processes" },
        file: BERKAS + "STD-SA-FH-A1-02-Standar-Proses-Pembelajaran.pdf",
      },
      {
        code: "STD/SA-FH/A.1/03",
        name: { id: "Standar Penilaian", en: "Assessment Standard" },
        cluster: { id: "Proses pendidikan", en: "Educational processes" },
        file: BERKAS + "STD-SA-FH-A1-03-Standar-Penilaian.pdf",
      },
      {
        code: "STD/SA-FH/A.1/04",
        name: { id: "Standar Pengelolaan", en: "Management Standard" },
        cluster: { id: "Proses pendidikan", en: "Educational processes" },
        file: BERKAS + "STD-SA-FH-A1-04-Standar-Pengelolaan.pdf",
      },
      {
        code: "STD/SA-FH/A.1/05",
        name: { id: "Standar Isi Pendidikan", en: "Curriculum Content Standard" },
        cluster: { id: "Masukan pendidikan", en: "Educational inputs" },
        file: BERKAS + "STD-SA-FH-A1-05-Standar-Isi-Pendidikan.pdf",
      },
      {
        code: "STD/SA-FH/A.1/06",
        name: { id: "Standar Dosen dan Tenaga Kependidikan", en: "Faculty and Staff Standard" },
        cluster: { id: "Masukan pendidikan", en: "Educational inputs" },
        file: BERKAS + "STD-SA-FH-A1-06-Standar-Dosen-dan-Tenaga-Kependidikan.pdf",
      },
      {
        code: "STD/SA-FH/A.1/07",
        name: { id: "Standar Sarana dan Prasarana", en: "Facilities and Infrastructure Standard" },
        cluster: { id: "Masukan pendidikan", en: "Educational inputs" },
        file: BERKAS + "STD-SA-FH-A1-07-Standar-Sarana-dan-Prasarana.pdf",
      },
      {
        code: "STD/SA-FH/A.1/08",
        name: { id: "Standar Pembiayaan", en: "Financing Standard" },
        cluster: { id: "Masukan pendidikan", en: "Educational inputs" },
        file: BERKAS + "STD-SA-FH-A1-08-Standar-Pembiayaan.pdf",
      },
    ],
  },
  {
    group: { id: "Standar Penelitian", en: "Research Standards" },
    code: "A.2",
    desc: {
      id: "Tiga standar yang mengatur luaran, proses, dan masukan kegiatan penelitian.",
      en: "Three standards governing outcomes, processes, and inputs of research activities.",
    },
    items: [
      {
        code: "STD/SA-FH/A.2/01",
        name: { id: "Standar Luaran Penelitian", en: "Research Outcomes Standard" },
        cluster: { id: "Luaran", en: "Outcomes" },
        file: BERKAS + "STD-SA-FH-A2-01-Standar-Luaran-Penelitian.pdf",
      },
      {
        code: "STD/SA-FH/A.2/02",
        name: { id: "Standar Proses Penelitian", en: "Research Process Standard" },
        cluster: { id: "Proses", en: "Process" },
        file: BERKAS + "STD-SA-FH-A2-02-Standar-Proses-Penelitian.pdf",
      },
      {
        code: "STD/SA-FH/A.2/03",
        name: { id: "Standar Masukan Penelitian", en: "Research Inputs Standard" },
        cluster: { id: "Masukan", en: "Inputs" },
        file: BERKAS + "STD-SA-FH-A2-03-Standar-Masukan-Penelitian.pdf",
      },
    ],
  },
  {
    group: { id: "Standar Pengabdian kepada Masyarakat", en: "Community Service Standards" },
    code: "A.3",
    desc: {
      id: "Tiga standar yang mengatur luaran, proses, dan masukan pengabdian kepada masyarakat.",
      en: "Three standards governing outcomes, processes, and inputs of community service.",
    },
    items: [
      {
        code: "STD/SA-FH/A.3/01",
        name: { id: "Standar Luaran Pengabdian kepada Masyarakat", en: "Community Service Outcomes Standard" },
        cluster: { id: "Luaran", en: "Outcomes" },
        file: BERKAS + "STD-SA-FH-A3-01-Standar-Luaran-PkM.pdf",
      },
      {
        code: "STD/SA-FH/A.3/02",
        name: { id: "Standar Proses Pengabdian kepada Masyarakat", en: "Community Service Process Standard" },
        cluster: { id: "Proses", en: "Process" },
        file: BERKAS + "STD-SA-FH-A3-02-Standar-Proses-PkM.pdf",
      },
      {
        code: "STD/SA-FH/A.3/03",
        name: { id: "Standar Masukan Pengabdian kepada Masyarakat", en: "Community Service Inputs Standard" },
        cluster: { id: "Masukan", en: "Inputs" },
        file: BERKAS + "STD-SA-FH-A3-03-Standar-Masukan-PkM.pdf",
      },
    ],
  },
  {
    group: { id: "Standar Non-Akademik", en: "Non-Academic Standards" },
    code: "NA",
    desc: {
      id: "Tujuh standar yang mengatur tata kelola, sumber daya, dan kekhasan UNISSULA di luar kegiatan tridarma.",
      en: "Seven standards governing governance, resources, and UNISSULA distinctive characteristics beyond tridarma.",
    },
    items: [
      {
        code: "STD/SA-FH/NA/01",
        name: { id: "Standar Organisasi", en: "Organizational Standard" },
        cluster: { id: "Tata kelola", en: "Governance" },
        file: BERKAS + "STD-SA-FH-NA-01-Standar-Organisasi.pdf",
      },
      {
        code: "STD/SA-FH/NA/02",
        name: { id: "Standar Keuangan", en: "Financial Standard" },
        cluster: { id: "Tata kelola", en: "Governance" },
        file: BERKAS + "STD-SA-FH-NA-02-Standar-Keuangan.pdf",
      },
      {
        code: "STD/SA-FH/NA/03",
        name: { id: "Standar Kemahasiswaan", en: "Student Affairs Standard" },
        cluster: { id: "Sumber daya", en: "Resources" },
        file: BERKAS + "STD-SA-FH-NA-03-Standar-Kemahasiswaan.pdf",
      },
      {
        code: "STD/SA-FH/NA/04",
        name: { id: "Standar Ketenagakerjaan dan Kesejahteraan", en: "Employment and Welfare Standard" },
        cluster: { id: "Sumber daya", en: "Resources" },
        file: BERKAS + "STD-SA-FH-NA-04-Standar-Ketenagakerjaan-dan-Kesejahteraan.pdf",
      },
      {
        code: "STD/SA-FH/NA/05",
        name: { id: "Standar Sarana dan Prasarana", en: "Facilities and Infrastructure Standard" },
        cluster: { id: "Sumber daya", en: "Resources" },
        file: BERKAS + "STD-SA-FH-NA-05-Standar-Sarana-dan-Prasarana.pdf",
      },
      {
        code: "STD/SA-FH/NA/06",
        name: { id: "Standar Budaya Akademik Islami (BudAI) dan Birrul Walidain", en: "Islamic Academic Culture (BudAI) and Birrul Walidain Standard" },
        cluster: { id: "Kekhasan UNISSULA", en: "UNISSULA Distinctiveness" },
        file: BERKAS + "STD-SA-FH-NA-06-Standar-BudAI-dan-Birrul-Walidain.pdf",
      },
      {
        code: "STD/SA-FH/NA/07",
        name: { id: "Standar Kerjasama", en: "Partnership Standard" },
        cluster: { id: "Tata kelola", en: "Governance" },
        file: BERKAS + "STD-SA-FH-NA-07-Standar-Kerjasama.pdf",
      },
    ],
  },
];
