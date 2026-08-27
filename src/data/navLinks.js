/** @type {Array<{title: string, href: string, children?: Array}>} */
export const navLinks = [
  { title: "TENTANG KAMI", href: "/#tentang-kami" },
  {
    title: "AKADEMIK",
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
      { title: "Panduan Evaluasi/Penilaian Pembelajaran", href: "/akademik/panduan-evaluasi" },
      {
        title: "Panduan Ujian",
        href: "/akademik/panduan-ujian",
        children: [
          { title: "UTS/UAS", href: "/akademik/panduan-ujian/uts-uas" },
          { title: "Magang", href: "/akademik/panduan-ujian/magang" },
          { title: "Skripsi", href: "/akademik/panduan-ujian/skripsi" },
        ],
      },
      { title: "Asesment", href: "/akademik/asesmen" },
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
    title: "STAFF",
    href: "/staff",
    children: [
      { title: "Dosen", href: "/staff/dosen" },
      { title: "Tendik", href: "/staff/tendik" },
      { title: "Faculty Directory", href: "/staff/faculty-directory" },
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
    title: "DOWNLOAD",
    href: "/download",
  },
  {
    title: "QUALITY ASSURANCE UNIT",
    href: "/quality-assurance",
    children: [
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
    title: "MAHASISWA",
    href: "/mahasiswa",
    children: [
      { title: "Organisasi Mahasiswa", href: "/mahasiswa/organisasi" },
      { title: "Unit Kegiatan Mahasiswa (UKM)", href: "/mahasiswa/ukm" },
      { title: "Fasilitas Kampus", href: "/mahasiswa/fasilitas" },
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
];
