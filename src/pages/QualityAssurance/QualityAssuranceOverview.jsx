import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  KepalaMutu,
  JudulMutu,
  AngkaMutu,
  KartuMutu,
  DaftarNomor,
  DaftarDokumen,
} from "../../components/QualityAssurance/MutuBagian";
import {
  qualityMetrics,
  committeeMembers,
  committeeMeta,
  committeeDocuments,
  facultyRoles,
  qualityCycles,
  documentArchitecture,
  legalBasis,
  legalBasisCatatan,
  cakupanDokumen,
} from "../../data/qualityAssurance/qaOverviewData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const rowVar = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const cardVar = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function QualityAssuranceOverview() {
  return (
    <>
      <Helmet>
        <title>Gugus Penjaminan Mutu | MKn UNISSULA</title>
        <meta
          name="description"
          content="Gugus Penjaminan Mutu Program Studi Magister Kenotariatan UNISSULA — susunan gugus, siklus PPEPP, arsitektur dokumen mutu, dan landasan hukum."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14 font-body text-body">
        <KepalaMutu
          judul="Gugus Penjaminan Mutu"
          pengantar="Gugus Penjaminan Mutu Program Studi Magister Kenotariatan menjalankan Sistem Penjaminan Mutu Internal (SPMI) Fakultas Hukum UNISSULA di tingkat program studi: menetapkan, melaksanakan, mengevaluasi, mengendalikan, dan meningkatkan standar mutu secara berkelanjutan."
        />

        <AngkaMutu butir={qualityMetrics} />

        <motion.p
          className="text-xs text-gray-500 leading-relaxed max-w-5xl -mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          {cakupanDokumen}
        </motion.p>

        {/* Susunan gugus */}
        <section className="space-y-5">
          <JudulMutu
            judul="Susunan Gugus Penjaminan Mutu"
            keterangan={committeeMeta.dasar}
          />
          <motion.div
            className="border border-gray-200 bg-white rounded-xs overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/70">
                  <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading w-1/3">
                    Jabatan
                  </th>
                  <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading">
                    Nama
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {committeeMembers.map((m, idx) => (
                  <motion.tr key={idx} variants={rowVar} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 px-4 sm:px-5 font-semibold text-heading align-top">
                      {m.position}
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 text-body leading-relaxed">{m.name}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </section>

        {/* Berkas pembentukan gugus */}
        <section className="space-y-5">
          <JudulMutu judul="Berkas Pembentukan Gugus" />
          <DaftarDokumen butir={committeeDocuments} />
        </section>

        {/* Siklus PPEPP */}
        <section className="space-y-5">
          <JudulMutu
            judul="Siklus PPEPP"
            keterangan="Seluruh dokumen mutu Fakultas Hukum disusun mengikuti lima tahap berikut. Kode A–E dipakai sebagai penomoran formulir mutu."
          />
          <KartuMutu
            butir={qualityCycles.map((c) => ({
              code: c.code,
              title: c.stage,
              desc: c.desc,
            }))}
            kolom={3}
          />
        </section>

        {/* Arsitektur dokumen mutu */}
        <section className="space-y-5">
          <JudulMutu
            judul="Arsitektur Dokumen Mutu"
            keterangan="Dokumen mutu Fakultas Hukum UNISSULA terdiri atas empat jenis yang saling terkait, disahkan melalui Keputusan Dekan Nomor 1098/A.1/SA-H/X/2025."
          />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {documentArchitecture.map((d) => (
              <motion.div key={d.code} variants={cardVar} whileHover={{ y: -3, scale: 1.01, transition: { duration: 0.2 } }}>
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
                    Lihat dokumen
                    <FiArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Perangkat mutu tingkat fakultas */}
        <section className="space-y-5">
          <JudulMutu
            judul="Perangkat Penjaminan Mutu Tingkat Fakultas"
            keterangan="Setiap dokumen mutu Fakultas Hukum melewati lima proses pengesahan berikut."
          />
          <motion.div
            className="border border-gray-200 bg-white rounded-xs overflow-x-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <table className="w-full text-left border-collapse text-sm min-w-[640px]">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/70">
                  <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading w-40">
                    Proses
                  </th>
                  <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading">
                    Nama
                  </th>
                  <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading">
                    Jabatan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {facultyRoles.map((r, idx) => (
                  <motion.tr key={idx} variants={rowVar} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 px-4 sm:px-5 font-semibold text-heading align-top whitespace-nowrap">
                      {r.process}
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 text-body leading-relaxed align-top">
                      {r.name}
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 text-body leading-relaxed align-top">
                      {r.role}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </section>

        {/* Landasan hukum */}
        <section className="space-y-5">
          <JudulMutu judul="Landasan Hukum" />
          <DaftarNomor butir={legalBasis} />
          <motion.div
            className="border-l-3 border-l-primary border border-gray-200 bg-gray-50/70 p-4 sm:p-5 rounded-xs"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm text-body leading-relaxed">{legalBasisCatatan}</p>
          </motion.div>
        </section>
      </div>
    </>
  );
}
