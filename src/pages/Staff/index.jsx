import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";

export default function StaffLayout() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Staf Pengajar & Tenaga Kependidikan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Direktori Staf Dosen dan Tenaga Kependidikan (Tendik) Program Studi Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        <Navbar />

        <div className="w-full flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb berada di paling atas */}
          <Breadcrumb />

          {/* Konten full-width tanpa sidebar */}
          <Outlet />
        </div>

        <Footer />
      </main>
    </>
  );
}
