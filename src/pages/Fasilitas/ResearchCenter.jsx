import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import { researchCenterData } from "../../data/fasilitasData";
import { useT } from "../../i18n/languageContext";

export default function ResearchCenter() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>
          {t({
            id: "Pusat Riset Mahasiswa | MKn UNISSULA",
            en: "Student Research Center | MKn UNISSULA",
          })}
        </title>
        <meta
          name="description"
          content={t({
            id: "Pusat Riset Mahasiswa (Student Research Center) Magister Kenotariatan UNISSULA: ruang inkubator riset, penulisan tesis, dan publikasi artikel ilmiah.",
            en: "Student Research Center (SRC) at UNISSULA Master of Notarial Law: academic incubator for thesis research and scholarly publications.",
          })}
        />
      </Helmet>

      <FacilityContent data={researchCenterData} />
    </>
  );
}
