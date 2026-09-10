import { Helmet } from "react-helmet-async";
import { KepalaMutu, BelumTersedia } from "../../components/QualityAssurance/MutuBagian";
import { useLanguage } from "../../i18n/languageContext";

export default function LearningTeachingReport() {
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {lang === "en"
            ? "Learning & Teaching Report | MKn UNISSULA"
            : "Laporan Pembelajaran | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Implementation and evaluation report of learning processes in Master of Notarial Law Program UNISSULA."
              : "Laporan penyelenggaraan dan evaluasi pembelajaran Program Studi Magister Kenotariatan UNISSULA."
          }
        />
      </Helmet>

      <div className="space-y-8 font-body text-body">
        <KepalaMutu
          judul={{
            id: "Laporan Pembelajaran",
            en: "Learning & Teaching Report",
          }}
          pengantar={{
            id: "Laporan pembelajaran merangkum penyelenggaraan perkuliahan, ketercapaian capaian pembelajaran, dan hasil evaluasi dosen oleh mahasiswa. Instrumen yang dipakai adalah formulir Berita Acara Perkuliahan (B-03) dan Evaluasi Dosen oleh Mahasiswa (C-05).",
            en: "The learning report summarizes lecture delivery, learning outcome achievements, and student evaluation of lecturers. Instruments used are Lecture Minutes forms (B-03) and Student Evaluation of Lecturers forms (C-05).",
          }}
        />

        <BelumTersedia
          keterangan={{
            id: "Laporan pembelajaran belum diterima dari Gugus Penjaminan Mutu.",
            en: "Learning and teaching report has not yet been received from the Quality Assurance Committee.",
          }}
        />
      </div>
    </>
  );
}
