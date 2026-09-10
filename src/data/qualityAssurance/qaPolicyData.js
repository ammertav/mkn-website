/**
 * Kebijakan Mutu — Fakultas Hukum UNISSULA.
 */

import { BERKAS } from "./berkas";

export const documentIdentity = [
  {
    label: { id: "Kode dokumen", en: "Document code" },
    value: "KBJ/SA-FH/MUTU-01",
  },
  {
    label: { id: "Revisi", en: "Revision" },
    value: "03",
  },
  {
    label: { id: "Tanggal", en: "Date" },
    value: { id: "30 September 2025", en: "September 30, 2025" },
  },
  {
    label: { id: "Jumlah halaman", en: "Page count" },
    value: { id: "41 halaman", en: "41 pages" },
  },
  {
    label: { id: "Ditetapkan oleh", en: "Enacted by" },
    value: {
      id: "Dekan Fakultas Hukum UNISSULA",
      en: "Dean of Faculty of Law UNISSULA",
    },
  },
];

/** Bab IV.1 — asas penjaminan mutu internal. */
export const asasMutu = [
  {
    code: "1",
    title: {
      id: "Berbuat yang terbaik (fastabiqul khairat)",
      en: "Doing one's best (fastabiqul khairat)",
    },
    desc: {
      id: "Pengelolaan lembaga pendidikan adalah amanah yang wajib diamankan untuk mencapai visi, misi, dan tujuan UNISSULA. Seluruh kegiatan pendidikan diorientasikan pada kualitas terbaik.",
      en: "Managing educational institutions is an amanah (trust) that must be preserved to achieve UNISSULA's vision, mission, and goals. All educational activities are oriented towards excellence.",
    },
    ayat: "QS Al-Mukminun 8, Al-Ahzab 72, Al-Baqarah 148, Al-Maidah 48",
  },
  {
    code: "2",
    title: {
      id: "Mengutamakan kebenaran dan kejujuran",
      en: "Prioritizing truth and honesty",
    },
    desc: {
      id: "Setiap sivitas akademika dituntut berlaku jujur dalam belajar, mengajar, ujian, penilaian, penelitian, pengabdian, dan pelayanan.",
      en: "Every member of the academic community is required to act honestly in learning, teaching, examinations, assessment, research, service, and administration.",
    },
    ayat: "QS Al-Taubah 119, Al-Ahzab 70",
  },
  {
    code: "3",
    title: {
      id: "Profesional dan tanggung jawab",
      en: "Professionalism and responsibility",
    },
    desc: {
      id: "Semua kegiatan penyelenggaraan pendidikan harus dapat dipertanggungjawabkan di hadapan manusia dan di hadapan Allah.",
      en: "All educational operations must be accountable before humanity and before Allah SWT.",
    },
    ayat: "QS Al-Anbiya 23, Al-Isra 36",
  },
  {
    code: "4",
    title: {
      id: "Berorientasi kepada pemangku kepentingan internal dan eksternal",
      en: "Oriented towards internal and external stakeholders",
    },
    desc: {
      id: "Penjaminan mutu tidak hanya untuk kepentingan internal UNISSULA, tetapi juga untuk kemanfaatan orang banyak, melalui musyawarah dan dengan menjunjung keadilan.",
      en: "Quality assurance serves not only UNISSULA's internal interests, but also societal benefit through consensus and upholding justice.",
    },
    ayat: "QS Al-Syura 38, Ali Imran 159, Al-Maidah 8",
  },
  {
    code: "5",
    title: {
      id: "Partisipatif dan kolegial",
      en: "Participatory and collegial",
    },
    desc: {
      id: "Pengelolaan pendidikan adalah tugas besar yang dijalankan melalui kerja sama internal maupun eksternal, dengan tanggung jawab bersama seluruh komponen UNISSULA.",
      en: "Educational governance is an immense endeavor executed through internal and external collaboration, with shared responsibility across all UNISSULA components.",
    },
    ayat: "QS Al-Maidah 2, Ali Imran 103, Al-Taubah 71",
  },
];

/** Bab IV.1 — prinsip pelaksanaan SPMI. */
export const prinsipMutu = [
  {
    title: { id: "Akuntabilitas", en: "Accountability" },
    desc: {
      id: "Seluruh penyelenggaraan tridarma dilaksanakan secara bertanggung jawab, terukur, dan dapat dipertanggungjawabkan, diwujudkan melalui program berbasis standar, dokumentasi yang jelas, pelaporan berkala, dan audit mutu internal.",
      en: "All tridarma implementations are conducted responsibly, measurably, and accountably, realized through standards-based programs, clear documentation, periodic reporting, and internal quality audits.",
    },
  },
  {
    title: { id: "Transparansi", en: "Transparency" },
    desc: {
      id: "Keterbukaan penyelenggaraan tridarma yang dapat diakses pemangku kepentingan, melalui penyampaian informasi mutu, pelaporan kinerja, dan pengambilan keputusan yang objektif serta terdokumentasi.",
      en: "Openness of academic operations accessible to stakeholders, through quality information dissemination, performance reporting, and objective, documented decision-making.",
    },
  },
  {
    title: { id: "Nirlaba", en: "Non-Profit Orientation" },
    desc: {
      id: "Pengelolaan perguruan tinggi bukan untuk keuntungan pribadi, melainkan untuk peningkatan mutu pendidikan dan kemaslahatan bersama; sumber daya dikembalikan bagi pengembangan institusi.",
      en: "Higher education governance is not for private gain, but for educational quality enhancement and public welfare; resources are reinvested into institutional development.",
    },
  },
  {
    title: { id: "Efektivitas", en: "Effectiveness" },
    desc: {
      id: "Pelaksanaan tridarma dilakukan tepat sasaran melalui perencanaan yang jelas, program yang terukur, evaluasi berkelanjutan, serta pemanfaatan hasil evaluasi untuk perbaikan.",
      en: "Execution of academic missions is target-driven through clear planning, measurable programs, continuous evaluation, and utilization of findings for improvement.",
    },
  },
  {
    title: { id: "Efisiensi", en: "Efficiency" },
    desc: {
      id: "Sumber daya digunakan optimal dan tepat guna, berlandaskan nilai amanah, kesederhanaan, dan larangan berlebih-lebihan (israf).",
      en: "Resources are utilized optimally and purposefully, grounded in stewardship (amanah), modesty, and avoidance of excess (israf).",
    },
  },
  {
    title: {
      id: "Peningkatan mutu berkelanjutan berbasis risiko",
      en: "Risk-based continuous quality improvement",
    },
    desc: {
      id: "SPMI dijalankan melalui lima langkah — Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan — yang membentuk siklus pengendalian risiko dan menjadi dasar peningkatan standar.",
      en: "SPMI is carried out through five phases — Determination, Implementation, Evaluation, Control, and Improvement — establishing a risk control cycle and foundation for upgrading standards.",
    },
  },
];

/** Bab IV.2 — tujuan penyusunan kebijakan SPMI. */
export const tujuanSpmi = [
  {
    id: "Pemenuhan dan kepatuhan terhadap perundangan dan regulasi yang berlaku secara sistemik dan berkelanjutan, sehingga tumbuh budaya mutu di UNISSULA.",
    en: "Systemic and sustainable compliance with applicable laws and regulations, fostering a culture of quality at UNISSULA.",
  },
  {
    id: "Menjadi dasar perguruan tinggi dalam menerapkan SPMI yang berbasis mitigasi risiko.",
    en: "Serving as the university's foundation in implementing risk-mitigation-based internal quality assurance.",
  },
  {
    id: "Sebagai wujud transparansi dan akuntabilitas publik serta sarana mencapai visi dan misi UNISSULA.",
    en: "Demonstrating public transparency and accountability as well as a means to achieve UNISSULA's vision and mission.",
  },
  {
    id: "Sebagai sarana pemenuhan kebutuhan pemangku kepentingan UNISSULA.",
    en: "Serving as a vehicle for fulfilling the needs and expectations of UNISSULA stakeholders.",
  },
  {
    id: "Sebagai media mengomunikasikan dan menyosialisasikan konsep, struktur, mekanisme, dan pengorganisasian SPMI kepada seluruh sivitas akademika dan tenaga kependidikan.",
    en: "Serving as a communication and socialization medium for SPMI concepts, structure, mechanisms, and organization to faculty and staff.",
  },
  {
    id: "Sebagai dasar penyusunan dokumen Pedoman Penerapan Siklus SPMI, dokumen standar SPMI, dan dokumen formulir SPMI.",
    en: "Serving as the basis for formulating SPMI Cycle Guidelines, SPMI standard documents, and SPMI form documents.",
  },
  {
    id: "Sebagai bukti otentik bahwa UNISSULA telah menetapkan, melaksanakan, mengevaluasi, mengendalikan, dan meningkatkan standar sebagaimana diwajibkan peraturan perundang-undangan.",
    en: "Providing authentic proof that UNISSULA has enacted, implemented, evaluated, controlled, and upgraded standards as required by legislation.",
  },
  {
    id: "Menjamin setiap unit kerja melaksanakan proses PPEPP secara terintegrasi dengan manajemen risiko.",
    en: "Ensuring that every operational unit implements the PPEPP cycle integrated with risk management.",
  },
];

/** Berkas kebijakan mutu. */
export const policyDocuments = [
  {
    id: 1,
    code: "KBJ/SA-FH/MUTU-01",
    title: {
      id: "Kebijakan Sistem Penjaminan Mutu Internal Fakultas Hukum UNISSULA",
      en: "Internal Quality Assurance System Policy of Faculty of Law UNISSULA",
    },
    meta: {
      id: "Revisi 03 · 30 September 2025 · 41 halaman",
      en: "Revision 03 · September 30, 2025 · 41 pages",
    },
    fileUrl: BERKAS + "KBJ-SA-FH-MUTU-01-Kebijakan-Mutu.pdf",
    flipbook: true,
  },
  {
    id: 2,
    code: "1098/A.1/SA-H/X/2025",
    title: {
      id: "Keputusan Dekan tentang Pengesahan Dokumen Mutu Fakultas Hukum UNISSULA Tahun 2025",
      en: "Dean's Decree on Ratification of Quality Documents Faculty of Law UNISSULA Year 2025",
    },
    meta: {
      id: "Ditetapkan 2 Oktober 2025",
      en: "Enacted October 2, 2025",
    },
    fileUrl: BERKAS + "SK-1098-2025-Pengesahan-Dokumen-Mutu.pdf",
  },
];
