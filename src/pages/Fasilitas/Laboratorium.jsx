import { Helmet } from "react-helmet-async";
import FacilitySectionHeader from "../../components/Fasilitas/FacilitySectionHeader";
import FacilitySpecSection from "../../components/Fasilitas/FacilitySpecSection";
import { laboratoriumData } from "../../data/fasilitasData";

export default function Laboratorium() {
  const { header, standard, labList, gallery } = laboratoriumData;

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Laboratorium Kenotariatan & Peradilan Semu | MKn UNISSULA</title>
        <meta
          name="description"
          content="Laboratorium Kenotariatan, Ruang Peradilan Semu, dan Laboratorium Komputer Hukum Program Studi Magister Kenotariatan UNISSULA."
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

        {/* Section 2: Standard & Specification with Photo (Reusable Component, Image on Left) */}
        <FacilitySpecSection
          title={standard.title}
          description={standard.description}
          specs={standard.specs}
          image={standard.image}
          imagePosition="left"
        />

        {/* Section 3: Lab Directory Table & Photo Cards */}
        <section className="space-y-8 sm:space-y-10">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-normal text-heading">
            Tiga Laboratorium
          </h3>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-t-2 border-b border-heading text-xs font-bold text-heading uppercase tracking-wider">
                  <th className="py-4 px-3 sm:px-4 w-1/4">Laboratorium</th>
                  <th className="py-4 px-3 sm:px-4 w-1/12 text-center sm:text-left">Kapasitas</th>
                  <th className="py-4 px-3 sm:px-4 w-2/3">Penggunaan Utama</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-body">
                {labList.map((lab, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50/80 transition-colors"
                  >
                    <td className="py-4 px-3 sm:px-4 font-semibold text-heading whitespace-nowrap">
                      {lab.nama}
                    </td>
                    <td className="py-4 px-3 sm:px-4 whitespace-nowrap text-center sm:text-left">
                      {lab.kapasitas}
                    </td>
                    <td className="py-4 px-3 sm:px-4 text-heading">
                      {lab.penggunaan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3 Grid Photo / Activity Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] bg-neutral-100 overflow-hidden flex items-center justify-center p-6 text-center shadow-xs transition-all duration-300 hover:shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.7] contrast-105 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <span className="relative z-10 text-white font-medium text-sm sm:text-base drop-shadow-md">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
