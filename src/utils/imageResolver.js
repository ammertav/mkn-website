/**
 * Smart Image Resolver untuk Modul Berita
 * Mendukung:
 * 1. URL eksternal (API integration ready: http:// / https://)
 * 2. Path lengkap: "src/assets/images/berita/news/berita1.jpg"
 * 3. Nama file dengan ekstensi bebas: "berita4.jpg" padahal aslinya "berita4.jpeg"
 * 4. Nama file tanpa ekstensi: "berita1", "berita2", dll.
 */

const beritaImages = import.meta.glob(
  "/src/assets/images/berita/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, import: "default" }
);

export function getBeritaImage(gambarPath) {
  if (!gambarPath) return "";

  // 1. Jika URL eksternal (API Ready)
  if (gambarPath.startsWith("http://") || gambarPath.startsWith("https://")) {
    return gambarPath;
  }

  // 2. Cek kecocokan langsung path
  const normalized = gambarPath.startsWith("/") ? gambarPath : `/${gambarPath}`;
  if (beritaImages[normalized]) {
    return beritaImages[normalized];
  }

  // 3. Ambil nama file dasar tanpa ekstensi
  // Contoh: "src/assets/images/berita/news/berita4.jpg" -> "berita4"
  // Contoh: "berita4.jpeg" -> "berita4"
  // Contoh: "berita4" -> "berita4"
  const rawFileName = gambarPath.split("/").pop() || "";
  const baseName = rawFileName.replace(/\.[^/.]+$/, "").trim().toLowerCase();

  if (!baseName) return "";

  // 4. Cari file di folder aset yang nama dasarnya sama (abaikan ekstensi .jpg / .jpeg / .png / .webp)
  for (const assetPath in beritaImages) {
    const assetFileName = assetPath.split("/").pop() || "";
    const assetBaseName = assetFileName.replace(/\.[^/.]+$/, "").trim().toLowerCase();

    if (assetBaseName === baseName) {
      return beritaImages[assetPath];
    }
  }

  // 5. Fallback ke gambar berita utama jika tidak ditemukan
  for (const assetPath in beritaImages) {
    if (assetPath.includes("berita-utama")) {
      return beritaImages[assetPath];
    }
  }

  return gambarPath;
}
