import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageTabs from "../../components/ui/PageTabs";
import FacilitySectionHeader from "../../components/Fasilitas/FacilitySectionHeader";
import { akomodasiData } from "../../data/akomodasiData";

const akomodasiTabs = [
  {
    label: { id: "ASRAMA MAHASISWA", en: "STUDENT BOARDING HOUSE" },
    path: "/mahasiswa/akomodasi/asrama",
  },
  // "Guest House" dipertahankan di kedua bahasa: itu nama resmi fasilitasnya.
  {
    label: { id: "GUEST HOUSE", en: "GUEST HOUSE" },
    path: "/mahasiswa/akomodasi/guest-house",
  },
];

export default function Accommodation() {
  const { tab } = useParams();

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [tab]);

  // Validasi tab: default ke asrama jika slug tidak valid atau kosong
  const currentKey = tab === "guest-house" ? "guestHouse" : "asrama";
  const item = akomodasiData[currentKey] || akomodasiData.asrama;

  return (
    <>
      <Helmet>
        <title>{`${item.title} | Akomodasi MKn UNISSULA`}</title>
        <meta name="description" content={item.header.paragraphs[0]} />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        {/* Header Navbar */}
        <Navbar />

        {/* Hero Section (Persis sama dengan FasilitasHero) */}
        <section className="relative w-full bg-neutral-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2000&q=80"
              alt="Kampus UNISSULA"
              className="w-full h-full object-cover object-center filter brightness-50 contrast-105 rounded-md hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/70" />
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
            <div className="max-w-3xl space-y-4">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gray-300">
                Akomodasi
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium text-hero-heading leading-tight tracking-tight">
                Hunian di Lingkungan Kampus
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-hero-description font-normal leading-relaxed pt-2">
                Dua kelompok akomodasi menopang kenyamanan studi dan aktivitas di Magister
                Kenotariatan, dari asrama mahasiswa berkarakter islami hingga wisma tamu
                representatif bagi keluarga wisudawan dan tamu universitas.
              </p>
            </div>
          </div>
        </section>

        {/* Sticky Page Tabs (Persis sama dengan komponen tab di Fasilitas) */}
        <PageTabs tabs={akomodasiTabs} ariaLabel="Akomodasi Tabs" />

        {/* Main Content Area (Full-Width, No Sidebar, Persis seperti Fasilitas) */}
        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="space-y-12 sm:space-y-16">
            {/* Section 1: Intro Heading (Persis layout FacilitySectionHeader di fasilitas) */}
            <section>
              <FacilitySectionHeader
                category={item.header.category}
                title={item.header.title}
                paragraphs={item.header.paragraphs}
              />
            </section>

            {/*
              Fasilitas Utama.

              Kartu bercentang mengikuti susunan semula. Grid-nya dua kolom, bukan
              empat: butir fasilitas pada dokumen program studi berupa kalimat
              penuh, bukan frasa pendek, sehingga empat kolom membuatnya terpotong.
            */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-heading pb-3 border-b border-gray-200">
                Fasilitas Utama
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.fasilitas.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-white border border-gray-200/80 rounded-sm shadow-2xs hover:border-primary/40 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-heading font-medium leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigasi Kemahasiswaan Bawah */}
            <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4 items-center justify-between text-xs sm:text-sm">
              <Link
                to="/mahasiswa/organisasi"
                className="inline-flex items-center font-semibold text-primary hover:underline transition-colors"
              >
                ← Organisasi Mahasiswa (IMANU)
              </Link>
              <Link
                to="/"
                className="inline-flex items-center font-medium text-body hover:text-primary transition-colors"
              >
                Kembali ke Beranda →
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
