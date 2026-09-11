import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import { podcastData } from "../../data/fasilitasData";
import { useT } from "../../i18n/languageContext";

export default function Podcast() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>
          {t({
            id: "Ruang Podcast Kenotariatan | MKn UNISSULA",
            en: "Notary Podcast Studio | MKn UNISSULA",
          })}
        </title>
        <meta
          name="description"
          content={t({
            id: "Ruang Podcast Magister Kenotariatan UNISSULA: studio produksi konten edukatif, wawancara pakar dan praktisi, serta diseminasi hasil penelitian dan pengabdian kepada masyarakat.",
            en: "Master of Notarial Law Podcast Studio at UNISSULA: production studio for educational media, expert interviews, and dissemination of legal research.",
          })}
        />
      </Helmet>

      <FacilityContent data={podcastData} />
    </>
  );
}
