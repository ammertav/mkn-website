/**
 * Warna grafik data situs, dipakai `Grafik.jsx` dan halaman yang merangkai
 * legendanya sendiri. Dipisah dari berkas komponen agar fast refresh tetap
 * bekerja (berkas komponen hanya boleh mengekspor komponen).
 *
 * Ramp ordinal satu hue terang → gelap, turunan warna utama situs, dan lolos
 * `validate_palette.js --ordinal` (ujung terang 2,09:1 terhadap latar).
 */
export const WARNA = {
  utama: "#800000",
  // Kontras 3,23:1 terhadap latar putih — memenuhi batas 3:1 untuk tanda data.
  abu: "#8f8f8f",
  ramp2: ["#dca3a3", "#800000"],
  ramp3: ["#dca3a3", "#b35a5a", "#800000"],
  // Lintasan meter: satu langkah lebih terang dari ramp yang sama.
  lintasan: "#f3e3e3",
};
