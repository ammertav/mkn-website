import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import AcademicFocus from "../components/Home/AcademicFocus";
import ResearchCommunity from "../components/Home/ResearchCommunity";
import ExpertSpotlight from "../components/Home/ExpertSpotlight";
import CampusCulture from "../components/Home/CampusCulture";
import Events from "../components/Home/Events";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Magister Kenotariatan (MKn) | UNISSULA</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MKn UNISSULA" />

        {/* Deskripsi dan Keyword SEO */}
        <meta
          name="description"
          content="Program Magister Kenotariatan (MKn) UNISSULA mencetak notaris profesional, beretika tinggi, dan berwawasan global melalui pendidikan hukum yang komprehensif."
        />
        <meta
          name="keywords"
          content="MKn UNISSULA, Magister Kenotariatan, Notaris Semarang, Universitas Islam Sultan Agung, Pendidikan Notaris"
        />
      </Helmet>

      <main className="flex flex-col min-h-screen font-body text-body bg-white">
        {/* Header & Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Academic Focus / Berita & Wawasan Section */}
        <AcademicFocus />

        {/* Research & Community Service Section */}
        <ResearchCommunity />

        {/* Expert Spotlight Section */}
        <ExpertSpotlight />

        {/* Campus & Culture Section */}
        <CampusCulture />

        {/* Events Section */}
        <Events />

        {/* Additional Content Area */}
        <div className="w-full flex-grow">
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}






