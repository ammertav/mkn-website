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
      className={`space-y-6 lg:sticky lg:top-[calc(var(--header-h)+0.5rem)] lg:max-h-[calc(100vh-var(--header-h)-1.5rem)] lg:overflow-y-auto pr-1 scrollbar-none ${className}`}
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

      {/* Kontak opsional — `groups` untuk daftar narahubung berkelompok,
          `lines` untuk kontak datar satu blok. */}
      {contact && (
        <div className="pt-5 border-t border-gray-200 space-y-4">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-subheading-sidebar">
            {t(contact.title)}
          </p>

          {contact.groups && (
            <div className="space-y-4">
              {contact.groups.map((group) => (
                <div key={group.label} className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.14em] font-bold text-heading">
                    {t(group.label)}
                  </p>
                  <ul className="space-y-2 border-l border-gray-200 pl-3">
                    {group.items.map((item) => (
                      <li key={item.phone} className="leading-snug">
                        <span className="block text-[13px] text-body">
                          {t(item.name)}
                        </span>
                        <a
                          href={`tel:${item.phone.replace(/[^+\d]/g, "")}`}
                          className="text-[13px] font-medium text-primary hover:underline tabular-nums"
                        >
                          {item.phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {contact.lines && (
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
          )}
        </div>
      )}
    </div>
  );
}
