import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { KepalaMutu, JudulMutu } from "../../components/QualityAssurance/MutuBagian";
import { KotakStatistik } from "../../components/ui/Grafik";
import {
  sumberMonev,
  sorotanMonev,
  indikatorMonev,
  modaPembelajaran,
  instrumenMonev,
} from "../../data/qualityAssurance/learningTeachingData";
import { useLanguage, useT } from "../../i18n/languageContext";

export default function LearningTeachingReport() {
  const { lang } = useLanguage();
  const t = useT();

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
              ? "Learning monitoring and evaluation results of the Master of Notarial Law Program UNISSULA for academic year 2024/2025."
              : "Hasil monitoring dan evaluasi pembelajaran Program Studi Magister Kenotariatan UNISSULA tahun akademik 2024/2025."
          }
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14 font-body text-body">
        <KepalaMutu
          judul={{
            id: "Laporan Pembelajaran",
            en: "Learning & Teaching Report",
          }}
          pengantar={{
            id: "Monitoring dan evaluasi (monev) proses pembelajaran dilaksanakan secara periodik, yaitu satu semester sekali, dalam rangka menjaga keberlangsungan berjalannya sistem mutu yang sesuai dengan standar yang sudah ditetapkan. Monev dilakukan dengan mengumpulkan arsip dan mendata dokumen yang dikumpulkan pada dokumentasi Beban Kerja Dosen (BKD) yang dilaporkan setiap akhir semester.",
            en: "Learning process monitoring and evaluation is carried out periodically, once every semester, to keep the quality system running in line with the established standards. It is done by collecting records and documents gathered in the Lecturer Workload (BKD) documentation reported at the end of each semester.",
          }}
        />

        <section className="space-y-5">
          <JudulMutu
            judul={{ id: "Semester Genap 2024/2025", en: "Even Semester 2024/2025" }}
          />
          <KotakStatistik
            butir={sorotanMonev.map((s) => ({
              nilai: t(s.nilai),
              label: t(s.label),
              keterangan: t(s.keterangan),
            }))}
          />
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul={{ id: "Hasil Monev per Semester", en: "Monitoring Results by Semester" }}
            keterangan={{
              id: "Angka pada laporan monev semester gasal dan genap tahun akademik 2024/2025.",
              en: "Figures from the odd and even semester monitoring reports of academic year 2024/2025.",
            }}
          />
          <div className="border border-gray-200 bg-white rounded-xs overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-[11px] font-bold tracking-wider uppercase text-heading">
                  <th className="py-3 px-3 sm:px-4 align-bottom">
                    {t({ id: "Indikator", en: "Indicator" })}
                  </th>
                  {/* Dua baris agar kedua kolom semester tetap muat di layar ponsel. */}
                  <th className="py-3 px-3 sm:px-4 text-right leading-tight">
                    {t({ id: "Gasal", en: "Odd" })}
                    <span className="block tabular-nums">2024/2025</span>
                  </th>
                  <th className="py-3 px-3 sm:px-4 text-right leading-tight">
                    {t({ id: "Genap", en: "Even" })}
                    <span className="block tabular-nums">2024/2025</span>
                  </th>
                </tr>
              </thead>
              {indikatorMonev.map((k) => (
                <tbody key={k.kelompok.id} className="divide-y divide-gray-200">
                  <tr className="bg-gray-50/80">
                    <th
                      colSpan={3}
                      scope="colgroup"
                      className="py-2 px-3 sm:px-4 text-xs font-semibold text-heading"
                    >
                      {t(k.kelompok)}
                    </th>
                  </tr>
                  {k.butir.map((b) => (
                    <tr key={b.label.id}>
                      <td className="py-3 px-3 sm:px-4 text-body leading-snug">{t(b.label)}</td>
                      <td className="py-3 px-3 sm:px-4 text-right text-heading tabular-nums whitespace-nowrap">
                        {t(b.gasal)}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-right text-heading tabular-nums whitespace-nowrap">
                        {t(b.genap)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold tracking-[0.14em] uppercase text-heading">
              {t({ id: "Penggunaan teknologi informasi", en: "Use of information technology" })}
            </h3>
            <p className="text-sm text-body leading-relaxed">{t(modaPembelajaran)}</p>
          </div>
          <Link
            to="/informasi/tingkat-kelulusan"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <span>
              {t({
                id: "Rincian kelulusan per angkatan pada halaman Tingkat Kelulusan",
                en: "Graduates by intake on the Graduation Rate page",
              })}
            </span>
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul={{ id: "Instrumen Monev Proses Pembelajaran", en: "Learning Process Monitoring Instruments" }}
          />
          <ol className="space-y-2.5">
            {instrumenMonev.map((x, idx) => (
              <li key={x.butir.id} className="flex gap-3 text-sm sm:text-[15px] text-body leading-relaxed">
                <span className="shrink-0 tabular-nums text-gray-400 select-none min-w-7">{idx + 1}.</span>
                <div>
                  <span>{t(x.butir)}</span>
                  {x.rincian && (
                    <ol className="mt-1.5 space-y-1.5 list-[lower-alpha] pl-5 marker:text-gray-400">
                      {x.rincian.map((r) => (
                        <li key={r.id}>{t(r)}</li>
                      ))}
                    </ol>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-5">
          <JudulMutu judul={{ id: "Sumber Laporan", en: "Report Sources" }} />
          <ul className="border border-gray-200 bg-white rounded-xs divide-y divide-gray-200">
            {sumberMonev.map((s) => (
              <li
                key={s.judul.id}
                className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 px-4 sm:px-5 py-3"
              >
                <span className="text-sm text-heading font-medium">{t(s.judul)}</span>
                <span className="text-xs text-body whitespace-nowrap">{t(s.tanggal)}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
