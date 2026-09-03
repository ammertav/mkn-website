import { useLocation } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import { navLinks } from "../../data/navLinks";
import { useT } from "../../i18n/languageContext";

export default function SidebarNav({ title, menus, contact, className = "" }) {
  const t = useT();
  const { pathname } = useLocation();

  // Cari parent dari navLinks berdasarkan pathname (misal /akademik -> ACADEMIC)
  const currentParent = navLinks.find(
    (nav) => nav.href !== "/" && pathname.startsWith(nav.href)
  );

  // Jika title tidak diberikan, otomatis gunakan "MENU {CURRENT_PARENT_TITLE}"
  const displayTitle =
    title ?? (currentParent ? `MENU ${t(currentParent.title).toUpperCase()}` : null);

  // Ambil menu anak langsung dari struktur pohon navLinks
  const navItems = menus ?? currentParent?.children ?? [];

  return (
    <div
      className={`space-y-6 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8.5rem)] lg:overflow-y-auto pr-1 scrollbar-none ${className}`}
    >
      {/* Judul sidebar */}
      {displayTitle && (
        <div className="pb-3 border-b border-gray-200">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-subheading-sidebar">
            {displayTitle}
          </p>
        </div>
      )}

      {/* List menu */}
      <nav className="relative pl-4 space-y-4 border-l border-gray-200">
        {navItems.map((menu) => (
          <SidebarLink key={menu.href} menu={menu} />
        ))}
      </nav>

      {/* Kontak opsional */}
      {contact && (
        <div className="pt-5 border-t border-gray-200 space-y-3">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-subheading-sidebar">
            {t(contact.title)}
          </p>
          <div className="text-[13px] text-body space-y-1 leading-relaxed">
            {contact.lines.map((line, i) =>
              line.href ? (
                <a
                  key={i}
                  href={line.href}
                  className="block text-primary hover:underline"
                >
                  {line.text}
                </a>
              ) : (
                <p key={i}>{line.text}</p>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
