import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import SidebarNav from "../../components/ui/SidebarNav";
import { navLinks } from "../../data/navLinks";
import { useT, useLanguage } from "../../i18n/languageContext";

// Ambil menu anak untuk Quality Assurance dari navLinks
const qualityAssuranceMenus =
  navLinks.find((n) => n.href === "/quality-assurance" || n.href === "/download")?.children ?? [];

const qaContact = {
  title: { id: "Kontak Penjaminan Mutu", en: "Quality Assurance Contact" },
  lines: [
    { text: { id: "Gugus Penjaminan Mutu MKn", en: "MKn Quality Assurance Unit" } },
    { text: { id: "Fakultas Hukum UNISSULA", en: "Faculty of Law UNISSULA" } },
    { text: "Jl. Raya Kaligawe Km. 4, Semarang 50112" },
    { text: "(024) 6583584" },
    { text: "mkn.fh@unissula.ac.id", href: "mailto:mkn.fh@unissula.ac.id" },
  ],
};

export default function QualityAssuranceLayout() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {lang === "en"
            ? "Quality Assurance Committee | MKn UNISSULA"
            : "Gugus Penjaminan Mutu | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Quality Assurance Unit of Master of Notarial Law Program UNISSULA: Quality Policy, Standard Manuals, Internal Audit Reports, and Learning Evaluation."
              : "Gugus Penjaminan Mutu (Quality Assurance Unit) Program Studi Magister Kenotariatan (MKn) UNISSULA: Dokumen Kebijakan Mutu, Standar Manual, Laporan Audit Internal, dan Evaluasi Pembelajaran."
          }
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        {/* Header Navbar */}
        <Navbar />

        {/* Main Content Container */}
        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb berada di paling atas full-width */}
          <Breadcrumb />

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Sidebar Navigation */}
            <aside className="lg:col-span-4 xl:col-span-3 lg:self-stretch">
              <SidebarNav
                title={t({ id: "PENJAMINAN MUTU", en: "QUALITY ASSURANCE" })}
                menus={qualityAssuranceMenus}
                contact={qaContact}
              />
            </aside>

            {/* Right Main Dynamic Route Content */}
            <section className="lg:col-span-8 xl:col-span-9">
              <Outlet />
            </section>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
