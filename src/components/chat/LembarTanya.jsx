import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FiFeather } from "react-icons/fi";

/**
 * Pemantik Lembar Tanya — asisten cakupan program studi, tersedia di seluruh
 * halaman.
 *
 * Pemantiknya sengaja bukan gelembung bundar di pojok kanan bawah: bentuk itu
 * sudah dipakai chatbot persona dosen pada halaman profil dosen, dan terlanjur
 * lekat dengan kanal layanan pelanggan. Yang dipakai di sini adalah pita
 * penanda halaman yang menyembul dari tepi kanan — hadir terus-menerus tetapi
 * hampir tidak memakan ruang baca, dan terbaca sebagai penanda dokumen alih-alih
 * tombol obrolan.
 *
 * Panel beserta mesin jawabannya dimuat lambat, sehingga komponen global ini
 * tidak menambah beban bundel awal setiap halaman.
 */

const LembarTanyaPanel = lazy(() => import("./LembarTanyaPanel"));

/** Halaman yang sudah punya pemantik chat sendiri; pita disembunyikan di sana. */
const POLA_HALAMAN_BERCHAT = /^\/staff\/(dosen|faculty-directory)\/[^/]+$/;

export default function LembarTanya() {
  const [terbuka, setTerbuka] = useState(false);
  const { pathname } = useLocation();

  const tutup = useCallback(() => setTerbuka(false), []);

  // Ctrl/Cmd + K — jalan pintas yang lazim untuk membuka panel pencarian.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setTerbuka((kini) => !kini);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lembar ditutup saat pindah halaman, termasuk lewat rujukan di dalamnya.
  useEffect(() => setTerbuka(false), [pathname]);

  if (POLA_HALAMAN_BERCHAT.test(pathname)) return null;

  return (
    <>
      <AnimatePresence>
        {!terbuka && (
          <motion.button
            key="pita"
            type="button"
            onClick={() => setTerbuka(true)}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24, transition: { duration: 0.15 } }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            whileHover={{ x: -3 }}
            aria-label="Buka Lembar Tanya program studi"
            title="Lembar Tanya — Ctrl + K"
            className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2.5 bg-primary text-white py-4 px-2 rounded-l-xs shadow-lg hover:bg-[#680000] transition-colors"
          >
            <FiFeather className="text-sm shrink-0" aria-hidden="true" />

            <span
              aria-hidden="true"
              className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-bold tracking-[0.22em] uppercase"
            >
              Tanya
            </span>

            {/* Titik penanda di kaki pita, mengingatkan pada segel dokumen. */}
            <span
              aria-hidden="true"
              className="w-1 h-1 rounded-full bg-white/50 shrink-0"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Suspense di luar AnimatePresence: bila dibalik, anak langsung
          AnimatePresence adalah Suspense — bukan komponen motion — sehingga
          animasi keluarnya tidak pernah dijalankan. */}
      <Suspense fallback={null}>
        <AnimatePresence>
          {terbuka && <LembarTanyaPanel onTutup={tutup} />}
        </AnimatePresence>
      </Suspense>
    </>
  );
}
