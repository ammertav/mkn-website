import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const profilTabs = [
  { label: "SEJARAH", path: "/profil/sejarah" },
  { label: "VISI DAN MISI", path: "/profil/visi-misi" },
  { label: "TUJUAN", path: "/profil/tujuan" },
  { label: "STRUKTUR ORGANISASI", path: "/profil/struktur-organisasi" },
];

export default function ProfilTabs() {
  const location = useLocation();
  const navRef = useRef(null);
  const activeTabRef = useRef(null);

  // Auto-scroll active tab into center view on route change
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
    <div className="w-full bg-white border-y border-gray-200 sticky top-16 z-30 shadow-2xs">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Horizontal Navigation Tabs */}
        <nav
          ref={navRef}
          className="flex items-center gap-6 sm:gap-10 overflow-x-auto scrollbar-none py-0 w-full flex-1 scroll-smooth overscroll-x-contain touch-pan-x"
          aria-label="Profil Tabs"
        >
          {profilTabs.map((tab) => {
            const isActive =
              location.pathname === tab.path ||
              (tab.path === "/profil/sejarah" &&
                (location.pathname === "/profil" || location.pathname === "/profil/"));

            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                ref={isActive ? activeTabRef : null}
                className={`shrink-0 whitespace-nowrap py-3.5 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase transition-colors border-b-2 ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-body hover:text-heading hover:border-gray-300"
                }`}
              >
                {tab.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Tab Switcher Indicator Icons */}
        <div className="hidden sm:flex items-center flex-col justify-center text-gray-400 pl-4 py-2 select-none shrink-0">
          <FiChevronUp className="w-3.5 h-3.5 -mb-1" />
          <FiChevronDown className="w-3.5 h-3.5 -mt-1" />
        </div>
      </div>
    </div>
  );
}
