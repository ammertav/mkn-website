import { strapiFetch, strapiFetchAll } from "../api/strapiClient.js";
import { buildDetailByFieldQuery } from "../api/strapiQuery.js";
import {
  STRAPI_ENDPOINTS,
  STRAPI_POPULATE,
  STRAPI_SORT,
  STRAPI_DEFAULTS,
} from "../config/strapi.js";
import { normalizeBerita } from "../utils/beritaFormatters.js";

/**
 * =========================================================
 * SERVICE BERITA (STRAPI CMS)
 * =========================================================
 * Seluruh data berita diambil dari Strapi CMS (/api/beritas).
 * Data lokal (berita.json) sudah tidak dipakai lagi.
 *
 * Nama fungsi `getHybrid*` dipertahankan agar konsumen yang ada
 * tidak perlu diubah.
 */

/**
 * Mengubah string tanggal ISO (2026-08-18 / 2026-08-18T...) menjadi
 * timestamp milidetik agar pengurutan (sorting) akurat.
 * @param {string} dateStr
 * @returns {number} Timestamp milidetik
 */
export function parseDateToTimestamp(dateStr) {
  if (!dateStr) return 0;
  const time = Date.parse(dateStr);
  return isNaN(time) ? 0 : time;
}

/**
 * Normalisasi judul untuk perbandingan yang robust:
 * - Huruf kecil
 * - Ubah semua tanda baca/simbol menjadi spasi
 * - Satukan spasi berlebih
 * @param {string} title
 * @returns {string}
 */
export function normalizeTitleKey(title = "") {
  return String(title || "")
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Pinned selalu terdepan, lalu tanggal terbaru. */
function sortPinnedThenNewest(a, b) {
  const aPin = Boolean(a.isPinned || a.pinned);
  const bPin = Boolean(b.isPinned || b.pinned);
  if (aPin && !bPin) return -1;
  if (!aPin && bPin) return 1;
  return parseDateToTimestamp(b.tanggal) - parseDateToTimestamp(a.tanggal);
}

/**
 * Mengambil seluruh berita dari Strapi CMS sesuai bahasa aktif.
 * Jika locale aktif ("en") belum punya entri, kembali ke locale "id".
 *
 * @param {object} [options={}]
 * @param {string} [options.locale="id"] - Bahasa aktif ("id" atau "en")
 * @returns {Promise<Array>} Daftar berita terurut (pinned dulu, lalu terbaru)
 * @throws {Error} Jika Strapi tidak dapat diakses
 */
export async function getHybridBeritaList({ locale = "id" } = {}) {
  const activeLocale = locale || STRAPI_DEFAULTS.LOCALE;
  const queryArgs = {
    populate: STRAPI_POPULATE.BERITA_FULL,
    sort: STRAPI_SORT.BERITA_DEFAULT,
  };

  let rawList = await strapiFetchAll(STRAPI_ENDPOINTS.BERITA, {
    ...queryArgs,
    locale: activeLocale,
  });

  if (rawList.length === 0 && activeLocale !== STRAPI_DEFAULTS.LOCALE) {
    rawList = await strapiFetchAll(STRAPI_ENDPOINTS.BERITA, {
      ...queryArgs,
      locale: STRAPI_DEFAULTS.LOCALE,
    });
  }

  return rawList.map(normalizeBerita).filter(Boolean).sort(sortPinnedThenNewest);
}

/** Mencari satu entri berita berdasarkan field tertentu. */
async function findBeritaBy(field, value, locale) {
  const q = buildDetailByFieldQuery({
    field,
    value,
    populate: STRAPI_POPULATE.BERITA_FULL,
    locale,
  });
  const res = await strapiFetch(`${STRAPI_ENDPOINTS.BERITA}?${q}`);
  return Array.isArray(res?.data) && res.data.length > 0 ? res.data[0] : null;
}

/**
 * Mengambil satu detail berita berdasarkan slug atau documentId.
 * Urutan pencarian: slug → documentId pada locale aktif, lalu
 * hal yang sama pada locale "id" bila locale aktif berbeda.
 *
 * @param {string} slugParam - Slug atau documentId berita
 * @param {object} [options={}]
 * @param {string} [options.locale="id"] - Kode bahasa aktif
 * @returns {Promise<object|null>} Objek berita ternormalisasi atau null
 * @throws {Error} Jika Strapi tidak dapat diakses
 */
export async function getHybridBeritaBySlug(
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
      (await findBeritaBy("slug", rawParam, loc)) ||
      (await findBeritaBy("documentId", rawParam, loc));
    if (found) return normalizeBerita(found);
  }

  return null;
}

/**
 * Mengambil artikel terkait (mengecualikan artikel aktif)
 * @param {object} currentArticle - Artikel yang sedang dibuka
 * @param {object} [options={}]
 * @param {number} [options.limit=3]
 * @param {string} [options.locale="id"]
 * @returns {Promise<Array>}
 */
export async function getRelatedBerita(
  currentArticle,
  { limit = 3, locale = "id" } = {}
) {
  if (!currentArticle) return [];

  try {
    const list = await getHybridBeritaList({ locale });
    const currentTitleKey = normalizeTitleKey(currentArticle.title);
    const currentSlug = (currentArticle.slug || "").toLowerCase();

    return list
      .filter((item) => {
        if (item.id === currentArticle.id) return false;
        if (item.documentId && item.documentId === currentArticle.documentId)
          return false;
        if ((item.slug || "").toLowerCase() === currentSlug) return false;
        if (normalizeTitleKey(item.title) === currentTitleKey) return false;
        return true;
      })
      .slice(0, limit);
  } catch (err) {
    console.warn("[beritaService] Gagal mengambil berita terkait:", err);
    return [];
  }
}

export default {
  normalizeTitleKey,
  parseDateToTimestamp,
  getHybridBeritaList,
  getHybridBeritaBySlug,
  getRelatedBerita,
};
