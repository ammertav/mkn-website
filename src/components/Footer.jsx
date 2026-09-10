import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import logoUnissula from "../assets/images/logo-unissula-crest.png";
import Img from "./ui/Img";
import { useT } from "../i18n/languageContext";
import { useUi } from "../i18n/useUi";

/** Akun media sosial resmi Program Studi Magister Kenotariatan UNISSULA. */
const socialLinks = [
  {
    label: "notariatunissula",
    handle: "@notariatunissula",
    href: "https://www.instagram.com/notariatunissula",
    Icon: FaInstagram,
  },
  {
    label: "Magister Kenotariatan Unissula",
    handle: "@notariatunissula",
    href: "https://www.tiktok.com/@notariatunissula",
    Icon: FaTiktok,
  },
  {
    label: "NOTARIAT TV",
    handle: "@kenotariatanunissula",
    href: "https://www.youtube.com/@kenotariatanunissula",
    Icon: FaYoutube,
  },
];

/** Kontak resmi program studi; nomor & surel selaras dengan halaman pengaduan. */
const kontak = {
  alamat: [
    "Fakultas Hukum Unissula",
    "Jl. Raya Kaligawe No.Km. 4, Terboyo Kulon",
    "Kec. Genuk, Kota Semarang, Jawa Tengah 50112",
  ],
  telepon: { tampilan: "+62 823-1222-8181", href: "tel:+6282312228181" },
  surel: { tampilan: "mkn.fh@unissula.ac.id", href: "mailto:mkn.fh@unissula.ac.id" },
};

const deskripsiProdi = {
  id: "Mencetak Notaris profesional, beretika tinggi, dan berwawasan global melalui pendidikan hukum yang komprehensif.",
  en: "Producing professional, highly ethical, and globally competitive notaries through comprehensive legal education.",
};

/** Tautan ringkas pada bar bawah, di samping teks hak cipta. */
const bottomLinks = [
  { name: { id: "Pengaduan & Bantuan", en: "Complaints & Support" }, href: "/layanan-pengaduan" },
  { name: { id: "Pusat Unduhan", en: "Download Center" }, href: "/download" },
  { name: { id: "Agenda & Event", en: "Events & Agenda" }, href: "/event" },
];

const footerSections = [
  {
    title: { id: "PROFIL", en: "PROFILE" },
    links: [
      { name: { id: "Sejarah / Latar Belakang", en: "History / Background" }, href: "/profil/sejarah" },
      { name: { id: "Visi dan Misi", en: "Vision & Mission" }, href: "/profil/visi-misi" },
      { name: { id: "Tujuan (PEO)", en: "Educational Objectives (PEO)" }, href: "/profil/tujuan" },
      { name: { id: "Struktur Organisasi", en: "Organisational Structure" }, href: "/profil/struktur-organisasi" },
      { name: { id: "Berita & Wawasan", en: "News & Insights" }, href: "/berita" },
    ],
  },
  {
    title: { id: "AKADEMIK", en: "ACADEMIC" },
    links: [
      { name: { id: "Profil Lulusan", en: "Graduate Profiles" }, href: "/akademik/profil-lulusan" },
      { name: { id: "Capaian Pembelajaran", en: "Intended Learning Outcomes" }, href: "/akademik/capaian-pembelajaran" },
      { name: { id: "Kurikulum", en: "Curriculum" }, href: "/akademik/kurikulum" },
      { name: { id: "Panduan Evaluasi", en: "Learning Evaluation Guidelines" }, href: "/akademik/panduan-evaluasi" },
      { name: { id: "Panduan Ujian", en: "Examination Guidelines" }, href: "/akademik/panduan-ujian" },
    ],
  },
  {
    title: { id: "MAHASISWA & ALUMNI", en: "STUDENTS & ALUMNI" },
    links: [
      { name: { id: "Organisasi Mahasiswa", en: "Student Organisations" }, href: "/mahasiswa/organisasi" },
      { name: { id: "Akomodasi", en: "Accommodation" }, href: "/mahasiswa/akomodasi" },
      { name: { id: "Pengaduan & Bantuan", en: "Complaints & Support" }, href: "/layanan-pengaduan" },
      { name: { id: "Penelusuran Alumni", en: "Tracer Study" }, href: "/alumni/tracer-study" },
      { name: { id: "Pusat Karir", en: "Career Center" }, href: "/alumni/pusat-karir" },
      { name: { id: "Lowongan Pekerjaan", en: "Job Vacancies" }, href: "/alumni/lowongan" },
    ],
  },
  {
    title: { id: "INFORMASI", en: "INFORMATION" },
    links: [
      { name: { id: "Penerimaan Mahasiswa", en: "Student Admissions" }, href: "/informasi/penerimaan-mahasiswa" },
      { name: { id: "Agenda & Event", en: "Events & Agenda" }, href: "/event" },
      { name: { id: "Tingkat Kelulusan", en: "Graduation Rate" }, href: "/informasi/tingkat-kelulusan" },
      { name: { id: "Penelitian Dosen", en: "Lecturer Research" }, href: "/informasi/penelitian-dosen" },
      { name: { id: "Pengabdian Dosen", en: "Community Service" }, href: "/informasi/pengabdian-dosen" },
    ],
  },
  {
    title: { id: "STAF & FASILITAS", en: "STAFF & FACILITIES" },
    links: [
      { name: { id: "Dosen", en: "Faculty Members" }, href: "/staff/dosen" },
      { name: { id: "Tenaga Kependidikan", en: "Administrative Staff" }, href: "/staff/tendik" },
      { name: { id: "Ruang Kelas", en: "Classrooms" }, href: "/fasilitas/ruang-kelas" },
      { name: { id: "Laboratorium", en: "Laboratories" }, href: "/fasilitas/laboratorium" },
      { name: { id: "Perpustakaan", en: "Library" }, href: "/fasilitas/perpustakaan" },
    ],
  },
  {
    title: { id: "PENJAMINAN MUTU", en: "QUALITY ASSURANCE" },
    links: [
      { name: { id: "Gugus Penjaminan Mutu", en: "Quality Assurance Unit" }, href: "/quality-assurance" },
      { name: { id: "Dokumen Mutu", en: "QA Documents" }, href: "/quality-assurance/qa-documents" },
      { name: { id: "Laporan Audit Internal", en: "Internal Audit Report" }, href: "/quality-assurance/internal-audit-report" },
      { name: { id: "Laporan Pembelajaran", en: "Teaching & Learning Report" }, href: "/quality-assurance/learning-teaching-report" },
      { name: { id: "Survei Mahasiswa", en: "Student Survey Report" }, href: "/quality-assurance/student-survey-report" },
      { name: { id: "Pusat Unduhan", en: "Download Center" }, href: "/download" },
    ],
  },
];

export default function Footer() {
  const t = useT();
  const ui = useUi();

  return (
    <footer className="w-full font-body bg-white text-body border-t border-gray-200">
      {/* Blok utama: identitas + kontak + sosial di kiri, navigasi 3 kolom di kanan */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Kolom identitas */}
          <div className="lg:col-span-4 lg:pr-8">
            <Link
              to="/"
              className="inline-flex items-center gap-3 hover:opacity-95 transition-opacity"
            >
              <Img
                src={logoUnissula}
                alt=""
                aria-hidden="true"
                className="h-11 w-auto object-contain shrink-0"
              />
              <span className="flex flex-col justify-center font-heading font-bold leading-tight text-primary">
                <span className="text-[13px] sm:text-[15px]">MAGISTER KENOTARIATAN</span>
                <span className="text-[13px] sm:text-[15px]">FAKULTAS HUKUM UNISSULA</span>
              </span>
            </Link>

            <p className="mt-5 text-[12.5px] sm:text-[13px] leading-relaxed max-w-sm text-body">
              {t(deskripsiProdi)}
            </p>

            {/* Kontak & alamat */}
            <address className="mt-6 not-italic space-y-3 text-[12.5px] leading-relaxed">
              <div className="flex gap-3">
                <FaMapMarkerAlt aria-hidden="true" className="mt-1 shrink-0 text-primary" />
                <span className="text-body">
                  {kontak.alamat.map((baris) => (
                    <span key={baris} className="block">
                      {baris}
                    </span>
                  ))}
                </span>
              </div>
              <div className="flex gap-3">
                <FaPhoneAlt aria-hidden="true" className="mt-1 shrink-0 text-primary" />
                <a
                  href={kontak.telepon.href}
                  className="text-body hover:text-primary transition-colors duration-150"
                >
                  {kontak.telepon.tampilan}
                </a>
              </div>
              <div className="flex gap-3">
                <FaEnvelope aria-hidden="true" className="mt-1 shrink-0 text-primary" />
                <a
                  href={kontak.surel.href}
                  className="text-body hover:text-primary transition-colors duration-150 break-all"
                >
                  {kontak.surel.tampilan}
                </a>
              </div>
            </address>

            {/* Sosial media: pil bernama, sejajar di bawah kontak */}
            <div className="mt-7">
              <h2 className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-subheading-sidebar">
                {ui("followUs")}
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {socialLinks.map(({ label, handle, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={handle}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-3.5 py-2 text-[12px] font-semibold text-heading hover:bg-primary hover:text-white hover:border-primary transition-colors duration-150"
                    >
                      <Icon aria-hidden="true" className="text-sm" />
                      {label}
                      <span className="font-normal text-[11.5px] opacity-70">{handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kolom navigasi: 6 kelompok dalam 3 kolom lebar */}
          <nav
            aria-label="Peta situs"
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-9"
          >
            {footerSections.map((section, sIdx) => (
              <div key={sIdx}>
                <h2 className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-heading pb-3 mb-3 border-b border-gray-200">
                  {t(section.title)}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        to={link.href}
                        className="group inline-flex items-baseline gap-2 text-[12.5px] leading-snug text-body hover:text-primary transition-colors duration-150"
                      >
                        <span
                          aria-hidden="true"
                          className="w-0 group-hover:w-3 h-px bg-primary shrink-0 translate-y-[-3px] transition-all duration-150"
                        />
                        {t(link.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Bar bawah */}
      <div className="bg-primary text-white/80">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11.5px] sm:text-xs">
            <p>
              © {new Date().getFullYear()} Magister Kenotariatan UNISSULA. {ui("allRightsReserved")}
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {bottomLinks.map((link, bIdx) => (
                <li key={bIdx}>
                  <Link
                    to={link.href}
                    className="hover:text-white transition-colors duration-150"
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
