import { Helmet } from "react-helmet-async";
import StudentLifeSection from "../../components/StudentLife/StudentLifeSection";

const facilities = [
  {
    id: 1,
    title: "Laboratorium Kenotariatan & Simulasi Kantor Notaris",
    description:
      "Laboratorium modern yang dirancang menyerupai kantor notaris/PPAT profesional, dilengkapi sistem peranti lunak administrasi akta otentik dan ruang arsip digital.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    linkText: "Virtual Tour Lab",
    linkHref: "#",
  },
  {
    id: 2,
    title: "Perpustakaan Hukum & Digital Law Resource Center",
    description:
      "Koleksi ribuan buku referensi hukum, jurnal internasional terindeks Scopus/SINTA, akses database hukum HeinOnline, Westlaw, dan repositori tesis kenotariatan.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    linkText: "Akses Katalog Digital",
    linkHref: "#",
  },
  {
    id: 3,
    title: "Ruang Kuliah Multimedia & Hybrid Learning",
    description:
      "Ruang kelas ber-AC dengan teknologi smart board, audio visual modern, dan koneksi internet berkecepatan tinggi untuk mendukung perkuliahan interaktif.",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=800&q=80",
    linkText: "Fasilitas Kelas",
    linkHref: "#",
  },
  {
    id: 4,
    title: "Auditorium & Ruang Konferensi Internasional",
    description:
      "Gedung pertemuan representatif berkapasitas besar untuk penyelenggaraan konferensi internasional, seminar kenotariatan, yudisium, dan kuliah umum pakar hukum.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    linkText: "Jadwal Penggunaan",
    linkHref: "#",
  },
];

export default function CampusFacilities() {

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Fasilitas Kampus & Kehidupan Mahasiswa | MKn UNISSULA</title>
        <meta
          name="description"
          content="Fasilitas akademik, perpustakaan hukum digital, laboratorium simulasi notaris, auditorium, dan ruang multimedia MKn UNISSULA."
        />
      </Helmet>

      <StudentLifeSection
        title="Fasilitas Kampus"
        description="Fasilitas akademik dan penunjang modern di Universitas Islam Sultan Agung (UNISSULA) disediakan untuk mendukung kenyamanan riset, perkuliahan, dan praktik kemahiran mahasiswa."
        items={facilities}
      />
    </>
  );
}
