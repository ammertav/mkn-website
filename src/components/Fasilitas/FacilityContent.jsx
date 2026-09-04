import { FaFilePdf } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import FacilitySectionHeader from "./FacilitySectionHeader";
import Img from "../ui/Img";

/**
 * Isi halaman satu fasilitas: pengantar, galeri foto, video profil, daftar
 * fasilitas, lalu dokumen pendukung.
 *
 * Keenam halaman fasilitas berbagi susunan yang sama persis, jadi bentuknya
 * ditaruh di satu tempat — memperbaiki tata letaknya cukup sekali, tidak enam
 * kali. Setiap blok hanya dirender bila datanya memang ada, sehingga fasilitas
 * yang belum menyerahkan foto atau video tidak menampilkan bingkai kosong.
 */
export default function FacilityContent({ data }) {
  const { header, fasilitas, galeri, video, dokumen } = data;

  return (
    <div className="space-y-14 sm:space-y-16">
      <section>
        <FacilitySectionHeader
          category={header.category}
          title={header.title}
          paragraphs={header.paragraphs}
        />
      </section>

      {/* Galeri — foto pertama dibuat lebar penuh sebagai gambar utama */}
      {galeri?.length > 0 && (
        <section className="space-y-4">
          <figure className="relative w-full aspect-[16/10] lg:aspect-[21/9] bg-neutral-100 overflow-hidden rounded-xs group">
            <Img
              src={galeri[0].src}
              alt={galeri[0].keterangan}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <figcaption className="absolute bottom-4 left-5 right-5 text-white text-xs sm:text-sm font-medium drop-shadow-md">
              {galeri[0].keterangan}
            </figcaption>
          </figure>

          {galeri.length > 1 && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {galeri.slice(1).map((foto) => (
                <figure
                  key={foto.keterangan}
                  className="border border-gray-200 bg-white rounded-xs overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                    <Img
                      src={foto.src}
                      alt={foto.keterangan}
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
      )}

      {/* Video profil — sengaja tanpa autoplay dan preload="none" supaya berkas
          besarnya baru diunduh ketika pengunjung menekan putar. */}
      {video && (
        <section className="space-y-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-heading font-normal text-heading">
              {video.judul}
            </h3>
            <div className="w-full h-[1.5px] bg-heading mt-3" />
          </div>

          <video
            controls
            preload="none"
            playsInline
            className="w-full aspect-video bg-neutral-900 rounded-xs"
          >
            <source src={video.src} type="video/mp4" />
            Peramban Anda tidak mendukung pemutaran video.
          </video>
        </section>
      )}

      <section className="space-y-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-heading font-normal text-heading">
            Fasilitas yang Tersedia
          </h3>
          <div className="w-full h-[1.5px] bg-heading mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-200 bg-white">
          {fasilitas.map((item, idx) => (
            <div
              key={item}
              className="p-5 sm:p-6 border-r border-b border-gray-200 flex gap-4"
            >
              <span className="font-heading font-bold text-primary tabular-nums shrink-0 leading-snug">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-body leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dokumen pendukung, mis. daftar perlengkapan laboratorium */}
      {dokumen && (
        <section>
          <a
            href={dokumen.fileUrl}
            download={dokumen.fileName}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 sm:p-6 bg-white border border-gray-200 rounded-xs shadow-2xs hover:border-primary/50 transition-colors group"
          >
            <div className="p-2.5 bg-red-50 text-primary rounded shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <FaFilePdf className="text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-semibold text-base text-heading group-hover:text-primary transition-colors leading-snug">
                {dokumen.label}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">Berkas PDF</p>
            </div>
            <FiExternalLink className="text-gray-400 group-hover:text-primary transition-colors shrink-0" />
          </a>
        </section>
      )}
    </div>
  );
}
