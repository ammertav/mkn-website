import { FiArrowRight } from "react-icons/fi";

export default function EventCard({ event, onSelect, compact = false }) {
  return (
    <article
      onClick={() => onSelect(event)}
      className="group cursor-pointer transition-all"
    >
      <div className="flex flex-col-reverse md:flex-row gap-6 lg:gap-8 items-start justify-between">
        {/* Informasi Teks Event */}
        <div className="flex-grow space-y-1.5 max-w-2xl">
          {/* Judul Acara dengan Panah */}
          <div className="inline-flex items-baseline gap-2">
            <h3 className="font-heading font-medium text-xl sm:text-[22px] lg:text-2xl text-heading group-hover:text-primary transition-colors leading-snug">
              {event.title}
            </h3>
            <span className="text-primary font-light text-lg sm:text-xl group-hover:translate-x-1 transition-transform shrink-0">
              <FiArrowRight className="w-5 h-5 inline" />
            </span>
          </div>

          {/* Baris Waktu Sederhana & Bersih (Persis Screenshot) */}
          <div className="text-xs sm:text-sm text-gray-500 font-normal">
            {event.time}
          </div>

          {/* Deskripsi Acara */}
          {!compact && (
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pt-2 line-clamp-3 font-normal">
              {event.description}
            </p>
          )}
        </div>

        {/* Kolom Kanan: Thumbnail Gambar Bersih */}
        {!compact && event.image && (
          <div className="w-full md:w-48 lg:w-56 aspect-[4/3] shrink-0 bg-gray-50 rounded-xs overflow-hidden border border-gray-200/90 shadow-2xs group-hover:shadow-xs transition-all">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
}
