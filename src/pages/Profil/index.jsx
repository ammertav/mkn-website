import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProfilHero from "../../components/Profil/ProfilHero";
import ProfilTabs from "../../components/Profil/ProfilTabs";

export default function ProfilLayout() {
  return (
    <>
      <Helmet>
        <title>Profil Program Studi | Magister Kenotariatan UNISSULA</title>
        <meta
          name="description"
          content="Profil lengkap Program Studi Magister Kenotariatan (MKn) UNISSULA: Sejarah dan Latar Belakang, Visi Misi, Tujuan Pendidikan, dan Struktur Organisasi."
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-white font-body text-body">
        {/* Top Navbar */}
        <Navbar />

        {/* Full-width Hero with Banner and Title */}
        <ProfilHero />

        {/* Horizontal Sub-nav Tabs */}
        <ProfilTabs />

        {/* Main Content Full-width Container */}
        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Outlet />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
