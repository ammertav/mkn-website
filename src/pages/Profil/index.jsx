import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProfilHero from "../../components/Profil/ProfilHero";
import ProfilTabs from "../../components/Profil/ProfilTabs";
import { useT } from "../../i18n/languageContext";

const metaProfil = {
  title: {
    id: "Profil Program Studi | Magister Kenotariatan UNISSULA",
    en: "Study Programme Profile | Master of Notarial Law UNISSULA",
  },
  description: {
    id: "Profil lengkap Program Studi Magister Kenotariatan (MKn) UNISSULA: Sejarah dan Latar Belakang, Visi Misi, Tujuan Pendidikan, dan Struktur Organisasi.",
    en: "Comprehensive profile of the Master of Notarial Law Programme (MKn) UNISSULA: History, Vision & Mission, Educational Objectives, and Organisational Structure.",
  },
};

export default function ProfilLayout() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(metaProfil.title)}</title>
        <meta
          name="description"
          content={t(metaProfil.description)}
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
