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
import imgDirPerpus from "../../assets/images/struktur-organisasi/anugrah-surya-kusuma-2.jpg";
import imgAkademik from "../../assets/images/struktur-organisasi/sumain.jpg";
import imgKeuangan from "../../assets/images/struktur-organisasi/laili-rohmah.jpg";
import imgPromosi1 from "../../assets/images/struktur-organisasi/muhammad-mutohar.jpg";
import imgPromosi2 from "../../assets/images/struktur-organisasi/aidha-nabila-mustikaweni.jpg";
import imgSarpras1 from "../../assets/images/struktur-organisasi/ahmad-kuswardoyo.jpg";
import imgSarpras2 from "../../assets/images/struktur-organisasi/nur-alamsyah.jpg";

export const tenagaKependidikan = [
  {
    jabatan: "Kepala Tata Usaha",
    name: "Ikrom, S.H., M.H.",
    photo: imgIkrom,
    tugas:
      "Koordinasi operasional ketatausahaan, layanan administratif terpadu, dan pengelolaan staf.",
  },
  {
    jabatan: "Direktur Laboratorium Akta & Manajemen Kantor Notaris",
    name: "Doni Catur Saefudin, S.H., M.Kn.",
    photo: imgDirLab,
    tugas:
      "Pengelolaan laboratorium akta, pembinaan praktik pembuatan akta, dan simulasi manajemen kantor notaris.",
  },
  {
    jabatan: "Direktur Perpustakaan",
    name: "Anugrah Surya Kusuma, S.H., M.H.",
    photo: imgDirPerpus,
    tugas:
      "Pengelolaan koleksi pustaka hukum kenotariatan, layanan referensi, dan dukungan literatur penelitian tesis.",
  },
  {
    jabatan: "Bidang Akademik",
    name: "Suma’in, S.Pd.",
    photo: imgAkademik,
    tugas:
      "Layanan administrasi akademik mahasiswa, registrasi, penjadwalan perkuliahan, dan dokumentasi ujian.",
  },
  {
    jabatan: "Bidang Keuangan",
    name: "Laili Rohmah, S.E.",
    photo: imgKeuangan,
    tugas:
      "Administrasi keuangan mahasiswa, pembiayaan kegiatan akademik, dan pengelolaan anggaran program studi.",
  },
  {
    jabatan: "Bidang Promosi & Humas",
    name: "Muhammad Mutohar, S.H., M.Kn.",
    photo: imgPromosi1,
    tugas:
      "Sosialisasi program studi, promosi penerimaan mahasiswa baru, serta pengelolaan publikasi dan media.",
  },
  {
    jabatan: "Bidang Promosi & Humas",
    name: "Aidha Nabila Mustikaweni, S.Kom.",
    photo: imgPromosi2,
    tugas:
      "Sosialisasi program studi, promosi penerimaan mahasiswa baru, serta pengelolaan publikasi dan media.",
  },
  {
    jabatan: "Bidang Sarana Prasarana",
    name: "Ahmad Kuswardoyo, S.E.",
    photo: imgSarpras1,
    tugas:
      "Pengelolaan ruang kuliah, laboratorium kenotariatan, dan fasilitas penunjang program studi.",
  },
  {
    jabatan: "Bidang Sarana Prasarana",
    name: "Nur Alamsyah",
    photo: imgSarpras2,
    tugas:
      "Pengelolaan ruang kuliah, laboratorium kenotariatan, dan fasilitas penunjang program studi.",
  },
];
