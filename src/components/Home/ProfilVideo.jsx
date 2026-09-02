export default function ProfilVideo() {
  return (
    <section className="w-full bg-white font-body py-16 sm:py-20 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Label */}
          <h2 className="font-heading font-normal text-3xl sm:text-4xl md:text-[34px] text-heading text-center leading-snug tracking-normal mb-8 sm:mb-10">
            Profil Program Studi Magister Kenotariatan Fakultas Hukum UNISSULA
          </h2>

          <video
            src="/videos/profile-mkn-terbaru.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full aspect-video bg-neutral-900 rounded-xl border border-gray-200 shadow-2xs overflow-hidden"
          >
            Browser Anda tidak mendukung pemutaran video.
          </video>
        </div>
      </div>
    </section>
  );
}
