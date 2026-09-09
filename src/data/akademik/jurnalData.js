/**
 * Jurnal ilmiah yang dikelola Program Studi Magister (S2) Kenotariatan FH UNISSULA.
 *
 * SUMBER: dokumen resmi "PROFIL LENGKAP JURNAL MKN UNISSULA 2026" dari program
 * studi. Hanya empat hal yang ditampilkan di halaman — logo, status akreditasi,
 * deskripsi, dan fokus/cakupan. Detail lain pada dokumen sumber (ISSN, DOI,
 * biaya publikasi, panduan penulis, durasi terbit) sengaja tidak dicantumkan
 * karena lebih tepat dibaca langsung di portal OJS masing-masing jurnal, yang
 * selalu lebih mutakhir daripada salinan di sini.
 *
 * `akreditasi: null` berarti jurnal tersebut tidak berperingkat SINTA; kartunya
 * menampilkan `catatan` sebagai gantinya, bukan badge kosong.
 */

import logoAkta from "../../assets/images/jurnal/logo-jurnal-akta.png";
import logoSanlar from "../../assets/images/jurnal/logo-sanlar.png";
import logoKonstatering from "../../assets/images/jurnal/logo-konstatering.png";
import logoTabellius from "../../assets/images/jurnal/logo-tabelius.png";

export const halaman = {
  meta: {
    title: {
      id: "E-Jurnal | MKn UNISSULA",
      en: "E-Journals | MKn UNISSULA",
    },
  },

  judul: { id: "E-Jurnal", en: "E-Journals" },

  labelScope: { id: "Fokus dan Cakupan", en: "Focus and Scope" },
  labelBuka: { id: "Buka Jurnal", en: "Open Journal" },
  belumTersedia: { id: "Portal belum tersedia", en: "Portal not yet available" },
};

export const jurnalData = [
  {
    id: "akta",
    nama: "Jurnal AKTA",
    logo: logoAkta,
    akreditasi: {
      peringkat: "SINTA 2",
      sk: "SK Kemendikbudristek No. 164/E/KPT/2021",
    },
    catatan: null,
    deskripsi: {
      id:
        "Memuat kajian ilmiah, hasil penelitian, dan tinjauan kritis di bidang ilmu hukum " +
        "kontemporer, dengan penekanan utama pada hukum perdata, kenotariatan, dan keagrariaan.",
      en:
        "Publishes scholarly studies, research findings, and critical reviews in contemporary " +
        "legal scholarship, with emphasis on private, notarial, and agrarian law.",
    },
    scope: [
      {
        id: "Hukum Kenotariatan & KePPAT-an",
        en: "Notarial & Land Deed Official Law",
      },
      {
        id: "Hukum Keagrariaan & Pertanahan",
        en: "Agrarian & Land Law",
      },
      {
        id: "Hukum Perdata & Bisnis",
        en: "Private & Business Law",
      },
      {
        id: "Hukum Keluarga & Waris",
        en: "Family & Inheritance Law",
      },
      {
        id: "Isu Hukum Terkait Lainnya",
        en: "Other Related Legal Issues",
      },
    ],
    link: "http://jurnal.unissula.ac.id/index.php/akta",
  },

  {
    id: "sanlar",
    nama: "Sultan Agung Notary Law Review (SANLaR)",
    logo: logoSanlar,
    akreditasi: {
      peringkat: "SINTA 3",
      sk: "SK No. 0110/C3/DT.05.00/2026",
    },
    catatan: null,
    deskripsi: {
      id:
        "Wadah publikasi hasil penelitian maupun artikel ulasan mendalam di bidang hukum " +
        "kenotariatan dan isu hukum yang terkait dengannya.",
      en:
        "A venue for research articles and in-depth review articles in notarial law and its " +
        "related legal issues.",
    },
    scope: [
      { id: "Hukum Pertanahan & Agraria", en: "Land & Agrarian Law" },
      { id: "Hukum Perikatan & Perjanjian", en: "Law of Obligations & Contracts" },
      { id: "Hukum Kewarisan", en: "Inheritance Law" },
      {
        id: "Hukum Ekonomi Islam & Perbankan Syariah",
        en: "Islamic Economic Law & Sharia Banking",
      },
      { id: "Bidang Hukum Terkait Lainnya", en: "Other Related Legal Fields" },
    ],
    link: "http://jurnal.unissula.ac.id/index.php/SANLaR",
  },

  {
    id: "konstatering",
    nama: "Jurnal Konstatering",
    logo: logoKonstatering,
    akreditasi: null,
    catatan: { id: "Khusus Wisuda", en: "Graduation Requirement" },
    deskripsi: {
      id:
        "Diambil dari istilah konstatering — merumuskan fakta hukum ke dalam bentuk akta. " +
        "Jurnal ini memuat artikel ringkasan hasil penelitian tesis mahasiswa, ditulis di bawah " +
        "bimbingan dosen pembimbing sebagai syarat pendaftaran wisuda.",
      en:
        "Named after konstatering — the act of casting legal facts into a deed. It publishes " +
        "article-length summaries of students' theses, written under the supervision of their " +
        "thesis advisors as a graduation requirement.",
    },
    scope: [
      {
        id: "Praktik & Teknik Pembuatan Akta Autentik",
        en: "Practice & Technique of Drafting Authentic Deeds",
      },
      {
        id: "Hukum Pertanahan & Pendaftaran Tanah",
        en: "Land Law & Land Registration",
      },
      { id: "Hukum Perjanjian & Jaminan", en: "Contract & Security Law" },
      { id: "Hukum Kewarisan & Perkawinan", en: "Inheritance & Marriage Law" },
      {
        id: "Etika & Tanggung Jawab Profesi",
        en: "Professional Ethics & Responsibility",
      },
    ],
    link: "https://jurnal.unissula.ac.id/index.php/jk",
  },

  {
    id: "tabellius",
    nama: "TABELLIUS: Journal of Law",
    logo: logoTabellius,
    akreditasi: null,
    catatan: { id: "Khusus Wisuda", en: "Graduation Requirement" },
    deskripsi: {
      id:
        "Tabellius adalah sebutan bagi juru tulis pembuat dokumen pada zaman Romawi Kuno, " +
        "cikal bakal profesi notaris. Jurnal ini menerbitkan hasil penelitian dan artikel ulasan " +
        "di bidang hukum kenotariatan serta ilmu hukum terkait.",
      en:
        "Tabellius was the Roman scribe who drew up documents, the forerunner of the notarial " +
        "profession. The journal publishes research and review articles in notarial law and " +
        "related legal scholarship.",
    },
    scope: [
      { id: "Hukum Kenotariatan & PPAT", en: "Notarial & Land Deed Official Law" },
      { id: "Hukum Perjanjian & Perikatan", en: "Contract Law & Obligations" },
      { id: "Hukum Agraria & Pertanahan", en: "Agrarian & Land Law" },
      { id: "Hukum Kewarisan & Keluarga", en: "Inheritance & Family Law" },
      {
        id: "Hukum Ekonomi & Keuangan Syariah",
        en: "Economic Law & Sharia Finance",
      },
    ],
    link: "https://jurnal.unissula.ac.id/index.php/tabelius",
  },
];
