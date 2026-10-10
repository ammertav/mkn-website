/**
 * Kerangka pemuatan untuk section Beranda yang datanya diambil dari Strapi
 * (Berita Terbaru, Pengumuman). Tata letaknya meniru grid aslinya: satu
 * artikel utama di kiri dan tiga artikel kecil di kanan, supaya halaman
 * tidak melompat saat data selesai dimuat.
 */
export default function HomeSectionSkeleton({ title, className = "bg-white" }) {
  return (
    <section
      className={`w-full ${className} font-body py-16 sm:py-20 border-b border-gray-200 overflow-hidden`}
      aria-busy="true"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-6 border-b border-gray-200">
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-heading font-normal text-heading tracking-normal">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-10 animate-pulse">
          <div className="lg:col-span-7 space-y-4">
            <div className="w-full aspect-[16/9] bg-gray-200 rounded-xs" />
            <div className="w-32 h-4 bg-gray-200 rounded" />
            <div className="w-3/4 h-7 bg-gray-200 rounded" />
            <div className="w-full h-4 bg-gray-200 rounded" />
            <div className="w-5/6 h-4 bg-gray-200 rounded" />
          </div>

          <div className="lg:col-span-5 space-y-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-28 h-20 bg-gray-200 rounded-xs shrink-0" />
                <div className="flex-1 space-y-3">
                  <div className="w-24 h-3 bg-gray-200 rounded" />
                  <div className="w-full h-4 bg-gray-200 rounded" />
                  <div className="w-2/3 h-4 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
