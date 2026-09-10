/**
 * Tenaga Kependidikan Program Studi Magister Kenotariatan UNISSULA.
 *
 * SUMBER TUNGGAL. Daftar ini dipakai dua halaman sekaligus — Struktur
 * Organisasi (sebagai kelompok "Tata Usaha dan Administrasi") dan halaman
 * Tenaga Kependidikan — supaya tidak muncul dua versi data yang saling
 * berbeda ketika salah satunya diperbarui.
 *
 * Isinya seluruh pelaksana pada struktur organisasi program studi, di luar
 * Dekan, Ketua dan Sekretaris Program Studi, serta Gugus Penjaminan Mutu yang
 * merupakan jabatan akademik, bukan tenaga kependidikan.
 *
 * `tugas` disalin dari kolom tanggung jawab pada halaman Struktur Organisasi.
 * `photo: null` berarti fotonya belum diterima — kartunya jatuh ke inisial nama.
 */

import imgIkrom from "../../assets/images/struktur-organisasi/ikrom.jpg";
import imgDirLab from "../../assets/images/struktur-organisasi/doni-catur-saefudin.jpg";
import imgDirPerpus from "../../assets/images/struktur-organisasi/hengky.png";
import imgAkademik from "../../assets/images/struktur-organisasi/sumain.jpg";
import imgKeuangan from "../../assets/images/struktur-organisasi/laili-rohmah.jpg";
import imgPromosi1 from "../../assets/images/struktur-organisasi/muhammad-mutohar.jpg";
import imgPromosi2 from "../../assets/images/struktur-organisasi/aidha-nabila-mustikaweni.jpg";
import imgSarpras1 from "../../assets/images/struktur-organisasi/ahmad-kuswardoyo.jpg";
import imgSarpras2 from "../../assets/images/struktur-organisasi/nur-alamsyah.jpg";

export const tenagaKependidikan = [
  {
    jabatan: {
      id: "Koordinator Tata Usaha",
      en: "Head of Administration / Coordinator",
    },
    name: "Ikrom, S.H., M.H.",
    photo: imgIkrom,
    tugas: {
      id: "Koordinasi operasional ketatausahaan, layanan administratif terpadu, dan pengelolaan staf.",
      en: "Coordination of operational administration, integrated administrative services, and staff management.",
    },
  },
  {
    jabatan: {
      id: "Direktur Laboratorium Akta & Manajemen Kantor Notaris",
      en: "Director of Deed Laboratory & Notary Office Management",
    },
    name: "Doni Catur Saefudin, S.H., M.Kn.",
    photo: imgDirLab,
    tugas: {
      id: "Pengelolaan laboratorium akta, pembinaan praktik pembuatan akta, dan simulasi manajemen kantor notaris.",
      en: "Management of deed laboratory, supervision of deed drafting practice, and notary office management simulation.",
    },
  },
  {
    jabatan: {
      id: "Kepala Perpustakaan",
      en: "Head of Library",
    },
    name: "R. Hengky Aditya Wibisono S.E.",
    photo: imgDirPerpus,
    tugas: {
      id: "Pengelolaan koleksi pustaka hukum kenotariatan, layanan referensi, dan dukungan literatur penelitian tesis.",
      en: "Management of notarial legal library collections, reference services, and literature support for thesis research.",
    },
  },
  {
    jabatan: {
      id: "Bidang Akademik",
      en: "Academic Affairs Staff",
    },
    name: "Suma’in, S.Pd.",
    photo: imgAkademik,
    tugas: {
      id: "Layanan administrasi akademik mahasiswa, registrasi, penjadwalan perkuliahan, dan dokumentasi ujian.",
      en: "Student academic administrative services, registration, lecture scheduling, and examination documentation.",
    },
  },
  {
    jabatan: {
      id: "Bidang Keuangan",
      en: "Financial Affairs Staff",
    },
    name: "Laili Rohmah, S.E.",
    photo: imgKeuangan,
    tugas: {
      id: "Administrasi keuangan mahasiswa, pembiayaan kegiatan akademik, dan pengelolaan anggaran program studi.",
      en: "Student financial administration, academic activity funding, and study programme budget management.",
    },
  },
  {
    jabatan: {
      id: "Bidang Promosi & Humas",
      en: "Promotion & Public Relations Staff",
    },
    name: "Muhammad Mutohar, S.H., M.Kn.",
    photo: imgPromosi1,
    tugas: {
      id: "Sosialisasi program studi, promosi penerimaan mahasiswa baru, serta pengelolaan publikasi dan media.",
      en: "Study programme promotion, new student admissions outreach, and management of publications and media.",
    },
  },
  {
    jabatan: {
      id: "Bidang Promosi & Humas",
      en: "Promotion & Public Relations Staff",
    },
    name: "Aidha Nabila Mustikaweni, S.Kom.",
    photo: imgPromosi2,
    tugas: {
      id: "Sosialisasi program studi, promosi penerimaan mahasiswa baru, serta pengelolaan publikasi dan media.",
      en: "Study programme promotion, new student admissions outreach, and management of publications and media.",
    },
  },
  {
    jabatan: {
      id: "Bidang Sarana Prasarana",
      en: "Facilities & Infrastructure Staff",
    },
    name: "Ahmad Kuswardoyo, S.E.",
    photo: imgSarpras1,
    tugas: {
      id: "Pengelolaan ruang kuliah, laboratorium kenotariatan, dan fasilitas penunjang program studi.",
      en: "Management of lecture halls, notarial laboratories, and study programme supporting facilities.",
    },
  },
  {
    jabatan: {
      id: "Bidang Sarana Prasarana",
      en: "Facilities & Infrastructure Staff",
    },
    name: "Nur Alamsyah",
    photo: imgSarpras2,
    tugas: {
      id: "Pengelolaan ruang kuliah, laboratorium kenotariatan, dan fasilitas penunjang program studi.",
      en: "Management of lecture halls, notarial laboratories, and study programme supporting facilities.",
    },
  },
];
