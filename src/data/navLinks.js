/** 
 * @typedef {Object} NavItem
 * @property {string} title
 * @property {string} href
 * @property {NavItem[]} [children]
 */

export const navLinks = [
  {
    title: "PROFIL",
    href: "/profil",
    children: [
      { title: "Sejarah / Latar Belakang", href: "/profil/sejarah" },
      { title: "Visi dan Misi", href: "/profil/visi-misi" },
      { title: "Tujuan", href: "/profil/tujuan" },
      { title: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
    ],
  },
  {
    title: "BERITA",
    href: "/berita",
  },
  {
    title: "ACADEMIC",
    href: "/akademik",
    children: [
      { title: "Profil Lulusan", href: "/akademik/profil-lulusan" },
      { title: "Capaian Pembelajaran Lulusan", href: "/akademik/capaian-pembelajaran" },
      {
        title: "Kurikulum",
        href: "/akademik/kurikulum",
        children: [
          { title: "Reguler", href: "/akademik/kurikulum/reguler" },
          { title: "Internasional", href: "/akademik/kurikulum/internasional" },
        ],
      },
      { title: "Panduan Akademik", href: "/akademik/panduan-akademik" },
      { title: "Panduan Evaluasi Pembelajaran", href: "/akademik/panduan-evaluasi" },
      {
        title: "Panduan Ujian",
        href: "/akademik/panduan-ujian",
        children: [
          { title: "UTS/UAS", href: "/akademik/panduan-ujian/uts-uas" },
          { title: "Magang", href: "/akademik/panduan-ujian/magang" },
          { title: "Tesis", href: "/akademik/panduan-ujian/tesis" },
        ],
      },
      { title: "Asesmen", href: "/akademik/asesmen" },
      { title: "Kalender Akademik", href: "/akademik/kalender" },
    ],
  },
  {
    title: "MAHASISWA",
    href: "/mahasiswa",
    children: [
      { title: "Organisasi Mahasiswa", href: "/mahasiswa/organisasi" },
      { title: "Unit Kegiatan Mahasiswa", href: "/mahasiswa/ukm" },
      { title: "Akomodasi", href: "/mahasiswa/akomodasi" },
    ],
  },
  {
    title: "ALUMNI",
    href: "/alumni",
    children: [
      { title: "Tracer Study", href: "/alumni/tracer-study" },
      { title: "Pusat Karir", href: "/alumni/pusat-karir" },
      { title: "Lowongan Pekerjaan", href: "/alumni/lowongan" },
    ],
  },
  {
    title: "INFORMASI",
    href: "/informasi",
    children: [
      { title: "Penerimaan Mahasiswa", href: "/informasi/penerimaan-mahasiswa" },
      { title: "Tingkat Kelulusan", href: "/informasi/tingkat-kelulusan" },
      { title: "Penelitian Dosen", href: "/informasi/penelitian-dosen" },
      { title: "Pengabdian Dosen", href: "/informasi/pengabdian-dosen" },
    ],
  },
  {
    title: "STAF",
    href: "/staff",
    children: [
      { title: "Dosen", href: "/staff/dosen" },
      { title: "Tenaga Kependidikan", href: "/staff/tendik" },
    ],
  },
  {
    title: "FASILITAS",
    href: "/fasilitas",
    children: [
      { title: "Ruang Kelas", href: "/fasilitas/ruang-kelas" },
      { title: "Laboratorium", href: "/fasilitas/laboratorium" },
      { title: "Student Research Center", href: "/fasilitas/student-research-center" },
      { title: "Perpustakaan", href: "/fasilitas/perpustakaan" },
    ],
  },
  {
    title: "QUALITY ASSURANCE",
    href: "/quality-assurance",
    children: [
      { title: "Quality Assurance Unit", href: "/quality-assurance" },
      {
        title: "QA Documents",
        href: "/quality-assurance/qa-documents",
        children: [
          { title: "QA Policy", href: "/quality-assurance/qa-documents/qa-policy" },
          { title: "QA Manual Standard", href: "/quality-assurance/qa-documents/qa-manual-standard" },
          { title: "QA Standar", href: "/quality-assurance/qa-documents/qa-standar" },
          { title: "QA Forms", href: "/quality-assurance/qa-documents/qa-forms" },
        ],
      },
      { title: "Internal Audit Report", href: "/quality-assurance/internal-audit-report" },
      { title: "Learning and Teaching Report", href: "/quality-assurance/learning-teaching-report" },
      { title: "Student Survey Report", href: "/quality-assurance/student-survey-report" },
      { title: "Alumni Survey Report", href: "/quality-assurance/alumni-survey-report" },
    ],
  },
  {
    title: "DOWNLOAD",
    href: "/download",
  },
];
