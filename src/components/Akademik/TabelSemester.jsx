import { useT } from "../../i18n/languageContext";

/**
 * Tabel tebaran mata kuliah satu semester.
 *
 * Berbeda dari TabelPanduan: kolom kode dibuat monospasi agar deretan
 * HN2680080xx mudah dipindai, kolom sks rata kanan, dan jumlah sks semester
 * tampil sebagai baris kaki tabel — mengikuti bentuk dokumen aslinya.
 */
export default function TabelSemester({ nama, jumlahSks, kolom, baris, pilihan }) {
  const t = useT();

  return (
    <section className="border border-gray-200 bg-white rounded-xs overflow-hidden">
      <header className="flex items-baseline justify-between gap-4 px-4 sm:px-5 py-3.5 bg-gray-50/70 border-b border-gray-200">
        <h3 className="font-heading font-bold text-base sm:text-lg text-heading">{t(nama)}</h3>
        <span className="text-sm font-semibold text-primary tabular-nums shrink-0">
          {jumlahSks} sks
        </span>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm min-w-[560px]">
          <thead>
            <tr className="border-b border-gray-200">
              {kolom.map((k, idx) => (
                <th
                  key={idx}
                  className={`py-2.5 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading ${
                    idx === kolom.length - 1 ? "text-right" : ""
                  }`}
                >
                  {t(k)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {baris.map((r, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-3 px-4 sm:px-5 align-top tabular-nums text-gray-400 w-10">
                  {r[0]}
                </td>
                <td className="py-3 px-4 sm:px-5 align-top font-mono text-xs text-body whitespace-nowrap">
                  {r[1]}
                </td>
                <td className="py-3 px-4 sm:px-5 align-top text-heading font-medium leading-relaxed">
                  {t(r[2])}
                </td>
                <td className="py-3 px-4 sm:px-5 align-top text-right tabular-nums text-body w-14">
                  {r[3]}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-gray-300 bg-gray-50/70">
              <td colSpan={3} className="py-3 px-4 sm:px-5 font-semibold text-heading text-sm">
                Jumlah sks {t(nama)}
              </td>
              <td className="py-3 px-4 sm:px-5 text-right font-heading font-bold text-heading tabular-nums">
                {jumlahSks}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {pilihan && (
        <div className="border-t border-gray-200 bg-gray-50/40 px-4 sm:px-5 py-4 space-y-3">
          <p className="text-xs text-body leading-relaxed">{t(pilihan.keterangan)}</p>
          <ul className="divide-y divide-gray-200 border-y border-gray-200 bg-white">
            {pilihan.baris.map((r, idx) => (
              <li key={idx} className="flex items-baseline gap-3 sm:gap-4 px-4 py-2.5 text-sm">
                <span className="text-gray-400 shrink-0 w-4 select-none">{r[0]}.</span>
                <span className="font-mono text-xs text-body shrink-0 whitespace-nowrap w-28 hidden sm:inline">
                  {r[1]}
                </span>
                <span className="text-heading font-medium leading-relaxed flex-1">{t(r[2])}</span>
                <span className="tabular-nums text-body shrink-0">{r[3]} sks</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
