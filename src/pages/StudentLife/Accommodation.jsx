import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { FiMapPin, FiPhone, FiClock, FiCheck, FiExternalLink } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageTabs from "../../components/ui/PageTabs";
import FacilitySectionHeader from "../../components/Fasilitas/FacilitySectionHeader";
import { akomodasiData } from "../../data/akomodasiData";

const akomodasiTabs = [
  { label: "ASRAMA MAHASISWA", path: "/mahasiswa/akomodasi/asrama" },
  { label: "GUEST HOUSE", path: "/mahasiswa/akomodasi/guest-house" },
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
        <meta name="description" content={item.header?.paragraphs?.[0] || item.description} />
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
              className="w-full h-full object-cover object-center filter brightness-50 contrast-105"
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

            {/* 3 Grid Photo Cards (Persis seperti layout gambar yang diminta) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {item.gallery.map((galleryItem, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[4/3] bg-neutral-100 overflow-hidden flex items-center justify-center p-6 text-center shadow-xs transition-all duration-300 hover:shadow-md cursor-default"
                >
                  <img
                    src={galleryItem.image}
                    alt={galleryItem.title}
                    className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.7] contrast-105 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <span className="relative z-10 text-white font-medium text-sm sm:text-base drop-shadow-md px-4">
                    {galleryItem.title}
                  </span>
                </div>
              ))}
            </div>

            {/*
              Fasilitas Utama.

              Kolom "Tipe Kamar & Estimasi Biaya" sengaja tidak ditampilkan atas
              permintaan program studi; datanya tetap ada pada `roomTypes` di
              akomodasiData.js bila sewaktu-waktu perlu dimunculkan kembali.
            */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-heading pb-3 border-b border-gray-200">
                Fasilitas Utama
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {item.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-white border border-gray-200/80 rounded-sm shadow-2xs hover:border-primary/40 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0">
                      <FiCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-heading font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom 2-Column Cards: Lokasi & Contact Person */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4">
              {/* Card Lokasi */}
              <div className="bg-white border border-gray-200/90 rounded-sm p-6 sm:p-8 space-y-4 shadow-2xs">
                <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0">
                    <FiMapPin className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-heading">
                      Lokasi & Akses
                    </h3>
                    <p className="text-xs text-gray-500">
                      Di dalam Kompleks Kampus UNISSULA
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-body leading-relaxed">
                  <p className="font-semibold text-heading">{item.location.address}</p>
                  <p className="text-gray-500">{item.location.city}</p>
                </div>

                {/* Proximity Badge */}
                <div className="p-3 bg-gray-50 border border-gray-200/80 rounded-xs flex items-center gap-2.5 text-xs text-heading">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="font-medium">{item.location.proximity}</span>
                </div>

                <div className="pt-2">
                  <a
                    href={item.location.gmapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:underline"
                  >
                    <span>Buka Peta Kampus di Google Maps</span>
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card Contact Person */}
              <div className="bg-white border border-gray-200/90 rounded-sm p-6 sm:p-8 space-y-4 shadow-2xs">
                <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0">
                    <FiPhone className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-heading">
                      Contact Person & Reservasi
                    </h3>
                    <p className="text-xs text-gray-500">
                      Layanan Informasi Tempat Tinggal
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex items-baseline justify-between">
                    <span className="text-gray-500">Pengelola / PIC:</span>
                    <span className="font-semibold text-heading text-right">{item.contact.pic}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-gray-500">Jabatan:</span>
                    <span className="text-body text-right">{item.contact.role}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-gray-500">Telepon Kantor:</span>
                    <span className="font-medium text-heading text-right">{item.contact.phone}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-gray-500 flex items-center gap-1.5">
                      <FiClock className="w-3.5 h-3.5 text-gray-400" />
                      <span>Jam Layanan:</span>
                    </span>
                    <span className="text-xs text-heading font-medium text-right">
                      {item.contact.officeHours}
                    </span>
                  </div>
                </div>

                <p className="text-[11.5px] text-gray-500 italic bg-gray-50/80 p-2.5 rounded-xs border border-gray-100">
                  * {item.contact.notes}
                </p>

                {/* WhatsApp Action Button */}
                <div className="pt-2">
                  <a
                    href={item.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-primary hover:bg-[#680000] text-white px-5 py-3 rounded-xs text-xs sm:text-sm font-semibold tracking-wide uppercase transition-colors shadow-2xs"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>Chat WhatsApp Pengelola ({item.contact.whatsapp})</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigasi Kemahasiswaan Bawah */}
            <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4 items-center justify-between text-xs sm:text-sm">
              <Link
                to="/mahasiswa/organisasi"
                className="inline-flex items-center font-semibold text-primary hover:underline transition-colors"
              >
                ← Organisasi Mahasiswa (HMP MKn)
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
