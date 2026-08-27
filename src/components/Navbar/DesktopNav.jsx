import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

/**
 * SubFlyout: Menampilkan submenu Level-2 (flyout ke arah kanan)
 */
function SubFlyout({ items }) {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -4 }}
      transition={{ duration: 0.15 }}
      className="absolute left-full top-0 pl-1 w-52 z-50"
    >
      <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
        {items.map((item, i) => {
          const isSubActive = location.pathname === item.href;
          return (
            <Link
              key={i}
              to={item.href}
              className={`block px-4 py-2 text-[11px] transition-colors ${
                isSubActive
                  ? "bg-red-50/90 text-primary font-bold"
                  : "text-heading hover:bg-red-50/50 hover:text-primary font-medium"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}

/**
 * DropdownItem: Item dropdown Level-1 (mendukung hover flyout jika ada child menu)
 */
function DropdownItem({ item }) {
  const location = useLocation();
  const [showFlyout, setShowFlyout] = useState(false);
  const hasChildren = Boolean(item.children?.length);

  // Status aktif jika rute saat ini cocok dengan item atau child-nya
  const isItemActive =
    location.pathname === item.href ||
    (hasChildren && location.pathname.startsWith(item.href));

  return (
    <div
      className="relative"
      onMouseEnter={() => hasChildren && setShowFlyout(true)}
      onMouseLeave={() => hasChildren && setShowFlyout(false)}
    >
      <Link
        to={item.href}
        className={`flex items-center justify-between px-4 py-2 text-[11px] tracking-normal transition-colors ${
          isItemActive || showFlyout
            ? "bg-red-50/80 text-primary font-bold"
            : "text-heading hover:bg-red-50/50 hover:text-primary font-medium"
        }`}
      >
        <span className="leading-snug">{item.title}</span>
        {hasChildren && (
          <FiChevronRight
            className={`text-xs shrink-0 ml-2 transition-colors ${
              isItemActive || showFlyout ? "text-primary" : "text-gray-400"
            }`}
          />
        )}
      </Link>

      {/* Flyout Submenu Level-2 */}
      {hasChildren && (
        <AnimatePresence>
          {showFlyout && <SubFlyout items={item.children} />}
        </AnimatePresence>
      )}
    </div>
  );
}

/**
 * DesktopNav: Navigasi utama Parent desktop dengan multi-level dropdown & delay hover
 */
export default function DesktopNav({ navLinks, checkIsActive }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  // Buka dropdown & batalkan timer penutupan
  const openDropdown = (title) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(title);
  };

  // Tutup dropdown dengan delay 150ms untuk mencegah flickering saat kursor berpindah
  const closeDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-5">
      {navLinks.map((link, i) => {
        const isActive = checkIsActive(link.href);
        const hasChildren = Boolean(link.children?.length);
        const isInternal = link.href.startsWith("/") && !link.href.startsWith("/#");

        const baseCls = `text-[11px] uppercase whitespace-nowrap tracking-wider transition-colors duration-200 relative group py-1 flex items-center gap-1 ${
          isActive ? "font-bold text-primary" : "font-semibold text-heading hover:text-primary"
        }`;

        // Indikator garis bawah aktif/hover
        const underline = (
          <span
            className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
              isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        );

        // Menu dengan Dropdown Level-1
        if (hasChildren) {
          return (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => openDropdown(link.title)}
              onMouseLeave={closeDropdown}
            >
              {/* Navigasi utama Parent */}
              <Link to={link.href} className={baseCls}>
                <span>{link.title}</span>
                <FiChevronDown
                  className={`text-xs transition-transform duration-200 ${
                    activeDropdown === link.title
                      ? "rotate-180 text-primary"
                      : isActive
                      ? "text-primary"
                      : ""
                  }`}
                />
                {underline}
              </Link>

              {/* Box Dropdown Level-1 */}
              <AnimatePresence>
                {activeDropdown === link.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-0 top-full pt-2 w-64 z-50"
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                      {link.children.map((sub, si) => (
                        <DropdownItem key={si} item={sub} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        // Single Nav Link (Internal vs External/Anchor)
        return isInternal ? (
          <Link key={i} to={link.href} className={baseCls}>
            {link.title}
            {underline}
          </Link>
        ) : (
          <a key={i} href={link.href} className={baseCls}>
            {link.title}
            {underline}
          </a>
        );
      })}
    </nav>
  );
}
