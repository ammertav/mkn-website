import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FasilitasHero from "../../components/Fasilitas/FasilitasHero";
import FasilitasTabs from "../../components/Fasilitas/FasilitasTabs";
import { useT } from "../../i18n/languageContext";

export default function FasilitasLayout() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>
          {t({
            id: "Fasilitas Kampus | Magister Kenotariatan UNISSULA",
            en: "Campus Facilities | Master of Notarial Law UNISSULA",
          })}
        </title>
        <meta
          name="description"
          content={t({
            id: "Fasilitas Ruang Kelas, Ruang Seminar, Laboratorium Kenotariatan, Student Research Center, Ruang Podcast, dan Perpustakaan Program Studi Magister Kenotariatan (MKn) UNISSULA.",
            en: "Facilities including Classrooms, Seminar Halls, Notarial Laboratories, Student Research Center, Podcast Studio, and Law Library of Master of Notarial Law (MKn) UNISSULA.",
          })}
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-white font-body text-body">
        {/* Header Navbar */}
        <Navbar />

        {/* Hero Section */}
        <FasilitasHero />

        {/* Tab Navigation Subnav */}
        <FasilitasTabs />

        {/* Main Content Area (Full-Width, No Sidebar) */}
        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
          <Outlet />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
