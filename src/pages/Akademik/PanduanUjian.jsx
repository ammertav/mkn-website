import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { useT } from "../../i18n/languageContext";

const subMenus = [
  { path: "uts-uas", label: { id: "UTS / UAS", en: "Midterm / Final" } },
  { path: "tesis", label: { id: "Tesis", en: "Thesis" } },
];

const halaman = {
  meta: {
    title: {
      id: "Panduan Ujian & Evaluasi | MKn UNISSULA",
      en: "Examination & Assessment Guidelines | MKn UNISSULA",
    },
    description: {
      id:
        "Panduan resmi ujian UTS/UAS serta ujian pra proposal, proposal, dan tesis " +
        "Program Studi Magister Kenotariatan UNISSULA.",
      en:
        "Official guidelines for midterm and final examinations and for the " +
        "pre-proposal, proposal, and thesis examinations at the UNISSULA Master of " +
        "Notarial Law Study Programme.",
    },
  },
    label: {
    id: "AKADEMIK",
    en: "ACADEMIC",
  },
  judul: { id: "Panduan Ujian", en: "Examination Guidelines" },
  intro: {
    id:
      "Panduan resmi pelaksanaan ujian di Program Magister Kenotariatan UNISSULA, " +
      "mencakup prosedur UTS/UAS serta rangkaian ujian pra proposal, usulan proposal, " +
      "dan tesis.",
    en:
      "The official guidelines for examinations in the UNISSULA Master of Notarial Law " +
      "programme, covering midterm and final examination procedures and the sequence of " +
      "pre-proposal, proposal, and thesis examinations.",
  },
};

export default function PanduanUjian() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block">
            {t(halaman.label)}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            {t(halaman.judul)}
          </h1>
        </div>

        {/* Sub-navigation */}
        <div className="flex gap-2 border-b border-gray-200 pb-0 overflow-x-auto scrollbar-none">
          {subMenus.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `shrink-0 whitespace-nowrap px-4 py-3 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase transition-colors border-b-2 -mb-px ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-body border-transparent hover:text-heading hover:border-gray-300"
                }`
              }
            >
              {t(item.label)}
            </NavLink>
          ))}
        </div>

        {/* Sub-page content */}
        <div className="pt-2">
          <Outlet />
        </div>
      </div>
    </>
  );
}
