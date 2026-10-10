import { STRAPI_BASE_URL, STRAPI_ENDPOINTS } from "../config/strapi.js";
import { buildListQuery } from "./strapiQuery.js";

export { STRAPI_BASE_URL, STRAPI_ENDPOINTS };

/**
 * =========================================================
 * GLOBAL STRAPI HTTP CLIENT
 * =========================================================
 * Client fetch terpusat untuk semua modul frontend yang berinteraksi
 * dengan Strapi CMS (Berita, Agenda, Dosen, Fasilitas, dll).
 *
 * @param {string} endpoint - Path endpoint API (misal: "/api/beritas?...")
 * @param {RequestInit} [options={}] - Konfigurasi fetch standar browser
 * @returns {Promise<any>} Objek JSON hasil respons Strapi
 */
export async function strapiFetch(endpoint, options = {}) {
  const url = endpoint.startsWith("http")
    ? endpoint
    : `${STRAPI_BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

  let response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  // Fallback jika deep populate ditolak skema (HTTP 400)
  if (!response.ok && response.status === 400 && url.includes("populate")) {
    console.warn(
      `[StrapiClient] Request ditolak pada ${url}, mencoba fallback populate=*...`
    );
    const cleanEndpoint = endpoint.split("?")[0];
    const fallbackUrl = `${STRAPI_BASE_URL}${cleanEndpoint.startsWith("/") ? "" : "/"}${cleanEndpoint}?populate=*`;
    response = await fetch(fallbackUrl, options);
  }

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const message =
      errorBody?.error?.message ||
      `HTTP ${response.status}: ${response.statusText}`;
    throw new Error(message);
  }

  return response.json();
}

/**
 * Mengambil SELURUH entri sebuah koleksi dengan menelusuri semua halaman.
 * Strapi membatasi jumlah entri per request (maxLimit bawaan 100), sehingga
 * koleksi yang lebih besar dari satu halaman harus diambil bertahap.
 *
 * @param {string} endpoint - Path koleksi (misal: "/api/beritas")
 * @param {object} [queryArgs={}] - Argumen buildListQuery (populate, sort, locale, filters)
 * @returns {Promise<Array>} Gabungan `data` dari semua halaman
 */
export async function strapiFetchAll(endpoint, queryArgs = {}) {
  const pageSize = 100;
  let page = 1;
  let all = [];

  for (;;) {
    const query = buildListQuery({ ...queryArgs, page, pageSize });
    const res = await strapiFetch(`${endpoint}?${query}`);
    const data = Array.isArray(res?.data) ? res.data : [];
    all = all.concat(data);

    const pageCount = res?.meta?.pagination?.pageCount ?? 1;
    if (page >= pageCount || data.length === 0) return all;
    page += 1;
  }
}

export default strapiFetch;
