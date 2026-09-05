import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Img from "../ui/Img";
import { eventData } from "../../data/eventData";


const viewportSettings = {
  once: true,
  amount: 0.2,
};

/* Tiga agenda terdekat; selebihnya ada di halaman /event. */
const eventsData = eventData.slice(0, 3);

export default function Events() {
  const formatDateBadge = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = dateObj.toLocaleDateString("id-ID", {
      month: "short",
    });

    return `${day} ${month}`;
  };


  return (
    <section className="w-full bg-white font-body py-16 sm:py-24 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={viewportSettings}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-normal text-heading tracking-normal">
            Agenda & Kegiatan Mendatang
          </h2>
        </motion.div>

        {/* Grid 3-Kolom Acara */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-stretch">
          {eventsData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={viewportSettings}
              className="h-full"
            >
              <Link
                to={`/event/${item.slug}`}
                className="flex flex-col justify-between h-full bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
              >
                {/* Visual Header / Gambar Acara */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <motion.div
                    initial={{
                      filter: "grayscale(100%)",
                      scale: 1.02,
                    }}
                    whileInView={{
                      filter: "grayscale(0%)",
                      scale: 1,
                    }}
                    transition={{
                      duration: 1.3,
                      ease: "easeOut",
                      delay: 0.15 + index * 0.15,
                    }}
                    viewport={viewportSettings}
                    className="w-full h-full"
                  >
                    <Img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </motion.div>

                </div>

                {/* Card Content */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: 0.25 + index * 0.15,
                  }}
                  viewport={viewportSettings}
                  className="p-6 space-y-4"
                >
                  {/* Date */}
                  <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                    {formatDateBadge(item.date)}
                  </span>

                  {/* Judul Acara */}
                  <h3 className="font-heading font-bold text-base lg:text-lg text-heading leading-snug group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Ringkasan Deskripsi */}
                  <p className="text-xs sm:text-sm text-body line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Tautan ke halaman agenda lengkap */}
        <div className="mt-12 sm:mt-16 flex justify-start">
          <Link
            to="/event"
            className="inline-flex  gap-2 text-xs font-bold tracking-wider text-primary hover:text-[#680000] uppercase transition-colors group/all"
          >
            <span>LIHAT SEMUA AGENDA</span>
            <FiArrowRight className="text-sm transition-transform duration-200 group-hover/all:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}