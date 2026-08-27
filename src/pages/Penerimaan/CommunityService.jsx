import { Helmet } from "react-helmet-async";
import { FiMapPin, FiCalendar, FiUser } from "react-icons/fi";
import { communityServices } from "../../data/penerimaanData";

export default function CommunityService() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Pengabdian Kepada Masyarakat | MKn UNISSULA</title>
        <meta
          name="description"
          content="Program pengabdian kepada masyarakat, konsultasi hukum pertanahan pro bono, penyuluhan PTSL, dan edukasi hukum UMKM oleh dosen MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Pengabdian Kepada Masyarakat
          </h1>
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
            Wujud nyata Tridharma Perguruan Tinggi melalui penyuluhan hukum, konsultasi akta dan pertanahan pro bono,
            serta pendampingan hukum kenotariatan bagi masyarakat luas dan pelaku UMKM.
          </p>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        {/* Community Service Cards */}
        <div className="space-y-5 pt-2">
          {communityServices.map((item) => (
            <div
              key={item.id}
              className="p-6 border border-gray-200 bg-white rounded-xs space-y-3.5 shadow-2xs hover:border-primary/40 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="flex items-center gap-1 text-primary font-semibold">
                  <FiMapPin className="text-sm" />
                  {item.location}
                </span>
                <span className="text-gray-400 font-medium flex items-center gap-1">
                  <FiCalendar className="text-xs" />
                  {item.year}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-lg sm:text-xl text-heading leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-body leading-relaxed">
                {item.desc}
              </p>

              <div className="border-t border-gray-100 pt-3 flex items-center gap-2 text-xs text-gray-500">
                <FiUser className="text-primary text-sm shrink-0" />
                <span>Pelaksana: <strong className="text-heading">{item.lead}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
