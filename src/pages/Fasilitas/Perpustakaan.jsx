import { Helmet } from "react-helmet-async";
import FacilitySectionHeader from "../../components/Fasilitas/FacilitySectionHeader";
import { perpustakaanData } from "../../data/fasilitasData";

export default function Perpustakaan() {
  const { header, bannerImage, stats, servicesList } = perpustakaanData;

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Perpustakaan Hukum & Digital Library | MKn UNISSULA</title>
        <meta
          name="description"
          content="Perpustakaan Pascasarjana Magister Kenotariatan UNISSULA menyediakan koleksi buku hukum, arsip tesis, basis data hukum internasional, dan layanan bimbingan penelusuran."
        />
      </Helmet>

      <div className="space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Section 1: Intro Heading (Reusable Component) */}
        <section>
          <FacilitySectionHeader
            number={header.number}
            category={header.category}
            title={header.title}
            paragraphs={header.paragraphs}
          />
        </section>

        {/* Section 2: Full-Width Photo Banner */}
        <section>
          <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] max-h-[440px] bg-neutral-100 overflow-hidden shadow-sm group">
            <img
              src={bannerImage.src}
              alt={bannerImage.alt}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium drop-shadow-md">
              {bannerImage.caption}
            </div>
          </div>
        </section>

        {/* Section 3: Statistics Cards & Services Table */}
        <section className="space-y-12 sm:space-y-16">
          {/* 4 Stats Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 bg-white">
            {stats.map((item, idx) => (
              <div key={idx} className="p-6 sm:p-8 space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-heading text-primary font-normal">
                  {item.value}
                </div>
                <div className="text-xs font-semibold tracking-wider text-body uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Table Section */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-normal text-heading">
              Layanan dan Ketentuan
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-t-2 border-b border-heading text-xs font-bold text-heading uppercase tracking-wider">
                    <th className="py-4 px-3 sm:px-4 w-1/4">Layanan</th>
                    <th className="py-4 px-3 sm:px-4 w-1/4">Ketentuan</th>
                    <th className="py-4 px-3 sm:px-4 w-1/2">Keterangan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-body">
                  {servicesList.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50/80 transition-colors"
                    >
                      <td className="py-4 px-3 sm:px-4 font-semibold text-heading whitespace-nowrap">
                        {item.layanan}
                      </td>
                      <td className="py-4 px-3 sm:px-4 whitespace-nowrap text-heading">
                        {item.ketentuan}
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-body">
                        {item.keterangan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
