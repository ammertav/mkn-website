/**
 * Kategori & utilitas tanggal untuk Event / Agenda Magister Kenotariatan UNISSULA.
 * Isi agenda sendiri dikelola di Strapi CMS (/api/agenda).
 */

export const eventCategories = [
  { id: "Semua Kategori", en: "All Categories" },
  { id: "Seminar & Konferensi", en: "Seminars & Conferences" },
  { id: "Kuliah Pakar", en: "Expert Lectures" },
  { id: "Workshop & Praktik", en: "Workshops & Practice" },
  { id: "Ujian & Tesis", en: "Exams & Theses" },
  { id: "Akademik & Kemahasiswaan", en: "Academic & Student Affairs" },
];

/**
 * Format tanggal ke format lokal (Indonesia atau English)
 * Contoh: "2026-09-01" -> "1 September 2026" (id) atau "September 1, 2026" (en)
 */
export function formatIndoDate(dateStr, lang = "id") {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  const monthNamesId = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];
  const monthNamesEn = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const monthNames = lang === "en" ? monthNamesEn : monthNamesId;
  const mIndex = parseInt(month, 10) - 1;

  if (lang === "en") {
    return `${monthNames[mIndex]} ${parseInt(day, 10)}, ${year}`;
  }
  return `${parseInt(day, 10)} ${monthNames[mIndex]} ${year}`;
}

/**
 * Format nama hari (Indonesia atau English)
 */
export function getIndoDayName(dateStr, lang = "id") {
  if (!dateStr) return "";
  const date = new Date(dateStr + "T00:00:00");
  const daysId = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const daysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const days = lang === "en" ? daysEn : daysId;
  return days[date.getDay()];
}

