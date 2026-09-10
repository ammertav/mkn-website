import { Helmet } from "react-helmet-async";
import { KepalaMutu, BelumTersedia } from "../../components/QualityAssurance/MutuBagian";
import { useLanguage } from "../../i18n/languageContext";

export default function AlumniSurveyReport() {
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {lang === "en"
            ? "Alumni Survey Report | MKn UNISSULA"
            : "Laporan Survei Alumni | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Survey results of alumni and graduate employers of Master of Notarial Law Program UNISSULA."
              : "Hasil survei alumni dan pengguna lulusan Program Studi Magister Kenotariatan UNISSULA."
          }
        />
      </Helmet>

      <div className="space-y-8 font-body text-body">
        <KepalaMutu
          judul={{
            id: "Laporan Survei Alumni",
            en: "Alumni Survey Report",
          }}
          pengantar={{
            id: "Laporan survei alumni memuat masa tunggu kerja, kesesuaian bidang kerja, dan penilaian pengguna lulusan. Instrumen yang dipakai adalah formulir Survei Kepuasan Pemangku Kepentingan (C-04) serta penelusuran alumni.",
            en: "The alumni survey report covers job waiting periods, field relevance, and graduate employer assessments. Instruments utilized include Stakeholder Satisfaction Survey forms (C-04) and alumni tracer studies.",
          }}
        />

        <BelumTersedia
          keterangan={{
            id: "Laporan survei alumni belum diterima dari Gugus Penjaminan Mutu.",
            en: "Alumni survey report has not yet been received from the Quality Assurance Committee.",
          }}
        />
      </div>
    </>
  );
}
