import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import { laboratoriumAktaData } from "../../data/fasilitasData";

export default function LaboratoriumAkta() {
  return (
    <>
      <Helmet>
        <title>Laboratorium Akta | MKn UNISSULA</title>
        <meta
          name="description"
          content="Laboratorium Akta Magister Kenotariatan UNISSULA: pusat simulasi perancangan, pembuatan, dan pembacaan draf akta autentik dengan pendampingan Notaris/PPAT."
        />
      </Helmet>

      <FacilityContent data={laboratoriumAktaData} />
    </>
  );
}
