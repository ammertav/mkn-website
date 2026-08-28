import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import SidebarNav from "../../components/ui/SidebarNav";
import { navLinks } from "../../data/navLinks";

// Single source of truth — ambil langsung dari navLinks
const akademikMenus = navLinks.find((n) => n.href === "/akademik")?.children ?? [];

const akademikContact = {
  title: "Kontak Akademik",
  lines: [
    { text: "Sekretariat MKn" },
    { text: "Gedung Pascasarjana Lt. 3" },
    { text: "+62 24 6583584 ext. 512" },
    { text: "mkn@unissula.ac.id", href: "mailto:mkn@unissula.ac.id" },
  ],
};

export default function AkademikLayout() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Akademik | MKn UNISSULA</title>
        <meta
          name="description"
          content="Informasi Akademik, Kurikulum, Profil Lulusan, Panduan, dan Kalender Akademik Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        <Navbar />

        <div className="w-full flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb berada di paling atas, membentang di atas 2 kolom */}
          <Breadcrumb />

          {/* 2-Column Grid Layout: Judul Sidebar & Judul Konten Sejajar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Sidebar */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <SidebarNav
                title="Menu Academic"
                menus={akademikMenus}
                contact={akademikContact}
              />
            </aside>

            {/* Konten dari child route */}
            <section className="lg:col-span-8 xl:col-span-9">
              <Outlet />
            </section>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
