import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const subMenus = [
  { path: "uts-uas", label: "UTS / UAS" },
  { path: "tesis",   label: "Tesis" },
];

export default function PanduanUjian() {
  return (
    <>
      <Helmet>
        <title>Panduan Ujian & Evaluasi | MKn UNISSULA</title>
        <meta
          name="description"
          content="Panduan resmi ujian UTS/UAS serta ujian pra proposal, proposal, dan tesis Program Studi Magister Kenotariatan UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-[28px] font-heading font-normal text-heading tracking-normal">
            Panduan Ujian
          </h1>
          <p className="mt-4 text-[14px] md:text-[15px] text-body leading-relaxed max-w-5xl">
            Panduan resmi pelaksanaan ujian di Program Magister Kenotariatan UNISSULA, mencakup
            prosedur UTS/UAS serta rangkaian ujian pra proposal, usulan proposal, dan tesis.
          </p>
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
