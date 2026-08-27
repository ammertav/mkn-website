import { Helmet } from "react-helmet-async";
import { FiCalendar } from "react-icons/fi";
import { academicCalendar } from "../../data/academicsData";

export default function Kalender() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Kalender Akademik | MKn UNISSULA</title>
        <meta
          name="description"
          content="Jadwal penting kegiatan perkuliahan, registrasi, ujian semester, serta periode pendaftaran sidang tesis dan wisuda MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-[28px] font-heading font-normal text-heading tracking-normal">
            Kalender Akademik Tahun Ajaran 2024/2025
          </h1>
          <p className="mt-4 text-[14px] md:text-[15px] text-body leading-relaxed max-w-3xl">
            Jadwal penting kegiatan perkuliahan, her-registrasi, ujian semester, serta periode pendaftaran
            sidang tesis dan wisuda MKn UNISSULA.
          </p>
        </div>

        <div className="space-y-6 pt-3 max-w-3xl">
          {academicCalendar.map((cal, idx) => (
            <div key={idx} className="border border-gray-200 rounded-sm bg-white overflow-hidden shadow-2xs">
              <div className="bg-gray-50/80 px-6 py-3.5 border-b border-gray-200 flex items-center space-x-2">
                <FiCalendar className="text-primary" />
                <h3 className="font-heading font-semibold text-sm sm:text-base text-heading">{cal.period}</h3>
              </div>
              <div className="divide-y divide-gray-100 px-6 py-2">
                {cal.events.map((ev, eIdx) => (
                  <div key={eIdx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1 sm:gap-4">
                    <span className="font-medium text-heading">{ev.name}</span>
                    <span className="text-primary font-semibold text-xs sm:text-[13px] shrink-0">{ev.date}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
