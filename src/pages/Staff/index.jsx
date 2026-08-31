import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";

export default function StaffLayout() {
  return (
    <>
      <Helmet>
        <title>Staf Pengajar & Tenaga Kependidikan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Direktori Staf Dosen dan Tenaga Kependidikan (Tendik) Program Studi Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        <Navbar />

        {/* Breadcrumb container aligns with Navbar */}
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-2">
          <Breadcrumb />
        </div>

        {/* Full-width container for outlet so child sections can go full-bleed */}
        <div className="w-full flex-grow">
          <Outlet />
        </div>

        <Footer />
      </main>
    </>
  );
}
