import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiMapPin, FiClock, FiCalendar, FiArrowRight, FiSearch } from "react-icons/fi";

const vacancies = [
  {
    id: 1,
    title: "Notaris Junior",
    company: "Kantor Notaris & PPAT Ahmad Fauzan, S.H., M.Kn.",
    location: "Jakarta Selatan",
    type: "Full-time",
    deadline: "Ditutup: 15 Nov 2024",
    description:
      "Dibutuhkan lulusan MKn untuk membantu penyusunan draf akta otentik, pengecekan keabsahan sertipikat tanah, dan koordinasi dengan kantor BPN.",
    link: "#",
  },
  {
    id: 2,
    title: "Legal Consultant (Corporate Real Estate)",
    company: "Baskoro & Partners Law Firm",
    location: "Semarang",
    type: "Full-time",
    deadline: "Ditutup: 20 Nov 2024",
    description:
      "Menangani legal audit / due diligence proyek properti komersial, perizinan pengembang, dan perjanjian kerjasama akuisisi lahan.",
    link: "#",
  },
  {
    id: 3,
    title: "Staf Ahli PPAT",
    company: "Kantor Pertanahan Kota Surakarta",
    location: "Surakarta",
    type: "Contract",
    deadline: "Ditutup: 30 Nov 2024",
    description:
      "Mendukung verifikasi berkas pendaftaran hak tanah, roya, hak tanggungan elektronik, dan penyusunan berita acara pengukuran.",
    link: "#",
  },
  {
    id: 4,
    title: "Senior In-House Legal Officer (Banking)",
    company: "PT Bank Syariah Indonesia Tbk",
    location: "Semarang",
    type: "Full-time",
    deadline: "Ditutup: 05 Des 2024",
    description:
      "Review akad pembiayaan syariah, verifikasi legalitas jaminan agunan kebendaan (Fidusia & HT), serta mitigasi risiko hukum pembiayaan.",
    link: "#",
  },
  {
    id: 5,
    title: "Asisten Notaris Bidang Akta Badan Usaha",
    company: "Kantor Notaris Hendra Kusuma, S.H., M.Kn.",
    location: "Surabaya",
    type: "Full-time",
    deadline: "Ditutup: 12 Des 2024",
    description:
      "Membuat akta pendirian PT/CV/Yayasan, perubahan anggaran dasar, pelaporan sistem AHU Online, dan legalitas OSS.",
    link: "#",
  },
  {
    id: 6,
    title: "Legal Internship (Magang Calon Notaris)",
    company: "Kantor Notaris & PPAT Siti Rahmawati, S.H., M.Kn.",
    location: "Semarang",
    type: "Internship",
    deadline: "Ditutup: 20 Des 2024",
    description:
      "Program magang praktek kemahiran kenotariatan terstruktur bagi mahasiswa semester akhir atau lulusan baru MKn UNISSULA.",
    link: "#",
  },
];

export default function JobVacancies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filteredJobs = vacancies.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || job.type.toLowerCase() === selectedType.toLowerCase();
    return matchesSearch && matchesType;
  });

  return (
    <>
      <Helmet>
        <title>Lowongan Pekerjaan & Magang | MKn UNISSULA</title>
        <meta
          name="description"
          content="Informasi lowongan kerja notaris junior, staf PPAT, in-house legal officer, dan magang calon notaris bagi lulusan MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-heading tracking-tight leading-tight">
            Lowongan Pekerjaan & Magang
          </h1>
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
            Eksplorasi posisi karir eksklusif bagi lulusan Magister Kenotariatan dari jaringan firma hukum,
            kantor notaris terakreditasi, institusi perbankan, dan instansi agraria mitra UNISSULA.
          </p>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          {/* Search Input */}
          <div className="relative flex-grow max-w-md">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari posisi, kantor notaris, atau kota..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 text-xs sm:text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-colors"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center space-x-2 text-xs font-semibold overflow-x-auto pb-1 sm:pb-0">
            {["all", "Full-time", "Contract", "Internship"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3.5 py-2 transition-colors cursor-pointer shrink-0 ${
                  selectedType === type
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-heading hover:bg-gray-200"
                }`}
              >
                {type === "all" ? "Semua Tipe" : type}
              </button>
            ))}
          </div>
        </div>

        {/* Vacancy Items */}
        <div className="divide-y divide-gray-200 pt-2">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="py-7 flex flex-col md:flex-row md:items-start justify-between gap-5 group"
              >
                <div className="space-y-2.5 max-w-2xl">
                  <h3 className="font-heading font-medium text-xl sm:text-2xl text-primary group-hover:text-[#5a0000] transition-colors leading-snug">
                    {job.title}
                  </h3>
                  <p className="text-sm sm:text-[14.5px] font-medium text-heading">
                    {job.company}
                  </p>
                  <p className="text-xs sm:text-sm text-body leading-relaxed">
                    {job.description}
                  </p>

                  {/* Meta Tags */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-[13px] text-gray-500 pt-1">
                    <span className="flex items-center gap-1.5">
                      <FiMapPin className="text-sm shrink-0" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiClock className="text-sm shrink-0" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="text-sm shrink-0" />
                      {job.deadline}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 pt-2 md:pt-0">
                  <a
                    href={job.link}
                    className="inline-flex items-center justify-center space-x-2 bg-primary hover:bg-[#570000] text-white px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    <span>Apply</span>
                    <FiArrowRight className="text-sm" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-gray-500 text-sm">
              Tidak ada lowongan yang sesuai dengan kriteria pencarian Anda.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
