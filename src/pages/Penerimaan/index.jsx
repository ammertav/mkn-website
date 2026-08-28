import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import SidebarNav from "../../components/ui/SidebarNav";
import { navLinks } from "../../data/navLinks";

const informasiMenus =
  navLinks.find((n) => n.href === "/informasi" || n.href === "/penerimaan")?.children ?? [];

export default function PenerimaanLayout() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Informasi & Penerimaan Mahasiswa Baru | MKn UNISSULA</title>
        <meta
          name="description"
          content="Informasi Penerimaan Mahasiswa Baru, Persyaratan Pendaftaran, Seleksi Masuk, Tingkat Kelulusan, dan Riset Program Studi Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        {/* Header Navbar */}
        <Navbar />

        {/* Main Content Container */}
        <div className="w-full flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb berada di paling atas full-width */}
          <Breadcrumb />

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Sidebar Navigation */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <SidebarNav />
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
