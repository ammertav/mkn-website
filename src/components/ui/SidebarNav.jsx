import SidebarLink from "./SidebarLink";

export default function SidebarNav({ title = "Navigasi Bagian", menus = [] }) {
  return (
    <div className="space-y-6">
      {/* Judul Sidebar dengan garis divider */}
      {title && (
        <div className="border-b border-gray-200/80 pb-3">
          <h2 className="font-heading text-2xl sm:text-[26px] font-medium text-heading tracking-normal">
            {title}
          </h2>
        </div>
      )}

      {/* List Menu Link */}
      <nav className="relative pl-4 space-y-4 border-l border-gray-200">
        {menus.map((menu) => (
          <SidebarLink key={menu.href} menu={menu} />
        ))}
      </nav>
    </div>
  );
}
