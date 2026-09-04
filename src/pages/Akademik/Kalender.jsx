import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import { kegiatanKalender, halaman } from "../../data/akademik/kalenderData";

export default function Kalender() {
  const t = useT();
  const ui = useUi();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <div className="space-y-8">
        {/* Kepala halaman */}
        <div>
          <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block">
            {ui("sectionAcademic")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            {t(halaman.judul)}
          </h1>
          <p className="mt-2 text-sm sm:text-base font-heading font-semibold text-special">
            {t(halaman.semester)}
          </p>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          {/* <p className="text-base text-body leading-relaxed max-w-5xl">{t(halaman.intro)}</p> */}
        </div>

        {/* Tabel kalender — layar sedang ke atas */}
        <div className="hidden sm:block border border-gray-200 bg-white rounded-xs shadow-2xs overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary text-white text-[11px] font-bold tracking-[0.12em] uppercase">
                <th className="py-3 pl-5 pr-2 w-12 text-center">{t(halaman.kolom.no)}</th>
                <th className="py-3 px-3">{t(halaman.kolom.kegiatan)}</th>
                <th className="py-3 px-3 w-52">{t(halaman.kolom.waktu)}</th>
                <th className="py-3 pl-3 pr-5 w-64">{t(halaman.kolom.keterangan)}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {kegiatanKalender.map((item) => (
                <tr
                  key={item.no}
                  className={`transition-colors hover:bg-gray-50/70 ${
                    item.penting ? "bg-red-50/40" : ""
                  }`}
                >
                  <td className="py-3.5 pl-5 pr-2 text-center text-xs text-gray-400 tabular-nums align-top">
                    {item.no}
                  </td>
                  <td
                    className={`py-3.5 px-3 leading-snug align-top ${
                      item.penting ? "font-bold text-primary" : "font-medium text-heading"
                    }`}
                  >
                    {t(item.kegiatan)}
                  </td>
                  <td className="py-3.5 px-3 text-body leading-snug align-top">
                    {t(item.waktu)}
                  </td>
                  <td className="py-3.5 pl-3 pr-5 text-xs text-gray-500 leading-relaxed align-top">
                    {item.keterangan ? t(item.keterangan) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Daftar kartu — layar sempit, agar tabel empat kolom tidak perlu digeser */}
        <div className="sm:hidden space-y-3">
          {kegiatanKalender.map((item) => (
            <div
              key={item.no}
              className={`border rounded-xs p-4 space-y-1.5 ${
                item.penting ? "border-primary/40 bg-red-50/40" : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-baseline gap-2.5">
                <span className="text-xs text-gray-400 tabular-nums shrink-0">{item.no}.</span>
                <h2
                  className={`text-sm leading-snug ${
                    item.penting ? "font-bold text-primary" : "font-semibold text-heading"
                  }`}
                >
                  {t(item.kegiatan)}
                </h2>
              </div>
              <p className="pl-6 text-sm font-medium text-body">{t(item.waktu)}</p>
              {item.keterangan && (
                <p className="pl-6 text-xs text-gray-500 leading-relaxed">
                  {t(item.keterangan)}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
