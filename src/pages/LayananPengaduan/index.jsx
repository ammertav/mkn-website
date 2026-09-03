import { Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";

const staffContacts = [
  {
    name: "Dr. Muhammad Dias Saktiawan, S.H., M.Kn.",
    role: "Koordinator Staf",
    phone: "6281391807762",
    message: "Halo Pak Dr. Muhammad Dias Saktiawan, saya mahasiswa/pemohon ingin berkonsultasi mengenai pengaduan & layanan MKn UNISSULA.",
  },
  {
    name: "Heri Oktavianto, S.H., M.Kn.",
    role: "Administrasi Akademik & Kerjasama",
    phone: "6281391807762",
    message: "Halo Pak Heri Oktavianto, saya ingin berkonsultasi mengenai administrasi akademik dan kerjasama MKn UNISSULA.",
  },
  {
    name: "Achmad Arifin, S.E., M.H.",
    role: "Sistem Informasi Digital & Data Alumni",
    phone: "6281391807762",
    message: "Halo Pak Achmad Arifin, saya ingin berkonsultasi mengenai sistem informasi digital / data alumni MKn UNISSULA.",
  },
  {
    name: "Noor Lailatul Izza, S.H., M.Kn.",
    role: "Perkuliahan & Data Akademik Mahasiswa",
    phone: "6281391807762",
    message: "Halo Ibu Noor Lailatul Izza, saya ingin berkonsultasi mengenai perkuliahan dan data akademik mahasiswa MKn UNISSULA.",
  },
];

const generalContact = {
  title: "Nomor umum program studi",
  phoneDisplay: "+62 813-9180-7762",
  phoneRaw: "6281391807762",
  message: "Halo Admin MKn UNISSULA, saya membutuhkan bantuan informasi layanan program studi.",
};

const emailContact = {
  email: "pdih@unissula.ac.id",
  subject: "Pengaduan & Permohonan Bantuan - MKn UNISSULA",
};

const consultationHours = {
  en: "Monday – Friday, 09:00–15:00 (WIB)",
  id: "Senin – Jumat, pukul 09:00 – 15:00 WIB",
};

export default function LayananPengaduan() {
  return (
    <>
      <Helmet>
        <title>Pengaduan & Bantuan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Layanan Pengaduan & Bantuan Program Studi Magister Kenotariatan (MKn) UNISSULA. Hubungi langsung pengelola program studi melalui WhatsApp atau email resmi."
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        <Navbar />

        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          {/* Breadcrumb navigation */}
          <div className="mb-6">
            <Breadcrumb />
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Header Section */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-heading tracking-tight">
                Pengaduan & Bantuan
              </h1>
              <p className="text-sm sm:text-base text-body leading-relaxed">
                Butuh bantuan cepat? Hubungi pengelola program langsung lewat WhatsApp atau email.
              </p>
            </div>

            {/* Main WhatsApp Card */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-8 shadow-sm">
              {/* Badge */}
              <div className="mb-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#fdeeee] text-primary tracking-wide">
                  WhatsApp
                </span>
              </div>

              <p className="text-xs sm:text-sm text-body mb-6">
                Hubungi langsung staf yang menangani urusan Anda lewat WhatsApp.
              </p>

              {/* Staff list */}
              <div className="space-y-3">
                {staffContacts.map((staff, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200/90 rounded-xl p-4 sm:p-5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-gray-300 transition-colors"
                  >
                    <div className="space-y-0.5">
                      <h2 className="font-heading font-bold text-sm sm:text-base text-heading leading-snug">
                        {staff.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-body font-normal">
                        {staff.role}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/${staff.phone}?text=${encodeURIComponent(staff.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shrink-0 shadow-sm cursor-pointer self-start sm:self-auto"
                    >
                      <FaWhatsapp className="text-base" />
                      <span>Chat WhatsApp</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6" />

              {/* General Study Program Phone */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <div className="space-y-0.5">
                  <h2 className="font-heading font-bold text-sm sm:text-base text-heading leading-snug">
                    {generalContact.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-body font-normal">
                    {generalContact.phoneDisplay}
                  </p>
                </div>

                <a
                  href={`https://wa.me/${generalContact.phoneRaw}?text=${encodeURIComponent(generalContact.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shrink-0 shadow-sm cursor-pointer self-start sm:self-auto"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Bottom 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Left Card: Email */}
              <div className="border border-gray-200/90 bg-white rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#fdeeee] text-primary tracking-wide">
                      Email
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-heading font-medium">
                    {emailContact.email}
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href={`mailto:${emailContact.email}?subject=${encodeURIComponent(emailContact.subject)}`}
                    className="w-full inline-flex items-center justify-center text-center px-6 py-2.5 rounded-full border border-primary text-primary font-bold text-xs sm:text-sm hover:bg-primary/5 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    Kirim Email
                  </a>
                </div>
              </div>

              {/* Right Card: Consultation Hours */}
              <div className="border border-gray-200/90 bg-white rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-start">
                <h2 className="font-heading font-bold text-sm sm:text-base text-primary mb-3 leading-snug">
                  Jam Konsultasi
                </h2>
                <p className="text-xs sm:text-sm text-body leading-relaxed font-normal">
                  {consultationHours.en}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
