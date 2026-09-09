/**
 * Layanan perpustakaan digital UNISSULA.
 *
 * Halaman ini sengaja hanya berisi pengantar dan tautan: seluruh koleksi,
 * katalog, dan repositori dikelola UPT Perpustakaan UNISSULA di sistemnya
 * sendiri. Menyalin daftar koleksi ke sini hanya akan cepat basi, jadi yang
 * disediakan adalah jalan masuk yang benar ke tiap layanan.
 *
 * Seluruh URL diverifikasi dari situs resmi library.unissula.ac.id.
 * `utama: true` menandai satu layanan yang ditonjolkan sebagai pintu masuk
 * pertama; sisanya tampil sebagai kartu pendamping.
 */

import { FiArchive, FiBookOpen, FiMonitor, FiSearch } from "react-icons/fi";

export const halaman = {
  meta: {
    title: {
      id: "E-Library | MKn UNISSULA",
      en: "E-Library | MKn UNISSULA",
    },
    description: {
      id:
        "Akses layanan perpustakaan digital UNISSULA bagi mahasiswa Magister Kenotariatan: " +
        "katalog daring, electronic library, dan repositori karya ilmiah.",
      en:
        "Access UNISSULA's digital library services for Master of Notarial Law students: " +
        "online catalogue, electronic library, and the institutional repository.",
    },
  },

  judul: { id: "E-Library", en: "E-Library" },

  intro: {
    id:
      "Mahasiswa Program Studi Magister (S2) Kenotariatan memperoleh akses penuh ke layanan " +
      "perpustakaan digital UNISSULA, mulai dari katalog koleksi tercetak, pangkalan data " +
      "elektronik berlangganan, hingga repositori tesis dan hasil penelitian sivitas akademika.",
    en:
      "Students of the Master of Notarial Law Study Programme have full access to UNISSULA's " +
      "digital library services — from the catalogue of printed holdings and subscribed " +
      "electronic databases to the repository of theses and institutional research.",
  },

  labelBuka: { id: "Kunjungi", en: "Visit" },
  labelUtama: { id: "Portal Utama", en: "Main Portal" },

  bantuan: {
    judul: { id: "Butuh bantuan akses?", en: "Need help with access?" },
    teks: {
      id:
        "Pendaftaran akun pangkalan data elektronik dan kendala akses dilayani langsung oleh " +
        "UPT Perpustakaan UNISSULA.",
      en:
        "Electronic database account registration and access problems are handled directly by " +
        "the UNISSULA Library.",
    },
    telepon: "(024) 6583584",
    hotline: "0898-2846-161",
    surel: "library@unissula.ac.id",
  },
};

export const layananPerpustakaan = [
  {
    id: "portal",
    utama: true,
    icon: FiBookOpen,
    nama: { id: "Perpustakaan UNISSULA", en: "UNISSULA Library" },
    deskripsi: {
      id:
        "Portal resmi UPT Perpustakaan UNISSULA: informasi keanggotaan, jam layanan, panduan " +
        "penelusuran, serta pintu masuk ke seluruh layanan digital di bawah ini.",
      en:
        "The official portal of the UNISSULA Library: membership information, service hours, " +
        "search guides, and the gateway to all the digital services listed below.",
    },
    link: "https://library.unissula.ac.id/",
  },
  {
    id: "katalog",
    utama: false,
    icon: FiSearch,
    nama: { id: "Katalog Daring (OPAC)", en: "Online Catalogue (OPAC)" },
    deskripsi: {
      id:
        "Penelusuran data bibliografi koleksi perpustakaan — judul, pengarang, tahun terbit, " +
        "dan ketersediaan eksemplar.",
      en:
        "Search the bibliographic records of the library's holdings — title, author, year of " +
        "publication, and copy availability.",
    },
    link: "https://library.unissula.ac.id/online-catalog/",
  },
  {
    id: "electronic-library",
    utama: false,
    icon: FiMonitor,
    nama: { id: "Electronic Library", en: "Electronic Library" },
    deskripsi: {
      id:
        "Koleksi digital dan pangkalan data elektronik berlangganan, dapat diakses dari mana " +
        "saja melalui akun sivitas akademika UNISSULA.",
      en:
        "Digital collections and subscribed electronic databases, accessible from anywhere " +
        "using a UNISSULA academic account.",
    },
    link: "https://library.unissula.ac.id/e-resources/electronic-library/",
  },
  {
    id: "repository",
    utama: false,
    icon: FiArchive,
    nama: { id: "Repositori UNISSULA", en: "UNISSULA Repository" },
    deskripsi: {
      id:
        "Arsip karya ilmiah sivitas akademika — tesis, disertasi, dan hasil penelitian — yang " +
        "berguna sebagai rujukan sekaligus pembanding penulisan tesis.",
      en:
        "The archive of institutional scholarly work — theses, dissertations, and research " +
        "output — useful both as references and as models for thesis writing.",
    },
    link: "https://repository.unissula.ac.id/",
  },
];
