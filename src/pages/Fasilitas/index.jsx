import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FasilitasHero from "../../components/Fasilitas/FasilitasHero";
import FasilitasTabs from "../../components/Fasilitas/FasilitasTabs";

export default function FasilitasLayout() {
  return (
    <>
      <Helmet>
        <title>Fasilitas Kampus | Magister Kenotariatan UNISSULA</title>
        <meta
          name="description"
          content="Fasilitas Ruang Kelas, Laboratorium Kenotariatan, Student Research Center, dan Perpustakaan Program Studi Magister Kenotariatan (MKn) UNISSULA."
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
