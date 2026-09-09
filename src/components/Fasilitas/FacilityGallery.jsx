import ZoomableImg from "../ui/ZoomableImg";

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
      <figure className="relative w-full aspect-[16/10] lg:aspect-[21/9] bg-neutral-100 overflow-hidden rounded-xs group">
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
      </figure>

      {lainnya.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {lainnya.map((foto, idx) => (
            <figure
              key={foto.keterangan}
              className="border border-gray-200 bg-white rounded-xs overflow-hidden"
            >
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                <ZoomableImg
                  src={foto.src}
                  alt={foto.keterangan}
                  group={grup}
                  index={idx + 1}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <figcaption className="p-3 text-xs text-gray-500 leading-relaxed border-t border-gray-100">
                {foto.keterangan}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
