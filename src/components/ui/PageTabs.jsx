import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import clsx from "clsx";

/**
 * Reusable PageTabs component for horizontal sub-navigation.
 *
 * @param {Array<{ label: string, path: string }>} tabs - Array of tab objects containing label and route path.
 * @param {string} [ariaLabel="Page Tabs"] - Accessible label for the navigation element.
 * @param {string} [className=""] - Extra classes for the outer sticky container.
 * @param {string} [containerClassName=""] - Extra classes for the inner width container.
 * @param {string} [navClassName=""] - Extra classes for the <nav> element.
 * @param {string} [tabClassName=""] - Extra classes for the tab links (e.g. custom padding).
 * @param {string} [activeTabClassName=""] - Extra classes applied when a tab is active.
 * @param {string} [inactiveTabClassName=""] - Extra classes applied when a tab is inactive.
 */
export default function PageTabs({
  tabs = [],
  ariaLabel = "Page Tabs",
  className = "",
  containerClassName = "",
  navClassName = "",
  tabClassName = "",
  activeTabClassName = "",
  inactiveTabClassName = "",
}) {
  const location = useLocation();
  const navRef = useRef(null);
  const activeTabRef = useRef(null);

  // Auto-scroll active tab into center view on route change (especially on mobile/tablets)
  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [location.pathname]);

  if (!tabs || tabs.length === 0) return null;

  return (
    <div
      className={clsx(
        "w-full bg-white border-y border-gray-200 sticky top-16 z-30 shadow-2xs",
        className
      )}
    >
      <div
        className={clsx(
          "max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative",
          containerClassName
        )}
      >
        {/* Horizontal Navigation Tabs */}
        <nav
          ref={navRef}
          className={clsx(
            "flex items-center gap-6 sm:gap-10 overflow-x-auto scrollbar-none py-0 w-full flex-1 scroll-smooth overscroll-x-contain touch-pan-x",
            navClassName
          )}
          aria-label={ariaLabel}
        >
          {tabs.map((tab, index) => {
            // Parent route prefix fallback for the first tab (e.g., /profil or /fasilitas landing)
            const parentPath = tab.path.split("/").slice(0, -1).join("/");
            const isParentRoute =
              index === 0 &&
              (location.pathname === parentPath || location.pathname === `${parentPath}/`);

            const isActive =
              location.pathname === tab.path ||
              location.pathname.startsWith(`${tab.path}/`) ||
              isParentRoute;

            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                ref={isActive ? activeTabRef : null}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "shrink-0 whitespace-nowrap py-3.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase transition-colors border-b-2",
                  isActive
                    ? clsx("border-primary text-primary", activeTabClassName)
                    : clsx(
                        "border-transparent text-body hover:text-heading hover:border-gray-300",
                        inactiveTabClassName
                      ),
                  tabClassName
                )}
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
