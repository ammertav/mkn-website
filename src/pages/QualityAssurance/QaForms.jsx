import { Helmet } from "react-helmet-async";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { KepalaMutu, JudulMutu } from "../../components/QualityAssurance/MutuBagian";
import {
  formsMeta,
  formsPengantar,
  formsPengguna,
  formsArsip,
  formGroups,
} from "../../data/qualityAssurance/qaFormsData";

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

export default function QaForms() {
  return (
    <>
      <Helmet>
        <title>Formulir Mutu | MKn UNISSULA</title>
        <meta
          name="description"
          content="Sembilan belas formulir SPMI Fakultas Hukum UNISSULA, dikelompokkan menurut tahap siklus PPEPP: penetapan, pelaksanaan, evaluasi, pengendalian, dan peningkatan."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14 font-body text-body">
        <KepalaMutu
          eyebrow="DOKUMEN MUTU"
          judul="Formulir Mutu"
          pengantar={formsPengantar}
        />

        <motion.div
          className="border-l-3 border-l-primary border border-gray-200 bg-gray-50/70 p-4 sm:p-5 rounded-xs space-y-2"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm text-body leading-relaxed">
            <span className="font-mono text-xs text-primary">{formsMeta.code}</span> ·{" "}
            {formsMeta.revisi} · {formsMeta.tanggal} · {formsMeta.halaman} ·{" "}
            {formsMeta.total} formulir
          </p>
          <p className="text-sm text-body leading-relaxed">{formsPengguna}</p>
          <p className="text-sm text-body leading-relaxed">{formsArsip}</p>
          <a
            href={formsMeta.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-300 hover:border-primary hover:bg-primary hover:text-white text-heading rounded-xs text-xs font-semibold transition-colors shadow-2xs"
          >
            <span>Unduh himpunan formulir</span>
            <FiDownload className="text-sm" />
          </a>
        </motion.div>

        {formGroups.map((g) => (
          <motion.section
            key={g.code}
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={sectionVar}
          >
            <JudulMutu judul={`Tahap ${g.stage} · Kode ${g.code}`} />

            <motion.div
              className="border border-gray-200 bg-white rounded-xs overflow-x-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={stagger}
            >
              <table className="w-full text-left border-collapse text-sm min-w-[560px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/70">
                    <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading w-48">
                      Kode
                    </th>
                    <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading">
                      Nama Formulir
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {g.items.map((f) => (
                    <motion.tr key={f.code} variants={rowVar} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-3.5 px-4 sm:px-5 font-mono text-xs text-primary align-top whitespace-nowrap">
                        {f.code}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 font-medium text-heading leading-relaxed">
                        {f.name}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.section>
        ))}
      </div>
    </>
  );
}
