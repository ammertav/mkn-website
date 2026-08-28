import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

/**
 * DesktopNav - Navigasi desktop dengan active underline dan dropdown bertingkat
 */
export default function DesktopNav({ navLinks }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  const openDropdown = (title) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(title);
  };

  const closeDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  // Class untuk menu utama navbar
  const getLinkClass = (isLinkOpen) => ({ isActive }) =>
    `text-[11px] uppercase tracking-[0.16em] font-semibold transition-colors duration-150 flex items-center h-full border-b-2 ${
      isActive || isLinkOpen
        ? "text-primary border-primary"
        : "text-navbar border-transparent hover:text-primary hover:border-primary/40"
    }`;

  return (
    <nav
      className="hidden lg:flex self-stretch items-stretch space-x-6 xl:space-x-8"
      id="primary-nav"
    >
      {navLinks.map((link, i) => {
        const hasChildren = Boolean(link.children?.length);
        const isRightAligned = i >= navLinks.length - 2;
        const isLinkOpen = activeDropdown === link.title;

        // Menu tanpa dropdown
        if (!hasChildren) {
          return (
            <div key={link.title} className="relative flex items-stretch">
              <NavLink to={link.href} className={getLinkClass(false)}>
                {link.title}
              </NavLink>
            </div>
          );
        }

        // Menu dengan dropdown
        return (
          <div
            key={link.title}
            className="relative flex items-stretch"
            onMouseEnter={() => openDropdown(link.title)}
            onMouseLeave={closeDropdown}
          >
            <NavLink
              to={link.href}
              onClick={() => setActiveDropdown(null)}
              className={getLinkClass(isLinkOpen)}
            >
              {link.title}
            </NavLink>

            <AnimatePresence>
              {isLinkOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className={`absolute top-full -mt-[2px] z-50 ${
                    isRightAligned ? "right-0" : "left-0"
                  }`}
                >
                  <div className="bg-white shadow-[0_8px_24px_rgba(0,0,0,0.10)] border-t-[3px] border-t-primary border border-gray-100/80 min-w-[250px] py-2">
                    {link.children.map((item, idx) => {
                      const hasSubChildren = Boolean(item.children?.length);

                      return (
                        <div key={idx}>
                          {/* Item Level 1 */}
                          <NavLink
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block px-5 py-2 text-[13.5px] transition-colors duration-150 hover:bg-red-50/70 hover:text-primary ${
                                isActive ? "text-primary font-semibold" : "text-navbar"
                              }`
                            }
                          >
                            {item.title}
                          </NavLink>

                          {/* Sub-item Level 2 (Indented) */}
                          {hasSubChildren &&
                            item.children.map((sub, subIdx) => (
                              <NavLink
                                key={subIdx}
                                to={sub.href}
                                onClick={() => setActiveDropdown(null)}
                                className={({ isActive }) =>
                                  `block pl-8 pr-4 py-1.5 text-[12.5px] transition-colors duration-150 hover:bg-red-50/70 hover:text-primary ${
                                    isActive ? "text-primary font-semibold" : "text-gray-400"
                                  }`
                                }
                              >
                                {sub.title}
                              </NavLink>
                            ))}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
