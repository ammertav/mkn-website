import { createContext, useContext } from "react";

/** Bahasa yang didukung. Tambahkan di sini kalau nanti bertambah. */
export const LANGUAGES = ["id", "en"];
export const DEFAULT_LANG = "id";

export const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
});

/**
 * Ambil bahasa aktif dan penggantinya.
 * @returns {{ lang: string, setLang: (l: string) => void }}
 */
export function useLanguage() {
  return useContext(LanguageContext);
}

/**
 * Ambil nilai sesuai bahasa aktif dari sebuah field.
 *
 * Menerima dua bentuk sekaligus, jadi migrasi bisa bertahap:
 *   pick("Pedoman Akademik", "en")                          -> "Pedoman Akademik"
 *   pick({ id: "Pedoman", en: "Handbook" }, "en")           -> "Handbook"
 *   pick({ id: "Pedoman", en: "" }, "en")                   -> "Pedoman"  (fallback)
 *
 * String biasa dikembalikan apa adanya, sehingga file data yang belum
 * diterjemahkan tetap berfungsi tanpa perlu diubah lebih dulu.
 *
 * @param {string | {id?: string, en?: string} | null | undefined} value
 * @param {string} lang
 */
export function pick(value, lang = DEFAULT_LANG) {
  if (value === null || value === undefined) return value;
  if (typeof value !== "object") return value;
  if (Array.isArray(value)) return value;
  return value[lang] || value[DEFAULT_LANG] || "";
}

/**
 * Versi pick() yang terikat bahasa aktif — dipakai di dalam komponen.
 *
 *   const t = useT();
 *   <h1>{t(item.title)}</h1>
 */
export function useT() {
  const { lang } = useLanguage();
  return (value) => pick(value, lang);
}
