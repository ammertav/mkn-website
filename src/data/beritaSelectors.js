import beritaList from "./berita.json";

/**
 * Sumber tunggal untuk memilah dan mengurutkan isi `berita.json`.
 *
 * Sebelumnya tiap tempat menyusun daftarnya sendiri: halaman Berita memfilter
 * per `tags` lalu mengurutkan per tanggal, sementara section di Beranda hanya
 * mengambil potongan awal berkas apa adanya. Akibatnya "Berita Terbaru" di
 * Beranda bisa memuat pengumuman dan tidak menampilkan entri terbaru. Semua
 * konsumen kini membaca dari berkas ini agar isinya selalu sinkron.
 */

/** Nilai `tags` yang menandai sebuah entri sebagai pengumuman, bukan berita. */
export const TAG_PENGUMUMAN = "Pengumuman";

const BULAN_ID = {
  januari: 0,
  februari: 1,
  maret: 2,
  april: 3,
  mei: 4,
  juni: 5,
  juli: 6,
  agustus: 7,
  september: 8,
  oktober: 9,
  november: 10,
  desember: 11,
};

/**
 * Konversi string tanggal format Indonesia ("30 Oktober 2022") ke Date.
 *
 * Entri dengan tanggal kosong atau tidak terbaca jatuh ke epoch, sehingga
 * terdorong ke urutan paling belakang alih-alih mengacaukan pengurutan.
 */
export function parseIndonesianDate(str) {
  if (!str) return new Date(0);

  const parts = str.trim().split(/\s+/);
  if (parts.length !== 3) return new Date(0);

  const [day, monthStr, year] = parts;
  const month = BULAN_ID[monthStr.toLowerCase()];
  if (month === undefined) return new Date(0);

  return new Date(Number(year), month, Number(day));
}

const terbaruDuluan = (a, b) =>
  parseIndonesianDate(b.tanggal) - parseIndonesianDate(a.tanggal);

const isPengumuman = (item) => item.tags === TAG_PENGUMUMAN;

// Dihitung sekali saat modul dimuat: `berita.json` statis, jadi tidak ada
// gunanya mengurutkan ulang pada tiap render.
/** Seluruh berita (non-pengumuman), terbaru lebih dulu. */
export const berita = beritaList.filter((item) => !isPengumuman(item)).sort(terbaruDuluan);

/** Seluruh pengumuman, terbaru lebih dulu. */
export const pengumuman = beritaList.filter(isPengumuman).sort(terbaruDuluan);
