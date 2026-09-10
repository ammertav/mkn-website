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
    category: { id: "LABORATORIUM", en: "LABORATORY" },
    title: {
      id: "Laboratorium Akta Magister Kenotariatan",
      en: "Master of Notarial Law Deed Laboratory",
    },
    paragraphs: [
      {
        id: "Laboratorium Akta merupakan pusat simulasi taktis bagi mahasiswa Magister Kenotariatan UNISSULA untuk mematangkan keahlian dalam merancang, membuat, hingga membacakan draf akta autentik. Berorientasi pada standar kerja profesional, laboratorium ini menjembatani teori hukum perdata dengan praktik nyata secara langsung.",
        en: "The Deed Laboratory serves as a tactical simulation centre for UNISSULA Master of Notarial Law students to hone skills in drafting, preparing, and reading authentic deeds. Oriented to professional workplace standards, this laboratory directly bridges civil law theory with real-world practice.",
      },
      {
        id: "Praktikum selalu didampingi dosen yang sekaligus praktisi — Notaris dan PPAT berpengalaman — guna mendiskusikan praktik terbaik serta mitigasi permasalahan yang kerap muncul dalam pembuatan akta di lapangan.",
        en: "Practicums are mentored by faculty members who are also experienced practitioners—licensed Notaries and Land Title Registrars (PPAT)—to examine best practices and mitigate complexities frequently encountered in deed drafting.",
      },
    ],
  },
  fasilitas: [
    {
      id: "Meja simulasi penandatanganan akta dengan tata letak profesional.",
      en: "Deed signing simulation tables arranged in a professional configuration.",
    },
    {
      id: "Perangkat komputer maupun laptop yang terinstal format draf baku kenotariatan.",
      en: "Workstations and laptops pre-configured with standardized notarial drafting templates.",
    },
    {
      id: "Printer dan mesin cetak akta yang sesuai dengan standar dan regulasi profesi.",
      en: "Printers and deed output machinery adhering to professional standards and regulations.",
    },
    {
      id: "Blanko kertas akta (simulasi minuta akta) serta peralatan pengikatan dokumen.",
      en: "Deed paper blanks (original deed/minuta simulations) and legal document binding equipment.",
    },
    {
      id: "Proyektor LCD dan smartboard untuk membedah anatomi akta bersama dosen.",
      en: "LCD projectors and interactive smartboards for dissecting deed anatomy alongside faculty.",
    },
    {
      id: "Tata ruang yang memenuhi standar Kesehatan, Keselamatan Kerja, dan Lingkungan (K3L).",
      en: "Ergonomic interior layout compliant with Occupational Health, Safety, and Environment (HSE) standards.",
    },
  ],
  galeri: [
    {
      src: labAkta1,
      keterangan: {
        id: "Praktik penyusunan draf akta pada perangkat laboratorium",
        en: "Practicing deed drafting on laboratory workstations",
      },
    },
    {
      src: labAkta6,
      keterangan: {
        id: "Laboratorium Kenotariatan dan Biro Konsultasi Bantuan Hukum Pertanahan",
        en: "Notarial Laboratory and Land Legal Aid Consultation Bureau",
      },
    },
    {
      src: labAkta2,
      keterangan: {
        id: "Tata ruang laboratorium dengan meja praktik berbentuk U",
        en: "Laboratory layout featuring a U-shaped practice table arrangement",
      },
    },
    {
      src: labAkta3,
      keterangan: {
        id: "Pendampingan dosen praktisi saat sesi praktikum",
        en: "Faculty practitioner mentoring during a hands-on practicum session",
      },
    },
    {
      src: labAkta4,
      keterangan: {
        id: "Bimbingan penggunaan perangkat praktik kepada mahasiswa",
        en: "Guiding students in the utilization of practical equipment",
      },
    },
    {
      src: labAkta5,
      keterangan: {
        id: "Pembahasan dokumen bersama melalui layar proyeksi",
        en: "Collaborative document review via digital projection screens",
      },
    },
    {
      src: labAkta7,
      keterangan: {
        id: "Suasana kelas praktikum di Laboratorium Akta",
        en: "Atmosphere of a practicum session inside the Deed Laboratory",
      },
    },
  ],
  video: {
    src: "/videos/lab-akta-profil.mp4",
    judul: {
      id: "Profil Laboratorium Akta",
      en: "Deed Laboratory Profile",
    },
  },
  dokumen: {
    label: {
      id: "Daftar Perlengkapan Laboratorium",
      en: "Laboratory Equipment Inventory",
    },
    fileUrl: pdfPerlengkapanLabAkta,
    fileName: "Daftar-Perlengkapan-Laboratorium-Akta-MKn.pdf",
  },
};

export const laboratoriumManajemenKantorData = {
  header: {
    number: "02",
    category: { id: "LABORATORIUM", en: "LABORATORY" },
    title: {
      id: "Laboratorium Manajemen Kantor Notaris/PPAT",
      en: "Notary/PPAT Office Management Laboratory",
    },
    paragraphs: [
      {
        id: "Laboratorium ini difokuskan pada pembekalan manajerial dan tata kelola administrasi sebuah kantor Notaris/PPAT. Lulusan kenotariatan dituntut tidak hanya ahli membuat akta, tetapi juga andal mengelola birokrasi kantor, kearsipan protokol, pelayanan klien, hingga pelaporan administrasi ke instansi terkait.",
        en: "This laboratory focuses on imparting managerial proficiency and administrative governance for a Notary/PPAT office. Master of Notarial Law graduates are expected not only to master deed drafting, but also to competently oversee office bureaucracy, protocol archiving, client services, and statutory reporting to government agencies.",
      },
      {
        id: "Laboratorium ini dirancang khusus untuk membentuk mental kepemimpinan dan kedisiplinan administratif mahasiswa.",
        en: "This facility is specifically designed to cultivate student leadership, organizational agility, and rigorous administrative discipline.",
      },
    ],
  },
  fasilitas: [
    {
      id: "Area simulasi loket pendaftaran atau front office pelayanan klien.",
      en: "Simulation front-desk registration counter and client reception service area.",
    },
    {
      id: "Lemari arsip dan rak penyimpanan (filing cabinet) khusus bundel minuta akta dan protokol notaris.",
      en: "Filing cabinets and secure archives designated for original deed bundles and notarial protocols.",
    },
    {
      id: "Perangkat komputer yang terkoneksi dengan simulasi sistem pendaftaran fidusia, pelaporan pajak, dan sistem AHU daring.",
      en: "Computers connected to fiduciary registration simulations, tax reporting modules, and online AHU legal portals.",
    },
    {
      id: "Ruang tunggu dan meja konsultasi privat untuk simulasi penanganan klien.",
      en: "Client lounge and private consultation suites for practicing client counseling.",
    },
  ],
  galeri: [
    {
      src: labMan1,
      keterangan: {
        id: "Simulasi penerimaan klien di meja front office",
        en: "Simulating client reception at the front office desk",
      },
    },
    {
      src: labMan2,
      keterangan: {
        id: "Simulasi konsultasi klien di ruang kerja notaris",
        en: "Client consultation simulation inside a notary's private office",
      },
    },
    {
      src: labMan3,
      keterangan: {
        id: "Simulasi pertemuan para pihak di ruang konsultasi",
        en: "Multi-party consultation meeting simulation",
      },
    },
    {
      src: labMan4,
      keterangan: {
        id: "Simulasi penandatanganan dokumen di meja pelayanan",
        en: "Document execution and signing simulation at the service desk",
      },
    },
    {
      src: labMan5,
      keterangan: {
        id: "Laboratorium Administrasi Kantor Notaris/PPAT",
        en: "Notary/PPAT Office Administration Laboratory",
      },
    },
  ],
};

export const researchCenterData = {
  header: {
    number: "03",
    category: { id: "PUSAT RISET", en: "RESEARCH CENTER" },
    title: {
      id: "Pusat Riset Mahasiswa (Student Research Center)",
      en: "Student Research Center (SRC)",
    },
    paragraphs: [
      {
        id: "Pusat Riset Mahasiswa (SRC) bertindak sebagai ruang inkubator akademik bagi mahasiswa Magister Kenotariatan yang sedang melakukan riset, penulisan tesis, maupun artikel jurnal ilmiah. Di sinilah kultur akademik dikembangkan secara intensif.",
        en: "The Student Research Center (SRC) serves as an academic incubator for Master of Notarial Law students conducting empirical and doctrinal legal research, master's thesis writing, and scholarly journal publication. Here, academic culture is intensively cultivated.",
      },
      {
        id: "Tempat ini diwujudkan untuk memfasilitasi diskusi kritis, penelitian berbasis Outcome-Based Education (OBE), serta mendorong publikasi hukum berkualitas yang berdaya saing secara internasional.",
        en: "The center fosters critical legal inquiry, Outcome-Based Education (OBE) research, and high-impact legal publications with international competitiveness.",
      },
    ],
  },
  fasilitas: [
    {
      id: "Akses internet Wi-Fi berkecepatan tinggi yang stabil.",
      en: "Stable, high-speed enterprise Wi-Fi internet connectivity.",
    },
    {
      id: "Stasiun kerja individual dan meja diskusi melingkar untuk kerja kelompok atau konsultasi tesis.",
      en: "Individual study carrels and circular conference desks for group work or thesis advisory sessions.",
    },
    {
      id: "Akses ke portal e-journal hukum, basis data literatur internasional, serta direktori putusan pengadilan.",
      en: "Direct access to legal e-journal portals, international scholarly databases, and judicial decision registries.",
    },
    {
      id: "Papan tulis dan medium curah gagasan untuk merumuskan kerangka penelitian.",
      en: "Brainstorming boards and collaborative media for formulating research frameworks.",
    },
  ],
  galeri: [
    {
      src: src1,
      keterangan: {
        id: "Mahasiswa mengerjakan riset dengan laptop dan literatur",
        en: "Students conducting legal research using laptops and scholarly literature",
      },
    },
    {
      src: src2,
      keterangan: {
        id: "Diskusi kelompok mengelilingi meja baca",
        en: "Collaborative study group discussion around reading tables",
      },
    },
    {
      src: src3,
      keterangan: {
        id: "Ruang riset bersama yang dikelilingi rak rujukan",
        en: "Shared research commons flanked by reference book shelves",
      },
    },
    {
      src: src4,
      keterangan: {
        id: "Penelusuran literatur di sela kegiatan riset",
        en: "Literature retrieval during student research sessions",
      },
    },
  ],
};

export const perpustakaanData = {
  header: {
    number: "04",
    category: { id: "PERPUSTAKAAN", en: "LIBRARY" },
    title: {
      id: "Perpustakaan Magister Kenotariatan",
      en: "Master of Notarial Law Library",
    },
    paragraphs: [
      {
        id: "Sebagai nadi literasi akademik, perpustakaan yang terintegrasi erat dengan Cyber Library Universitas menyediakan akses pada rujukan literatur hukum perdata, hukum bisnis, pertanahan, hingga teori kenotariatan modern.",
        en: "As the vital hub of academic literacy, the faculty library—tightly integrated with UNISSULA Cyber Library—provides comprehensive access to civil law treatises, business law doctrines, agrarian treatises, and modern notarial jurisprudence.",
      },
      {
        id: "Perpustakaan dikelola sebagai sarana belajar yang tangguh, aman, inklusif, dan sesuai peruntukannya guna menunjang pendalaman keilmuan yang holistik bagi mahasiswa pascasarjana.",
        en: "The library is managed as a robust, secure, and inclusive scholarly repository, facilitating holistic intellectual exploration for postgraduate scholars.",
      },
    ],
  },
  fasilitas: [
    {
      id: "Koleksi fisik buku, literatur hukum terkemuka, jurnal cetak, dan arsip tesis alumni terdahulu.",
      en: "Extensive physical collection of prominent legal treatises, print periodicals, and alumni thesis archives.",
    },
    {
      id: "Sistem akses barcode gate untuk kelancaran administrasi sirkulasi dan keanggotaan mahasiswa.",
      en: "Automated barcode security gate access ensuring seamless student circulation and borrowing.",
    },
    {
      id: "Stasiun pencarian katalog digital (OPAC) untuk melacak literatur fisik maupun elektronik.",
      en: "Digital Online Public Access Catalog (OPAC) stations to search physical and electronic holdings.",
    },
    {
      id: "Tata ruang baca yang senyap dan ergonomis, didukung pencahayaan ideal, sirkulasi udara yang baik, serta fasilitas darurat proteksi koleksi.",
      en: "Quiet, ergonomic reading lounges featuring balanced illumination, ventilation, and emergency collection protection.",
    },
  ],
  galeri: [
    {
      src: perpus1,
      keterangan: {
        id: "Stasiun penelusuran katalog digital di Perpustakaan Fakultas Hukum",
        en: "Digital catalog OPAC retrieval terminals in the Faculty of Law Library",
      },
    },
    {
      src: perpus2,
      keterangan: {
        id: "Membaca literatur di area koleksi terbitan berkala",
        en: "Reading legal literature in the periodicals collection area",
      },
    },
    {
      src: perpus3,
      keterangan: {
        id: "Ruang baca dengan rak koleksi hukum",
        en: "Quiet reading hall bordered by open-stack legal repositories",
      },
    },
    {
      src: perpus4,
      keterangan: {
        id: "Penataan koleksi di antara rak buku",
        en: "Curated book collections along library stacks",
      },
    },
    {
      src: perpus6,
      keterangan: {
        id: "Diskusi literatur di area baca",
        en: "Scholarly discourse in the collaborative reading section",
      },
    },
  ],
};

export const ruangKelasData = {
  header: {
    number: "05",
    category: { id: "RUANG KELAS", en: "CLASSROOMS" },
    title: {
      id: "Ruang Kelas Pembelajaran",
      en: "Lecture Classrooms",
    },
    paragraphs: [
      {
        id: "Ruang kelas di Magister Kenotariatan UNISSULA didesain modern dan interaktif untuk menghidupkan suasana pembelajaran pascasarjana. Penataan ruang berfokus pada kemudahan interaksi dua arah antara pengajar dan mahasiswa.",
        en: "Classrooms in the UNISSULA Master of Notarial Law programme are designed with modern, interactive aesthetics to cultivate engaging postgraduate learning. Interior ergonomics emphasize seamless two-way dialogue between professors and students.",
      },
      {
        id: "Ruang kelas ini menjunjung prinsip kesetaraan dengan memastikan akses mobilitas yang sangat baik, termasuk ramah disabilitas, agar setiap peserta didik mampu menyerap ilmu dengan prima.",
        en: "Classrooms embrace inclusivity and accessibility with barrier-free mobility features and disability access, ensuring every student can pursue knowledge unhindered.",
      },
    ],
  },
  fasilitas: [
    {
      id: "Pendingin ruangan (AC) dengan penataan akustik ruangan yang memadai.",
      en: "Climate-controlled air conditioning paired with acoustic-optimized wall dampening.",
    },
    {
      id: "Meja dan kursi fleksibel yang memudahkan pengaturan ulang dari format klasikal menjadi Forum Group Discussion (FGD).",
      en: "Modular ergonomic desks allowing rapid reconfiguration between lecture and Focus Group Discussion (FGD) layouts.",
    },
    {
      id: "Sistem Smart TV, smartboard, atau layar proyektor dengan sistem audio terintegrasi.",
      en: "Smart TVs, interactive digital boards, or high-lumen projectors with integrated audio systems.",
    },
    {
      id: "Desain kelas aksesibel — terkoneksi langsung dengan ramp dan lift standar K3L, serta rute evakuasi dan pencahayaan optimal.",
      en: "Accessible architecture connected to certified elevators, ramps, clear emergency routes, and natural lighting.",
    },
  ],
  galeri: [
    {
      src: kelas2C,
      keterangan: { id: "Ruang kelas 2C", en: "Classroom 2C" },
    },
    {
      src: kelas2D2,
      keterangan: { id: "Ruang kelas 2D", en: "Classroom 2D" },
    },
    {
      src: kelas2D,
      keterangan: { id: "Ruang kelas 2D", en: "Classroom 2D" },
    },
    {
      src: kelas3F,
      keterangan: { id: "Ruang kelas 3F", en: "Classroom 3F" },
    },
    {
      src: kelas3F2,
      keterangan: { id: "Ruang kelas 3F", en: "Classroom 3F" },
    },
    {
      src: kelas3B,
      keterangan: { id: "Ruang kelas 3B", en: "Classroom 3B" },
    },
  ],
};

/**
 * Ruang Seminar terdiri atas dua ruangan dengan peruntukan berbeda, sehingga
 * datanya dipisah dan halamannya menampilkan keduanya berurutan.
 */
export const ruangSeminarLantai3Data = {
  header: {
    category: { id: "RUANG SEMINAR", en: "SEMINAR HALL" },
    title: {
      id: "Ruang Seminar Lantai 3 (Aula Fakultas Hukum)",
      en: "3rd Floor Seminar Hall (Faculty of Law Auditorium)",
    },
    paragraphs: [
      {
        id: "Aula Fakultas Hukum Universitas Islam Sultan Agung (UNISSULA) merupakan fasilitas representatif yang digunakan untuk mendukung berbagai kegiatan akademik dan kelembagaan dalam skala besar. Aula ini dimanfaatkan untuk seminar nasional dan internasional, kuliah umum, konferensi, workshop, Focus Group Discussion (FGD), pembekalan mahasiswa, kegiatan kemahasiswaan, rapat terbuka, serta berbagai kegiatan akademik dan institusional lainnya.",
        en: "The Auditorium of the Faculty of Law, Sultan Agung Islamic University (UNISSULA) is a distinguished facility engineered to host large-scale academic and institutional events. It accommodates national and international symposiums, guest lectures, conferences, workshops, student orientations, academic convocations, and major institutional meetings.",
      },
      {
        id: "Dengan kapasitas peserta yang besar dan penataan ruang bergaya auditorium, aula mendukung penyelenggaraan kegiatan secara tertib, nyaman, dan profesional.",
        en: "Featuring expansive seating capacity and theater-style acoustics, the auditorium ensures orderly, comfortable, and professional event delivery.",
      },
    ],
  },
  fasilitas: [
    { id: "Panggung utama.", en: "Main presentation stage." },
    { id: "Podium.", en: "Keynote podium." },
    { id: "Meja dan kursi narasumber.", en: "Panelist dais and speaker seating." },
    { id: "Kursi peserta dalam jumlah memadai.", en: "High-capacity audience seating." },
    { id: "Layar/display berukuran besar.", en: "Large-format digital projection displays." },
    { id: "Sistem tata suara dan mikrofon.", en: "Integrated acoustic sound and microphone system." },
    { id: "Lighting.", en: "Stage and architectural illumination." },
    { id: "Sistem pendingin udara (AC).", en: "High-capacity central air conditioning." },
  ],
  galeri: [
    {
      src: seminarLt3,
      keterangan: {
        id: "Tata ruang aula bergaya auditorium",
        en: "Auditorium-style hall layout and seating",
      },
    },
    {
      src: seminarLt3Kegiatan,
      keterangan: {
        id: "Aula saat digunakan untuk kegiatan akademik",
        en: "Auditorium during a major academic conference",
      },
    },
  ],
};

export const ruangSeminarLantai1Data = {
  header: {
    category: { id: "RUANG SEMINAR", en: "SEMINAR ROOM" },
    title: {
      id: "Ruang Seminar Lantai 1",
      en: "1st Floor Seminar Room",
    },
    paragraphs: [
      {
        id: "Ruang Seminar Lantai 1 Fakultas Hukum Universitas Islam Sultan Agung (UNISSULA) merupakan fasilitas akademik yang digunakan untuk mendukung berbagai kegiatan program studi dan fakultas, terutama ujian skripsi, tesis, ujian proposal, disertasi, rapat akademik, rapat koordinasi, diskusi ilmiah, pembekalan mahasiswa, serta pertemuan dengan dosen maupun mitra eksternal.",
        en: "The 1st Floor Seminar Room of the Faculty of Law UNISSULA is a specialized academic facility hosting master's thesis examinations, proposal defenses, dissertation hearings, academic boards, scientific symposiums, and institutional stakeholder meetings.",
      },
      {
        id: "Ruang ini memiliki tata letak yang fleksibel sehingga dapat disesuaikan dengan kebutuhan kegiatan, baik dalam bentuk ruang ujian, forum rapat, maupun kegiatan seminar dan diskusi kelompok.",
        en: "The room provides versatile arrangements adaptable to exam board layouts, boardroom councils, and interactive colloquiums.",
      },
    ],
  },
  fasilitas: [
    { id: "Meja dan kursi peserta.", en: "Participant conference tables and seating." },
    { id: "Meja penguji atau pimpinan rapat.", en: "Board of examiners and meeting leadership desk." },
    { id: "Podium.", en: "Presentation lectern." },
    { id: "LCD projector.", en: "High-definition LCD projector." },
    { id: "Layar presentasi.", en: "Retractable projection screen." },
    { id: "Sistem tata suara dan speaker.", en: "Public address sound and speaker system." },
    { id: "Lighting.", en: "Optimized conference room lighting." },
    { id: "Pendingin udara (AC).", en: "Split air conditioning." },
  ],
  galeri: [
    {
      src: seminarLt1,
      keterangan: {
        id: "Meja penguji dan tata letak ruang seminar lantai 1",
        en: "Board of examiners table and room configuration",
      },
    },
    {
      src: seminarLt1Kegiatan,
      keterangan: {
        id: "Ruang seminar saat digunakan untuk Diklat Calon PPAT",
        en: "Seminar room hosted during Candidate PPAT Training",
      },
    },
  ],
};

export const podcastData = {
  header: {
    category: { id: "PODCAST", en: "PODCAST" },
    title: {
      id: "Ruang Podcast Kenotariatan",
      en: "Notarial Podcast Studio",
    },
    paragraphs: [
      {
        id: "Ruang Podcast Program Studi Magister Kenotariatan (M.Kn.) Fakultas Hukum UNISSULA merupakan fasilitas penunjang pembelajaran dan komunikasi akademik yang digunakan untuk produksi konten edukatif, wawancara dengan pakar dan praktisi, diskusi isu-isu kenotariatan, sosialisasi kegiatan program studi, serta diseminasi hasil penelitian dan pengabdian kepada masyarakat.",
        en: "The Podcast Studio of the UNISSULA Master of Notarial Law Programme is a modern academic media facility used to produce educational digital content, expert interviews, discussions on emerging notarial issues, and dissemination of legal research and community outreach.",
      },
      {
        id: "Keberadaan ruang podcast ini mendukung pengembangan pembelajaran berbasis media digital sekaligus memperluas penyebaran informasi dan pengetahuan hukum kenotariatan kepada mahasiswa, alumni, praktisi, dan masyarakat.",
        en: "This digital broadcast studio fosters multimedia-based learning while broadening public and professional understanding of contemporary notarial law.",
      },
    ],
  },
  fasilitas: [
    { id: "Kamera video.", en: "Broadcast video camera." },
    { id: "Tripod.", en: "Heavy-duty camera tripod." },
    { id: "Mikrofon.", en: "Studio condenser microphones." },
    { id: "Headphone.", en: "Monitoring headphones." },
    { id: "Perangkat perekam dan pengolah audio.", en: "Digital audio recording console and processor." },
    { id: "Lighting/softbox.", en: "Softbox studio lighting." },
    { id: "Monitor/display.", en: "Studio preview monitors." },
    { id: "Meja dan kursi untuk narasumber.", en: "Interview table and comfortable guest seating." },
  ],
  galeri: [
    {
      src: podcastProduksi,
      keterangan: {
        id: "Proses perekaman podcast dengan tata lampu dan kamera",
        en: "Live podcast production with studio lighting and multi-camera setup",
      },
    },
    {
      src: podcastSet,
      keterangan: {
        id: "Set wawancara ruang podcast",
        en: "Podcast interview studio setup",
      },
    },
    {
      src: podcastWawancara,
      keterangan: {
        id: "Sesi wawancara bersama narasumber",
        en: "Interview session with guest legal experts",
      },
    },
  ],
};
