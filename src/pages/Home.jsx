import { Helmet } from "react-helmet-async";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Helmet>
        <html lang="id" />
        <title>Profil Universitas | Beranda</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Nama Universitas" />

        {/* Deskripsi dan Keyword SEO */}
        <meta
          name="description"
          content="Website resmi profil universitas."
        />
        <meta
          name="keywords"
          content="universitas, pendidikan, kampus"
        />

        {/* Open Graph (Facebook, LinkedIn, dll) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://website-universitas.com/" />
        <meta property="og:title" content="Profil Universitas" />
        <meta
          property="og:description"
          content="Website resmi profil universitas."
        />
        <meta property="og:image" content="https://website-universitas.com/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://website-universitas.com/" />
        <meta name="twitter:title" content="Profil Universitas" />
        <meta
          name="twitter:description"
          content="Website resmi profil universitas."
        />
        <meta name="twitter:image" content="https://website-universitas.com/logo.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://website-universitas.com/" />
      </Helmet>

      {/* Struktur Halaman */}
      <Navbar />
      
      <div className="w-full mx-auto flex-grow flex items-center justify-center min-h-[50vh]">
        <h1 className="text-4xl font-bold text-gray-800">Selamat Datang di Profil Universitas</h1>
      </div>
      
      <Footer />
    </main>
  );
}

export default Home;
