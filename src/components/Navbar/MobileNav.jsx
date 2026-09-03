import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useT } from "../../i18n/languageContext";

/**
 * MobileMenuItem: Item menu mobile dengan accordion bertingkat sejati (Level 1, 2, dst)
 */
function MobileMenuItem({ link, checkIsActive, onClose }) {
  const t = useT();
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
            {t(link.title)}
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
              const hasSubChildren = Boolean(sub.children?.length);

              return (
                <div key={si}>
                  <Link
                    to={sub.href}
                    onClick={onClose}
                    className={`block pl-3 py-1.5 text-xs transition-colors leading-relaxed ${
                      isSubActive
                        ? "text-primary font-bold"
                        : "text-heading hover:text-primary font-medium"
                    }`}
                  >
                    {t(sub.title)}
                  </Link>

                  {/* Deep Nested Sub-items */}
                  {hasSubChildren && (
                    <div className="space-y-1 my-1">
                      {sub.children.map((deeper, di) => (
                        <Link
                          key={di}
                          to={deeper.href}
                          onClick={onClose}
                          className={`block pl-6 py-1 text-xs transition-colors leading-relaxed ${
                            location.pathname === deeper.href
                              ? "text-primary font-semibold"
                              : "text-gray-500 hover:text-primary font-normal"
                          }`}
                        >
                          {t(deeper.title)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
    <Link to={link.href} onClick={onClose} className={cls}>
      {t(link.title)}
    </Link>
  ) : (
    <a href={link.href} onClick={onClose} className={cls}>
      {t(link.title)}
    </a>
  );
}

/**
 * MobileNav: Drawer navigasi mobile lengkap
 */
export default function MobileNav({ isOpen, onClose, navLinks, checkIsActive }) {
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
                <MobileMenuItem
                  key={i}
                  link={link}
                  checkIsActive={checkIsActive}
                  onClose={onClose}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
