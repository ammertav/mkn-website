import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import SidebarNav from "../../components/ui/SidebarNav";
import { useLanguage } from "../../i18n/languageContext";

const akademikContact = {
  title: {
    id: "KONTAK PMB",
    en: "ADMISSIONS CONTACT",
  },
  groups: [
    {
      items: [
        { name: "Hotline", phone: "+62 822-2362-2236" },
        { name: " ", phone: "+62 822-2000-9889" },
      ],
    },
  ],
};

export default function PenerimaanLayout() {
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>
          {lang === "en"
            ? "Information & Student Admissions | MKn UNISSULA"
            : "Informasi & Penerimaan Mahasiswa Baru | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "New Student Admission Information, Registration Requirements, Entrance Selection, Graduation Rates, and Research of Master of Notarial Law (MKn) UNISSULA."
              : "Informasi Penerimaan Mahasiswa Baru, Persyaratan Pendaftaran, Seleksi Masuk, Tingkat Kelulusan, dan Riset Program Studi Magister Kenotariatan (MKn) UNISSULA."
          }
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        {/* Header Navbar */}
        <Navbar />

        {/* Main Content Container */}
        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb berada di paling atas full-width */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Breadcrumb />
          </motion.div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Sidebar Navigation */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 xl:col-span-3 lg:self-stretch"
            >
              <SidebarNav contact={akademikContact} />
            </motion.aside>

            {/* Right Main Dynamic Route Content */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-8 xl:col-span-9"
            >
              <Outlet />
            </motion.section>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
