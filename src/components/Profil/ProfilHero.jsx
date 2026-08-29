export default function ProfilHero() {
  return (
    <section className="w-full bg-white font-body">
      {/* Full-width Banner Image / Placeholder */}
      <div className="w-full h-[280px] sm:h-[360px] lg:h-[420px] bg-[#E8E6E1] relative overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2000&q=80"
          alt="Gedung Fakultas Hukum & Pascasarjana UNISSULA"
          className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-95"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* Overlay Text Description */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/15 pointer-events-none">
          <p className="text-xs sm:text-sm text-gray-700 bg-white/80 px-4 py-2 rounded-xs shadow-xs backdrop-blur-xs text-center max-w-md">
            Foto gedung Fakultas Hukum atau Pascasarjana UNISSULA (lebar penuh)
          </p>
        </div>
      </div>

      {/* Header Title Section below Hero */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8">
        <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary block mb-2">
          PROFIL PROGRAM STUDI
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-medium text-heading tracking-tight">
          Tentang Kami
        </h1>
        <div className="w-full max-w-sm h-[2.5px] bg-primary mt-4 mb-4" />
        <p className="text-base sm:text-lg text-body leading-relaxed max-w-3xl">
          Program Studi Magister Kenotariatan UNISSULA berdiri untuk memenuhi kebutuhan notaris yang
          menguasai hukum keperdataan sekaligus memegang etika jabatan.
        </p>
      </div>
    </section>
  );
}
