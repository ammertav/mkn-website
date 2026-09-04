import { Helmet } from "react-helmet-async";
import FacilityPlaceholder from "../../components/Fasilitas/FacilityPlaceholder";

export default function LaboratoriumAkta() {
  return (
    <>
      <Helmet>
        <title>Laboratorium Akta | MKn UNISSULA</title>
        <meta
          name="description"
          content="Informasi Laboratorium Akta Program Studi Magister Kenotariatan UNISSULA."
        />
      </Helmet>

      <FacilityPlaceholder
        category="LABORATORIUM AKTA"
        title="Laboratorium Akta"
        description="Halaman ini akan memuat keterangan Laboratorium Akta, tempat mahasiswa berlatih menyusun dan mengoreksi akta, beserta perangkat dan jadwal penggunaannya."
      />
    </>
  );
}
