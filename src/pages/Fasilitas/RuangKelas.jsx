import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import { ruangKelasData } from "../../data/fasilitasData";
import { useT } from "../../i18n/languageContext";

export default function RuangKelas() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>
          {t({
            id: "Ruang Kelas Pembelajaran | MKn UNISSULA",
            en: "Lecture Classrooms | MKn UNISSULA",
          })}
        </title>
        <meta
          name="description"
          content={t({
            id: "Ruang kelas Program Studi Magister Kenotariatan UNISSULA: tata ruang interaktif, perangkat audio visual terintegrasi, dan desain aksesibel ramah disabilitas.",
            en: "Master of Notarial Law Classrooms at UNISSULA: interactive layout, integrated audiovisual equipment, and barrier-free accessibility.",
          })}
        />
      </Helmet>

      <FacilityContent data={ruangKelasData} />
    </>
  );
}
