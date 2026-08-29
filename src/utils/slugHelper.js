/**
 * Utility untuk membuat slug URL otomatis dari Judul
 */
export function generateSlug(title, slug) {
  if (slug && slug.trim()) return slug.trim();
  if (!title) return "";
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Hapus karakter spesial (titik, koma, tanda kutip, kurung, dsb)
    .replace(/[\s_-]+/g, "-") // Ubah spasi & underscore menjadi strip (-)
    .replace(/^-+|-+$/g, ""); // Hapus strip di awal & akhir
}
