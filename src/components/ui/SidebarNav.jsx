import SidebarLink from "./SidebarLink";


/**
 * Mengelompokkan item berurutan yang memiliki isDeep: true ke dalam children item induknya
 */
function groupNestedMenus(items) {
  return items.reduce((acc, item) => {
    if (item.isDeep && acc.length > 0) {
      const parent = acc[acc.length - 1];
      (parent.children ??= []).push(item);
    } else {
      acc.push({ ...item, children: item.children ? [...item.children] : [] });
    }
    return acc;
  }, []);
}

export default function SidebarNav({ title, menus = [], contact }) {
  const structuredMenus = groupNestedMenus(menus);

  return (
    <div className="space-y-6">
      {/* Judul sidebar */}
      {title && (
        <div className="pb-3 border-b border-gray-200">
          <p className="text-[11px] uppercase tracking-widest font-semibold text-subheading-sidebar">
            {title}
          </p>
        </div>
      )}

      {/* List menu */}
      <nav className="relative pl-4 space-y-4 border-l border-gray-200">
        {structuredMenus.map((menu) => (
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
