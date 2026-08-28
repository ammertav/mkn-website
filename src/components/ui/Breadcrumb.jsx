import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

/**
 * Kamus pemetaan rute ke judul resmi berdasarkan navLinks
 */
const routeTitleMap = {
  "/quality-assurance": "Quality Assurance Unit",
  "/penerimaan": "Informasi",
  "/staff/faculty-directory": "Dosen",
};

function buildRouteTitleMap(items) {
  items.forEach((item) => {
    if (item.href && item.title) {
      // Format ALL CAPS jadi Title Case ("ACADEMIC" -> "Academic", "STAF" -> "Staf")
      const formattedTitle =
        item.title === item.title.toUpperCase() && item.title.length > 3
          ? item.title.charAt(0) + item.title.slice(1).toLowerCase()
          : item.title;

      routeTitleMap[item.href] = formattedTitle;
    }
    if (item.children && Array.isArray(item.children)) {
      buildRouteTitleMap(item.children);
    }
  });
}
buildRouteTitleMap(navLinks);

/**
 * Helper untuk mengubah slug URL dinamis menjadi teks Title Case
 * Contoh: "ahmad-fauzan" -> "Ahmad Fauzan", "uts-uas" -> "UTS & UAS"
 */
function formatSlug(slug) {
  if (!slug) return "";

  const cleanSlug = decodeURIComponent(slug).trim().toLowerCase();

  // Khusus singkatan umum
  const acronyms = {
    "uts-uas": "UTS & UAS",
    "qa": "QA",
    "ukm": "UKM",
    "src": "Student Research Center",
  };

  if (acronyms[cleanSlug]) {
    return acronyms[cleanSlug];
  }

  return cleanSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Universal Dynamic Breadcrumb
 * Otomatis memetakan URL sedalam apapun (N-Level) secara dinamis tanpa hardcode.
 */
export default function Breadcrumb({ customTitle }) {
  const { pathname } = useLocation();

  // Pecah pathname menjadi array segmen (abaikan string kosong)
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-xs sm:text-[13px] text-gray-500 mb-6 sm:mb-10 flex-wrap"
    >
      <Link to="/" className="hover:text-primary transition-colors">
        Beranda
      </Link>

      {segments.map((segment, index) => {
        const path = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;

        // Tentukan label breadcrumb:
        // 1. Jika customTitle diberikan pada item terakhir, pakai customTitle.
        // 2. Jika ada di routeTitleMap, pakai judul resmi.
        // 3. Jika tidak ada (URL dinamis/slug), ubah slug menjadi Title Case.
        const label =
          isLast && customTitle
            ? customTitle
            : routeTitleMap[path] || formatSlug(segment);

        return (
          <span key={path} className="flex items-center gap-2">
            <span className="text-gray-400 select-none">/</span>
            {isLast ? (
              <span className="font-semibold text-heading">{label}</span>
            ) : (
              <Link to={path} className="hover:text-primary transition-colors">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
