import { Helmet } from "react-helmet-async";
import FacilityPlaceholder from "../../components/Fasilitas/FacilityPlaceholder";

export default function MootCourt() {
  return (
    <>
      <Helmet>
        <title>Moot Court | MKn UNISSULA</title>
        <meta
          name="description"
          content="Informasi ruang Moot Court Program Studi Magister Kenotariatan UNISSULA."
        />
      </Helmet>

      <FacilityPlaceholder
        category="MOOT COURT"
        title="Moot Court"
        description="Halaman ini akan memuat keterangan ruang Moot Court, tempat simulasi persidangan dan pembacaan akta, beserta perangkat dan jadwal penggunaannya."
      />
    </>
  );
}
