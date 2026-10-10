/**
 * =========================================================
 * SERVICE EVENT & AGENDA (STRAPI CMS)
 * =========================================================
 * Seluruh data agenda diambil dari Strapi CMS (/api/agenda).
 * Data lokal (eventData.js) sudah tidak dipakai lagi.
 */

import { strapiFetch, strapiFetchAll } from "../api/strapiClient.js";
import { buildDetailByFieldQuery } from "../api/strapiQuery.js";
import {
  STRAPI_ENDPOINTS,
  STRAPI_POPULATE,
  STRAPI_DEFAULTS,
  STRAPI_SORT,
} from "../config/strapi.js";
import { normalizeEvent } from "../utils/eventFormatters.js";

/**
 * Parse tanggal YYYY-MM-DD ke timestamp numerik untuk sorting
 */
function parseDateToTimestamp(dateStr) {
  if (!dateStr) return 0;
  const d = new Date(dateStr + "T00:00:00");
  return isNaN(d.getTime()) ? 0 : d.getTime();
}

/**
 * Mengambil daftar seluruh event dari Strapi CMS.
 * Urutan: pinned dulu, lalu tanggal acara terdekat.
 *
 * @param {object} options
 * @param {string} [options.locale="id"]
 * @returns {Promise<Array>}
 * @throws {Error} Jika Strapi tidak dapat diakses
 */
export async function getHybridEventList({
  locale = STRAPI_DEFAULTS.LOCALE,
} = {}) {
  const rawData = await strapiFetchAll(STRAPI_ENDPOINTS.AGENDA, {
    populate: STRAPI_POPULATE.AGENDA_FULL,
    sort: STRAPI_SORT.AGENDA_DEFAULT,
    locale,
  });

  return rawData
    .map(normalizeEvent)
    .filter(Boolean)
    .sort((a, b) => {
      // A. Item yang dipin selalu berada di atas
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;

      // B. Urutkan berdasarkan tanggal acara terdekat
      const timeA = parseDateToTimestamp(a.date);
      const timeB = parseDateToTimestamp(b.date);
      if (timeA !== timeB) return timeA - timeB;

      return (b.id || 0) - (a.id || 0);
    });
}

/**
 * Mengambil satu event berdasarkan slug atau documentId.
 *
 * @param {string} slugParam - Slug atau documentId event
 * @param {object} options
 * @param {string} [options.locale="id"]
 * @returns {Promise<object|null>}
 * @throws {Error} Jika Strapi tidak dapat diakses
 */
export async function getHybridEventBySlug(
  slugParam,
  { locale = STRAPI_DEFAULTS.LOCALE } = {}
) {
  if (!slugParam) return null;

  const cleanSlug = decodeURIComponent(slugParam).trim();

  for (const field of ["slug", "documentId"]) {
    const query = buildDetailByFieldQuery({
      field,
      value: cleanSlug,
      populate: STRAPI_POPULATE.AGENDA_FULL,
      locale,
    });
    const res = await strapiFetch(`${STRAPI_ENDPOINTS.AGENDA}?${query}`);
    if (Array.isArray(res?.data) && res.data.length > 0) {
      return normalizeEvent(res.data[0]);
    }
  }

  return null;
}

/**
 * Mengambil daftar event mendatang lainnya (selain event yang sedang aktif dibaca)
 *
 * @param {object} currentEvent - Objek event yang sedang dibuka
 * @param {object} options
 * @param {number} [options.limit=6]
 * @param {string} [options.locale="id"]
 * @returns {Promise<Array>}
 */
export async function getUpcomingEvents(
  currentEvent,
  { limit = 6, locale = STRAPI_DEFAULTS.LOCALE } = {}
) {
  try {
    const allEvents = await getHybridEventList({ locale });
    const currentSlug = currentEvent?.slug;
    const currentId = currentEvent?.id;

    return allEvents
      .filter((ev) => ev.slug !== currentSlug && ev.id !== currentId)
      .slice(0, limit);
  } catch (err) {
    console.warn("[eventService] Failed fetching upcoming events:", err?.message);
    return [];
  }
}
