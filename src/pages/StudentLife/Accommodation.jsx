import { Helmet } from "react-helmet-async";
import StudentLifeSection from "../../components/StudentLife/StudentLifeSection";

const accommodations = [
  {
    id: 1,
    title: "Asrama Mahasiswa & Pesantren Kampus UNISSULA",
    description:
      "Hunian asrama islami yang aman, nyaman, dan berlokasi di dalam kampus utama dengan fasilitas kamar mandi dalam, akses Wi-Fi, dan pembinaan karakter religius.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    linkText: "Informasi Pendaftaran",
    linkHref: "#",
  },
  {
    id: 2,
    title: "Kawasan Hunian & Kos Eksklusif Sekitar Kampus",
    description:
      "Daftar hunian sewa dan indekos eksklusif di sekitar area kampus UNISSULA dengan sistem keamanan 24 jam, parkir mobil luas, dan fasilitas kamar lengkap (full furnished).",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    linkText: "Direktori Kos Mitra",
    linkHref: "#",
  },
  {
    id: 3,
    title: "Guest House & Wisma Tamu Universitas",
    description:
      "Fasilitas penginapan berstandar hotel untuk keluarga mahasiswa saat menghadiri wisuda, yudisium, maupun dosen tamu dan pakar luar kota.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    linkText: "Reservasi Guest House",
    linkHref: "#",
  },
  {
    id: 4,
    title: "Pusat Layanan Informasi Tempat Tinggal Mahasiswa",
    description:
      "Layanan pendampingan bagi mahasiswa baru asal luar kota dan luar pulau untuk mendapatkan rekomendasi tempat tinggal yang sesuai preferensi dan anggaran.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
    linkText: "Hubungi Layanan Mahasiswa",
    linkHref: "#",
  },
];

export default function Accommodation() {

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Akomodasi & Asrama Mahasiswa | MKn UNISSULA</title>
        <meta
          name="description"
          content="Informasi akomodasi, asrama mahasiswa, pesantren kampus, wisma tamu, dan kos eksklusif di sekitar kampus UNISSULA Semarang."
        />
      </Helmet>

      <StudentLifeSection
        title="Akomodasi"
        description="Pilihan tempat tinggal yang nyaman, aman, dan strategis di sekitar lingkungan kampus UNISSULA Semarang untuk mendukung konsentrasi dan kenyamanan studi mahasiswa Magister Kenotariatan."
        items={accommodations}
      />
    </>
  );
}
