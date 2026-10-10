import { strapiFetch, strapiFetchAll } from "../api/strapiClient.js";
import { buildDetailByFieldQuery } from "../api/strapiQuery.js";
import {
  STRAPI_ENDPOINTS,
  STRAPI_POPULATE,
  STRAPI_DEFAULTS,
  STRAPI_SORT,
} from "../config/strapi.js";
import { normalizePengumuman } from "../utils/pengumumanFormatters.js";

/**
 * =========================================================
 * SERVICE PENGUMUMAN (STRAPI CMS)
 * =========================================================
 * Seluruh data pengumuman diambil dari Strapi CMS (/api/pengumumen).
 * Data lokal (berita.json) sudah tidak dipakai lagi.
 */

/**
 * Mengubah string tanggal ISO menjadi timestamp milidetik untuk sorting.
 * @param {string} dateStr
 * @returns {number}
 */
function parseDateToTimestamp(dateStr) {
  if (!dateStr) return 0;
  const time = Date.parse(dateStr);
  return isNaN(time) ? 0 : time;
}

/**
 * Normalisasi judul untuk perbandingan yang robust:
 * - Huruf kecil
 * - Ubah semua tanda baca/simbol menjadi spasi
 * - Satukan spasi berlebih
 */
export function normalizeTitleKey(title = "") {
  return String(title || "")
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Mengambil seluruh pengumuman dari Strapi CMS sesuai bahasa aktif.
 * Jika locale aktif ("en") belum punya entri, kembali ke locale "id".
 *
 * @param {object} [options={}]
 * @param {string} [options.locale="id"] - Bahasa aktif ("id" atau "en")
 * @returns {Promise<Array>} Daftar pengumuman terurut (pinned dulu, lalu terbaru)
 * @throws {Error} Jika Strapi tidak dapat diakses
 */
export async function getHybridPengumumanList({ locale = "id" } = {}) {
  const activeLocale = locale || STRAPI_DEFAULTS.LOCALE;
  const queryArgs = {
    populate: STRAPI_POPULATE.PENGUMUMAN,
    sort: STRAPI_SORT.PENGUMUMAN_DEFAULT,
  };

  let rawList = await strapiFetchAll(STRAPI_ENDPOINTS.PENGUMUMAN, {
    ...queryArgs,
    locale: activeLocale,
  });

  if (rawList.length === 0 && activeLocale !== STRAPI_DEFAULTS.LOCALE) {
    rawList = await strapiFetchAll(STRAPI_ENDPOINTS.PENGUMUMAN, {
      ...queryArgs,
      locale: STRAPI_DEFAULTS.LOCALE,
    });
  }

  return rawList
    .map(normalizePengumuman)
    .filter(Boolean)
    .sort((a, b) => {
      // Pinned selalu paling atas, lalu tanggal terbaru
      const aPin = Boolean(a.isPinned || a.pinned);
      const bPin = Boolean(b.isPinned || b.pinned);
      if (aPin && !bPin) return -1;
      if (!aPin && bPin) return 1;
      return parseDateToTimestamp(b.tanggal) - parseDateToTimestamp(a.tanggal);
    });
}

/** Mencari satu entri pengumuman berdasarkan field tertentu. */
async function findPengumumanBy(field, value, locale) {
  const q = buildDetailByFieldQuery({
    field,
    value,
    populate: STRAPI_POPULATE.PENGUMUMAN,
    locale,
  });
  const res = await strapiFetch(`${STRAPI_ENDPOINTS.PENGUMUMAN}?${q}`);
  return Array.isArray(res?.data) && res.data.length > 0 ? res.data[0] : null;
}

/**
 * Mengambil satu detail pengumuman berdasarkan slug atau documentId.
 * Urutan pencarian: slug → documentId pada locale aktif, lalu
 * hal yang sama pada locale "id" bila locale aktif berbeda.
 *
 * @param {string} slugParam - Slug atau documentId pengumuman
 * @param {object} [options={}]
 * @param {string} [options.locale="id"] - Kode bahasa aktif
 * @returns {Promise<object|null>} Objek pengumuman ternormalisasi atau null
 * @throws {Error} Jika Strapi tidak dapat diakses
 */
export async function getHybridPengumumanBySlug(
  slugParam,
  { locale = "id" } = {}
) {
  if (!slugParam) return null;

  const rawParam = decodeURIComponent(slugParam).trim();
  const activeLocale = locale || STRAPI_DEFAULTS.LOCALE;
  const locales =
    activeLocale === STRAPI_DEFAULTS.LOCALE
      ? [activeLocale]
      : [activeLocale, STRAPI_DEFAULTS.LOCALE];

  for (const loc of locales) {
    const found =
      (await findPengumumanBy("slug", rawParam, loc)) ||
      (await findPengumumanBy("documentId", rawParam, loc));
    if (found) return normalizePengumuman(found);
  }

  return null;
}

export default {
  getHybridPengumumanList,
  getHybridPengumumanBySlug,
};
