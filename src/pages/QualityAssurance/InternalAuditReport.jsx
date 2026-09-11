import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  KepalaMutu,
  JudulMutu,
  IdentitasDokumen,
  DaftarNomor,
} from "../../components/QualityAssurance/MutuBagian";
import {
  siklusAudit,
  tujuanAudit,
  KATEGORI_TEMUAN,
} from "../../data/qualityAssurance/internalAuditData";
import { useLanguage, useT } from "../../i18n/languageContext";

const viewport = { once: true, amount: 0.15 };

const muncul = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const berurutan = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/** Subjudul kecil di dalam satu siklus audit. */
function SubJudul({ children }) {
  return (
    <h3 className="text-xs font-bold tracking-[0.14em] uppercase text-heading">{children}</h3>
  );
}

/** Label kategori temuan. Warna hanya penanda; kategorinya selalu tertulis. */
function LabelKategori({ kategori }) {
  const t = useT();
  const kelas =
    kategori === "OB"
      ? "bg-gray-100 text-heading border-gray-200"
      : "bg-primary/10 text-primary border-primary/20";
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 border rounded-xs text-[11px] font-semibold ${kelas}`}
    >
      {t(KATEGORI_TEMUAN[kategori])}
    </span>
  );
}

function PraktikBaik({ butir }) {
  const t = useT();
  return (
    <motion.div
      variants={berurutan}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {butir.map((kelompok) => (
        <motion.div
          key={kelompok.standar.id}
          variants={muncul}
          className="bg-white border border-gray-200 rounded-xs p-5 shadow-2xs"
        >
          <h4 className="font-heading font-semibold text-base text-heading">{t(kelompok.standar)}</h4>
          <ul className="mt-3 space-y-2">
            {kelompok.butir.map((b) => (
              <li key={b.id} className="flex gap-2.5 text-sm text-body leading-relaxed">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{t(b)}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}

/** Satu pasangan label–isi pada kartu temuan; tidak dirender bila isinya kosong. */
function Rincian({ label, isi }) {
  const t = useT();
  if (!isi) return null;
  return (
    <div>
      <dt className="text-xs font-semibold text-heading">{t(label)}</dt>
      <dd className="mt-0.5 text-body leading-relaxed">{t(isi)}</dd>
    </div>
  );
}

function DaftarTemuan({ butir }) {
  const t = useT();
  return (
    <motion.ol
      variants={berurutan}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="space-y-4"
    >
      {butir.map((x, idx) => (
        <motion.li
          key={x.temuan.id}
          variants={muncul}
          className="bg-white border border-gray-200 rounded-xs p-5 sm:p-6 shadow-2xs"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs tabular-nums text-body">{idx + 1}.</span>
            <LabelKategori kategori={x.kategori} />
            <span className="text-xs text-body">{t(x.standar)}</span>
          </div>
          <p className="mt-2.5 font-medium text-heading leading-snug">{t(x.temuan)}</p>

          <dl className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
            <Rincian
              label={{ id: "Analisa penyebab ketidaksesuaian", en: "Root cause analysis" }}
              isi={x.penyebab}
            />
            <Rincian
              label={{ id: "Rencana tindakan perbaikan & pencegahan", en: "Corrective & preventive action plan" }}
              isi={x.rencana}
            />
            <Rincian label={{ id: "Saran perbaikan", en: "Improvement suggestion" }} isi={x.saran} />
            <Rincian
              label={{ id: "Tanggal penyelesaian", en: "Completion date" }}
              isi={x.tanggalPenyelesaian}
            />
          </dl>
        </motion.li>
      ))}
    </motion.ol>
  );
}

function Kesimpulan({ butir }) {
  const t = useT();
  return (
    <ul className="border border-gray-200 bg-white rounded-xs divide-y divide-gray-200">
      {butir.map((k) => (
        <li
          key={k.pernyataan.id}
          className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 px-4 sm:px-5 py-3"
        >
          <span className="text-sm text-body leading-relaxed">{t(k.pernyataan)}</span>
          <span className="text-sm font-semibold text-heading whitespace-nowrap">{t(k.jawaban)}</span>
        </li>
      ))}
    </ul>
  );
}

export default function InternalAuditReport() {
  const { lang } = useLanguage();
  const t = useT();

  return (
    <>
      <Helmet>
        <title>
          {lang === "en"
            ? "Internal Quality Audit Report | MKn UNISSULA"
            : "Laporan Audit Mutu Internal | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Internal quality audit reports of the Master of Notarial Law Program UNISSULA: good practices, findings, and audit conclusions."
              : "Laporan audit mutu internal Program Studi Magister Kenotariatan UNISSULA: praktik baik, temuan, dan kesimpulan audit."
          }
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14 font-body text-body">
        <KepalaMutu
          judul={{
            id: "Laporan Audit Mutu Internal",
            en: "Internal Quality Audit Report",
          }}
          pengantar={{
            id: "Halaman ini memuat ringkasan Laporan Audit Mutu Internal (AMI) Program Studi Magister Kenotariatan tahun 2023, 2024, dan 2025 sebagaimana tertulis dalam laporan audit.",
            en: "This page summarises the Internal Quality Audit (AMI) reports of the Master of Notarial Law Programme for 2023, 2024, and 2025 as written in the audit reports.",
          }}
        />

        <section className="space-y-5">
          <JudulMutu judul={{ id: "Tujuan Audit", en: "Audit Objectives" }} />
          <DaftarNomor butir={tujuanAudit} />
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul={{ id: "Ringkasan Audit", en: "Audit Summary" }}
            keterangan={{
              id: "Kategori temuan pada formulir Temuan Audit Mutu Internal LP3M (FORM/SA-LP3M/LP3M/0019): observasi, minor, dan mayor.",
              en: "Finding categories on the LP3M Internal Quality Audit Findings form (FORM/SA-LP3M/LP3M/0019): observation, minor, and major.",
            }}
          />
          <div className="border border-gray-200 bg-white rounded-xs overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-[11px] font-bold tracking-wider uppercase text-heading">
                  <th className="py-3 px-4">{t({ id: "Tahun", en: "Year" })}</th>
                  <th className="py-3 px-4">{t({ id: "Ketua tim auditor", en: "Lead auditor" })}</th>
                  <th className="py-3 px-4">{t({ id: "Temuan", en: "Findings" })}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {siklusAudit.map((s) => (
                  <tr key={s.tahun}>
                    <td className="py-3 px-4">
                      <a href={`#ami-${s.tahun}`} className="font-semibold text-heading hover:text-primary">
                        AMI {s.tahun}
                      </a>
                    </td>
                    <td className="py-3 px-4 text-body">{s.ketuaAuditor}</td>
                    <td className="py-3 px-4 text-heading">{t(s.ringkasanTemuan)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {siklusAudit.map((s) => (
          <section key={s.tahun} id={`ami-${s.tahun}`} className="space-y-6 scroll-mt-28">
            <JudulMutu
              judul={{ id: `Audit Mutu Internal ${s.tahun}`, en: `Internal Quality Audit ${s.tahun}` }}
            />
            <IdentitasDokumen baris={s.identitas} />

            {s.praktikBaik.length > 0 && (
              <div className="space-y-3">
                <SubJudul>{t({ id: "Kelebihan / praktik baik", en: "Strengths / good practices" })}</SubJudul>
                <PraktikBaik butir={s.praktikBaik} />
              </div>
            )}

            {s.temuan.length > 0 && (
              <div className="space-y-3">
                <SubJudul>{t({ id: "Ketidaksesuaian", en: "Nonconformities" })}</SubJudul>
                <DaftarTemuan butir={s.temuan} />
              </div>
            )}

            {s.kesimpulan.length > 0 && (
              <div className="space-y-3">
                <SubJudul>{t({ id: "Kesimpulan audit", en: "Audit conclusion" })}</SubJudul>
                <Kesimpulan butir={s.kesimpulan} />
              </div>
            )}

            {s.catatan && <p className="text-sm text-body">{t(s.catatan)}</p>}
          </section>
        ))}
      </div>
    </>
  );
}
