import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import RichText from "../../components/ui/RichText";
import {
  cplIntro,
  kkniDescriptors,
  cplStats,
  cplItems,
  halaman,
} from "../../data/akademik/capaianPembelajaranData";

export default function CapaianPembelajaran() {
  const t = useT();
  const ui = useUi();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <div className="space-y-10">
        {/* Header Title Section */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            {ui("sectionAcademic")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            {t(halaman.judul)}
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-base text-body leading-relaxed max-w-5xl">
            <RichText>{t(cplIntro)}</RichText>
          </p>

          {/* Tiga deskriptor KKNI Level 8 */}
          <ol className="mt-5 space-y-3 max-w-5xl list-none">
            {kkniDescriptors.map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="text-sm font-bold text-primary shrink-0 pt-0.5 tabular-nums">
                  {idx + 1}.
                </span>
                <p className="text-sm sm:text-base text-body leading-relaxed">
                  <RichText>{t(item)}</RichText>
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Stats Grid 4 Kolom */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-gray-200 bg-white">
          {cplStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 space-y-2 border-r border-b border-gray-200"
            >
              <div className="text-3xl sm:text-4xl font-heading text-primary leading-none">
                {stat.value}
              </div>
              <p className="text-[11px] font-medium tracking-wider text-gray-500 uppercase">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </div>

        {/* Tabel CPL dan Deskriptor KKNI */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              {t(halaman.judulTabel)}
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b-2 border-heading">
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-24">
                    {t(halaman.kolom.no)}
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-1/2">
                    {t(halaman.kolom.deskripsi)}
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    {t(halaman.kolom.kkni)}
                  </th>
                </tr>
              </thead>
              <tbody>
                {cplItems.map((item) => (
                  <tr
                    key={item.code}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-5 sm:px-6 font-bold text-heading whitespace-nowrap align-top">
                      {item.code}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-sm text-body leading-relaxed align-top">
                      <RichText>{t(item.desc)}</RichText>
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-sm text-body leading-relaxed align-top">
                      <RichText>{t(item.kkni)}</RichText>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
