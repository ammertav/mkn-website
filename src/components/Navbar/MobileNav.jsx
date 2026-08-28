import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiSearch, FiMail } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

/**
 * MobileMenuItem: Item menu mobile dengan accordion bertingkat (Level 1 & Level 2)
 */
function MobileMenuItem({ link, checkIsActive, onClose }) {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive = checkIsActive(link.href);
  const hasChildren = Boolean(link.children?.length);

  if (hasChildren) {
    return (
      <div className="border-b border-gray-100 py-1">
        {/* Parent Header */}
        <div className="flex items-center justify-between py-2">
          <Link
            to={link.href}
            onClick={onClose}
            className={`text-[11px] uppercase tracking-[0.16em] transition-colors ${
              isActive ? "font-bold text-primary" : "font-semibold text-navbar hover:text-primary"
            }`}
          >
            {link.title}
          </Link>
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="p-1 text-gray-500 hover:text-primary cursor-pointer"
            aria-label="Toggle submenu"
          >
            <FiChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isExpanded ? "rotate-180 text-primary" : ""
              }`}
            />
          </button>
        </div>

        {/* Submenu List */}
        {isExpanded && (
          <div className="pl-2 pb-2 space-y-1 bg-gray-50/60 rounded-md my-1 py-2">
            {link.children.map((sub, si) => {
              const isSubActive = location.pathname === sub.href;
              const isDeep = Boolean(sub.isDeep);

              return (
                <Link
                  key={si}
                  to={sub.href}
                  onClick={onClose}
                  className={`block transition-colors leading-relaxed ${
                    isDeep
                      ? `pl-6 py-1 text-xs ${
                          isSubActive
                            ? "text-primary font-semibold"
                            : "text-gray-500 hover:text-primary font-normal"
                        }`
                      : `pl-3 py-1.5 text-xs ${
                          isSubActive
                            ? "text-primary font-bold"
                            : "text-heading hover:text-primary font-medium"
                        }`
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
  const cls = `text-[11px] uppercase tracking-[0.16em] py-2.5 border-b border-gray-100 transition-colors block ${
    isActive ? "font-bold text-primary" : "font-semibold text-navbar hover:text-primary"
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
