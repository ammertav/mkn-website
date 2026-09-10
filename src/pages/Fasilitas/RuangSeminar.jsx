import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import {
  ruangSeminarLantai3Data,
  ruangSeminarLantai1Data,
} from "../../data/fasilitasData";
import { useT } from "../../i18n/languageContext";

/**
 * Satu tab, dua ruangan. Aula lantai 3 dan ruang seminar lantai 1 punya
 * peruntukan dan daftar fasilitas yang berbeda, jadi keduanya ditampilkan
 * berurutan sebagai bagian tersendiri, bukan digabung jadi satu daftar.
 */
export default function RuangSeminar() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>
          {t({
            id: "Ruang Seminar | MKn UNISSULA",
            en: "Seminar Rooms | MKn UNISSULA",
          })}
        </title>
        <meta
          name="description"
          content={t({
            id: "Ruang seminar Fakultas Hukum UNISSULA: aula lantai 3 bergaya auditorium untuk seminar dan konferensi, serta ruang seminar lantai 1 untuk ujian tesis, rapat akademik, dan diskusi ilmiah.",
            en: "Faculty of Law UNISSULA seminar halls: 3rd-floor auditorium for conferences and symposiums, and 1st-floor seminar room for thesis defenses and academic colloquiums.",
          })}
        />
      </Helmet>

      <div className="space-y-16 sm:space-y-20">
        <FacilityContent data={ruangSeminarLantai3Data} />

        <hr className="border-gray-200" />

        <FacilityContent data={ruangSeminarLantai1Data} />
      </div>
    </>
  );
}
