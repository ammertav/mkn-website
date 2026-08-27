import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function StafLayout() {
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

      <div className="flex flex-col min-h-screen font-body text-body bg-banner">
        {/* Header Navbar */}
        <Navbar />

        {/* Full-width content tanpa sidebar */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
