import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import { perpustakaanData } from "../../data/fasilitasData";

export default function Perpustakaan() {
  return (
    <>
      <Helmet>
        <title>Perpustakaan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Perpustakaan Magister Kenotariatan UNISSULA yang terintegrasi dengan Cyber Library Universitas: koleksi literatur hukum, katalog digital, dan ruang baca."
        />
      </Helmet>

      <FacilityContent data={perpustakaanData} />
    </>
  );
}
