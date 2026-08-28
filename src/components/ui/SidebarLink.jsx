import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

export default function SidebarLink({ menu }) {
  const { pathname } = useLocation();

  if (!menu) return null;

  const hasChildren = Boolean(menu.children?.length);
  const isParentActive = pathname.startsWith(menu.href);
  const isDeep = Boolean(menu.isDeep);

  return (
    <div>
      <NavLink
        to={menu.href}
        end
        className={({ isActive }) =>
          `relative flex items-center justify-between gap-1 transition-colors duration-150 py-0.5 ${
            isDeep
              ? "ml-4 text-xs md:text-[13.5px] " +
                (isActive
                  ? "text-primary font-semibold before:absolute before:-left-[18px] before:top-0 before:bottom-0 before:w-[2px] before:bg-primary"
                  : "text-gray-500 hover:text-heading font-normal")
              : "text-sm md:text-[15px] " +
                (isActive
                  ? "text-primary font-bold before:absolute before:-left-[18px] before:top-0 before:bottom-0 before:w-[3px] before:bg-primary before:rounded-full"
                  : isParentActive
                  ? "text-heading font-semibold"
                  : "text-special hover:text-heading font-normal")
          }`
        }
      >
        <span>{menu.title}</span>

        {/* Indikator ada sub-menu */}
        {hasChildren && (
          <motion.span
            animate={{ rotate: isParentActive ? 90 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="shrink-0"
          >
            <FiChevronRight
              className={`text-xs transition-colors ${
                isParentActive ? "text-primary" : "text-gray-400"
              }`}
            />
          </motion.span>
        )}
      </NavLink>

      {/* Sub-items dengan animasi smooth */}
      <AnimatePresence initial={false}>
        {hasChildren && isParentActive && (
          <motion.div
            key="submenu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="ml-3 mt-2 pb-1 space-y-2 pl-3 border-l border-primary/30">
              {menu.children.map((child) => (
                <NavLink
                  key={child.href}
                  to={child.href}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 text-xs md:text-sm transition-colors duration-150 py-0.5 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-body/80 hover:text-heading font-normal"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <motion.span
                        animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.15 }}
                        className="w-1 h-1 rounded-full bg-primary shrink-0"
                      />
                      {child.title}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
