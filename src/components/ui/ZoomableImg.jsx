import clsx from "clsx";
import Img from "./Img";
import { useLightbox } from "./Lightbox";

/**
 * Pengganti langsung untuk `Img` yang membuka lightbox saat diklik.
 *
 * Sengaja tidak menambah elemen pembungkus — persis seperti `Img` — supaya
 * container ber-aspect-ratio dan kelas `object-cover` yang sudah dipakai di
 * seluruh halaman tetap bekerja tanpa penyesuaian tata letak.
 *
 * `group` dipakai untuk galeri: berikan seluruh daftar foto beserta `index`
 * gambar ini, sehingga tombol panah di lightbox bisa berpindah antarfoto.
 * Untuk gambar tunggal cukup abaikan keduanya.
 */
export default function ZoomableImg({
  src,
  alt,
  caption,
  group,
  index = 0,
  className,
  onClick,
  ...props
}) {
  const { open } = useLightbox();

  const buka = () =>
    open(group?.length ? group : [{ src, alt, caption }], group?.length ? index : 0);

  return (
    <Img
      {...props}
      src={src}
      alt={alt}
      role="button"
      tabIndex={0}
      title="Klik untuk memperbesar"
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        // Gambar ini kerap berada di dalam <Link> atau slider yang bisa
        // di-drag; hentikan aksi bawaannya agar klik hanya membuka lightbox.
        e.preventDefault();
        e.stopPropagation();
        buka();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          buka();
        }
      }}
      className={clsx(
        className,
        "cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
      )}
    />
  );
}
