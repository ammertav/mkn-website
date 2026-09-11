/**
 * Formulir Mutu — Fakultas Hukum UNISSULA.
 */

import { BERKAS } from "./berkas";

export const formsMeta = {
  code: "FRM/SA-FH/MUTU-02",
  revisi: { id: "Revisi 03", en: "Revision 03" },
  tanggal: { id: "30 September 2025", en: "September 30, 2025" },
  halaman: { id: "31 halaman", en: "31 pages" },
  total: 19,
  fileUrl: BERKAS + "FRM-SA-FH-MUTU-02-Formulir-SPMI.pdf",
};

export const formsPengantar = {
  id: "Formulir SPMI adalah naskah tertulis yang dipakai saat standar SPMI dijalankan, berfungsi merekam hal, informasi, atau kegiatan tertentu. Setiap formulir dilengkapi kode, petunjuk pengisian, kolom isian, dan blok pengesahan sehingga dapat langsung dipakai unit kerja dan program studi.",
  en: "SPMI forms are written instruments utilized during the execution of SPMI standards, serving to record specific occurrences, information, or activities. Each form is equipped with a code, completion instructions, entry fields, and a ratification block for immediate use by work units and study programs.",
};

export const formsPengguna = {
  id: "Formulir digunakan oleh Dekan, para Wakil Dekan, Ketua Program Studi, Unit Penjaminan Mutu, Gugus Penjaminan Mutu, Manajer Program Audit Mutu Internal, auditor internal, dosen, dan tenaga kependidikan sesuai kewenangan masing-masing.",
  en: "Forms are utilized by the Dean, Vice Deans, Head of Study Program, Quality Assurance Unit, Quality Assurance Committee, Internal Quality Audit Program Manager, internal auditors, faculty, and administrative staff according to their respective authorities.",
};

export const formsArsip = {
  id: "Formulir yang telah diisi merupakan rekaman mutu yang wajib diarsipkan sekurang-kurangnya 5 (lima) tahun sebagai bukti pelaksanaan SPMI dan bahan penilaian akreditasi.",
  en: "Completed forms constitute quality records that must be archived for at least 5 (five) years as evidence of SPMI implementation and accreditation assessment material.",
};

export const formGroups = [
  {
    code: "A",
    stage: { id: "Penetapan", en: "Determination" },
    items: [
      {
        code: "FRM/SA-FH/A-01",
        name: {
          id: "Formulir Usulan Penetapan/Revisi Standar SPMI",
          en: "SPMI Standard Establishment/Revision Proposal Form",
        },
      },
      {
        code: "FRM/SA-FH/A-02",
        name: {
          id: "Formulir Berita Acara Rapat Penetapan Standar",
          en: "Minutes of Meeting for Standards Determination Form",
        },
      },
      {
        code: "FRM/SA-FH/A-03",
        name: {
          id: "Formulir Daftar Hadir Kegiatan SPMI",
          en: "SPMI Activity Attendance List Form",
        },
      },
    ],
  },
  {
    code: "B",
    stage: { id: "Pelaksanaan", en: "Implementation" },
    items: [
      {
        code: "FRM/SA-FH/B-01",
        name: {
          id: "Formulir Sosialisasi Standar SPMI",
          en: "SPMI Standards Socialization Form",
        },
      },
      {
        code: "FRM/SA-FH/B-02",
        name: {
          id: "Formulir Rencana Pemenuhan Standar (Program Kerja)",
          en: "Standards Fulfillment Plan (Work Program) Form",
        },
      },
      {
        code: "FRM/SA-FH/B-03",
        name: {
          id: "Formulir Berita Acara Perkuliahan",
          en: "Lecture Minutes Form",
        },
      },
      {
        code: "FRM/SA-FH/B-04",
        name: {
          id: "Formulir Rekaman Pelaksanaan Kegiatan",
          en: "Activity Execution Record Form",
        },
      },
    ],
  },
  {
    code: "C",
    stage: { id: "Evaluasi", en: "Evaluation" },
    items: [
      {
        code: "FRM/SA-FH/C-01",
        name: {
          id: "Formulir Evaluasi Diri Program Studi/Unit Kerja",
          en: "Study Program/Work Unit Self-Evaluation Form",
        },
      },
      {
        code: "FRM/SA-FH/C-02",
        name: {
          id: "Formulir Daftar Tilik (Checklist) Audit Mutu Internal",
          en: "Internal Quality Audit Checklist Form",
        },
      },
      {
        code: "FRM/SA-FH/C-03",
        name: {
          id: "Formulir Temuan Audit Mutu Internal",
          en: "Internal Quality Audit Findings Form",
        },
      },
      {
        code: "FRM/SA-FH/C-04",
        name: {
          id: "Formulir Survei Kepuasan Pemangku Kepentingan",
          en: "Stakeholder Satisfaction Survey Form",
        },
      },
      {
        code: "FRM/SA-FH/C-05",
        name: {
          id: "Formulir Evaluasi Dosen oleh Mahasiswa (EDOM)",
          en: "Student Evaluation of Lecturers (EDOM) Form",
        },
      },
    ],
  },
  {
    code: "D",
    stage: { id: "Pengendalian", en: "Control" },
    items: [
      {
        code: "FRM/SA-FH/D-01",
        name: {
          id: "Formulir Permintaan Tindakan Koreksi (PTK)",
          en: "Corrective Action Request (PTK) Form",
        },
      },
      {
        code: "FRM/SA-FH/D-02",
        name: {
          id: "Formulir Rencana Tindak Lanjut (RTL)",
          en: "Action Plan (RTL) Form",
        },
      },
      {
        code: "FRM/SA-FH/D-03",
        name: {
          id: "Formulir Notulen Rapat Tinjauan Manajemen",
          en: "Management Review Meeting Minutes Form",
        },
      },
      {
        code: "FRM/SA-FH/D-04",
        name: {
          id: "Formulir Verifikasi Tindak Lanjut dan Status Temuan",
          en: "Follow-up Verification and Findings Status Form",
        },
      },
    ],
  },
  {
    code: "E",
    stage: { id: "Peningkatan", en: "Improvement" },
    items: [
      {
        code: "FRM/SA-FH/E-01",
        name: {
          id: "Formulir Usulan Peningkatan Standar (Kaizen)",
          en: "Standard Improvement Proposal (Kaizen) Form",
        },
      },
      {
        code: "FRM/SA-FH/E-02",
        name: {
          id: "Formulir Benchmarking Standar",
          en: "Standards Benchmarking Form",
        },
      },
      {
        code: "FRM/SA-FH/E-03",
        name: {
          id: "Formulir Laporan Pelaksanaan SPMI Tahunan",
          en: "Annual SPMI Implementation Report Form",
        },
      },
    ],
  },
];
