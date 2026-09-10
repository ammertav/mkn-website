import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { useT } from "../../i18n/languageContext";

const metaStaff = {
  title: {
    id: "Staf Pengajar & Tenaga Kependidikan | MKn UNISSULA",
    en: "Faculty & Administrative Staff | MKn UNISSULA",
  },
  description: {
    id: "Direktori Staf Dosen dan Tenaga Kependidikan (Tendik) Program Studi Magister Kenotariatan (MKn) UNISSULA.",
    en: "Directory of Faculty and Administrative Staff of Master of Notarial Law (MKn) UNISSULA.",
  },
};

export default function StaffLayout() {
  const t = useT();
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>{t(metaStaff.title)}</title>
        <meta
          name="description"
          content={t(metaStaff.description)}
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        <Navbar />

        {/* Breadcrumb container aligns with Navbar */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12"
        >
          <Breadcrumb />
        </motion.div>

        {/* Full-width container for outlet so child sections can go full-bleed */}
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex-grow"
        >
          <Outlet />
        </motion.div>

        <Footer />
      </main>
    </>
  );
}
