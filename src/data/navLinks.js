/**
 * @typedef {Object} NavItem
 * @property {{ id: string, en: string }} title
 * @property {string} href
 * @property {NavItem[]} [children]
 */

/**
 * Struktur menu situs, dwibahasa.
 *
 * `title` selalu berbentuk { id, en } dan dibaca dengan useT(). Jangan memakai
 * `title` sebagai kunci React atau kunci state — pakai `href`, karena `title`
 * kini objek dan tidak lagi unik sebagai string.
 *
 * Judul yang memang sudah berbahasa Inggris pada versi Indonesia (Quality
 * Assurance, Tracer Study, Student Research Center, Download) sengaja ditulis
 * sama di kedua kolom, bukan diterjemahkan balik.
 */
export const navLinks = [
  {
    title: { id: "BERANDA", en: "HOME" },
    href: "/",
  },
  {
    title: { id: "PROFIL", en: "PROFILE" },
    href: "/profil",
    children: [
      {
        title: { id: "Sejarah / Latar Belakang", en: "History / Background" },
        href: "/profil/sejarah",
      },
      { title: { id: "Visi", en: "Vision" }, href: "/profil/visi-misi" },
      {
        title: { id: "Tujuan Pendidikan (PEO)", en: "Educational Objectives (PEO)" },
        href: "/profil/tujuan",
      },
      {
        title: { id: "Struktur Organisasi", en: "Organisational Structure" },
        href: "/profil/struktur-organisasi",
      },
    ],
  },
  {
    title: { id: "BERITA", en: "NEWS" },
    href: "/berita",
  },
  {
    title: { id: "AKADEMIK", en: "ACADEMIC" },
    href: "/akademik",
    children: [
      {
        title: { id: "Profil Lulusan", en: "Graduate Profiles" },
        href: "/akademik/profil-lulusan",
      },
      {
        title: { id: "Capaian Pembelajaran Lulusan", en: "Intended Learning Outcomes" },
        href: "/akademik/capaian-pembelajaran",
      },
      { title: { id: "Kurikulum", en: "Curriculum" }, href: "/akademik/kurikulum" },
      {
        title: { id: "RPS & Evaluasi Pembelajaran", en: "Learning Plans & Evaluation" },
        href: "/akademik/pembelajaran",
        children: [
          {
            title: { id: "RPS", en: "Semester Learning Plan (RPS)" },
            href: "/akademik/pembelajaran/rps",
          },
          {
            title: {
              id: "Panduan Evaluasi Pembelajaran",
              en: "Learning Evaluation Guidelines",
            },
            href: "/akademik/pembelajaran/panduan-evaluasi",
          },
        ],
      },
      {
        title: { id: "Panduan Akademik", en: "Academic Guidelines" },
        href: "/akademik/panduan-akademik",
      },
      {
        title: { id: "Panduan Ujian", en: "Examination Guidelines" },
        href: "/akademik/panduan-ujian",
        children: [
          {
            title: { id: "UTS/UAS", en: "Midterm & Final Examinations" },
            href: "/akademik/panduan-ujian/uts-uas",
          },
          {
            title: { id: "Tesis", en: "Thesis" },
            href: "/akademik/panduan-ujian/tesis",
            children: [
              {
                title: { id: "Pra Proposal", en: "Pre-Proposal" },
                href: "/akademik/panduan-ujian/tesis/pra-proposal",
              },
              {
                title: { id: "Proposal", en: "Proposal" },
                href: "/akademik/panduan-ujian/tesis/proposal",
              },
              {
                title: { id: "Tesis", en: "Thesis" },
                href: "/akademik/panduan-ujian/tesis/ujian-tesis",
              },
            ],
          },
        ],
      },
      {
        title: { id: "Kalender Akademik", en: "Academic Calendar" },
        href: "/akademik/kalender",
      },
    ],
  },
  {
    title: { id: "MAHASISWA", en: "STUDENTS" },
    href: "/mahasiswa",
    children: [
      {
        title: { id: "Organisasi Mahasiswa", en: "Student Organisations" },
        href: "/mahasiswa/organisasi",
      },
      { title: { id: "Akomodasi", en: "Accommodation" }, href: "/mahasiswa/akomodasi" },
    ],
  },
  {
    title: { id: "ALUMNI", en: "ALUMNI" },
    href: "/alumni",
    children: [
      { title: { id: "Ikanotsula", en: "Ikanotsula" }, href: "/alumni/ikanotsula" },
      { title: { id: "Tracer Study", en: "Tracer Study" }, href: "/alumni/tracer-study" },
      { title: { id: "Pusat Karir", en: "Career Centre" }, href: "/alumni/pusat-karir" },
      { title: { id: "Lowongan Pekerjaan", en: "Job Vacancies" }, href: "/alumni/lowongan" },
    ],
  },
  {
    title: { id: "INFORMASI", en: "INFORMATION" },
    href: "/informasi",
    children: [
      {
        title: { id: "Penerimaan Mahasiswa", en: "Admissions" },
        href: "/informasi/penerimaan-mahasiswa",
      },
      {
        title: { id: "Tingkat Kelulusan", en: "Graduation Rates" },
        href: "/informasi/tingkat-kelulusan",
      },
      {
        title: { id: "Penelitian Dosen", en: "Faculty Research" },
        href: "/informasi/penelitian-dosen",
      },
      {
        title: { id: "Pengabdian Dosen", en: "Faculty Community Service" },
        href: "/informasi/pengabdian-dosen",
      },
    ],
  },
  {
    title: { id: "STAF", en: "STAFF" },
    href: "/staff",
    children: [
      { title: { id: "Dosen", en: "Academic Staff" }, href: "/staff/dosen" },
      {
        title: { id: "Tenaga Kependidikan", en: "Administrative Staff" },
        href: "/staff/tendik",
      },
    ],
  },
  {
    title: { id: "FASILITAS", en: "FACILITIES" },
    href: "/fasilitas",
    children: [
      { title: { id: "Ruang Kelas", en: "Classrooms" }, href: "/fasilitas/ruang-kelas" },
      { title: { id: "Laboratorium", en: "Laboratory" }, href: "/fasilitas/laboratorium" },
      {
        title: { id: "Student Research Center", en: "Student Research Center" },
        href: "/fasilitas/student-research-center",
      },
      { title: { id: "Perpustakaan", en: "Library" }, href: "/fasilitas/perpustakaan" },
    ],
  },
  {
    title: { id: "EVENT", en: "EVENTS" },
    href: "/event",
  },
  {
    title: { id: "QUALITY ASSURANCE", en: "QUALITY ASSURANCE" },
    href: "/quality-assurance",
    children: [
      {
        title: { id: "Quality Assurance Unit", en: "Quality Assurance Unit" },
        href: "/quality-assurance",
      },
      {
        title: { id: "QA Documents", en: "QA Documents" },
        href: "/quality-assurance/qa-documents",
        children: [
          {
            title: { id: "QA Policy", en: "QA Policy" },
            href: "/quality-assurance/qa-documents/qa-policy",
          },
          {
            title: { id: "QA Manual Standard", en: "QA Manual Standard" },
            href: "/quality-assurance/qa-documents/qa-manual-standard",
          },
          {
            title: { id: "QA Standar", en: "QA Standards" },
            href: "/quality-assurance/qa-documents/qa-standar",
          },
          {
            title: { id: "QA Forms", en: "QA Forms" },
            href: "/quality-assurance/qa-documents/qa-forms",
          },
        ],
      },
      {
        title: { id: "Internal Audit Report", en: "Internal Audit Report" },
        href: "/quality-assurance/internal-audit-report",
      },
      {
        title: { id: "Learning and Teaching Report", en: "Learning and Teaching Report" },
        href: "/quality-assurance/learning-teaching-report",
      },
      {
        title: { id: "Student Survey Report", en: "Student Survey Report" },
        href: "/quality-assurance/student-survey-report",
      },
      {
        title: { id: "Alumni Survey Report", en: "Alumni Survey Report" },
        href: "/quality-assurance/alumni-survey-report",
      },
    ],
  },
  {
    title: { id: "DOWNLOAD", en: "DOWNLOAD" },
    href: "/download",
  },
  {
    title: { id: "LAYANAN PENGADUAN", en: "COMPLAINT SERVICE" },
    href: "/layanan-pengaduan",
  },
];
