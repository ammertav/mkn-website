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

/** Tautan ringkas pada bar bawah, di samping teks hak cipta. */
const bottomLinks = [
  { name: "Pengaduan & Bantuan", href: "/layanan-pengaduan" },
  { name: "Pusat Unduhan", href: "/download" },
  { name: "Agenda & Event", href: "/event" },
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
              Mencetak Notaris profesional, beretika tinggi, dan berwawasan global melalui pendidikan hukum yang komprehensif.
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
                Ikuti Kami
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
            {footerSections.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-heading pb-3 mb-3 border-b border-gray-200">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="group inline-flex items-baseline gap-2 text-[12.5px] leading-snug text-body hover:text-primary transition-colors duration-150"
                      >
                        <span
                          aria-hidden="true"
                          className="w-0 group-hover:w-3 h-px bg-primary shrink-0 translate-y-[-3px] transition-all duration-150"
                        />
                        {link.name}
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
              © {new Date().getFullYear()} Magister Kenotariatan UNISSULA. All Rights Reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {bottomLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-white transition-colors duration-150"
                  >
                    {link.name}
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
