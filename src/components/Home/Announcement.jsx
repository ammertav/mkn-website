import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import beritaList from "../../data/berita.json";
import { getBeritaImage } from "../../utils/imageResolver";
import { generateSlug } from "../../utils/slugHelper";
import Img from "../ui/Img";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

export default function Announcement() {
  const featured = beritaList[0];
  const sideArticles = beritaList.slice(1, 4);

  return (
    <section className="w-full bg-hero-headingy font-body py-16 sm:py-20 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

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
          className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-gray-200 gap-4"
        >
          <div>
            {/* <span className="text-xs font-semibold tracking-wider text-primary uppercase block mb-1.5">
              BERITA & WAWASAN
            </span> */}

            <h2 className="text-3xl sm:text-4xl md:text-[38px] font-heading font-normal text-heading tracking-normal">
              Pengumuman Terbaru
            </h2>
          </div>

          <Link
            to="/berita"
            className="inline-flex items-center space-x-1 text-xs font-bold tracking-wider text-primary hover:text-[#680000] uppercase transition-colors group pb-1"
          >
            <span>LIHAT SEMUA PENGUMUMAN</span>

            <FiArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-10 items-start">

          {/* Main Featured Article */}
          <motion.article
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
            }}
            viewport={viewportSettings}
            className="lg:col-span-8 flex flex-col group"
          >

            {/* Article Content */}
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
                delay: 0.25,
              }}
              viewport={viewportSettings}
              className="pt-6"
            >
              <Link
                to={`/berita/${generateSlug(featured.title, featured.slug)}`}
              >
                <h3 className="font-heading font-normal text-2xl sm:text-3xl lg:text-3xl text-heading leading-snug group-hover:text-primary transition-colors">
                  {featured.title}
                </h3>
              </Link>

              <p className="mt-3.5 text-sm sm:text-base text-body leading-relaxed max-w-3xl line-clamp-3">
                {featured.content}
              </p>

              <div className="mt-4 pt-1">
                <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">
                  {featured.author} &nbsp;|&nbsp; {featured.tanggal}
                </span>
              </div>
            </motion.div>
          </motion.article>

          {/* Side Articles */}
          {/* <div className="lg:col-span-4 space-y-7 lg:border-l lg:border-gray-200 lg:pl-10">
            {sideArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.12,
                }}
                viewport={viewportSettings}
                className="space-y-2 group pb-7 border-b border-gray-100 last:border-b-0 last:pb-0"
              >
                <span className="text-xs font-bold tracking-wider text-primary uppercase block">
                  {article.tags}
                </span>

                <Link
                  to={`/berita/${generateSlug(article.title, article.slug)}`}
                >
                  <h4 className="font-heading font-normal text-lg text-heading leading-snug group-hover:text-primary transition-colors cursor-pointer">
                    {article.title}
                  </h4>
                </Link>

                <p className="text-sm text-body leading-relaxed line-clamp-2">
                  {article.content}
                </p>

                <span className="text-xs font-medium tracking-wider text-gray-400 uppercase block pt-1">
                  {article.tanggal}
                </span>
              </motion.article>
            ))}
          </div> */}

        </div>
      </div>
    </section>
  );
}