import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Img from "../ui/Img";
import bgKampus from "../../assets/images/gedung.jpg";

export default function Ready() {
  return (
    <section className="w-full bg-white font-body py-16 sm:py-20 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative w-full bg-neutral-900 overflow-hidden rounded-xs py-16 sm:py-24 px-6 sm:px-12 text-center flex flex-col items-center justify-center "
        >
          {/* Latar foto kampus. Seluruh teks di blok ini berwarna terang, jadi
              foto ditutup lapisan gelap agar kontrasnya tetap terbaca — tanpa
              itu judul putih menghilang di area foto yang cerah. */}
          <Img
            src={bgKampus}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-md "
          />
          <div className="absolute inset-0 bg-neutral-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

          {/* Background Subtle Decoration (Persis seperti pada komponen FAQ) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* Label Kategori / Eyebrow */}
            <span
              className="text-xs font-semibold tracking-[0.2em] text-white/75 uppercase block"
            >
              PENDAFTARAN & ADMISI
            </span>

            {/* Judul Utama */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal text-white leading-tight"
            >
              Siap Memulai Langkah Menjadi Notaris & PPAT?
            </h2>

            {/* Deskripsi */}
            <p
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
            >
              Bergabunglah dengan Program Studi Magister Kenotariatan dan kembangkan keahlian hukum profesional Anda bersama para ahli dan praktisi unggul.
            </p>

            {/* Tombol Aksi */}
            <div
              className="pt-4"
            >
              <Link
                to="/pendaftaran"
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-primary hover:bg-[#680000] text-white text-xs font-bold tracking-wider uppercase transition-colors rounded-xs group shadow-md"
              >
                <span>DAFTAR SEKARANG</span>
                <FiArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}