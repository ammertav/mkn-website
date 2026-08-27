import { Helmet } from "react-helmet-async";
import StudentLifeSection from "../../components/StudentLife/StudentLifeSection";

const organizations = [
  {
    id: 1,
    title: "Ikatan Mahasiswa Magister Kenotariatan (IMMK)",
    description:
      "Wadah utama aspirasi dan representasi mahasiswa MKn UNISSULA. IMMK secara rutin menyelenggarakan seminar nasional, bedah kasus hukum kenotariatan, dan dialog interaktif dengan para praktisi hukum senior.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
    linkText: "Pelajari Lebih Lanjut",
    linkHref: "#",
  },
  {
    id: 2,
    title: "Klinik Hukum & Advokasi Publik",
    description:
      "Berfokus pada pengabdian masyarakat (pro bono). Mahasiswa memberikan konsultasi hukum gratis kepada masyarakat kurang mampu mengenai masalah pertanahan, waris, dan perikatan di bawah bimbingan dosen.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    linkText: "Pelajari Lebih Lanjut",
    linkHref: "#",
  },
  {
    id: 3,
    title: "Forum Kajian Hukum Agraria",
    description:
      "Kelompok studi khusus yang mendalami isu-isu kontemporer hukum agraria dan pertanahan di Indonesia, menerbitkan jurnal internal, dan mengadakan diskusi panel bulanan dengan ahli BPN.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    linkText: "Pelajari Lebih Lanjut",
    linkHref: "#",
  },
  {
    id: 4,
    title: "Lembaga Debat & Peradilan Semu",
    description:
      "Mempersiapkan mahasiswa untuk kompetisi moot court tingkat nasional dan internasional, melatih argumentasi hukum lisan, serta keterampilan negosiasi kontrak bisnis.",
    image: "https://images.unsplash.com/photo-1453733197781-79b883088b90?auto=format&fit=crop&w=800&q=80",
    linkText: "Pelajari Lebih Lanjut",
    linkHref: "#",
  },
];

export default function StudentOrganizations() {

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Organisasi Mahasiswa | MKn UNISSULA</title>
        <meta
          name="description"
          content="Ikatan Mahasiswa Magister Kenotariatan (IMMK), Klinik Hukum Pro Bono, Forum Riset Agraria, dan Peradilan Semu MKn UNISSULA."
        />
      </Helmet>

      <StudentLifeSection
        title="Organisasi Mahasiswa"
        description="Keterlibatan aktif dalam organisasi kemahasiswaan merupakan bagian integral dari pengalaman pendidikan di Magister Kenotariatan UNISSULA. Kami percaya bahwa kepemimpinan, advokasi, dan pengabdian masyarakat yang diasah di luar ruang kelas sama pentingnya dengan keunggulan akademik."
        items={organizations}
      />
    </>
  );
}
