import Img from "../ui/Img";

export default function FasilitasHero() {
  return (
    <section className="relative w-full bg-neutral-900 text-white overflow-hidden">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <Img
          eager
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2000&q=80"
          alt="Gedung Pascasarjana MKn UNISSULA"
          className="w-full h-full object-cover object-center filter brightness-50 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/70" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gray-300">
            Fasilitas
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium text-hero-heading leading-tight tracking-tight">
            Ruang untuk Belajar dan Meneliti
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-hero-description font-normal leading-relaxed pt-2">
            Empat kelompok fasilitas menopang penyelenggaraan pendidikan Magister
            Kenotariatan, dari ruang kelas dan laboratorium akta hingga pusat
            riset mahasiswa dan perpustakaan hukum.
          </p>
        </div>
      </div>
    </section>
  );
}
