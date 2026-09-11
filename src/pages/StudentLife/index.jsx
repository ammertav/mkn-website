import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import SidebarNav from "../../components/ui/SidebarNav";
import { useT } from "../../i18n/languageContext";

export default function StudentLifeLayout() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>
          {t({
            id: "Kehidupan Mahasiswa | MKn UNISSULA",
            en: "Student Life | MKn UNISSULA",
          })}
        </title>
        <meta
          name="description"
          content={t({
            id: "Kehidupan Mahasiswa Magister Kenotariatan (MKn) UNISSULA: Organisasi Mahasiswa dan Akomodasi.",
            en: "Master of Notarial Law (MKn) UNISSULA Student Life: Student Organizations and On-Campus Accommodation.",
          })}
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        {/* Header Navbar */}
        <Navbar />

        {/* Main Content Container */}
        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb berada di paling atas */}
          <Breadcrumb />

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Sidebar Navigation */}
            <aside className="lg:col-span-4 xl:col-span-3 lg:self-stretch">
              <SidebarNav />
            </aside>

            {/* Right Main Dynamic Route Content */}
            <section className="lg:col-span-8 xl:col-span-9">
              <Outlet />
            </section>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
