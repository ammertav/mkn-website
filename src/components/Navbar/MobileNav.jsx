import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiSearch, FiMail } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

/**
 * MobileMenuItem: Item menu mobile dengan accordion bertingkat (Level 1 & Level 2)
 */
function MobileMenuItem({ link, checkIsActive, onClose }) {
  const location = useLocation();
  const [expanded, setExpanded] = useState({});
  const isActive = checkIsActive(link.href);
  const hasChildren = Boolean(link.children?.length);

  // Toggle buka/tutup submenu berdasarkan key
  const toggle = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  // Menu dengan Submenu (Accordion)
  if (hasChildren) {
    return (
      <div className="border-b border-gray-100 py-1">
        {/* Parent Header */}
        <div className="flex items-center justify-between py-2">
          <Link
            to={link.href}
            onClick={onClose}
            className={`text-xs uppercase tracking-wider transition-colors ${
              isActive ? "font-bold text-primary" : "font-semibold text-heading hover:text-primary"
            }`}
          >
            {link.title}
          </Link>
          <button
            onClick={() => toggle(link.title)}
            className="p-1 text-gray-500 hover:text-primary cursor-pointer"
            aria-label="Toggle submenu"
          >
            <FiChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expanded[link.title] ? "rotate-180 text-primary" : ""
              }`}
            />
          </button>
        </div>

        {/* Submenu Level-1 */}
        {expanded[link.title] && (
          <div className="pl-3 pb-2 space-y-1 bg-gray-50/50 rounded-md my-1 py-2">
            {link.children.map((sub, si) => {
              const hasSub = Boolean(sub.children?.length);
              const subKey = `${link.title}_${sub.title}`;
              const isSubActive =
                location.pathname === sub.href ||
                (hasSub && location.pathname.startsWith(sub.href));

              // Submenu Level-2 (Nested Accordion)
              if (hasSub) {
                return (
                  <div key={si} className="py-1">
                    <div className="flex items-center justify-between pr-2">
                      <Link
                        to={sub.href}
                        onClick={onClose}
                        className={`text-xs font-medium py-1 transition-colors ${
                          isSubActive ? "text-primary font-bold" : "text-heading hover:text-primary"
                        }`}
                      >
                        {sub.title}
                      </Link>
                      <button
                        onClick={() => toggle(subKey)}
                        className="p-1 text-gray-400 hover:text-primary cursor-pointer"
                        aria-label="Toggle nested submenu"
                      >
                        <FiChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            expanded[subKey] ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Submenu Level-2 Links */}
                    {expanded[subKey] && (
                      <div className="pl-4 py-1 space-y-1">
                        {sub.children.map((nested, ni) => {
                          const isNestedActive = location.pathname === nested.href;
                          return (
                            <Link
                              key={ni}
                              to={nested.href}
                              onClick={onClose}
                              className={`block text-xs py-1 pl-2 transition-colors ${
                                isNestedActive
                                  ? "text-primary font-bold border-l-2 border-primary"
                                  : "text-gray-600 hover:text-primary border-l border-primary/30 font-normal"
                              }`}
                            >
                              {nested.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              // Single Sub-item Link
              return (
                <Link
                  key={si}
                  to={sub.href}
                  onClick={onClose}
                  className={`block text-xs py-1.5 transition-colors ${
                    isSubActive ? "text-primary font-bold" : "text-heading hover:text-primary font-medium"
                  }`}
                >
                  {sub.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Single Menu Item (Tanpa Children)
  const cls = `text-xs uppercase tracking-wider py-2.5 border-b border-gray-100 transition-colors ${
    isActive ? "font-bold text-primary" : "font-semibold text-heading hover:text-primary"
  }`;

  const isInternal = link.href.startsWith("/") && !link.href.startsWith("/#");
  return isInternal ? (
    <Link to={link.href} onClick={onClose} className={cls}>{link.title}</Link>
  ) : (
    <a href={link.href} onClick={onClose} className={cls}>{link.title}</a>
  );
}

/**
 * MobileNav: Drawer navigasi mobile lengkap dengan search, language switcher, & link webmail
 */
export default function MobileNav({ isOpen, onClose, navLinks, checkIsActive, currentLang, setCurrentLang }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="lg:hidden border-t border-gray-100 bg-white shadow-xl overflow-hidden max-h-[80vh] overflow-y-auto"
        >
          <div className="px-6 py-5 space-y-4">
            {/* Daftar Navigasi Utama */}
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, i) => (
                <MobileMenuItem key={i} link={link} checkIsActive={checkIsActive} onClose={onClose} />
              ))}
            </div>

            {/* Input Pencarian Mobile */}
            <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
              <FiSearch className="text-body mr-2 text-sm" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm text-heading focus:outline-none w-full"
              />
            </div>

            {/* Language Switcher & Webmail */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2 text-xs font-semibold">
                {["ID", "EN"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setCurrentLang(lang)}
                    className={`px-2 py-1 rounded cursor-pointer ${
                      currentLang === lang ? "bg-primary text-white" : "text-body bg-gray-100"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <a
                href="https://webmail.unissula.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-xs text-body hover:text-primary"
              >
                <FiMail className="text-sm" />
                <span>Webmail</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
