import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import { perpustakaanData } from "../../data/fasilitasData";
import { useT } from "../../i18n/languageContext";

export default function Perpustakaan() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>
          {t({
            id: "Perpustakaan | MKn UNISSULA",
            en: "Library | MKn UNISSULA",
          })}
        </title>
        <meta
          name="description"
          content={t({
            id: "Perpustakaan Magister Kenotariatan UNISSULA yang terintegrasi dengan Cyber Library Universitas: koleksi literatur hukum, katalog digital, dan ruang baca.",
            en: "Master of Notarial Law Library at UNISSULA integrated with the University Cyber Library: comprehensive legal collections, digital catalog, and reading commons.",
          })}
        />
      </Helmet>

      <FacilityContent data={perpustakaanData} />
    </>
  );
}
