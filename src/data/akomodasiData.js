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
    title: {
      id: "Sultan Agung Boarding House",
      en: "Sultan Agung Boarding House",
    },
    shortName: {
      id: "Asrama Mahasiswa",
      en: "Student Residence",
    },
    header: {
      category: { id: "ASRAMA MAHASISWA", en: "STUDENT RESIDENCE" },
      title: {
        id: "Hunian jangka panjang berbudaya islami",
        en: "Long-term student housing with an Islamic environment",
      },
      paragraphs: [
        {
          id: "Fasilitas akomodasi ini ditujukan untuk hunian jangka panjang bagi mahasiswa maupun tamu, dengan pengelolaan lingkungan yang kental dengan budaya islami.",
          en: "This accommodation facility offers long-term residential housing for students and visitors, managed within an enriching Islamic cultural environment.",
        },
        {
          id: "Selain sebagai tempat tinggal, asrama ini berfungsi sebagai Pesantren Mahasiswa yang bertujuan membentuk karakter khaira ummah berakhlakul karimah serta membiasakan kedisiplinan beribadah.",
          en: "Beyond lodging, this residence serves as a student Islamic boarding community aimed at forging noble character (khaira ummah) and consistent devotional discipline.",
        },
      ],
    },
    galeri: [
      {
        src: asrama1,
        keterangan: {
          id: "Tampak depan gedung asrama.",
          en: "Front facade of the student residence.",
        },
      },
      {
        src: asrama2,
        keterangan: {
          id: "Halaman depan gedung asrama.",
          en: "Front courtyard of the student residence.",
        },
      },
      {
        src: asrama3,
        keterangan: {
          id: "Koridor lantai atas asrama.",
          en: "Upper floor corridor of the residence.",
        },
      },
      {
        src: asrama4,
        keterangan: {
          id: "Kamar empat tempat tidur.",
          en: "Four-bed dormitory room.",
        },
      },
      {
        src: asrama5,
        keterangan: {
          id: "Kamar dengan meja belajar.",
          en: "Student room equipped with study desks.",
        },
      },
    ],
    fasilitas: [
      {
        id: "Kamar asrama yang didesain nyaman untuk kebutuhan istirahat mahasiswa.",
        en: "Comfortable dormitory rooms designed for student rest and study.",
      },
      {
        id: "Ruang tunggu tamu.",
        en: "Visitor lounge.",
      },
      {
        id: "Area parkir kendaraan yang terjamin keamanannya.",
        en: "Secure parking area.",
      },
      {
        id: "Fasilitas hot spot (Wi-Fi) untuk menunjang kebutuhan belajar.",
        en: "High-speed Wi-Fi hotspot support for academic needs.",
      },
      {
        id: "Area olahraga, seperti lapangan basket dan bola voli.",
        en: "Sports facilities including basketball and volleyball courts.",
      },
      {
        id: "Program internal berupa bimbingan pengamalan agama Islam serta pembelajaran berbagai bahasa.",
        en: "Residential programs offering Islamic guidance and foreign language learning.",
      },
    ],
  },

  guestHouse: {
    id: "guest-house",
    title: {
      id: "Sultan Agung Guest House",
      en: "Sultan Agung Guest House",
    },
    shortName: {
      id: "Guest House",
      en: "Guest House",
    },
    header: {
      category: { id: "GUEST HOUSE", en: "GUEST HOUSE" },
      title: {
        id: "Penginapan resmi bagi tamu akademik",
        en: "Official accommodation for academic visitors",
      },
      paragraphs: [
        {
          id: "Sultan Agung Guest House adalah fasilitas akomodasi resmi yang diperuntukkan bagi tamu akademik, dosen tamu, peneliti, maupun peserta seminar.",
          en: "Sultan Agung Guest House is an official hospitality facility designated for visiting professors, scholars, researchers, and conference participants.",
        },
        {
          id: "Guest house ini menyediakan tempat menginap yang nyaman dan strategis bagi tamu universitas, sekaligus menjadi lokasi transit praktis untuk acara wisuda, seminar nasional, atau kunjungan kerja.",
          en: "The guest house provides comfortable and strategic lodging for university guests, serving as convenient accommodation for graduation ceremonies, national seminars, and official visits.",
        },
      ],
    },
    galeri: [
      {
        src: guestHouse2,
        keterangan: {
          id: "Tampak gedung dari seberang danau kampus, bersebelahan dengan Fakultas Kedokteran Gigi.",
          en: "Building view from across the campus lake, adjacent to the Faculty of Dentistry.",
        },
      },
      {
        src: guestHouse1,
        keterangan: {
          id: "Halaman depan gedung dengan lapangan basket dan area parkir kendaraan.",
          en: "Front courtyard with basketball court and parking area.",
        },
      },
      {
        src: guestHouse3,
        keterangan: {
          id: "Kamar dengan televisi dan meja kerja.",
          en: "Guest room equipped with television and work desk.",
        },
      },
      {
        src: guestHouse4,
        keterangan: {
          id: "Kamar ber-AC dengan lemari pakaian dan meja kerja.",
          en: "Air-conditioned room with wardrobe and desk.",
        },
      },
      {
        src: guestHouse7,
        keterangan: {
          id: "Kamar mandi dalam dengan shower.",
          en: "En-suite bathroom with shower.",
        },
      },
      {
        src: guestHouse5,
        keterangan: {
          id: "Gerai kuliner di area dalam gedung.",
          en: "Culinary outlets inside the building.",
        },
      },
      {
        src: guestHouse6,
        keterangan: {
          id: "Minimarket untuk kebutuhan harian penghuni.",
          en: "Minimart for daily residential essentials.",
        },
      },
    ],
    fasilitas: [
      {
        id: "Kamar nyaman yang dilengkapi AC, televisi, dan kamar mandi dalam.",
        en: "Comfortable rooms equipped with air conditioning, television, and private en-suite bathrooms.",
      },
      {
        id: "Restoran atau kantin yang menyediakan layanan konsumsi dan sarapan bagi para tamu.",
        en: "Dining cafeteria providing breakfast and meals for guests.",
      },
      {
        id: "Akses strategis menuju fakultas, rektorat, dan fasilitas umum kota.",
        en: "Strategic access to academic faculties, university rectorate, and city transit.",
      },
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
