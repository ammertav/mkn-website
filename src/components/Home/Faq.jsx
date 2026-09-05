import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import faqImage from "../../assets/images/faq/faq.jpeg";

const faqData = [
  {
    id: 1,
    category: "Pendaftaran",
    question:
      "Bagaimana prosedur pendaftaran mahasiswa baru tahun akademik ini?",
    answer:
      "Calon mahasiswa dapat melakukan pendaftaran secara daring melalui portal admisi kami. Proses meliputi pengisian formulir, unggah dokumen persyaratan, pembayaran biaya seleksi, dan mengikuti ujian masuk yang dijadwalkan.",
    highlight: "Informasi Utama",
  },
  {
    id: 2,
    category: "Beasiswa",
    question: "Apa saja jenis beasiswa yang tersedia untuk mahasiswa hukum?",
    answer:
      "Kami menawarkan Beasiswa Prestasi, Beasiswa Kemitraan, dan bantuan biaya pendidikan bagi mahasiswa berprestasi namun kurang mampu.",
  },
  {
    id: 3,
    category: "Fasilitas",
    question:
      "Apakah kampus menyediakan akses ke database hukum internasional?",
    answer:
      "Ya, perpustakaan kami berlangganan berbagai database legal global yang dapat diakses oleh seluruh mahasiswa aktif.",
  },
  {
    id: 4,
    category: "Kurikulum",
    question: "Bagaimana sistem magang dan praktik kerja lapangan (PKL)?",
    answer:
      "Mahasiswa diwajibkan mengikuti PKL pada semester 6 di kantor hukum, pengadilan, atau instansi pemerintahan yang terafiliasi.",
  },
];

export default function FAQ() {
  const featured = faqData[0];
  const sideFAQs = faqData.slice(1);

  return (
    <section className="w-full bg-white font-body py-16 sm:py-20 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-gray-200 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider text-primary uppercase block mb-1.5">
              BANTUAN & INFORMASI
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[38px] font-heading font-normal text-heading tracking-normal">
              Pertanyaan Umum
            </h2>
          </div>
          <Link
            to="/kontak"
            className="inline-flex items-center space-x-1 text-xs font-bold tracking-wider text-primary hover:text-[#680000] uppercase transition-colors group pb-1"
          >
            <span>HUBUNGI ADMINSASI</span>
            <FiArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-10 items-start">
          {/* Main Featured FAQ (Left Side) */}
          <article className="lg:col-span-8 flex flex-col group">
            {/* Image Card Container with Overlay */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] overflow-hidden rounded-xs flex items-center justify-center p-8 sm:p-16">
              {/* Background Image */}
              <img
                src={faqImage}
                alt="FAQ Background"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-md"
              />

              {/* Dark Overlay for Text Contrast */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

              {/* Text Content */}
              <div className="relative z-10 text-center">
                <span className="text-primary font-heading text-sm uppercase tracking-[0.2em] block mb-4">
                  {featured.highlight}
                </span>
                <h3 className="text-white font-heading text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-2xl drop-shadow-sm">
                  "{featured.question}"
                </h3>
              </div>
            </div>

            {/* Featured Answer */}
            <div className="pt-6">
              <p className="text-lg sm:text-xl text-body leading-relaxed max-w-3xl text-gray-700">
                {featured.answer}
              </p>
              <div className="mt-6 pt-1">
                <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">
                  Kategori: {featured.category} &nbsp;|&nbsp; Terakhir
                  diperbarui: Jan 2024
                </span>
              </div>
            </div>
          </article>

          {/* Side FAQ List (Right Side) */}
          <div className="lg:col-span-4 space-y-7 lg:border-l lg:border-gray-200 lg:pl-10">
            {sideFAQs.map((item) => (
              <article
                key={item.id}
                className="space-y-3 group pb-7 border-b border-gray-100 last:border-b-0 last:pb-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-primary uppercase block">
                    {item.category}
                  </span>
                  <FiPlus className="text-gray-300 group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-heading font-normal text-lg text-heading leading-snug group-hover:text-primary transition-colors cursor-pointer">
                  {item.question}
                </h4>
                <p className="text-sm text-body leading-relaxed line-clamp-2 text-gray-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
