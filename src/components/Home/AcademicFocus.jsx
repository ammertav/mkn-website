import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import beritaList from "../../data/berita.json";
import { getBeritaImage } from "../../utils/imageResolver";
import { generateSlug } from "../../utils/slugHelper";
import Img from "../ui/Img";

export default function AcademicFocus() {
  const featured = beritaList[0];
  const sideArticles = beritaList.slice(1, 4);

  return (
    <section className="w-full bg-white font-body py-16 sm:py-20 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-gray-200 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider text-primary uppercase block mb-1.5">
              BERITA & WAWASAN
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[38px] font-heading font-normal text-heading tracking-normal">
              Fokus Akademik
            </h2>
          </div>

          <Link
            to="/berita"
            className="inline-flex items-center space-x-1 text-xs font-bold tracking-wider text-primary hover:text-[#680000] uppercase transition-colors group pb-1"
          >
            <span>LIHAT SEMUA BERITA</span>
            <FiArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-10 items-start">
          {/* Main Featured Article (Left Side) */}
          <article className="lg:col-span-8 flex flex-col group">
            {/* Image Container with Badge */}
            <Link
              to={`/berita/${generateSlug(featured.title, featured.slug)}`}
              className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] bg-gray-100 overflow-hidden block"
            >
              <Img
                src={getBeritaImage(featured.gambar)}
                alt={featured.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-md"
              />
              <span className="absolute top-4 left-4 bg-black/85 text-white text-xs font-semibold px-3 py-1.5 uppercase tracking-wider">
                BERITA UTAMA
              </span>
            </Link>

            {/* Article Content */}
            <div className="pt-6">
              <Link to={`/berita/${generateSlug(featured.title, featured.slug)}`}>
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
            </div>
          </article>

          {/* Side Articles List (Right Side) */}
          <div className="lg:col-span-4 space-y-7 lg:border-l lg:border-gray-200 lg:pl-10">
            {sideArticles.map((article) => (
              <article
                key={article.id}
                className="space-y-2 group pb-7 border-b border-gray-100 last:border-b-0 last:pb-0"
              >
                <span className="text-xs font-bold tracking-wider text-primary uppercase block">
                  {article.tags}
                </span>
                <Link to={`/berita/${generateSlug(article.title, article.slug)}`}>
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
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
