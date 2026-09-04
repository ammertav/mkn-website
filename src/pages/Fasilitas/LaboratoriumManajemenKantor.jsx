import { Helmet } from "react-helmet-async";
import FacilityPlaceholder from "../../components/Fasilitas/FacilityPlaceholder";

export default function LaboratoriumManajemenKantor() {
  return (
    <>
      <Helmet>
        <title>Laboratorium Manajemen Kantor | MKn UNISSULA</title>
        <meta
          name="description"
          content="Informasi Laboratorium Manajemen Kantor Program Studi Magister Kenotariatan UNISSULA."
        />
      </Helmet>

      <FacilityPlaceholder
        category="LABORATORIUM MANAJEMEN KANTOR"
        title="Laboratorium Manajemen Kantor"
        description="Halaman ini akan memuat keterangan Laboratorium Manajemen Kantor, tempat mahasiswa berlatih tata kelola administrasi kantor notaris, beserta perangkat dan jadwal penggunaannya."
      />
    </>
  );
}
