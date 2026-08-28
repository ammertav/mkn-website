import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

export default function SidebarLink({ menu }) {
  const { pathname } = useLocation();

  if (!menu) return null;

  const hasChildren = Boolean(menu.children?.length);
  const isParentActive =
    hasChildren &&
    (pathname === menu.href || pathname.startsWith(menu.href + "/"));

  const [isOpen, setIsOpen] = useState(isParentActive);

  // Otomatis buka jika user berada di route anak menu ini
  useEffect(() => {
    if (isParentActive) {
      setIsOpen(true);
    }
  }, [isParentActive]);

  return (
    <div>
      <div className="flex items-center justify-between group">
        <NavLink
          to={menu.href}
          end={!hasChildren}
          className={({ isActive }) => {
            const isSelfActive = !hasChildren && isActive;
            return `relative flex-grow flex items-center justify-between gap-1 transition-colors duration-150 py-0.5 text-sm md:text-[15px] ${
              isSelfActive
                ? "text-primary font-bold before:absolute before:-left-[18px] before:top-0 before:bottom-0 before:w-[3px] before:bg-primary before:rounded-full"
                : isParentActive
                ? "text-primary font-semibold"
                : "text-special hover:text-heading font-normal"
            }`;
          }}
        >
          <span>{menu.title}</span>
        </NavLink>

        {/* Indikator icon dan tombol toggle sub-menu */}
        {hasChildren && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen((prev) => !prev);
            }}
            className="p-1 text-gray-400 hover:text-primary transition-colors cursor-pointer"
            aria-label={`Toggle submenu ${menu.title}`}
          >
            <motion.span
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="inline-block"
            >
              <FiChevronRight
                className={`text-xs transition-colors ${
                  isParentActive || isOpen ? "text-primary" : "text-gray-400"
                }`}
              />
            </motion.span>
          </button>
        )}
      </div>

      {/* Sub-items dengan animasi accordion */}
      <AnimatePresence initial={false}>
        {hasChildren && isOpen && (
          <motion.div
            key="submenu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="ml-2 mt-1.5 pb-1 space-y-1 pl-3 border-l border-primary/25">
              {menu.children.map((child) => (
                <NavLink
                  key={child.href}
                  to={child.href}
                  className={({ isActive }) =>
                    `block text-xs md:text-[13.5px] transition-colors duration-150 py-1 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-gray-500 hover:text-heading font-normal"
                    }`
                  }
                >
                  {child.title}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
