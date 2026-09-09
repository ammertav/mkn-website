import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { FiChevronLeft, FiChevronRight, FiMinus, FiPlus, FiX } from "react-icons/fi";

/**
 * Lightbox global: satu overlay dipasang sekali di root aplikasi, lalu gambar
 * mana pun bisa membukanya lewat `useLightbox().open(...)`.
 *
 * Alasan dibuat terpusat (bukan satu overlay per gambar): halaman seperti
 * Struktur Organisasi dan Tenaga Kependidikan merender puluhan foto sekaligus,
 * jadi memasang satu portal per kartu jelas boros. Dengan pola ini yang
 * dirender hanya satu overlay untuk seluruh aplikasi.
 */

const LightboxContext = createContext(null);

/** Dipakai komponen anak untuk membuka lightbox. Aman dipanggil di mana pun. */
export function useLightbox() {
  const ctx = useContext(LightboxContext);
  // Jangan melempar error: komponen gambar harus tetap bisa dipakai walau
  // (mis. dalam pengujian unit) provider-nya kebetulan tidak terpasang.
  return ctx ?? FALLBACK;
}

const FALLBACK = { open: () => {}, close: () => {} };

const SKALA_MIN = 1;
const SKALA_MAKS = 5;
const SKALA_LANGKAH = 0.5;

const jepit = (nilai, min, maks) => Math.min(maks, Math.max(min, nilai));

export function LightboxProvider({ children }) {
  // `items` = daftar foto yang sedang dibuka (bisa satu, bisa satu galeri),
  // `index` = foto yang sedang ditampilkan.
  const [items, setItems] = useState(null);
  const [index, setIndex] = useState(0);

  const open = useCallback((daftar, mulai = 0) => {
    const isi = (Array.isArray(daftar) ? daftar : [daftar]).filter((f) => f?.src);
    if (isi.length === 0) return;
    setItems(isi);
    setIndex(jepit(mulai, 0, isi.length - 1));
  }, []);

  const close = useCallback(() => setItems(null), []);

  const nilai = useMemo(() => ({ open, close }), [open, close]);

  return (
    <LightboxContext.Provider value={nilai}>
      {children}
      {items && (
        <LightboxOverlay
          items={items}
          index={index}
          onIndexChange={setIndex}
          onClose={close}
        />
      )}
    </LightboxContext.Provider>
  );
}

function LightboxOverlay({ items, index, onIndexChange, onClose }) {
  const [skala, setSkala] = useState(1);
  const [geser, setGeser] = useState({ x: 0, y: 0 });
  const [sedangSeret, setSedangSeret] = useState(false);
  const seret = useRef(null);
  const panelRef = useRef(null);

  const banyak = items.length > 1;
  const foto = items[index];

  const reset = useCallback(() => {
    setSkala(SKALA_MIN);
    setGeser({ x: 0, y: 0 });
  }, []);

  const keFoto = useCallback(
    (arah) => {
      onIndexChange((i) => (i + arah + items.length) % items.length);
      reset();
    },
    [items.length, onIndexChange, reset]
  );

  const ubahSkala = useCallback((delta, titik) => {
    setSkala((lama) => {
      const baru = jepit(lama + delta, SKALA_MIN, SKALA_MAKS);
      if (baru === lama) return lama;
      if (baru === SKALA_MIN) {
        // Saat kembali ke ukuran asli, posisi geser ikut dinolkan supaya gambar
        // tidak "hilang" di luar layar.
        setGeser({ x: 0, y: 0 });
      } else if (titik) {
        // Zoom mengarah ke titik kursor: geser dikoreksi sebanding rasio skala.
        const rasio = baru / lama;
        setGeser((g) => ({
          x: titik.x - (titik.x - g.x) * rasio,
          y: titik.y - (titik.y - g.y) * rasio,
        }));
      }
      return baru;
    });
  }, []);

  // Kunci scroll halaman selama overlay terbuka, lalu kembalikan persis seperti
  // semula (bukan dipaksa "auto") agar tidak menimpa style milik halaman.
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && banyak) keFoto(1);
      else if (e.key === "ArrowLeft" && banyak) keFoto(-1);
      else if (e.key === "+" || e.key === "=") ubahSkala(SKALA_LANGKAH);
      else if (e.key === "-") ubahSkala(-SKALA_LANGKAH);
      else if (e.key === "0") reset();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [banyak, keFoto, onClose, reset, ubahSkala]);

  // Wheel dipasang manual dengan `passive: false`; lewat prop React onWheel
  // browser menganggapnya pasif sehingga preventDefault diabaikan dan halaman
  // di belakang ikut ter-scroll.
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      const kotak = el.getBoundingClientRect();
      ubahSkala(e.deltaY < 0 ? SKALA_LANGKAH : -SKALA_LANGKAH, {
        x: e.clientX - kotak.left - kotak.width / 2,
        y: e.clientY - kotak.top - kotak.height / 2,
      });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [ubahSkala]);

  const mulaiSeret = (e) => {
    if (skala <= SKALA_MIN) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    seret.current = { x: e.clientX - geser.x, y: e.clientY - geser.y };
    setSedangSeret(true);
  };

  const saatSeret = (e) => {
    if (!seret.current) return;
    setGeser({ x: e.clientX - seret.current.x, y: e.clientY - seret.current.y });
  };

  const akhiriSeret = () => {
    seret.current = null;
    setSedangSeret(false);
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={foto.alt || "Pratinjau gambar"}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col"
    >
      {/* Baris tombol: selalu di atas gambar dan tidak ikut ter-zoom. */}
      <div className="relative z-10 flex items-center justify-between gap-3 p-3 sm:p-4 text-white">
        <span className="text-xs sm:text-sm font-medium text-white/70 tabular-nums pl-1">
          {banyak ? `${index + 1} / ${items.length}` : ""}
        </span>
        <div className="flex items-center gap-1.5 shrink-0">
          <TombolIkon
            label="Perkecil"
            disabled={skala <= SKALA_MIN}
            onClick={() => ubahSkala(-SKALA_LANGKAH)}
          >
            <FiMinus />
          </TombolIkon>
          <button
            type="button"
            onClick={reset}
            aria-label="Kembalikan ke ukuran asli"
            className="min-w-[3.5rem] px-2 py-1.5 text-xs font-semibold tabular-nums rounded-xs bg-white/10 hover:bg-white/20 transition-colors"
          >
            {Math.round(skala * 100)}%
          </button>
          <TombolIkon
            label="Perbesar"
            disabled={skala >= SKALA_MAKS}
            onClick={() => ubahSkala(SKALA_LANGKAH)}
          >
            <FiPlus />
          </TombolIkon>
          <TombolIkon label="Tutup" onClick={onClose}>
            <FiX />
          </TombolIkon>
        </div>
      </div>

      {/* Area gambar. Klik pada latar (bukan gambar) menutup overlay. */}
      <div
        ref={panelRef}
        tabIndex={-1}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        onPointerDown={mulaiSeret}
        onPointerMove={saatSeret}
        onPointerUp={akhiriSeret}
        onPointerCancel={akhiriSeret}
        onDoubleClick={() => (skala > SKALA_MIN ? reset() : ubahSkala(1.5))}
        className={`relative flex-1 min-h-0 flex items-center justify-center overflow-hidden outline-none px-3 sm:px-14 ${
          skala > SKALA_MIN ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
        }`}
      >
        <img
          key={foto.src}
          src={foto.src}
          alt={foto.alt || ""}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          className="max-w-full max-h-full object-contain select-none"
          style={{
            transform: `translate3d(${geser.x}px, ${geser.y}px, 0) scale(${skala})`,
            transition: sedangSeret ? "none" : "transform 180ms ease-out",
          }}
        />

        {banyak && (
          <>
            <TombolNavigasi arah="kiri" onClick={() => keFoto(-1)} />
            <TombolNavigasi arah="kanan" onClick={() => keFoto(1)} />
          </>
        )}
      </div>

      {(foto.caption || foto.alt) && (
        <p className="relative z-10 px-4 pb-4 pt-2 text-center text-xs sm:text-sm text-white/80 leading-relaxed max-w-3xl mx-auto">
          {foto.caption || foto.alt}
        </p>
      )}
    </div>,
    document.body
  );
}

function TombolIkon({ label, children, ...props }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      {...props}
      className="w-9 h-9 flex items-center justify-center rounded-xs bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 transition-colors text-base"
    >
      {children}
    </button>
  );
}

function TombolNavigasi({ arah, onClick }) {
  const kiri = arah === "kiri";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={kiri ? "Foto sebelumnya" : "Foto berikutnya"}
      className={`absolute top-1/2 -translate-y-1/2 ${
        kiri ? "left-1 sm:left-3" : "right-1 sm:right-3"
      } w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white text-xl transition-colors`}
    >
      {kiri ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
}
