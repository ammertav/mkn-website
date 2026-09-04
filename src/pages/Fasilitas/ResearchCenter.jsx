import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import { researchCenterData } from "../../data/fasilitasData";

export default function ResearchCenter() {
  return (
    <>
      <Helmet>
        <title>Pusat Riset Mahasiswa | MKn UNISSULA</title>
        <meta
          name="description"
          content="Pusat Riset Mahasiswa (Student Research Center) Magister Kenotariatan UNISSULA: ruang inkubator riset, penulisan tesis, dan publikasi artikel ilmiah."
        />
      </Helmet>

      <FacilityContent data={researchCenterData} />
    </>
  );
}
