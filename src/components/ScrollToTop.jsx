import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Awalan rute yang tab-nya berada di dalam satu halaman.
 *
 * Berpindah antar-tab di sini bukan berpindah halaman — bagian atas layar tetap
 * sama — sehingga memaksa gulir kembali ke atas justru menyulitkan pembacaan.
 * Halaman yang bersangkutan mengatur posisi gulirnya sendiri.
 */
const GRUP_TAB = ["/akademik/panduan-ujian/tesis"];

function seGrupTab(a, b) {
  return GRUP_TAB.some((awalan) => a.startsWith(awalan) && b.startsWith(awalan));
}

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const sebelumnya = useRef(pathname);

  useEffect(() => {
    const lama = sebelumnya.current;
    sebelumnya.current = pathname;

    if (lama !== pathname && seGrupTab(lama, pathname)) return;

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
