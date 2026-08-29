import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/ui/Breadcrumb";

export default function Download() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Pusat Unduhan (Download) | MKn UNISSULA</title>
        <meta
          name="description"
          content="Pusat unduhan dokumen, formulir akademik, template tesis, dan pedoman mahasiswa Program Studi Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        {/* Header Navbar */}
        <Navbar />

        {/* Main Content Container */}
        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6">
          <Breadcrumb />

          <div className="space-y-2">
            <span className="text-xs font-bold tracking-wider uppercase text-primary">
              Resource Center
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
              Pusat Unduhan Dokumen
            </h1>
          </div>

          <hr className="border-t border-gray-800 my-4" />

          <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
            Akses dan unduh formulir akademik, template penulisan tesis/magang, pedoman ujian, dan dokumen resmi MKn UNISSULA.
          </p>

          <div className="p-16 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm bg-white">
            <p className="text-sm font-medium">
              Daftar file unduhan akan segera tersedia di sini.
            </p>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
