import { useLanguage, pick } from "./languageContext";
import { uiText } from "./uiText";

/**
 * Mengambil label antarmuka sesuai bahasa aktif.
 *
 *   const ui = useUi();
 *   <button>{ui("download")}</button>   // "Unduh" / "Download"
 *
 * Kunci yang tidak dikenal dikembalikan apa adanya, supaya salah ketik
 * terlihat jelas di layar alih-alih menghasilkan teks kosong.
 */
export function useUi() {
  const { lang } = useLanguage();
  return (key) => {
    const entry = uiText[key];
    if (!entry) return key;
    return pick(entry, lang);
  };
}
