/**
 * Sistem informasi akademik yang dipakai mahasiswa Magister Kenotariatan.
 *
 * Halaman ini berisi pengantar dan pintu masuk, bukan salinan isi sistem:
 * keduanya berada di balik login dan dikelola di luar situs program studi.
 *
 * Cakupan SIM UNISSULA diambil dari keterangan resmi pada halaman muka
 * sim.unissula.ac.id. SAKU MKN sengaja dijelaskan seperlunya karena sistemnya
 * tidak dapat dijangkau publik untuk diverifikasi — lebih baik ringkas dan
 * benar daripada rinci tapi mengarang.
 *
 * `utama: true` menandai sistem yang ditonjolkan sebagai pintu masuk pertama.
 */

import { FiGrid, FiLayers } from "react-icons/fi";

export const halaman = {
  meta: {
    title: {
      id: "E-Learning | MKn UNISSULA",
      en: "E-Learning | MKn UNISSULA",
    },
    description: {
      id:
        "Pintu masuk sistem informasi akademik mahasiswa Magister Kenotariatan UNISSULA: " +
        "SIM UNISSULA dan SAKU MKn.",
      en:
        "Gateway to the academic information systems used by UNISSULA Master of Notarial Law " +
        "students: SIM UNISSULA and SAKU MKn.",
    },
  },

  judul: { id: "E-Learning", en: "E-Learning" },

  intro: {
    id:
      "Seluruh kegiatan akademik mahasiswa Program Studi Magister (S2) Kenotariatan berjalan " +
      "di atas dua sistem daring. Akun diberikan program studi pada awal masa studi dan " +
      "berlaku sampai kelulusan.",
    en:
      "All academic activity in the Master of Notarial Law Study Programme runs on two online " +
      "systems. Accounts are issued by the programme at the start of study and remain valid " +
      "until graduation.",
  },

  labelBuka: { id: "Buka Sistem", en: "Open System" },
  labelUtama: { id: "Sistem Utama", en: "Main System" },
  labelCakupan: { id: "Cakupan layanan", en: "Services covered" },
  belumTersedia: { id: "Belum tersedia", en: "Not yet available" },

  bantuan: {
    judul: {
      id: "Lupa kata sandi atau akun bermasalah?",
      en: "Forgotten password or account problems?",
    },
    teks: {
      id:
        "Pemulihan akun dan kendala masuk sistem dilayani Koordinator Tata Usaha Program Studi " +
        "Magister Kenotariatan.",
      en:
        "Account recovery and login problems are handled by the Head of Administration of the " +
        "Master of Notarial Law Study Programme.",
    },
    narahubung: "Ikrom, S.H., M.H.",
    telepon: "+62 823-1222-8181",
    surel: "mkn.fh@unissula.ac.id",
  },
};

export const sistemInformasi = [
  {
    id: "sim",
    utama: true,
    icon: FiGrid,
    nama: { id: "SIM UNISSULA", en: "SIM UNISSULA" },
    subjudul: {
      id: "Sistem Informasi Terintegrasi",
      en: "Integrated Information System",
    },
    deskripsi: {
      id:
        "Sistem informasi terintegrasi tingkat universitas. Satu akun dipakai untuk seluruh " +
        "layanan, mulai dari perkuliahan daring hingga administrasi keuangan dan perpustakaan.",
      en:
        "The university-wide integrated information system. A single account covers every " +
        "service, from online coursework to financial and library administration.",
    },
    // Kelima bidang ini disebutkan langsung pada halaman muka sistemnya.
    cakupan: [
      { id: "Akademik", en: "Academics" },
      { id: "Keuangan", en: "Finance" },
      { id: "Riset", en: "Research" },
      { id: "Perpustakaan", en: "Library" },
      { id: "Layanan Mahasiswa", en: "Student Services" },
    ],
    link: "https://sim.unissula.ac.id/",
  },
  {
    id: "saku-mkn",
    utama: false,
    icon: FiLayers,
    nama: { id: "SAKU MKn", en: "SAKU MKn" },
    subjudul: {
      id: "Sistem Akademik Magister Kenotariatan",
      en: "Master of Notarial Law Academic System",
    },
    deskripsi: {
      id:
        "Sistem akademik khusus Program Studi Magister Kenotariatan, melengkapi SIM UNISSULA " +
        "untuk keperluan yang khas program studi.",
      en:
        "The academic system specific to the Master of Notarial Law Study Programme, " +
        "complementing SIM UNISSULA for programme-specific needs.",
    },
    cakupan: null,
    link: "https://sakumkn.unissula.ac.id/",
  },
];
