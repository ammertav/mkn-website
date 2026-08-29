import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import SidebarNav from "../../components/ui/SidebarNav";
import { navLinks } from "../../data/navLinks";

// Ambil menu anak untuk Quality Assurance dari navLinks
const qualityAssuranceMenus =
  navLinks.find((n) => n.href === "/download")?.children ?? [];

const qaContact = {
  title: "Kontak Penjaminan Mutu",
  lines: [
    { text: "Gugus Penjaminan Mutu MKn" },
    { text: "Gedung Pascasarjana Lt. 2" },
    { text: "+62 24 6583584 ext. 520" },
    { text: "gpm.mkn@unissula.ac.id", href: "mailto:gpm.mkn@unissula.ac.id" },
  ],
};

export default function QualityAssuranceLayout() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Quality Assurance Unit | MKn UNISSULA</title>
        <meta
          name="description"
          content="Gugus Penjaminan Mutu (Quality Assurance Unit) Program Studi Magister Kenotariatan (MKn) UNISSULA: Dokumen Kebijakan Mutu, Standar Manual, Laporan Audit Internal, dan Evaluasi Pembelajaran."
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
            <aside className="lg:col-span-4 xl:col-span-3">
              <SidebarNav
                title="QUALITY ASSURANCE"
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
