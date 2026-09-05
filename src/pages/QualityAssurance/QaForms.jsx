import { Helmet } from "react-helmet-async";
import { FiDownload } from "react-icons/fi";
import { KepalaMutu, JudulMutu } from "../../components/QualityAssurance/MutuBagian";
import {
  formsMeta,
  formsPengantar,
  formsPengguna,
  formsArsip,
  formGroups,
} from "../../data/qualityAssurance/qaFormsData";

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

        <div className="border-l-3 border-l-primary border border-gray-200 bg-gray-50/70 p-4 sm:p-5 rounded-xs space-y-2">
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
        </div>

        {formGroups.map((g) => (
          <section key={g.code} className="space-y-5">
            <JudulMutu judul={`Tahap ${g.stage} · Kode ${g.code}`} />

            <div className="border border-gray-200 bg-white rounded-xs overflow-x-auto">
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
                    <tr key={f.code} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-3.5 px-4 sm:px-5 font-mono text-xs text-primary align-top whitespace-nowrap">
                        {f.code}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 font-medium text-heading leading-relaxed">
                        {f.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
