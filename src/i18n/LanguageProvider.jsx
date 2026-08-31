import { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext, LANGUAGES, DEFAULT_LANG } from "./languageContext";

const STORAGE_KEY = "mkn-lang";

function readStoredLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.includes(saved) ? saved : DEFAULT_LANG;
  } catch {
    // Mode privat / site data diblokir — pakai default saja.
    return DEFAULT_LANG;
  }
}

/**
 * Menyimpan bahasa aktif untuk seluruh aplikasi.
 *
 * Sebelumnya `currentLang` berada di state lokal Navbar, sedangkan setiap
 * layout merender Navbar-nya sendiri — akibatnya pilihan bahasa hilang setiap
 * kali pindah halaman dan tidak bisa dibaca oleh halaman mana pun.
 */
export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang);

  const setLang = useCallback((next) => {
    if (!LANGUAGES.includes(next)) return;
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Penyimpanan tidak tersedia — pilihan tetap berlaku untuk sesi ini.
    }
  }, []);

  // Atribut lang pada <html> ikut berubah: penting untuk pembaca layar,
  // mesin pencari, dan terjemahan otomatis peramban.
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
