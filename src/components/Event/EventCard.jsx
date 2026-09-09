import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: typeof i === "number" ? i * 0.08 : 0,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function EventCard({ event, onSelect, compact = false, index = 0 }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
      onClick={() => onSelect(event)}
      className="group cursor-pointer transition-all rounded-xs p-2 -mx-2 hover:bg-gray-50/70"
    >
      <div className="flex flex-col-reverse md:flex-row gap-6 lg:gap-8 items-start justify-between">
        {/* Informasi Teks Event */}
        <div className="flex-grow space-y-1.5 max-w-2xl">
          {/* Judul Acara dengan Panah */}
          <div className="inline-flex items-baseline gap-2">
            <h3 className="font-heading font-medium text-xl sm:text-[22px] lg:text-2xl text-heading group-hover:text-primary transition-colors leading-snug">
              {event.title}
            </h3>
            <span className="text-primary font-light text-lg sm:text-xl group-hover:translate-x-1.5 transition-transform shrink-0">
              <FiArrowRight className="w-5 h-5 inline" />
            </span>
          </div>

          {/* Baris Waktu Sederhana & Bersih */}
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
          <div className="w-full md:w-48 lg:w-56 aspect-[4/3] shrink-0 bg-gray-50 rounded-xs overflow-hidden transition-all shadow-2xs group-hover:shadow-sm">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-md"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </motion.article>
  );
}

