import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import { ruangKelasData } from "../../data/fasilitasData";

export default function RuangKelas() {
  return (
    <>
      <Helmet>
        <title>Ruang Kelas Pembelajaran | MKn UNISSULA</title>
        <meta
          name="description"
          content="Ruang kelas Program Studi Magister Kenotariatan UNISSULA: tata ruang interaktif, perangkat audio visual terintegrasi, dan desain aksesibel ramah disabilitas."
        />
      </Helmet>

      <FacilityContent data={ruangKelasData} />
    </>
  );
}
