import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import { toTitleCase } from "../../utils/format";

export default function Breadcrumb({ current }) {
  const { pathname } = useLocation();

  // Otomatis deteksi parent dari navLinks berdasarkan pathname
  const detectedParent = navLinks.find(
    (nav) => nav.href !== "/" && pathname.startsWith(nav.href)
  );

  const label = current || (detectedParent ? toTitleCase(detectedParent.title) : null);

  if (!label) return null;

  return (
    <nav className="flex items-center space-x-2 text-xs sm:text-[13px] text-gray-500 mb-8 sm:mb-12">
      <Link to="/" className="hover:text-primary transition-colors">
        Beranda
      </Link>
      <span className="text-gray-400 font-medium">›</span>
      <span className="font-semibold text-heading">{label}</span>
    </nav>
  );
}
