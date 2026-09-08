/**
 * Fasilitas Program Studi Magister Kenotariatan UNISSULA.
 *
 * SUMBER: dokumen resmi "fasilitas.docx" dari program studi. Deskripsi dan
 * daftar fasilitas disalin dari dokumen tersebut, hanya dirapikan ejaannya.
 *
 * Foto tersimpan di assets/images/fasilitas, dikelompokkan per fasilitas.
 * Video profil Laboratorium Akta diletakkan di public/videos karena ukurannya
 * besar: berkas di public disalin apa adanya dan dialirkan saat diputar,
 * sedangkan berkas di src ikut diproses bundler pada setiap build.
 *
 * Keterangan galeri ditulis mengikuti isi fotonya, jadi setiap penggantian
 * berkas foto perlu diikuti penyesuaian keterangannya.
 */

import labAkta1 from "../assets/images/fasilitas/lab-akta/lab-akta-1.png";
import labAkta2 from "../assets/images/fasilitas/lab-akta/lab-akta-2.png";
import labAkta3 from "../assets/images/fasilitas/lab-akta/lab-akta-3.png";
import labAkta4 from "../assets/images/fasilitas/lab-akta/lab-akta-4.png";
import labAkta5 from "../assets/images/fasilitas/lab-akta/lab-akta-5.jpg";
import labAkta6 from "../assets/images/fasilitas/lab-akta/lab-akta-6.png";
import labAkta7 from "../assets/images/fasilitas/lab-akta/lab-akta-7.jpg";
import pdfPerlengkapanLabAkta from "../assets/pdf/fasilitas/lab-akta/daftar-perlengkapan-lab-akta.pdf";

import labMan1 from "../assets/images/fasilitas/lab-manajemen-kantor/lab-man-1.png";
import labMan2 from "../assets/images/fasilitas/lab-manajemen-kantor/lab-man-2.png";
import labMan3 from "../assets/images/fasilitas/lab-manajemen-kantor/lab-man-3.png";
import labMan4 from "../assets/images/fasilitas/lab-manajemen-kantor/lab-man-4.png";
import labMan5 from "../assets/images/fasilitas/lab-manajemen-kantor/lab-man-5.png";


import perpus1 from "../assets/images/fasilitas/perpus/perpus-1.png";
import perpus2 from "../assets/images/fasilitas/perpus/perpus-2.png";
import perpus3 from "../assets/images/fasilitas/perpus/perpus-3.jpg";
import perpus4 from "../assets/images/fasilitas/perpus/perpus-4.jpg";
import perpus6 from "../assets/images/fasilitas/perpus/perpus-6.jpg";

import src1 from "../assets/images/fasilitas/student/src-1.png";
import src2 from "../assets/images/fasilitas/student/src-2.jpg";
import src3 from "../assets/images/fasilitas/student/src-3.jpg";
import src4 from "../assets/images/fasilitas/student/src-4.jpg";

import kelas2C from "../assets/images/fasilitas/ruang-kelas/ruang-kelas-2c.jpg";
import kelas2D from "../assets/images/fasilitas/ruang-kelas/ruang-kelas-2d.jpg";
import kelas2D2 from "../assets/images/fasilitas/ruang-kelas/ruang-kelas-2d-2.jpg";
import kelas3F from "../assets/images/fasilitas/ruang-kelas/ruang-kelas-3f.jpg";
import kelas3F2 from "../assets/images/fasilitas/ruang-kelas/ruang-kelas-3f-2.jpg";
import kelas3B from "../assets/images/fasilitas/ruang-kelas/ruang-kelas-2b.jpg";

import seminarLt3 from "../assets/images/fasilitas/ruang-seminar/lt3/seminar-lt3.jpg";
import seminarLt3Kegiatan from "../assets/images/fasilitas/ruang-seminar/lt3/seminar-lt3-2.jpg";
import seminarLt1 from "../assets/images/fasilitas/ruang-seminar/lt1/seminar-lt1.jpg";
import seminarLt1Kegiatan from "../assets/images/fasilitas/ruang-seminar/lt1/seminar-lt1-2.jpg";

import podcastProduksi from "../assets/images/fasilitas/podcast/podcast-2.jpeg";
import podcastSet from "../assets/images/fasilitas/podcast/podcast-1.jpeg";
import podcastWawancara from "../assets/images/fasilitas/podcast/podcast-3.jpeg";

export const laboratoriumAktaData = {
  header: {
    number: "01",
    category: "LABORATORIUM",
    title: "Laboratorium Akta Magister Kenotariatan",
    paragraphs: [
      "Laboratorium Akta merupakan pusat simulasi taktis bagi mahasiswa Magister Kenotariatan UNISSULA untuk mematangkan keahlian dalam merancang, membuat, hingga membacakan draf akta autentik. Berorientasi pada standar kerja profesional, laboratorium ini menjembatani teori hukum perdata dengan praktik nyata secara langsung.",
      "Praktikum selalu didampingi dosen yang sekaligus praktisi — Notaris dan PPAT berpengalaman — guna mendiskusikan praktik terbaik serta mitigasi permasalahan yang kerap muncul dalam pembuatan akta di lapangan.",
    ],
  },
  fasilitas: [
    "Meja simulasi penandatanganan akta dengan tata letak profesional.",
    "Perangkat komputer maupun laptop yang terinstal format draf baku kenotariatan.",
    "Printer dan mesin cetak akta yang sesuai dengan standar dan regulasi profesi.",
    "Blanko kertas akta (simulasi minuta akta) serta peralatan pengikatan dokumen.",
    "Proyektor LCD dan smartboard untuk membedah anatomi akta bersama dosen.",
    "Tata ruang yang memenuhi standar Kesehatan, Keselamatan Kerja, dan Lingkungan (K3L).",
  ],
  galeri: [
    { src: labAkta1, keterangan: "Praktik penyusunan draf akta pada perangkat laboratorium" },
    {
      src: labAkta6,
      keterangan:
        "Laboratorium Kenotariatan dan Biro Konsultasi Bantuan Hukum Pertanahan",
    },
    { src: labAkta2, keterangan: "Tata ruang laboratorium dengan meja praktik berbentuk U" },
    { src: labAkta3, keterangan: "Pendampingan dosen praktisi saat sesi praktikum" },
    { src: labAkta4, keterangan: "Bimbingan penggunaan perangkat praktik kepada mahasiswa" },
    { src: labAkta5, keterangan: "Pembahasan dokumen bersama melalui layar proyeksi" },
    { src: labAkta7, keterangan: "Suasana kelas praktikum di Laboratorium Akta" },
  ],
  video: {
    // Ditaruh di public/videos, dirujuk lewat URL — lihat catatan di kepala berkas.
    src: "/videos/lab-akta-profil.mp4",
    judul: "Profil Laboratorium Akta",
  },
  dokumen: {
    label: "Daftar Perlengkapan Laboratorium",
    fileUrl: pdfPerlengkapanLabAkta,
    fileName: "Daftar-Perlengkapan-Laboratorium-Akta-MKn.pdf",
  },
};

export const laboratoriumManajemenKantorData = {
  header: {
    number: "02",
    category: "LABORATORIUM",
    title: "Laboratorium Manajemen Kantor Notaris/PPAT",
    paragraphs: [
      "Laboratorium ini difokuskan pada pembekalan manajerial dan tata kelola administrasi sebuah kantor Notaris/PPAT. Lulusan kenotariatan dituntut tidak hanya ahli membuat akta, tetapi juga andal mengelola birokrasi kantor, kearsipan protokol, pelayanan klien, hingga pelaporan administrasi ke instansi terkait.",
      "Laboratorium ini dirancang khusus untuk membentuk mental kepemimpinan dan kedisiplinan administratif mahasiswa.",
    ],
  },
  fasilitas: [
    "Area simulasi loket pendaftaran atau front office pelayanan klien.",
    "Lemari arsip dan rak penyimpanan (filing cabinet) khusus bundel minuta akta dan protokol notaris.",
    "Perangkat komputer yang terkoneksi dengan simulasi sistem pendaftaran fidusia, pelaporan pajak, dan sistem AHU daring.",
    "Ruang tunggu dan meja konsultasi privat untuk simulasi penanganan klien.",
  ],
  galeri: [
    { src: labMan1, keterangan: "Simulasi penerimaan klien di meja front office" },
    { src: labMan2, keterangan: "Simulasi konsultasi klien di ruang kerja notaris" },
    { src: labMan3, keterangan: "Simulasi pertemuan para pihak di ruang konsultasi" },
    { src: labMan4, keterangan: "Simulasi penandatanganan dokumen di meja pelayanan" },
    {
      src: labMan5,
      keterangan: "Laboratorium Administrasi Kantor Notaris/PPAT",
    },
  ],
};

export const researchCenterData = {
  header: {
    number: "03",
    category: "PUSAT RISET",
    title: "Pusat Riset Mahasiswa (Student Research Center)",
    paragraphs: [
      "Pusat Riset Mahasiswa (SRC) bertindak sebagai ruang inkubator akademik bagi mahasiswa Magister Kenotariatan yang sedang melakukan riset, penulisan tesis, maupun artikel jurnal ilmiah. Di sinilah kultur akademik dikembangkan secara intensif.",
      "Tempat ini diwujudkan untuk memfasilitasi diskusi kritis, penelitian berbasis Outcome-Based Education (OBE), serta mendorong publikasi hukum berkualitas yang berdaya saing secara internasional.",
    ],
  },
  fasilitas: [
    "Akses internet Wi-Fi berkecepatan tinggi yang stabil.",
    "Stasiun kerja individual dan meja diskusi melingkar untuk kerja kelompok atau konsultasi tesis.",
    "Akses ke portal e-journal hukum, basis data literatur internasional, serta direktori putusan pengadilan.",
    "Papan tulis dan medium curah gagasan untuk merumuskan kerangka penelitian.",
  ],
  galeri: [
    { src: src1, keterangan: "Mahasiswa mengerjakan riset dengan laptop dan literatur" },
    { src: src2, keterangan: "Diskusi kelompok mengelilingi meja baca" },
    { src: src3, keterangan: "Ruang riset bersama yang dikelilingi rak rujukan" },
    { src: src4, keterangan: "Penelusuran literatur di sela kegiatan riset" },
  ],
};

export const perpustakaanData = {
  header: {
    number: "04",
    category: "PERPUSTAKAAN",
    title: "Perpustakaan Magister Kenotariatan",
    paragraphs: [
      "Sebagai nadi literasi akademik, perpustakaan yang terintegrasi erat dengan Cyber Library Universitas menyediakan akses pada rujukan literatur hukum perdata, hukum bisnis, pertanahan, hingga teori kenotariatan modern.",
      "Perpustakaan dikelola sebagai sarana belajar yang tangguh, aman, inklusif, dan sesuai peruntukannya guna menunjang pendalaman keilmuan yang holistik bagi mahasiswa pascasarjana.",
    ],
  },
  fasilitas: [
    "Koleksi fisik buku, literatur hukum terkemuka, jurnal cetak, dan arsip tesis alumni terdahulu.",
    "Sistem akses barcode gate untuk kelancaran administrasi sirkulasi dan keanggotaan mahasiswa.",
    "Stasiun pencarian katalog digital (OPAC) untuk melacak literatur fisik maupun elektronik.",
    "Tata ruang baca yang senyap dan ergonomis, didukung pencahayaan ideal, sirkulasi udara yang baik, serta fasilitas darurat proteksi koleksi.",
  ],
  galeri: [
    // Butir pertama tampil sebagai foto sorotan berukuran lebar penuh.
    {
      src: perpus1,
      keterangan: "Stasiun penelusuran katalog digital di Perpustakaan Fakultas Hukum",
    },
    { src: perpus2, keterangan: "Membaca literatur di area koleksi terbitan berkala" },
    { src: perpus3, keterangan: "Ruang baca dengan rak koleksi hukum" },
    { src: perpus4, keterangan: "Penataan koleksi di antara rak buku" },
    { src: perpus6, keterangan: "Diskusi literatur di area baca" },
  ],
};

export const ruangKelasData = {
  header: {
    number: "05",
    category: "RUANG KELAS",
    title: "Ruang Kelas Pembelajaran",
    paragraphs: [
      "Ruang kelas di Magister Kenotariatan UNISSULA didesain modern dan interaktif untuk menghidupkan suasana pembelajaran pascasarjana. Penataan ruang berfokus pada kemudahan interaksi dua arah antara pengajar dan mahasiswa.",
      "Ruang kelas ini menjunjung prinsip kesetaraan dengan memastikan akses mobilitas yang sangat baik, termasuk ramah disabilitas, agar setiap peserta didik mampu menyerap ilmu dengan prima.",
    ],
  },
  fasilitas: [
    "Pendingin ruangan (AC) dengan penataan akustik ruangan yang memadai.",
    "Meja dan kursi fleksibel yang memudahkan pengaturan ulang dari format klasikal menjadi Forum Group Discussion (FGD).",
    "Sistem Smart TV, smartboard, atau layar proyektor dengan sistem audio terintegrasi.",
    "Desain kelas aksesibel — terkoneksi langsung dengan ramp dan lift standar K3L, serta rute evakuasi dan pencahayaan optimal.",
  ],
  galeri: [
    { src: kelas2C, keterangan: "Ruang kelas 2C" },
    { src: kelas2D2, keterangan: "Ruang kelas 2D" },
    { src: kelas2D, keterangan: "Ruang kelas 2D" },
    { src: kelas3F, keterangan: "Ruang kelas 3F" },
    { src: kelas3F2, keterangan: "Ruang kelas 3F" },
    { src: kelas3B, keterangan: "Ruang kelas 3B" },
  ],
};

/**
 * Ruang Seminar terdiri atas dua ruangan dengan peruntukan berbeda, sehingga
 * datanya dipisah dan halamannya menampilkan keduanya berurutan.
 */
export const ruangSeminarLantai3Data = {
  header: {
    category: "RUANG SEMINAR",
    title: "Ruang Seminar Lantai 3 (Aula Fakultas Hukum)",
    paragraphs: [
      "Aula Fakultas Hukum Universitas Islam Sultan Agung (UNISSULA) merupakan fasilitas representatif yang digunakan untuk mendukung berbagai kegiatan akademik dan kelembagaan dalam skala besar. Aula ini dimanfaatkan untuk seminar nasional dan internasional, kuliah umum, konferensi, workshop, Focus Group Discussion (FGD), pembekalan mahasiswa, kegiatan kemahasiswaan, rapat terbuka, serta berbagai kegiatan akademik dan institusional lainnya.",
      "Dengan kapasitas peserta yang besar dan penataan ruang bergaya auditorium, aula mendukung penyelenggaraan kegiatan secara tertib, nyaman, dan profesional.",
    ],
  },
  fasilitas: [
    "Panggung utama.",
    "Podium.",
    "Meja dan kursi narasumber.",
    "Kursi peserta dalam jumlah memadai.",
    "Layar/display berukuran besar.",
    "Sistem tata suara dan mikrofon.",
    "Lighting.",
    "Sistem pendingin udara (AC).",
  ],
  galeri: [
    { src: seminarLt3, keterangan: "Tata ruang aula bergaya auditorium" },
    {
      src: seminarLt3Kegiatan,
      keterangan: "Aula saat digunakan untuk kegiatan akademik",
    },
  ],
};

export const ruangSeminarLantai1Data = {
  header: {
    category: "RUANG SEMINAR",
    title: "Ruang Seminar Lantai 1",
    paragraphs: [
      "Ruang Seminar Lantai 1 Fakultas Hukum Universitas Islam Sultan Agung (UNISSULA) merupakan fasilitas akademik yang digunakan untuk mendukung berbagai kegiatan program studi dan fakultas, terutama ujian skripsi, tesis, ujian proposal, disertasi, rapat akademik, rapat koordinasi, diskusi ilmiah, pembekalan mahasiswa, serta pertemuan dengan dosen maupun mitra eksternal.",
      "Ruang ini memiliki tata letak yang fleksibel sehingga dapat disesuaikan dengan kebutuhan kegiatan, baik dalam bentuk ruang ujian, forum rapat, maupun kegiatan seminar dan diskusi kelompok.",
    ],
  },
  fasilitas: [
    "Meja dan kursi peserta.",
    "Meja penguji atau pimpinan rapat.",
    "Podium.",
    "LCD projector.",
    "Layar presentasi.",
    "Sistem tata suara dan speaker.",
    "Lighting.",
    "Pendingin udara (AC).",
  ],
  galeri: [
    {
      src: seminarLt1,
      keterangan: "Meja penguji dan tata letak ruang seminar lantai 1",
    },
    {
      src: seminarLt1Kegiatan,
      keterangan: "Ruang seminar saat digunakan untuk Diklat Calon PPAT",
    },
  ],
};

export const podcastData = {
  header: {
    category: "PODCAST",
    title: "Ruang Podcast Kenotariatan",
    paragraphs: [
      "Ruang Podcast Program Studi Magister Kenotariatan (M.Kn.) Fakultas Hukum UNISSULA merupakan fasilitas penunjang pembelajaran dan komunikasi akademik yang digunakan untuk produksi konten edukatif, wawancara dengan pakar dan praktisi, diskusi isu-isu kenotariatan, sosialisasi kegiatan program studi, serta diseminasi hasil penelitian dan pengabdian kepada masyarakat.",
      "Keberadaan ruang podcast ini mendukung pengembangan pembelajaran berbasis media digital sekaligus memperluas penyebaran informasi dan pengetahuan hukum kenotariatan kepada mahasiswa, alumni, praktisi, dan masyarakat.",
    ],
  },
  fasilitas: [
    "Kamera video.",
    "Tripod.",
    "Mikrofon.",
    "Headphone.",
    "Perangkat perekam dan pengolah audio.",
    "Lighting/softbox.",
    "Monitor/display.",
    "Meja dan kursi untuk narasumber.",
  ],
  galeri: [
    {
      src: podcastProduksi,
      keterangan: "Proses perekaman podcast dengan tata lampu dan kamera",
    },
    { src: podcastSet, keterangan: "Set wawancara ruang podcast" },
    { src: podcastWawancara, keterangan: "Sesi wawancara bersama narasumber" },
  ],
};
