import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const subMenus = [
  { path: "uts-uas",  label: "UTS / UAS" },
  { path: "magang",   label: "Magang" },
  { path: "skripsi",  label: "Skripsi" },
];

export default function PanduanUjian() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Panduan Ujian & Evaluasi | MKn UNISSULA</title>
        <meta
          name="description"
          content="Panduan resmi ujian UTS/UAS, tata tertib pelaksanaan magang kenotariatan, serta pedoman penulisan dan sidang tesis MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-[28px] font-heading font-normal text-heading tracking-normal">
            Panduan Ujian
          </h1>
          <p className="mt-4 text-[14px] md:text-[15px] text-body leading-relaxed max-w-3xl">
            Panduan resmi pelaksanaan ujian di Program Magister Kenotariatan UNISSULA, mencakup
            prosedur UTS/UAS, pelaksanaan magang, dan penulisan serta sidang skripsi/tesis.
          </p>
        </div>

        {/* Sub-navigation */}
        <div className="flex gap-2 border-b border-gray-200 pb-0">
          {subMenus.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-body border-transparent hover:text-heading hover:border-gray-300"
                }`
              }
            >
              {item.label}
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
