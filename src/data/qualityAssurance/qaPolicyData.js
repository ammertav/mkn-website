/**
 * Kebijakan Mutu — Fakultas Hukum UNISSULA.
 *
 * SUMBER: dokumen "Kebijakan Sistem Penjaminan Mutu Internal (SPMI) Fakultas
 * Hukum UNISSULA", Kode KBJ/SA-FH/MUTU-01, Revisi 03, 30 September 2025,
 * 41 halaman.
 *
 * Asas, prinsip, dan tujuan disalin sesuai rumusan dokumen; uraian panjang tiap
 * butir diringkas tanpa mengubah maknanya. Kutipan ayat Al-Qur'an pada dokumen
 * sumber dipertahankan sebagai rujukan asas.
 */

import { BERKAS } from "./berkas";

export const documentIdentity = [
  { label: "Kode dokumen", value: "KBJ/SA-FH/MUTU-01" },
  { label: "Revisi", value: "03" },
  { label: "Tanggal", value: "30 September 2025" },
  { label: "Jumlah halaman", value: "41 halaman" },
  { label: "Ditetapkan oleh", value: "Dekan Fakultas Hukum UNISSULA" },
];

/** Bab IV.1 — asas penjaminan mutu internal. */
export const asasMutu = [
  {
    code: "1",
    title: "Berbuat yang terbaik (fastabiqul khairat)",
    desc:
      "Pengelolaan lembaga pendidikan adalah amanah yang wajib diamankan untuk mencapai visi, " +
      "misi, dan tujuan UNISSULA. Seluruh kegiatan pendidikan diorientasikan pada kualitas " +
      "terbaik.",
    ayat: "QS Al-Mukminun 8, Al-Ahzab 72, Al-Baqarah 148, Al-Maidah 48",
  },
  {
    code: "2",
    title: "Mengutamakan kebenaran dan kejujuran",
    desc:
      "Setiap sivitas akademika dituntut berlaku jujur dalam belajar, mengajar, ujian, " +
      "penilaian, penelitian, pengabdian, dan pelayanan.",
    ayat: "QS Al-Taubah 119, Al-Ahzab 70",
  },
  {
    code: "3",
    title: "Profesional dan tanggung jawab",
    desc:
      "Semua kegiatan penyelenggaraan pendidikan harus dapat dipertanggungjawabkan di hadapan " +
      "manusia dan di hadapan Allah.",
    ayat: "QS Al-Anbiya 23, Al-Isra 36",
  },
  {
    code: "4",
    title: "Berorientasi kepada pemangku kepentingan internal dan eksternal",
    desc:
      "Penjaminan mutu tidak hanya untuk kepentingan internal UNISSULA, tetapi juga untuk " +
      "kemanfaatan orang banyak, melalui musyawarah dan dengan menjunjung keadilan.",
    ayat: "QS Al-Syura 38, Ali Imran 159, Al-Maidah 8",
  },
  {
    code: "5",
    title: "Partisipatif dan kolegial",
    desc:
      "Pengelolaan pendidikan adalah tugas besar yang dijalankan melalui kerja sama internal " +
      "maupun eksternal, dengan tanggung jawab bersama seluruh komponen UNISSULA.",
    ayat: "QS Al-Maidah 2, Ali Imran 103, Al-Taubah 71",
  },
];

/** Bab IV.1 — prinsip pelaksanaan SPMI. */
export const prinsipMutu = [
  {
    title: "Akuntabilitas",
    desc:
      "Seluruh penyelenggaraan tridarma dilaksanakan secara bertanggung jawab, terukur, dan " +
      "dapat dipertanggungjawabkan, diwujudkan melalui program berbasis standar, dokumentasi " +
      "yang jelas, pelaporan berkala, dan audit mutu internal.",
  },
  {
    title: "Transparansi",
    desc:
      "Keterbukaan penyelenggaraan tridarma yang dapat diakses pemangku kepentingan, melalui " +
      "penyampaian informasi mutu, pelaporan kinerja, dan pengambilan keputusan yang objektif " +
      "serta terdokumentasi.",
  },
  {
    title: "Nirlaba",
    desc:
      "Pengelolaan perguruan tinggi bukan untuk keuntungan pribadi, melainkan untuk peningkatan " +
      "mutu pendidikan dan kemaslahatan bersama; sumber daya dikembalikan bagi pengembangan " +
      "institusi.",
  },
  {
    title: "Efektivitas",
    desc:
      "Pelaksanaan tridarma dilakukan tepat sasaran melalui perencanaan yang jelas, program " +
      "yang terukur, evaluasi berkelanjutan, serta pemanfaatan hasil evaluasi untuk perbaikan.",
  },
  {
    title: "Efisiensi",
    desc:
      "Sumber daya digunakan optimal dan tepat guna, berlandaskan nilai amanah, kesederhanaan, " +
      "dan larangan berlebih-lebihan (israf).",
  },
  {
    title: "Peningkatan mutu berkelanjutan berbasis risiko",
    desc:
      "SPMI dijalankan melalui lima langkah — Penetapan, Pelaksanaan, Evaluasi, Pengendalian, " +
      "dan Peningkatan — yang membentuk siklus pengendalian risiko dan menjadi dasar " +
      "peningkatan standar.",
  },
];

/** Bab IV.2 — tujuan penyusunan kebijakan SPMI. */
export const tujuanSpmi = [
  "Pemenuhan dan kepatuhan terhadap perundangan dan regulasi yang berlaku secara sistemik dan berkelanjutan, sehingga tumbuh budaya mutu di UNISSULA.",
  "Menjadi dasar perguruan tinggi dalam menerapkan SPMI yang berbasis mitigasi risiko.",
  "Sebagai wujud transparansi dan akuntabilitas publik serta sarana mencapai visi dan misi UNISSULA.",
  "Sebagai sarana pemenuhan kebutuhan pemangku kepentingan UNISSULA.",
  "Sebagai media mengomunikasikan dan menyosialisasikan konsep, struktur, mekanisme, dan pengorganisasian SPMI kepada seluruh sivitas akademika dan tenaga kependidikan.",
  "Sebagai dasar penyusunan dokumen Pedoman Penerapan Siklus SPMI, dokumen standar SPMI, dan dokumen formulir SPMI.",
  "Sebagai bukti otentik bahwa UNISSULA telah menetapkan, melaksanakan, mengevaluasi, mengendalikan, dan meningkatkan standar sebagaimana diwajibkan peraturan perundang-undangan.",
  "Menjamin setiap unit kerja melaksanakan proses PPEPP secara terintegrasi dengan manajemen risiko.",
];

/** Berkas kebijakan mutu. Seluruh PDF ada di public/quality-assurance/. */
export const policyDocuments = [
  {
    id: 1,
    code: "KBJ/SA-FH/MUTU-01",
    title: "Kebijakan Sistem Penjaminan Mutu Internal Fakultas Hukum UNISSULA",
    meta: "Revisi 03 · 30 September 2025 · 41 halaman",
    fileUrl: BERKAS + "KBJ-SA-FH-MUTU-01-Kebijakan-Mutu.pdf",
  },
  {
    id: 2,
    code: "1098/A.1/SA-H/X/2025",
    title: "Keputusan Dekan tentang Pengesahan Dokumen Mutu Fakultas Hukum UNISSULA Tahun 2025",
    meta: "Ditetapkan 2 Oktober 2025",
    fileUrl: BERKAS + "SK-1098-2025-Pengesahan-Dokumen-Mutu.pdf",
  },
];
