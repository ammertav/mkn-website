import { Helmet } from "react-helmet-async";
import FacilitySectionHeader from "../../components/Fasilitas/FacilitySectionHeader";
import FacilitySpecSection from "../../components/Fasilitas/FacilitySpecSection";
import { researchCenterData } from "../../data/fasilitasData";

export default function ResearchCenter() {
  const { header, servicesSection, scheduleList } = researchCenterData;

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Student Research Center | MKn UNISSULA</title>
        <meta
          name="description"
          content="Student Research Center MKn UNISSULA menyediakan meja riset tetap, klinik metodologi, pendampingan publikasi, dan fasilitas penulisan tesis magister."
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

        {/* Section 2: Services & Photo (Reusable Component, Image on Right) */}
        <FacilitySpecSection
          title={servicesSection.title}
          services={servicesSection.services}
          image={servicesSection.image}
          imagePosition="right"
        />

        {/* Section 3: Schedule & Terms Table */}
        <section className="space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-normal text-heading">
            Jadwal dan Ketentuan Penggunaan
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-t-2 border-b border-heading text-xs font-bold text-heading uppercase tracking-wider">
                  <th className="py-4 px-3 sm:px-4 w-1/4">Layanan</th>
                  <th className="py-4 px-3 sm:px-4 w-1/4">Waktu</th>
                  <th className="py-4 px-3 sm:px-4 w-1/2">Ketentuan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-body">
                {scheduleList.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50/80 transition-colors"
                  >
                    <td className="py-4 px-3 sm:px-4 font-semibold text-heading whitespace-nowrap">
                      {item.layanan}
                    </td>
                    <td className="py-4 px-3 sm:px-4 whitespace-nowrap text-heading">
                      {item.waktu}
                    </td>
                    <td className="py-4 px-3 sm:px-4 text-body">
                      {item.ketentuan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
