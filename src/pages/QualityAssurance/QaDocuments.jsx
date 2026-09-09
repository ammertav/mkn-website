import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { KepalaMutu, JudulMutu } from "../../components/QualityAssurance/MutuBagian";
import {
  documentArchitecture,
  qualityCycles,
} from "../../data/qualityAssurance/qaOverviewData";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const rowVar = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function QaDocuments() {
  return (
    <>
      <Helmet>
        <title>Dokumen Mutu | MKn UNISSULA</title>
        <meta
          name="description"
          content="Dokumen mutu Fakultas Hukum UNISSULA — kebijakan mutu, manual mutu, 21 standar mutu, dan 19 formulir mutu yang disahkan Keputusan Dekan Nomor 1098/A.1/SA-H/X/2025."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14 font-body text-body">
        <KepalaMutu
          judul="Dokumen Mutu"
          pengantar="Dokumen mutu Fakultas Hukum UNISSULA Tahun 2025 terdiri atas 23 dokumen yang disahkan melalui Keputusan Dekan Nomor 1098/A.1/SA-H/X/2025 tanggal 2 Oktober 2025. Keempat jenis dokumen berikut saling terkait: kebijakan menjadi payung, manual menjelaskan cara kerjanya, standar menetapkan tolok ukurnya, dan formulir merekam buktinya."
        />

        <section className="space-y-5">
          <JudulMutu judul="Empat Jenis Dokumen" />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {documentArchitecture.map((d) => (
              <motion.div
                key={d.code}
                variants={cardVar}
                whileHover={{ y: -3, scale: 1.01, transition: { duration: 0.2 } }}
              >
                <Link
                  to={d.href}
                  className="group bg-white border border-gray-200 rounded-xs p-5 sm:p-6 space-y-2.5 hover:border-primary/50 transition-colors shadow-2xs block"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-[11px] text-primary tracking-wide">
                      {d.code}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-400 tabular-nums">
                      {d.count}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-base text-heading leading-snug group-hover:text-primary transition-colors">
                    {d.name}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">{d.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary pt-1">
                    Buka
                    <FiArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul="Penomoran Dokumen"
            keterangan="Kode dokumen mengikuti pola JENIS/SA-FH/BIDANG-NOMOR. Khusus formulir, huruf setelah SA-FH menandai tahap siklus PPEPP tempat formulir itu dipakai."
          />
          <motion.div
            className="border border-gray-200 bg-white rounded-xs overflow-x-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <table className="w-full text-left border-collapse text-sm min-w-[520px]">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/70">
                  <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading w-24">
                    Kode
                  </th>
                  <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading w-44">
                    Tahap
                  </th>
                  <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading">
                    Cakupan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {qualityCycles.map((c) => (
                  <motion.tr key={c.code} variants={rowVar} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 px-4 sm:px-5 font-mono text-xs text-primary align-top">
                      {c.code}
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 font-semibold text-heading align-top">
                      {c.stage}
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 text-body leading-relaxed">{c.desc}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </section>
      </div>
    </>
  );
}
