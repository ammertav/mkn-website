import SidebarLink from "./SidebarLink";

/**
 * SidebarNav — judul bergaya label uppercase kecil (text-subheading-sidebar)
 * Mendukung section kontak opsional di bawah menu.
 */
export default function SidebarNav({ title, menus = [], contact }) {
  return (
    <div className="space-y-6">
      {/* Judul sidebar — label uppercase kecil */}
      {title && (
        <div className="pb-3 border-b border-gray-200">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-subheading-sidebar">
            {title}
          </p>
        </div>
      )}

      {/* List menu */}
      <nav className="relative pl-4 space-y-4 border-l border-gray-200">
        {menus.map((menu) => (
          <SidebarLink key={menu.href} menu={menu} />
        ))}
      </nav>

      {/* Kontak opsional */}
      {contact && (
        <div className="pt-5 border-t border-gray-200 space-y-3">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-subheading-sidebar">
            {contact.title}
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
