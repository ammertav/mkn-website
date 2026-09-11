import { Helmet } from "react-helmet-async";
import { KepalaMutu, BelumTersedia } from "../../components/QualityAssurance/MutuBagian";
import { useLanguage } from "../../i18n/languageContext";

export default function StudentSurveyReport() {
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {lang === "en"
            ? "Student Survey Report | MKn UNISSULA"
            : "Laporan Survei Mahasiswa | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Student satisfaction survey results of Master of Notarial Law Program UNISSULA."
              : "Hasil survei kepuasan mahasiswa Program Studi Magister Kenotariatan UNISSULA."
          }
        />
      </Helmet>

      <div className="space-y-8 font-body text-body">
        <KepalaMutu
          judul={{
            id: "Laporan Survei Mahasiswa",
            en: "Student Survey Report",
          }}
          pengantar={{
            id: "Laporan survei mahasiswa memuat tingkat kepuasan terhadap pembelajaran, layanan akademik, dan sarana prasarana. Instrumen yang dipakai adalah formulir Survei Kepuasan Pemangku Kepentingan (C-04).",
            en: "The student survey report includes satisfaction levels regarding learning processes, academic services, and infrastructure. The instrument used is the Stakeholder Satisfaction Survey form (C-04).",
          }}
        />

        <BelumTersedia
          keterangan={{
            id: "Laporan survei mahasiswa belum diterima dari Gugus Penjaminan Mutu.",
            en: "Student survey report has not yet been received from the Quality Assurance Committee.",
          }}
        />
      </div>
    </>
  );
}
