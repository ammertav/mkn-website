import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

import logoUnissula from "../assets/images/logo-unissula-crest.png";
import Img from "./ui/Img";

/** Akun media sosial resmi Program Studi Magister Kenotariatan UNISSULA. */
const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/notariatunissula",
    Icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@notariatunissula",
    Icon: FaTiktok,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@kenotariatanunissula",
    Icon: FaYoutube,
  },
];

const footerSections = [
  {
    title: "PROFIL",
    links: [
      { name: "Sejarah / Latar Belakang", href: "/profil/sejarah" },
      { name: "Visi dan Misi", href: "/profil/visi-misi" },
      { name: "Tujuan", href: "/profil/tujuan" },
      { name: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
      { name: "Berita & Wawasan", href: "/berita" },
    ],
  },
  {
    title: "AKADEMIK",
    links: [
      { name: "Profil Lulusan", href: "/akademik/profil-lulusan" },
      { name: "Capaian Pembelajaran", href: "/akademik/capaian-pembelajaran" },
      { name: "Kurikulum", href: "/akademik/kurikulum" },
      { name: "Panduan Evaluasi", href: "/akademik/panduan-evaluasi" },
      { name: "Panduan Ujian", href: "/akademik/panduan-ujian" },
    ],
  },
  {
    title: "MAHASISWA & ALUMNI",
    links: [
      { name: "Organisasi Mahasiswa", href: "/mahasiswa/organisasi" },
      { name: "Akomodasi", href: "/mahasiswa/akomodasi" },
      { name: "Pengaduan & Bantuan", href: "/layanan-pengaduan" },
      { name: "Penelusuran Alumni", href: "/alumni/tracer-study" },
      { name: "Pusat Karir", href: "/alumni/pusat-karir" },
      { name: "Lowongan Pekerjaan", href: "/alumni/lowongan" },
    ],
  },
  {
    title: "INFORMASI",
    links: [
      { name: "Penerimaan Mahasiswa", href: "/informasi/penerimaan-mahasiswa" },
      { name: "Agenda & Event", href: "/event" },
      { name: "Tingkat Kelulusan", href: "/informasi/tingkat-kelulusan" },
      { name: "Penelitian Dosen", href: "/informasi/penelitian-dosen" },
      { name: "Pengabdian Dosen", href: "/informasi/pengabdian-dosen" },
    ],
  },
  {
    title: "STAF & FASILITAS",
    links: [
      { name: "Dosen", href: "/staff/dosen" },
      { name: "Tenaga Kependidikan", href: "/staff/tendik" },
      { name: "Ruang Kelas", href: "/fasilitas/ruang-kelas" },
      { name: "Laboratorium", href: "/fasilitas/laboratorium" },
      { name: "Perpustakaan", href: "/fasilitas/perpustakaan" },
    ],
  },
  {
    title: "PENJAMINAN MUTU",
    links: [
      { name: "Gugus Penjaminan Mutu", href: "/quality-assurance" },
      { name: "Dokumen Mutu", href: "/quality-assurance/qa-documents" },
      { name: "Laporan Audit Internal", href: "/quality-assurance/internal-audit-report" },
      { name: "Laporan Pembelajaran", href: "/quality-assurance/learning-teaching-report" },
      { name: "Survei Mahasiswa", href: "/quality-assurance/student-survey-report" },
      { name: "Pusat Unduhan", href: "/download" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 font-body text-body">
      {/* Main Footer Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Brand & About Column */}
          <div className="lg:col-span-3 space-y-4 pr-0 lg:pr-4">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-95 transition-opacity"
            >
              <Img
                src={logoUnissula}
                alt=""
                aria-hidden="true"
                className="h-11 w-auto object-contain shrink-0"
              />
              <span className="flex flex-col justify-center text-primary font-heading font-bold leading-tight tracking-normal">
                <span className="text-[13px] sm:text-[15px]">MAGISTER KENOTARIATAN</span>
                <span className="text-[13px] sm:text-[15px]">UNISSULA</span>
              </span>
            </Link>
            <p className="text-body text-xs sm:text-[13px] leading-relaxed max-w-xs">
              Mencetak Notaris profesional, beretika tinggi, dan berwawasan global melalui pendidikan hukum yang komprehensif.
            </p>

            {/* Social Media Icons — Solid gray buttons with white icons */}
            <div className="flex items-center space-x-2 pt-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-7 h-7 rounded-xs bg-gray-400 text-white flex items-center justify-center hover:bg-primary transition-colors duration-150"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Link Columns (6 Columns) */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-4">
            {footerSections.map((section, idx) => (
              <div key={idx} className="flex flex-col space-y-2.5">
                {/* Header Title with underline */}
                <div className="pb-2 border-b border-gray-200">
                  <h2 className="font-heading text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-heading">
                    {section.title}
                  </h2>
                </div>

                {/* Link List */}
                <ul className="space-y-1.5 pt-0.5">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.href}
                        className="text-[12px] sm:text-[12.5px] text-body hover:text-primary transition-colors duration-150 block leading-tight py-0.5"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-200 py-5 bg-white text-center">
        <p className="text-[11.5px] sm:text-xs text-gray-500">
          © {new Date().getFullYear()} Magister Kenotariatan UNISSULA. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
