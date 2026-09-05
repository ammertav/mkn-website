import { useEffect } from "react";
import { FiX, FiCalendar, FiClock, FiMapPin, FiUser, FiExternalLink, FiShare2 } from "react-icons/fi";
import { formatIndoDate, getIndoDayName } from "../../data/eventData";

export default function EventDetailModal({ event, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (event) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [event]);

  if (!event) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs font-body animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-sm shadow-2xl overflow-y-auto flex flex-col"
      >
        {/* Banner Gambar */}
        {event.image && (
          <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] bg-neutral-900 overflow-hidden shrink-0">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover object-center filter brightness-90 rounded-md hover:scale-105 transition-transform duration-500"
            />
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
            >
              <FiX className="w-4 h-4" />
            </button>
            <div className="absolute bottom-3 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary text-white shadow-xs">
                {event.category}
              </span>
            </div>
          </div>
        )}

        {/* Konten Modal */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Judul Acara */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-heading leading-tight">
              {event.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Diselenggarakan oleh: <span className="font-medium text-heading">{event.organizer}</span>
            </p>
          </div>

          {/* Grid Metadata Waktu & Tempat */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xs border border-gray-200/80 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                <FiCalendar className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block">
                  Hari & Tanggal
                </span>
                <span className="font-semibold text-heading">
                  {getIndoDayName(event.date)}, {formatIndoDate(event.date)}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                <FiClock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block">
                  Waktu Pelaksanaan
                </span>
                <span className="font-semibold text-heading">{event.time}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:col-span-2">
              <div className="w-8 h-8 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                <FiMapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block">
                  Lokasi / Ruangan
                </span>
                <span className="font-semibold text-heading">{event.venue}</span>
              </div>
            </div>

            {event.speaker && (
              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="w-8 h-8 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <FiUser className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block">
                    Narasumber / Pengisi Acara
                  </span>
                  <span className="font-semibold text-heading">{event.speaker}</span>
                </div>
              </div>
            )}
          </div>

          {/* Deskripsi Lengkap Acara */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-wider font-bold text-heading border-b border-gray-200 pb-2">
              Deskripsi Acara
            </h3>
            <p className="text-sm text-body leading-relaxed whitespace-pre-line">
              {event.fullDescription || event.description}
            </p>
          </div>

          {/* Narahubung / Contact Person */}
          {event.cp && (
            <div className="p-3 bg-gray-50 rounded-xs border border-gray-200 text-xs text-body">
              <span className="font-semibold text-heading">Narahubung & Info Registrasi: </span>
              <span>{event.cp}</span>
            </div>
          )}

          {/* Tombol Aksi */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow sm:flex-grow-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-[#680000] text-white text-xs sm:text-sm font-semibold rounded-xs tracking-wider uppercase transition-colors shadow-2xs"
            >
              <span>Daftar / Akses Acara</span>
              <FiExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 border border-gray-300 hover:bg-gray-50 text-heading text-xs sm:text-sm font-medium rounded-xs transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
