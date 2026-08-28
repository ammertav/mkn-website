import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const tabs = [
  { label: "RUANG KELAS", path: "/fasilitas/ruang-kelas" },
  { label: "LABORATORIUM", path: "/fasilitas/laboratorium" },
  { label: "STUDENT RESEARCH CENTER", path: "/fasilitas/student-research-center" },
  { label: "PERPUSTAKAAN", path: "/fasilitas/perpustakaan" },
];

export default function FasilitasTabs() {
  const location = useLocation();
  const navRef = useRef(null);
  const activeTabRef = useRef(null);

  // Auto-scroll active tab into center view on route change (especially on mobile)
  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [location.pathname]);

  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-16 z-30 shadow-2xs">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Horizontal Navigation Tabs with smooth touch scrolling */}
        <nav
          ref={navRef}
          className="flex items-center gap-2 sm:gap-6 lg:gap-8 overflow-x-auto scrollbar-none py-2.5 w-full flex-1 scroll-smooth overscroll-x-contain touch-pan-x"
          aria-label="Fasilitas Tabs"
        >
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                ref={isActive ? activeTabRef : null}
                className={({ isActive }) =>
                  `shrink-0 whitespace-nowrap px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold tracking-wider transition-all rounded-xs ${
                    isActive
                      ? "border-2 border-heading text-primary font-bold bg-white shadow-2xs"
                      : "border-2 border-transparent text-body hover:text-heading hover:bg-gray-50"
                  }`
                }
              >
                {tab.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Tab Switcher Indicator */}
        <div className="hidden sm:flex items-center flex-col justify-center text-gray-400 pl-4 py-2 select-none shrink-0">
          <FiChevronUp className="w-3.5 h-3.5 -mb-1" />
          <FiChevronDown className="w-3.5 h-3.5 -mt-1" />
        </div>
      </div>
    </div>
  );
}
