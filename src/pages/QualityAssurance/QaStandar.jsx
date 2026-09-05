import { Helmet } from "react-helmet-async";
import { FiDownload } from "react-icons/fi";
import {
  KepalaMutu,
  JudulMutu,
  DaftarNomor,
} from "../../components/QualityAssurance/MutuBagian";
import {
  standarMeta,
  standarStructure,
  standarGroups,
} from "../../data/qualityAssurance/qaStandarData";

export default function QaStandar() {
  return (
    <>
      <Helmet>
        <title>Standar Mutu | MKn UNISSULA</title>
        <meta
          name="description"
          content="Dua puluh satu standar mutu Fakultas Hukum UNISSULA — standar pendidikan, penelitian, pengabdian kepada masyarakat, dan non-akademik beserta kodenya."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14 font-body text-body">
        <KepalaMutu
          eyebrow="DOKUMEN MUTU"
          judul="Standar Mutu"
          pengantar="Standar mutu adalah tolok ukur yang harus dipenuhi dalam penyelenggaraan pendidikan, penelitian, pengabdian kepada masyarakat, dan pengelolaan fakultas. Fakultas Hukum UNISSULA menetapkan 21 standar yang terbagi ke dalam empat kelompok."
        />

        {standarGroups.map((g) => (
          <section key={g.code} className="space-y-5">
            <JudulMutu judul={`${g.group} · ${g.code}`} keterangan={g.desc} />

            <div className="border border-gray-200 bg-white rounded-xs overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm min-w-[720px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/70">
                    <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading w-52">
                      Kode
                    </th>
                    <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading">
                      Nama Standar
                    </th>
                    <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading w-40">
                      Rumpun
                    </th>
                    <th className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading w-24 text-right">
                      Berkas
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {g.items.map((s) => (
                    <tr key={s.code} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-3.5 px-4 sm:px-5 font-mono text-xs text-primary align-top whitespace-nowrap">
                        {s.code}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 font-medium text-heading leading-relaxed">
                        {s.name}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 text-body text-xs sm:text-sm leading-relaxed align-top">
                        {s.cluster}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 align-top text-right">
                        <a
                          href={s.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Unduh ${s.name}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                        >
                          PDF
                          <FiDownload className="text-xs" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        <section className="space-y-5">
          <JudulMutu
            judul="Isi Setiap Dokumen Standar"
            keterangan="Seluruh dokumen standar disusun dengan kerangka yang sama."
          />
          <DaftarNomor butir={standarStructure} />
        </section>
      </div>
    </>
  );
}
