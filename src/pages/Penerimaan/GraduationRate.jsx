import { Helmet } from "react-helmet-async";
import { FiTrendingUp, FiAward, FiBookOpen, FiClock } from "react-icons/fi";
import { graduationStats, graduationHistory } from "../../data/penerimaanData";

const statIconComponents = [FiClock, FiAward, FiBookOpen, FiTrendingUp];

export default function GraduationRate() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Tingkat Kelulusan & Prestasi | MKn UNISSULA</title>
        <meta
          name="description"
          content="Statistik tingkat kelulusan tepat waktu, rata-rata IPK, rekapitulasi wisudawan, dan kelulusan ujian profesi notaris lulusan MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Tingkat Kelulusan & Prestasi Akademik
          </h1>
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
            Program Studi Magister Kenotariatan (MKn) UNISSULA memiliki komitmen tinggi dalam menjamin ketepatan waktu kelulusan,
            kualitas publikasi tesis mahasiswa, serta angka keberhasilan kelulusan ujian profesi kenotariatan secara nasional.
          </p>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {graduationStats.map((stat, idx) => {
            const IconComponent = statIconComponents[idx % statIconComponents.length];
            return (
              <div
                key={stat.label}
                className="p-6 border border-gray-200 bg-white rounded-xs space-y-3 shadow-2xs hover:border-primary/40 transition-colors"
              >
                <div className="p-2.5 w-fit bg-primary/5 rounded-full">
                  <IconComponent className="text-2xl text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-primary">
                  {stat.value}
                </div>
                <h3 className="font-semibold text-base text-heading">{stat.label}</h3>
                <p className="text-xs sm:text-sm text-body leading-relaxed">{stat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Graduation Table */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-heading">
            Rekapitulasi Kelulusan 3 Tahun Terakhir
          </h2>

          <div className="border border-gray-200 rounded-xs overflow-hidden bg-white shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/80 text-heading font-semibold">
                    <th className="py-3.5 px-5">Tahun Akademik</th>
                    <th className="py-3.5 px-5 text-center">Total Wisudawan</th>
                    <th className="py-3.5 px-5 text-center">Predikat Cumlaude</th>
                    <th className="py-3.5 px-5 text-right">Rata-rata Masa Studi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {graduationHistory.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 text-body">
                      <td className="py-3.5 px-5 font-medium text-heading">{item.period}</td>
                      <td className="py-3.5 px-5 text-center font-semibold text-primary">{item.totalGraduates} Lulusan</td>
                      <td className="py-3.5 px-5 text-center text-gray-600">{item.cumlaudeCount} Mahasiswa</td>
                      <td className="py-3.5 px-5 text-right font-medium text-heading">{item.avgStudyTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
