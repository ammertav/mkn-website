import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const footerSections = [
  {
    title: "TENTANG KAMI",
    links: [
      { name: "Sejarah & Visi Misi", href: "#sejarah-visi-misi" },
      { name: "Struktur Organisasi", href: "#struktur-organisasi" },
      { name: "Pimpinan Program", href: "#pimpinan-program" },
      { name: "Fasilitas Kampus", href: "#fasilitas-kampus" },
      { name: "Akreditasi BAN-PT", href: "#akreditasi-ban-pt" },
      { name: "Akreditasi ACQUIN", href: "#akreditasi-acquin" },
      { name: "Laporan Tahunan", href: "#laporan-tahunan" },
      { name: "Berita & Pengumuman", href: "#berita-pengumuman" },
    ],
  },
  {
    title: "AKADEMIK",
    links: [
      { name: "Kurikulum MKn", href: "#kurikulum-mkn" },
      { name: "Kalender Akademik", href: "#kalender-akademik" },
      { name: "Pedoman Tesis", href: "#pedoman-tesis" },
      { name: "Peraturan Akademik", href: "#peraturan-akademik" },
      { name: "Jadwal Kuliah", href: "#jadwal-kuliah" },
      { name: "Bahan Ajar", href: "#bahan-ajar" },
      { name: "Ujian Komprehensif", href: "#ujian-komprehensif" },
      { name: "Wisuda", href: "#wisuda" },
    ],
  },
  {
    title: "PENERIMAAN",
    links: [
      { name: "Persyaratan Pendaftaran", href: "#persyaratan-pendaftaran" },
      { name: "Prosedur Pendaftaran", href: "#prosedur-pendaftaran" },
      { name: "Biaya Pendidikan", href: "#biaya-pendidikan" },
      { name: "Beasiswa", href: "#beasiswa" },
      { name: "Jadwal Penerimaan", href: "#jadwal-penerimaan" },
      { name: "Mahasiswa Asing", href: "#mahasiswa-asing" },
      { name: "Pendaftaran Mahasiswa", href: "#pendaftaran-mahasiswa" },
      { name: "FAQ PMB", href: "#faq-pmb" },
    ],
  },
  {
    title: "DOSEN & RISET",
    links: [
      { name: "Direktori Dosen", href: "#direktori-dosen" },
      { name: "Pusat Studi Hukum", href: "#pusat-studi-hukum" },
      { name: "Publikasi Ilmiah", href: "#publikasi-ilmiah" },
      { name: "Jurnal Kenotariatan", href: "#jurnal-kenotariatan" },
      { name: "Hibah Penelitian", href: "#hibah-penelitian" },
      { name: "Seminar & Konferensi", href: "#seminar-konferensi" },
      { name: "Kerjasama Riset", href: "#kerjasama-riset" },
      { name: "Perpustakaan", href: "#perpustakaan" },
    ],
  },
  {
    title: "KEHIDUPAN KAMPUS & ALUMNI",
    links: [
      { name: "Organisasi Mahasiswa", href: "#organisasi-mahasiswa" },
      { name: "Kegiatan Mahasiswa", href: "#kegiatan-mahasiswa" },
      { name: "Layanan Kesehatan", href: "#layanan-kesehatan" },
      { name: "Konseling Hukum", href: "#konseling-hukum" },
      { name: "Portal Alumni", href: "#portal-alumni" },
      { name: "Jejaring Karir", href: "#jejaring-karir" },
      { name: "Tracer Study", href: "#tracer-study" },
      { name: "Donasi & Endowment", href: "#donasi-endowment" },
    ],
  },
  {
    title: "AKSES CEPAT & PORTAL",
    links: [
      { name: "SIAKAD", href: "#siakad" },
      { name: "E-Learning", href: "#e-learning" },
      { name: "Repository Institusi", href: "#repository-institusi" },
      { name: "Sistem Informasi Alumni", href: "#sistem-informasi-alumni" },
      { name: "Panduan IT", href: "#panduan-it" },
      { name: "Unduh Formulir", href: "#unduh-formulir" },
      { name: "Layanan Bantuan", href: "#layanan-bantuan" },
      { name: "Kontak Kami", href: "#kontak-kami" },
    ],
  },
];

const Footer = () => {

  return (
    <footer className="w-full bg-banner border-t border-banner-border font-body text-body">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Brand & About Column */}
          <div className="lg:col-span-3 space-y-5 pr-0 lg:pr-4">
            <a
              href="/"
              className="inline-block text-primary font-heading text-2xl sm:text-3xl font-bold tracking-normal"
            >
              MKn UNISSULA
            </a>
            <p className="text-body text-[13px] sm:text-sm leading-relaxed max-w-sm">
              Mencetak Notaris profesional, beretika tinggi, dan berwawasan global melalui pendidikan hukum yang komprehensif.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 pt-3 text-gray-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-200"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-200"
              >
                <FaTwitter className="text-sm" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-200"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Nav Link Columns (6 Columns) */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-5">
            {footerSections.map((section, idx) => (
              <div key={idx} className="flex flex-col space-y-3">
                {/* Header Title with underline */}
                <div className="pb-1.5 border-b border-gray-300">
                  <h2 className="font-heading text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-heading min-h-[32px] flex items-end">
                    {section.title}
                  </h2>
                </div>

                {/* Link List */}
                <ul className="space-y-2 pt-1">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-[12px] sm:text-[12.5px] text-body hover:text-primary transition-colors duration-150 block leading-tight py-0.5"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-banner-border py-5 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[12px] sm:text-[13px] text-body">
            © {new Date().getFullYear()} Magister Kenotariatan UNISSULA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

