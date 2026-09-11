import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  sumberKelulusan,
  ringkasanKelulusan,
  periodeLulus,
  rekapAngkatan,
} from "../../data/informasi/graduationRateData";
import { useT, useLanguage } from "../../i18n/languageContext";
import { KotakStatistik } from "../../components/ui/Grafik";
import { WARNA } from "../../components/ui/grafikWarna";

const viewportSettings = {
  once: true,
  amount: 0.15,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Judul seksi bergaris tebal, sama dengan halaman Informasi lainnya. */
function JudulSeksi({ children }) {
  return (
    <motion.div variants={itemVariants} className="pb-2 border-b-2 border-heading">
      <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">{children}</h2>
    </motion.div>
  );
}

export default function GraduationRate() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>
          {lang === "en"
            ? "Graduation Rate | MKn UNISSULA"
            : "Tingkat Kelulusan | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Graduation data for the Master of Notarial Law (MKn) UNISSULA: study duration, study success, on-time graduation, and graduates per intake."
              : "Data kelulusan Program Studi Magister Kenotariatan (MKn) UNISSULA: masa studi, keberhasilan studi, kelulusan tepat waktu, dan lulusan per angkatan."
          }
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-16 font-body text-body">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs font-bold tracking-[0.18em] uppercase text-primary block mb-2"
          >
            {t({ id: "INFORMASI", en: "INFORMATION" })}
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-heading tracking-tight leading-tight"
          >
            {t({ id: "Tingkat Kelulusan", en: "Graduation Rate" })}
          </motion.h1>
          <motion.div variants={lineVariants} className="w-full h-[2px] bg-primary my-4" />
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-body text-justify leading-relaxed"
          >
            {t({
              id:
                "Program Studi memantau kelulusan melalui monitoring dan evaluasi pembelajaran setiap " +
                "akhir semester. Karena mahasiswa diterima setiap semester dan studi dapat diselesaikan " +
                "dalam tiga semester, rekapitulasi disusun per angkatan semester. Kelulusan tepat waktu " +
                "dihitung bagi mahasiswa yang lulus dalam tiga atau empat semester.",
              en:
                "The programme monitors graduation through its end-of-semester learning monitoring and " +
                "evaluation. Because students are admitted every semester and the programme can be " +
                "completed in three semesters, figures are compiled per semester intake. On-time " +
                "graduation counts students who graduate within three or four semesters.",
            })}
          </motion.p>

          <motion.div variants={itemVariants} className="pt-4">
            <KotakStatistik
              butir={ringkasanKelulusan.map((r) => ({
                nilai: t(r.nilai),
                label: t(r.label),
                keterangan: t(r.keterangan),
              }))}
            />
          </motion.div>
        </motion.div>

        {/* ===================================================================== */}
        {/* REKAPITULASI PER ANGKATAN */}
        {/* ===================================================================== */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-4"
        >
          <JudulSeksi>
            {t({ id: "Rekapitulasi Lulusan per Angkatan", en: "Graduates by Intake" })}
          </JudulSeksi>

          <motion.p variants={itemVariants} className="text-sm text-body leading-relaxed">
            {t({
              id:
                "Setiap baris adalah satu angkatan masuk. Kolom semester menunjukkan jumlah lulusan " +
                "angkatan tersebut pada semester itu.",
              en:
                "Each row is one intake. The semester columns show how many students from that intake " +
                "graduated in that semester.",
            })}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="border border-gray-200 bg-white overflow-x-auto shadow-2xs"
          >
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-180">
              <thead>
                <tr className="text-[11px] font-bold tracking-wider text-heading uppercase">
                  <th rowSpan={2} className="py-3 px-4 align-bottom border-b-2 border-heading">
                    {t({ id: "Angkatan", en: "Intake" })}
                  </th>
                  <th
                    rowSpan={2}
                    className="py-3 px-4 align-bottom text-right border-b-2 border-heading"
                  >
                    {t({ id: "Diterima", en: "Admitted" })}
                  </th>
                  <th
                    colSpan={periodeLulus.length}
                    className="pt-3 pb-1.5 px-4 text-center border-b border-gray-200"
                  >
                    {t({ id: "Lulus pada semester", en: "Graduated in semester" })}
                  </th>
                  <th rowSpan={2} className="py-3 px-4 align-bottom border-b-2 border-heading">
                    {t({ id: "Jumlah lulus", en: "Total graduated" })}
                  </th>
                  <th
                    rowSpan={2}
                    className="py-3 px-4 align-bottom text-right border-b-2 border-heading"
                  >
                    {t({ id: "Masa studi (tahun)", en: "Duration (years)" })}
                  </th>
                </tr>
                <tr className="text-[10px] font-semibold tracking-wide text-body normal-case">
                  {periodeLulus.map((p) => (
                    <th
                      key={p.kode}
                      className="py-2 px-2 text-right font-semibold leading-tight border-b-2 border-heading"
                    >
                      {/* Label berbentuk "Gasal 2022/2023"; dipecah dua baris agar kolom ramping. */}
                      <span className="block">{t(p.label).split(" ")[0]}</span>
                      <span className="block tabular-nums">{t(p.label).split(" ")[1]}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <motion.tbody variants={listContainerVariants} className="divide-y divide-gray-200">
                {rekapAngkatan.map((a) => (
                  <motion.tr
                    key={a.kode}
                    variants={rowVariants}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-3.5 px-4 text-heading whitespace-nowrap">
                      {t(a.angkatan)}
                      <span className="block text-[11px] text-body/70 tabular-nums">{a.kode}</span>
                    </td>
                    <td className="py-3.5 px-4 text-right text-heading tabular-nums">{a.diterima}</td>
                    {periodeLulus.map((p) => (
                      <td key={p.kode} className="py-3.5 px-2 text-right tabular-nums">
                        {a.lulus[p.kode] ? (
                          <span className="text-heading">{a.lulus[p.kode]}</span>
                        ) : (
                          <span className="text-gray-300" aria-label={t({ id: "tidak ada", en: "none" })}>
                            –
                          </span>
                        )}
                      </td>
                    ))}
                    <td className="py-3.5 px-4">
                      <div className="flex flex-col gap-1.5">
                        {/* Meter: isi = lulusan, lintasan = seluruh mahasiswa diterima. */}
                        <span
                          aria-hidden="true"
                          className="block h-1.5 w-16 shrink-0 rounded-full overflow-hidden"
                          style={{ backgroundColor: WARNA.lintasan }}
                        >
                          <span
                            className="block h-full rounded-full"
                            style={{
                              width: `${(a.jumlahLulus / a.diterima) * 100}%`,
                              backgroundColor: WARNA.utama,
                            }}
                          />
                        </span>
                        <span className="whitespace-nowrap text-heading tabular-nums">
                          {a.jumlahLulus}{" "}
                          <span className="text-body">
                            {t({ id: "dari", en: "of" })} {a.diterima}
                          </span>
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-right text-heading tabular-nums">
                      {t(a.masaStudi)}
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* ===================================================================== */}
        {/* SUMBER DATA */}
        {/* ===================================================================== */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-4"
        >
          <JudulSeksi>{t({ id: "Sumber Data", en: "Data Sources" })}</JudulSeksi>
          <motion.ul variants={listContainerVariants} className="divide-y divide-gray-200">
            {sumberKelulusan.map((s) => (
              <motion.li
                key={s.judul.id}
                variants={rowVariants}
                className="py-3.5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div>
                  <p className="text-sm text-heading font-medium">{t(s.judul)}</p>
                  <p className="text-xs text-body mt-0.5">{t(s.cakupan)}</p>
                </div>
                <span className="text-xs text-body whitespace-nowrap">{t(s.tanggal)}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
      </div>
    </>
  );
}
