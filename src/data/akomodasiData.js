/**
 * Akomodasi UNISSULA — asrama mahasiswa dan wisma tamu.
 *
 * SUMBER: dokumen resmi "akomodasi.docx" dari program studi. Deskripsi dan
 * daftar fasilitas disalin dari dokumen tersebut, hanya dirapikan ejaannya.
 *
 * Dokumen sumber tidak memuat tarif, tipe kamar, alamat, maupun narahubung
 * pengelola, sehingga bagian-bagian itu tidak dicantumkan di sini — bukan
 * dikira-kira.
 *
 * Foto tersimpan di assets/images/akomodasi. Keterangannya sengaja hanya
 * menyebut apa yang terlihat di gambar, karena dokumen sumber tidak memuat
 * nama ruangan maupun tipe kamar.
 */

import asrama1 from "../assets/images/akomodasi/asrama-1.jpg";
import asrama2 from "../assets/images/akomodasi/asrama-2.jpg";
import asrama3 from "../assets/images/akomodasi/asrama-3.png";
import asrama4 from "../assets/images/akomodasi/asrama-4.png";
import asrama5 from "../assets/images/akomodasi/asrama-5.png";

import guestHouse1 from "../assets/images/akomodasi/bh-1.jpg";
import guestHouse2 from "../assets/images/akomodasi/bh-2.jpg";
import guestHouse3 from "../assets/images/akomodasi/bh-3.png";
import guestHouse4 from "../assets/images/akomodasi/bh-4.png";
import guestHouse5 from "../assets/images/akomodasi/bh-5.png";
import guestHouse6 from "../assets/images/akomodasi/bh-6.png";
import guestHouse7 from "../assets/images/akomodasi/bh-7.png";

export const akomodasiData = {
  asrama: {
    id: "asrama",
    title: "Sultan Agung Boarding House",
    shortName: "Asrama Mahasiswa",
    header: {
      category: "ASRAMA MAHASISWA",
      title: "Hunian jangka panjang berbudaya islami",
      paragraphs: [
        "Fasilitas akomodasi ini ditujukan untuk hunian jangka panjang bagi mahasiswa maupun tamu, dengan pengelolaan lingkungan yang kental dengan budaya islami.",
        "Selain sebagai tempat tinggal, asrama ini berfungsi sebagai Pesantren Mahasiswa yang bertujuan membentuk karakter khaira ummah berakhlakul karimah serta membiasakan kedisiplinan beribadah.",
      ],
    },
    galeri: [
      { src: asrama1, keterangan: "Tampak depan gedung asrama." },
      { src: asrama2, keterangan: "Halaman depan gedung asrama." },
      { src: asrama3, keterangan: "Koridor lantai atas asrama." },
      { src: asrama4, keterangan: "Kamar empat tempat tidur." },
      { src: asrama5, keterangan: "Kamar dengan meja belajar." },
    ],
    fasilitas: [
      "Kamar asrama yang didesain nyaman untuk kebutuhan istirahat mahasiswa.",
      "Ruang tunggu tamu.",
      "Area parkir kendaraan yang terjamin keamanannya.",
      "Fasilitas hot spot (Wi-Fi) untuk menunjang kebutuhan belajar.",
      "Area olahraga, seperti lapangan basket dan bola voli.",
      "Program internal berupa bimbingan pengamalan agama Islam serta pembelajaran berbagai bahasa.",
    ],
  },

  guestHouse: {
    id: "guest-house",
    title: "Sultan Agung Guest House",
    shortName: "Guest House",
    header: {
      category: "GUEST HOUSE",
      title: "Penginapan resmi bagi tamu akademik",
      paragraphs: [
        "Sultan Agung Guest House adalah fasilitas akomodasi resmi yang diperuntukkan bagi tamu akademik, dosen tamu, peneliti, maupun peserta seminar.",
        "Guest house ini menyediakan tempat menginap yang nyaman dan strategis bagi tamu universitas, sekaligus menjadi lokasi transit praktis untuk acara wisuda, seminar nasional, atau kunjungan kerja.",
      ],
    },
    galeri: [
      {
        src: guestHouse2,
        keterangan:
          "Tampak gedung dari seberang danau kampus, bersebelahan dengan Fakultas Kedokteran Gigi.",
      },
      {
        src: guestHouse1,
        keterangan: "Halaman depan gedung dengan lapangan basket dan area parkir kendaraan.",
      },
      { src: guestHouse3, keterangan: "Kamar dengan televisi dan meja kerja." },
      {
        src: guestHouse4,
        keterangan: "Kamar ber-AC dengan lemari pakaian dan meja kerja.",
      },
      { src: guestHouse7, keterangan: "Kamar mandi dalam dengan shower." },
      { src: guestHouse5, keterangan: "Gerai kuliner di area dalam gedung." },
      {
        src: guestHouse6,
        keterangan: "Minimarket untuk kebutuhan harian penghuni.",
      },
    ],
    fasilitas: [
      "Kamar nyaman yang dilengkapi AC, televisi, dan kamar mandi dalam.",
      "Restoran atau kantin yang menyediakan layanan konsumsi dan sarapan bagi para tamu.",
      "Akses strategis menuju fakultas, rektorat, dan fasilitas umum kota.",
    ],
  },
};

/**
 * Foto latar hero halaman Akomodasi: satu putaran yang sama untuk kedua tab,
 * berisi foto pilihan dari asrama maupun guest house secara berselang-seling.
 *
 * Hanya foto berorientasi lanskap yang dipakai. Foto kamar dan kamar mandi
 * guest house berorientasi potret, sehingga akan terpotong parah pada hero
 * yang lebar — foto-foto itu tetap tampil utuh di galeri isi halaman.
 *
 * Cukup `src` karena hero memperlakukan gambarnya sebagai dekorasi dan
 * menyembunyikannya dari pembaca layar; keterangannya ada di galeri.
 */
export const akomodasiHeroSlides = [
  { src: guestHouse2 },
  { src: asrama1 },
  { src: guestHouse1 },
  { src: asrama2 },
  { src: asrama3 },
];
