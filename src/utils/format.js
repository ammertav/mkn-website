/**
 * Format string ke Title Case (contoh: "KEHIDUPAN MAHASISWA" -> "Kehidupan Mahasiswa")
 * @param {string} str
 * @returns {string}
 */
export function toTitleCase(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
