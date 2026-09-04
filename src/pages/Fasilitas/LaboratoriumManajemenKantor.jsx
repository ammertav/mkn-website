import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import { laboratoriumManajemenKantorData } from "../../data/fasilitasData";

export default function LaboratoriumManajemenKantor() {
  return (
    <>
      <Helmet>
        <title>Laboratorium Manajemen Kantor Notaris/PPAT | MKn UNISSULA</title>
        <meta
          name="description"
          content="Laboratorium Manajemen Kantor Notaris/PPAT Magister Kenotariatan UNISSULA: simulasi tata kelola administrasi, kearsipan protokol, dan pelayanan klien."
        />
      </Helmet>

      <FacilityContent data={laboratoriumManajemenKantorData} />
    </>
  );
}
