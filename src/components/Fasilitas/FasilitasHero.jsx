import { useEffect, useState } from "react";
import {
  ruangKelasData,
  laboratoriumAktaData,
  laboratoriumManajemenKantorData,
  perpustakaanData,
  mootCourtData,
} from "../../data/fasilitasData";

/**
 * Foto latar hero diambil dari foto sorotan tiap fasilitas, sehingga menambah
 * atau mengganti foto cukup dilakukan di fasilitasData — hero ikut menyesuaikan.
 */
const fotoLatar = [
  ruangKelasData,
  laboratoriumAktaData,
  laboratoriumManajemenKantorData,
  perpustakaanData,
  mootCourtData,
]
  .map((fasilitas) => fasilitas.galeri?.[0])
  .filter(Boolean);

/** Jeda antarfoto; lama silang-pudarnya diatur lewat kelas duration di bawah. */
const JEDA_MS = 6000;

export default function FasilitasHero() {
  const [aktif, setAktif] = useState(0);

  /**
   * Pergantian foto dihentikan ketika pengunjung meminta gerak seminimal
   * mungkin lewat pengaturan sistemnya, dan ketika tab sedang tidak dilihat —
   * memutar transisi di tab latar hanya membuang daya tanpa ada yang melihat.
   */
  useEffect(() => {
    if (fotoLatar.length < 2) return;

    const kurangiGerak = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (kurangiGerak.matches) return;

    const timer = setInterval(() => {
      if (document.hidden) return;
      setAktif((sebelumnya) => (sebelumnya + 1) % fotoLatar.length);
    }, JEDA_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-neutral-900 text-white overflow-hidden">
      {/* Latar bergantian — seluruh foto ditumpuk, hanya yang aktif yang terlihat */}
      <div className="absolute inset-0 z-0">
        {fotoLatar.map((foto, idx) => (
          <img
            key={foto.src}
            src={foto.src}
            alt=""
            aria-hidden="true"
            loading={idx === 0 ? "eager" : "lazy"}
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-50 contrast-105 transition-opacity duration-1000 ease-in-out ${
              idx === aktif ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/70" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gray-300">
            Fasilitas
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium text-hero-heading leading-tight tracking-tight">
            Ruang untuk Belajar dan Meneliti
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-hero-description font-normal leading-relaxed pt-2">
            Enam kelompok fasilitas menopang penyelenggaraan pendidikan Magister
            Kenotariatan, dari ruang kelas dan laboratorium hingga pusat riset
            mahasiswa, perpustakaan hukum, dan ruang peradilan semu.
          </p>
        </div>
      </div>

      {/* Penanda foto keberapa yang sedang tampil, sekaligus bisa diklik */}
      {fotoLatar.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {fotoLatar.map((foto, idx) => (
            <button
              key={foto.src}
              type="button"
              onClick={() => setAktif(idx)}
              aria-label={`Tampilkan foto ${idx + 1}: ${foto.keterangan}`}
              aria-current={idx === aktif}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === aktif ? "w-7 bg-white" : "w-3 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
