import { Helmet } from "react-helmet-async";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  KepalaMutu,
  JudulMutu,
  DaftarNomor,
} from "../../components/QualityAssurance/MutuBagian";
import {
  standarStructure,
  standarGroups,
} from "../../data/qualityAssurance/qaStandarData";
import { useT, useLanguage } from "../../i18n/languageContext";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const rowVar = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const sectionVar = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function QaStandar() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {lang === "en"
            ? "Quality Standards | MKn UNISSULA"
            : "Standar Mutu | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Twenty-one quality standards of Faculty of Law UNISSULA — education, research, community service, and non-academic standards with official codes."
              : "Dua puluh satu standar mutu Fakultas Hukum UNISSULA — standar pendidikan, penelitian, pengabdian kepada masyarakat, dan non-akademik beserta kodenya."
          }
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14 font-body text-body">
        <KepalaMutu
          eyebrow={{ id: "DOKUMEN MUTU", en: "QUALITY DOCUMENTS" }}
          judul={{ id: "Standar Mutu", en: "Quality Standards" }}
          pengantar={{
            id: "Standar mutu adalah tolok ukur yang harus dipenuhi dalam penyelenggaraan pendidikan, penelitian, pengabdian kepada masyarakat, dan pengelolaan fakultas. Fakultas Hukum UNISSULA menetapkan 21 standar yang terbagi ke dalam empat kelompok.",
            en: "Quality standards are benchmarks that must be fulfilled in education, research, community service, and faculty management. Faculty of Law UNISSULA establishes 21 standards divided into four categories.",
          }}
        />

        {standarGroups.map((g) => (
          <motion.section
            key={g.code}
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={sectionVar}
          >
            <JudulMutu judul={`${t(g.group)} · ${g.code}`} keterangan={g.desc} />

            <motion.div
              className="border border-gray-200 bg-white rounded-xs overflow-x-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={stagger}
            >
              <table className="w-full text-left border-collapse text-sm min-w-[720px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/70">
                    <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading w-52">
                      {t({ id: "Kode", en: "Code" })}
                    </th>
                    <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading">
                      {t({ id: "Nama Standar", en: "Standard Name" })}
                    </th>
                    <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading w-40">
                      {t({ id: "Rumpun", en: "Cluster" })}
                    </th>
                    <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading w-24 text-right">
                      {t({ id: "Berkas", en: "File" })}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {g.items.map((s) => (
                    <motion.tr key={s.code} variants={rowVar} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-3.5 px-4 sm:px-5 font-mono text-xs text-primary align-top whitespace-nowrap">
                        {s.code}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 font-medium text-heading leading-relaxed">
                        {t(s.name)}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 text-body text-xs sm:text-sm leading-relaxed align-top">
                        {t(s.cluster)}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 align-top text-right">
                        <a
                          href={s.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${lang === "en" ? "Download" : "Unduh"} ${t(s.name)}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                        >
                          PDF
                          <FiDownload className="text-xs" />
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.section>
        ))}

        <section className="space-y-5">
          <JudulMutu
            judul={{
              id: "Isi Setiap Dokumen Standar",
              en: "Contents of Each Standard Document",
            }}
            keterangan={{
              id: "Seluruh dokumen standar disusun dengan kerangka yang sama.",
              en: "All standard documents are constructed with an identical framework.",
            }}
          />
          <DaftarNomor butir={standarStructure} />
        </section>
      </div>
    </>
  );
}
