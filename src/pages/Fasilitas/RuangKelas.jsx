import { Helmet } from "react-helmet-async";
import FacilityPlaceholder from "../../components/Fasilitas/FacilityPlaceholder";
import FacilitySectionHeader from "../../components/Fasilitas/FacilitySectionHeader";
import FacilitySpecSection from "../../components/Fasilitas/FacilitySpecSection";
import { ruangKelasData } from "../../data/fasilitasData";

/**
 * Susunan halaman di bawah sudah jadi, tetapi datanya masih data sementara,
 * jadi untuk saat ini yang tayang adalah placeholder. Isinya sengaja ditahan,
 * bukan dibuang — ubah konstanta ini menjadi true begitu data asli masuk.
 */
const KONTEN_SIAP = false;

export default function RuangKelas() {
  const { header, standard, ruangList } = ruangKelasData;

  if (!KONTEN_SIAP) {
    return (
      <>
        <Helmet>
          <title>Ruang Kelas | MKn UNISSULA</title>
          <meta name="description" content="Informasi ruang kelas Program Studi Magister Kenotariatan UNISSULA." />
        </Helmet>

        <FacilityPlaceholder
          category="RUANG KELAS"
          title="Ruang Kelas"
          description="Halaman ini akan memuat keterangan ruang kelas Program Studi Magister Kenotariatan UNISSULA, mulai dari kapasitas dan tata letak hingga perangkat pendukung perkuliahan di tiap ruang."
        />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Ruang Kelas & Hybrid Learning | MKn UNISSULA</title>
        <meta
          name="description"
          content="Fasilitas ruang kuliah Magister Kenotariatan UNISSULA dengan tata letak tapal kuda, proyektor resolusi tinggi, audio visual modern, dan e-learning terpadu."
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

        {/* Section 2: Standard & Specification with Photo (Reusable Component) */}
        <FacilitySpecSection
          title={standard.title}
          description={standard.description}
          specs={standard.specs}
          image={standard.image}
          imagePosition="right"
        />

        {/* Section 3: Room Directory Table */}
        <section className="space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-normal text-heading">
            Daftar Ruang dan Peruntukan
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-t-2 border-b border-heading text-xs font-bold text-heading uppercase tracking-wider">
                  <th className="py-4 px-3 sm:px-4 w-1/5">Ruang</th>
                  <th className="py-4 px-3 sm:px-4 w-1/12 text-center sm:text-left">Kapasitas</th>
                  <th className="py-4 px-3 sm:px-4 w-2/5">Peruntukan</th>
                  <th className="py-4 px-3 sm:px-4 w-1/3">Perangkat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-body">
                {ruangList.map((ruang, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50/80 transition-colors"
                  >
                    <td className="py-4 px-3 sm:px-4 font-semibold text-heading whitespace-nowrap">
                      {ruang.code}
                    </td>
                    <td className="py-4 px-3 sm:px-4 whitespace-nowrap text-center sm:text-left">
                      {ruang.kapasitas}
                    </td>
                    <td className="py-4 px-3 sm:px-4 text-heading">
                      {ruang.peruntukan}
                    </td>
                    <td className="py-4 px-3 sm:px-4 text-body">
                      {ruang.perangkat}
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
