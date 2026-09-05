/**
 * Lokasi berkas dokumen mutu.
 *
 * Seluruh PDF disimpan datar di `public/quality-assurance/` dengan nama
 * berawalan kode dokumen resmi, sehingga tautannya stabil dan pemetaannya ke
 * data di folder ini langsung terbaca. Berkas di `public/` disalin apa adanya
 * oleh Vite — tidak ikut di-bundle dan tidak diberi hash.
 */
export const BERKAS = "/quality-assurance/";
