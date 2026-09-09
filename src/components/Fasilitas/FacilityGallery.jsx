import { motion } from "framer-motion";
import ZoomableImg from "../ui/ZoomableImg";

const subPhotoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const subPhotoVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Galeri foto satu fasilitas: foto pertama tampil lebar penuh sebagai gambar
 * utama, sisanya berjajar sebagai kartu berketerangan.
 *
 * Dipakai bersama oleh halaman Fasilitas dan halaman Akomodasi supaya
 * susunannya cukup diperbaiki di satu tempat. Komponen ini tidak merender apa
 * pun bila datanya kosong, sehingga fasilitas yang belum menyerahkan foto
 * tidak menampilkan bingkai kosong.
 */
export default function FacilityGallery({ galeri = [] }) {
  if (galeri.length === 0) return null;

  const [utama, ...lainnya] = galeri;

  // Seluruh foto satu fasilitas dibuka sebagai satu grup, sehingga tombol
  // panah di lightbox berpindah dari foto utama ke foto-foto pendukungnya.
  const grup = galeri.map((foto) => ({
    src: foto.src,
    alt: foto.keterangan,
    caption: foto.keterangan,
  }));

  return (
    <section className="space-y-4">
      {/* Foto Utama Lebar Penuh dengan animasi terpisah */}
      <motion.figure
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full aspect-[16/10] lg:aspect-[21/9] bg-neutral-100 overflow-hidden rounded-xs group"
      >
        <ZoomableImg
          src={utama.src}
          alt={utama.keterangan}
          group={grup}
          index={0}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <figcaption className="absolute bottom-4 left-5 right-5 text-white text-xs sm:text-sm font-medium drop-shadow-md pointer-events-none">
          {utama.keterangan}
        </figcaption>
      </motion.figure>

      {/* Grid Foto Pendukung dengan Animasi Stagger yang memicu saat grid itu sendiri terlihat di viewport */}
      {lainnya.length > 0 && (
        <motion.div
          variants={subPhotoContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {lainnya.map((foto, idx) => (
            <motion.figure
              key={foto.keterangan || idx}
              variants={subPhotoVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="border border-gray-200 bg-white rounded-xs overflow-hidden shadow-2xs hover:shadow-sm hover:border-primary/40 transition-all"
            >
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                <ZoomableImg
                  src={foto.src}
                  alt={foto.keterangan}
                  group={grup}
                  index={idx + 1}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <figcaption className="p-3 text-xs text-gray-500 leading-relaxed border-t border-gray-100">
                {foto.keterangan}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      )}
    </section>
  );
}
