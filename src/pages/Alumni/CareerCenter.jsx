import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";

const initialJobs = [
  {
    id: 1,
    title: "Notary Associate (Corporate & Real Estate)",
    company: "Kantor Notaris & PPAT Dr. Bambang Tri Bawono, S.H., M.H.",
    location: "Semarang, Jawa Tengah",
    type: "Full-Time",
    posted: "2 hari yang lalu",
    desc: "Menangani pembuatan akta pendirian perseroan, perjanjian pembebanan hak tanggungan, dan konsultasi legalitas pertanahan.",
    link: "#",
  },
  {
    id: 2,
    title: "Senior Legal Counsel (Banking & Finance)",
    company: "PT Bank Syariah Mandiri Utama",
    location: "Jakarta Pusat",
    type: "Full-Time",
    posted: "4 hari yang lalu",
    desc: "Penyusunan akad pembiayaan sindikasi, legal drafting jaminan fidusia & hak tanggungan elektronik, serta mitigasi risiko kepatuhan.",
    link: "#",
  },
  {
    id: 3,
    title: "Staff Ahli PPAT & Agraria",
    company: "Kantor Pertanahan (ATR/BPN) Wilayah Jawa Tengah",
    location: "Semarang",
    type: "Contract",
    posted: "1 minggu yang lalu",
    desc: "Pemeriksaan validitas warkah pendaftaran tanah, konversi hak, dan penyelesaian sengketa administrasi pertanahan.",
    link: "#",
  },
  {
    id: 4,
    title: "Junior Notary Officer",
    company: "Kantor Notaris & PPAT Hj. Siti Aminah, S.H., M.Kn.",
    location: "Surabaya, Jawa Timur",
    type: "Full-Time",
    posted: "1 minggu yang lalu",
    desc: "Draf minuta akta partij, legalisasi, waarmerking dokumen, serta pelaporan bulanan ke Majelis Pengawas Daerah (MPD).",
    link: "#",
  },
];

/**
 * Saklar tampilnya isi halaman.
 *
 * Daftar lowongan di bawah masih data contoh, jadi halaman ini untuk sementara
 * menampilkan empty state seperti halaman Tracer Study. Susunan aslinya sengaja
 * dibiarkan utuh: ubah nilainya menjadi `true` untuk menayangkannya kembali.
 */
const KONTEN_SIAP = false;

export default function CareerCenter() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    if (visibleCount >= initialJobs.length) {
      setVisibleCount(3);
    } else {
      setVisibleCount(initialJobs.length);
    }
  };

  if (!KONTEN_SIAP) {
    return (
      <>
        <Helmet>
          <title>Pusat Karir &amp; Bursa Kerja | MKn UNISSULA</title>
          <meta name="description" content="Menghubungkan lulusan Magister Kenotariatan UNISSULA dengan jejaring kantor Notaris/PPAT, firma hukum, perbankan, dan institusi pemerintahan terkemuka di Indonesia." />
        </Helmet>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-wider uppercase text-primary">
              Alumni &amp; Career
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
              Pusat Karir &amp; Jejaring Alumni
            </h1>
          </div>

          <hr className="border-t border-gray-800 my-4" />

          <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
            Menghubungkan lulusan Magister Kenotariatan UNISSULA dengan jejaring kantor Notaris/PPAT, firma hukum, perbankan, dan institusi pemerintahan terkemuka di Indonesia.
          </p>

          <div className="p-12 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm bg-white">
            <p className="text-sm font-medium">
              Informasi pusat karir dan jejaring alumni akan segera diperbarui di sini.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Pusat Karir & Bursa Kerja | MKn UNISSULA</title>
        <meta
          name="description"
          content="Layanan pusat karir, lowongan magang, dan peluang kerja profesional bidang notariat dan hukum bagi alumni MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-heading tracking-tight leading-tight">
            Pusat Karir & Jejaring Alumni
          </h1>
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
            Menghubungkan lulusan Magister Kenotariatan UNISSULA dengan jejaring kantor Notaris/PPAT,
            firma hukum, perbankan, dan institusi pemerintahan terkemuka di Indonesia.
          </p>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        {/* Featured Listings */}
        <div className="space-y-4 pt-2">
          {initialJobs.slice(0, visibleCount).map((job) => (
            <div
              key={job.id}
              className="p-6 border border-gray-200 bg-white rounded-xs space-y-4 shadow-2xs hover:border-primary/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-heading leading-snug">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-primary">{job.company}</p>
                </div>
                <span className="self-start px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider bg-gray-100 text-gray-600 rounded-xs">
                  {job.type}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-body leading-relaxed">{job.desc}</p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gray-100 text-xs text-gray-500">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <FiMapPin className="text-primary" />
                    <span>{job.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FiClock className="text-primary" />
                    <span>{job.posted}</span>
                  </span>
                </div>
                <a
                  href={job.link}
                  className="inline-flex items-center space-x-1 text-primary hover:text-[#570000] font-semibold"
                >
                  <span>Lihat Detail</span>
                  <FiArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="pt-8 text-center">
          <button
            onClick={handleLoadMore}
            className="inline-block border border-primary text-primary hover:bg-primary hover:text-white px-8 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer"
          >
            {visibleCount >= initialJobs.length ? "TAMPILKAN LEBIH SEDIKIT" : "MUAT LEBIH BANYAK"}
          </button>
        </div>
      </div>
    </>
  );
}
