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
 * Pusat Riset Mahasiswa belum menyerahkan foto, jadi halamannya sengaja tanpa
 * galeri daripada memakai foto fasilitas lain yang bukan miliknya.
 */

import imgMootCourt from "../assets/images/fasilitas-moodcourt.jpeg";

import labAkta1 from "../assets/images/fasilitas/lab-akta/lab-akta-1.png";
import labAkta2 from "../assets/images/fasilitas/lab-akta/lab-akta-2.png";
import labAkta3 from "../assets/images/fasilitas/lab-akta/lab-akta-3.png";
import labAkta4 from "../assets/images/fasilitas/lab-akta/lab-akta-4.png";
import labAkta5 from "../assets/images/fasilitas/lab-akta/lab-akta-5.png";
import pdfPerlengkapanLabAkta from "../assets/pdf/fasilitas/lab-akta/daftar-perlengkapan-lab-akta.pdf";

import labKantorFrontOffice from "../assets/images/fasilitas/lab-manajemen-kantor/ruang-front-office.png";
import labKantorNotaris from "../assets/images/fasilitas/lab-manajemen-kantor/ruang-notaris.png";
import labKantorPembacaan from "../assets/images/fasilitas/lab-manajemen-kantor/ruang-pembacaan-akta.png";
import labKantorTamu from "../assets/images/fasilitas/lab-manajemen-kantor/ruang-tamu.png";

import perpus1 from "../assets/images/fasilitas/perpus/perpustakaan-1.jpg";
import perpus2 from "../assets/images/fasilitas/perpus/perpustakaan-2.jpg";
import perpus3 from "../assets/images/fasilitas/perpus/perpustakaan-3.jpg";
import perpus4 from "../assets/images/fasilitas/perpus/perpustakaan-4.jpg";
import perpus5 from "../assets/images/fasilitas/perpus/perpustakaan-5.jpg";

import kelas2C from "../assets/images/fasilitas/ruang-kelas/ruang-kelas-2c.jpg";
import kelas2D from "../assets/images/fasilitas/ruang-kelas/ruang-kelas-2d.jpg";
import kelas3F from "../assets/images/fasilitas/ruang-kelas/ruang-kelas-3f.jpg";
import kelas3F2 from "../assets/images/fasilitas/ruang-kelas/ruang-kelas-3f-2.jpg";

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
    { src: labAkta1, keterangan: "Ruang praktik Laboratorium Akta" },
    { src: labAkta2, keterangan: "Meja simulasi penandatanganan akta" },
    { src: labAkta3, keterangan: "Perangkat kerja penyusunan draf akta" },
    { src: labAkta4, keterangan: "Suasana praktikum mahasiswa" },
    { src: labAkta5, keterangan: "Peralatan pengikatan dan pencetakan akta" },
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
    { src: labKantorFrontOffice, keterangan: "Ruang front office pelayanan klien" },
    { src: labKantorTamu, keterangan: "Ruang tamu" },
    { src: labKantorNotaris, keterangan: "Ruang notaris" },
    { src: labKantorPembacaan, keterangan: "Ruang pembacaan akta atau akad" },
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
  galeri: [],
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
    { src: perpus2, keterangan: "Koleksi literatur hukum" },
    { src: perpus1, keterangan: "Ruang baca perpustakaan" },
    { src: perpus3, keterangan: "Area penelusuran katalog" },
    { src: perpus4, keterangan: "Ruang belajar mandiri" },
    { src: perpus5, keterangan: "Fasilitas sirkulasi dan keanggotaan" },
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
    { src: kelas2D, keterangan: "Ruang kelas 2D" },
    { src: kelas3F, keterangan: "Ruang kelas 3F" },
    { src: kelas3F2, keterangan: "Ruang kelas 3F dari sisi lain" },
  ],
};

export const mootCourtData = {
  header: {
    number: "06",
    category: "PERADILAN SEMU",
    title: "Laboratorium Peradilan Semu (Moot Court)",
    paragraphs: [
      "Memahami dinamika litigasi mutlak dibutuhkan calon Notaris/PPAT agar produk hukum yang dibuatnya aman dari celah sengketa. Laboratorium Peradilan Semu mereplikasi suasana ruang sidang yang sesungguhnya.",
      "Fasilitas ini membiasakan mahasiswa menganalisis sengketa perdata atas sebuah akta, mempertahankan minuta akta di pengadilan, hingga bersimulasi memberikan keterangan ahli di muka majelis hakim.",
    ],
  },
  fasilitas: [
    "Tata panggung ruang sidang lengkap: meja majelis hakim, meja panitera, serta meja penggugat/jaksa dan tergugat/kuasa hukum.",
    "Kursi tersendiri untuk pemeriksaan saksi atau saksi ahli di tengah ruangan.",
    "Palu sidang serta atribut pakaian dan toga untuk berbagai fungsi dalam persidangan.",
    "Area tempat duduk tribun bagi pengunjung sidang untuk observasi pembelajaran mahasiswa lain.",
  ],
  galeri: [
    { src: imgMootCourt, keterangan: "Ruang peradilan semu program studi" },
  ],
};
