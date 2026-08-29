import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import featuredImg from "../../assets/images/berita/berita-utama.png";

const sideArticles = [
  {
    category: "PUBLIKASI RISET",
    title: "Analisis Kritis Terhadap RUU Kenotariatan: Menuju Kepastian Hukum",
    excerpt:
      "Tinjauan akademis mengenai urgensi revisi undang-undang jabatan notaris untuk menjawab tantangan era digital.",
    date: "10 NOV 2024",
    slug: "analisis-kritis-terhadap-ruu-kenotariatan",
  },
  {
    category: "AGENDA AKADEMIK",
    title: "Simposium Internasional Hukum Perdata dan Kenotariatan 2024",
    excerpt:
      "Mengundang para pakar hukum dari berbagai negara untuk membahas harmonisasi hukum transaksi lintas batas.",
    date: "28 OKT 2024",
    slug: "simposium-internasional-hukum-perdata-2024",
  },
  {
    category: "OPINI PAKAR",
    title: "Etika Profesi Notaris di Tengah Gempuran Teknologi Kecerdasan Buatan",
    excerpt:
      'Bagaimana notaris mempertahankan esensi "pejabat umum" saat AI mulai merambah legal drafting akta.',
    date: "15 OKT 2024",
    slug: "etika-profesi-notaris-di-tengah-gempuran-ai",
  },
];

export default function AcademicFocus() {
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
              to="/berita/peran-notaris-dalam-dinamika-hukum-bisnis-internasional"
              className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] bg-gray-100 overflow-hidden rounded-xs block"
            >
              <img
                src={featuredImg}
                alt="Peran Notaris dalam Dinamika Hukum Bisnis Internasional"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80";
                }}
              />
              <span className="absolute top-4 left-4 bg-black/85 text-white text-xs font-semibold px-3 py-1.5 uppercase tracking-wider rounded-none">
                BERITA UTAMA
              </span>
            </Link>

            {/* Article Content */}
            <div className="pt-6">
              <Link to="/berita/peran-notaris-dalam-dinamika-hukum-bisnis-internasional">
                <h3 className="font-heading font-normal text-2xl sm:text-3xl lg:text-3xl text-heading leading-snug group-hover:text-primary transition-colors">
                  Peran Notaris dalam Dinamika Hukum Bisnis Internasional dan Transaksi Lintas Negara
                </h3>
              </Link>
              <p className="mt-3.5 text-sm sm:text-base text-body leading-relaxed max-w-3xl">
                Diskusi mendalam mengenai kewenangan dan tanggung jawab profesi notaris di Indonesia saat
                dihadapkan pada kontrak-kontrak komersial yang melibatkan pihak asing dan kepatuhan
                terhadap regulasi global.
              </p>
              <div className="mt-4 pt-1">
                <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">
                  FAKULTAS HUKUM &nbsp;|&nbsp; 15 NOV 2024
                </span>
              </div>
            </div>
          </article>

          {/* Side Articles List (Right Side) */}
          <div className="lg:col-span-4 space-y-7 lg:border-l lg:border-gray-200 lg:pl-10">
            {sideArticles.map((article, index) => (
              <article
                key={index}
                className="space-y-2 group pb-7 border-b border-gray-100 last:border-b-0 last:pb-0"
              >
                <span className="text-xs font-bold tracking-wider text-primary uppercase block">
                  {article.category}
                </span>
                <Link to={`/berita/${article.slug}`}>
                  <h4 className="font-heading font-normal text-lg text-heading leading-snug group-hover:text-primary transition-colors cursor-pointer">
                    {article.title}
                  </h4>
                </Link>
                <p className="text-sm text-body leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="text-xs font-medium tracking-wider text-gray-400 uppercase block pt-1">
                  {article.date}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
