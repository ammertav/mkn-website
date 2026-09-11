import { FaFilePdf } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useT } from "../../i18n/languageContext";
import FacilitySectionHeader from "./FacilitySectionHeader";
import FacilityGallery from "./FacilityGallery";

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
  const t = useT();
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
      <FacilityGallery galeri={galeri} />

      {/* Video profil — sengaja tanpa autoplay dan preload="none" supaya berkas
          besarnya baru diunduh ketika pengunjung menekan putar. */}
      {video && (
        <section className="space-y-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-heading font-normal text-heading">
              {t(video.judul)}
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
            {t({
              id: "Peramban Anda tidak mendukung pemutaran video.",
              en: "Your browser does not support playing videos.",
            })}
          </video>
        </section>
      )}

      <section className="space-y-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-heading font-normal text-heading">
            {t({
              id: "Fasilitas yang Tersedia",
              en: "Available Facilities",
            })}
          </h3>
          <div className="w-full h-[1.5px] bg-heading mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-200 bg-white">
          {fasilitas.map((item, idx) => (
            <div
              key={typeof item === "string" ? item : item.id || idx}
              className="p-5 sm:p-6 border-r border-b border-gray-200 flex gap-4"
            >
              <span className="font-heading font-bold text-primary tabular-nums shrink-0 leading-snug">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-body leading-relaxed">{t(item)}</p>
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
                {t(dokumen.label)}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                {t({ id: "Berkas PDF", en: "PDF Document" })}
              </p>
            </div>
            <FiExternalLink className="text-gray-400 group-hover:text-primary transition-colors shrink-0" />
          </a>
        </section>
      )}
    </div>
  );
}
