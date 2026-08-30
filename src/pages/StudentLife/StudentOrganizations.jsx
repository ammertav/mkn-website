import { Helmet } from "react-helmet-async";
import StudentLifeSection from "../../components/StudentLife/StudentLifeSection";
import { studentOrganizationsData } from "../../data/studentOrganizationsData";

const organizations = studentOrganizationsData.map((org) => ({
  id: org.id,
  title: org.title,
  description: org.description,
  image: org.image,
  linkText: "Pelajari Lebih Lanjut",
  linkHref: `/mahasiswa/organisasi/${org.slug}`,
}));

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
