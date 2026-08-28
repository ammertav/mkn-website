import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

/**
 * Breadcrumb otomatis: Beranda / [Parent] / [Child]
 * Semua data diambil dari navLinks berdasarkan pathname saat ini.
 */
export default function Breadcrumb() {
  const { pathname } = useLocation();

  // Cari parent nav (misal: /akademik, /mahasiswa, dst)
  const parent = navLinks.find(
    (nav) => nav.href !== "/" && pathname.startsWith(nav.href)
  );

  // Cari child page yang aktif dari children parent (exclude isDeep)
  const child = parent?.children?.find(
    (c) => !c.isDeep && (pathname === c.href || pathname.startsWith(c.href))
  );

  if (!parent) return null;

  // Format title parent jadi Title Case (ACADEMIC → Academic)
  const parentLabel = parent.title.charAt(0) + parent.title.slice(1).toLowerCase();

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-xs sm:text-[13px] text-gray-500 mb-8 sm:mb-12"
    >
      <Link to="/" className="hover:text-primary transition-colors">
        Beranda
      </Link>

      <span className="text-gray-400">/</span>

      {child ? (
        <>
          <Link to={parent.href} className="hover:text-primary transition-colors">
            {parentLabel}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="font-semibold text-heading">{child.title}</span>
        </>
      ) : (
        <span className="font-semibold text-heading">{parentLabel}</span>
      )}
    </nav>
  );
}
