import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

/**
 * Pengganti langsung untuk elemen gambar biasa, dengan placeholder shimmer
 * dan fade-in saat selesai dimuat.
 *
 * Tidak menambah elemen pembungkus apa pun, jadi container ber-aspect-ratio
 * yang sudah dipakai di seluruh halaman tetap bekerja tanpa penyesuaian.
 * Default-nya lazy; pakai `eager` untuk gambar di atas lipatan (hero, logo
 * navbar) supaya tidak ikut tertunda.
 */
export default function Img({ className, eager = false, onLoad, onError, ...props }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // Gambar yang sudah ada di cache bisa selesai sebelum React sempat memasang
  // handler onLoad. Tanpa pemeriksaan ini skeleton-nya tidak pernah hilang.
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  const finish = (handler) => (event) => {
    setLoaded(true);
    handler?.(event);
  };

  return (
    <img
      {...props}
      ref={ref}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onLoad={finish(onLoad)}
      onError={finish(onError)}
      className={clsx(className, loaded ? "img-fade-in" : "img-skeleton")}
    />
  );
}
