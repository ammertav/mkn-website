import { NavLink } from "react-router-dom";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const tabs = [
  { label: "RUANG KELAS", path: "/fasilitas/ruang-kelas" },
  { label: "LABORATORIUM", path: "/fasilitas/laboratorium" },
  { label: "STUDENT RESEARCH CENTER", path: "/fasilitas/student-research-center" },
  { label: "PERPUSTAKAAN", path: "/fasilitas/perpustakaan" },
];

export default function FasilitasTabs() {
  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-16 z-30 shadow-xs">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Horizontal Navigation Tabs */}
        <nav
          className="flex items-center space-x-6 sm:space-x-8 lg:space-x-10 overflow-x-auto scrollbar-none py-0 -mb-px"
          aria-label="Fasilitas Tabs"
        >
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `whitespace-nowrap py-4 px-1 text-xs sm:text-sm font-semibold tracking-wider transition-all border-b-2 ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-heading hover:border-gray-300"
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Tab Switcher / Scroll Indicator Icon */}
        <div className="hidden sm:flex items-center flex-col justify-center text-gray-400 pl-4 py-2 select-none">
          <FiChevronUp className="w-3.5 h-3.5 -mb-1" />
          <FiChevronDown className="w-3.5 h-3.5 -mt-1" />
        </div>
      </div>
    </div>
  );
}
