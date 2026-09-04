import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import { mootCourtData } from "../../data/fasilitasData";

export default function MootCourt() {
  return (
    <>
      <Helmet>
        <title>Laboratorium Peradilan Semu | MKn UNISSULA</title>
        <meta
          name="description"
          content="Laboratorium Peradilan Semu (Moot Court) Magister Kenotariatan UNISSULA: replika ruang sidang untuk simulasi sengketa perdata atas akta."
        />
      </Helmet>

      <FacilityContent data={mootCourtData} />
    </>
  );
}
