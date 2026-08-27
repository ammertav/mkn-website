import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiChevronDown, FiChevronUp, FiExternalLink } from "react-icons/fi";
import { admissionRequirements } from "../../data/penerimaanData";

export default function StudentAdmission() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Penerimaan Mahasiswa Baru | MKn UNISSULA</title>
        <meta
          name="description"
          content="Informasi pendaftaran mahasiswa baru, persyaratan akademik, jadwal seleksi, dan registrasi online Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <div className="space-y-8">
        {/* Header Eyebrow & Title */}
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            Admissions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Penerimaan Mahasiswa Baru
          </h1>
        </div>

        {/* Maroon Horizontal Divider */}
        <hr className="border-t border-gray-800 my-4" />

        {/* Description */}
        <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
          Program Studi Magister Kenotariatan (MKn) Universitas Islam Sultan Agung (UNISSULA)
          menyelenggarakan penerimaan mahasiswa baru bagi sarjana hukum yang ingin mendalami keilmuan dan
          profesi kenotariatan dengan standar akademik yang ketat dan berwawasan global.
        </p>

        {/* Hero Banner Image */}
        <div className="w-full aspect-[21/9] sm:aspect-[16/7] rounded-xs overflow-hidden bg-gray-100 shadow-2xs">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
            alt="Penerimaan Mahasiswa Baru MKn UNISSULA"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* CTA Box Pendaftaran Online */}
        <div className="p-6 border border-primary/20 bg-primary/5 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-heading font-semibold text-base text-heading">
              Pendaftaran Online PMB UNISSULA 2024/2025 Telah Dibuka
            </h3>
            <p className="text-xs sm:text-sm text-body">
              Daftarkan diri Anda sekarang melalui portal resmi penerimaan mahasiswa baru UNISSULA.
            </p>
          </div>
          <a
            href="https://pmb.unissula.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-primary hover:bg-[#570000] text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            <span>Daftar Sekarang</span>
            <FiExternalLink />
          </a>
        </div>

        {/* Section Header */}
        <div className="pt-2">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading tracking-normal mb-6">
            Persyaratan & Prosedur Pendaftaran
          </h2>

          {/* Accordion List */}
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {admissionRequirements.map((item) => {
              const isOpen = openIndex === item.id;
              return (
                <div key={item.id} className="py-1">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full py-5 flex items-center justify-between text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-medium text-base sm:text-lg text-heading group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                    {isOpen ? (
                      <FiChevronUp className="text-primary text-xl transition-transform" />
                    ) : (
                      <FiChevronDown className="text-gray-400 group-hover:text-primary text-xl transition-transform" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="pb-6 pt-1 text-body leading-relaxed space-y-3">
                      {item.points && (
                        <ul className="list-disc pl-5 space-y-2 text-sm text-body">
                          {item.points.map((pt, pIdx) => (
                            <li key={pIdx}>{pt}</li>
                          ))}
                        </ul>
                      )}

                      {item.description && (
                        <p className="text-sm text-body">{item.description}</p>
                      )}

                      {item.steps && (
                        <ol className="list-decimal pl-5 space-y-1.5 text-sm text-body">
                          {item.steps.map((st, sIdx) => (
                            <li key={sIdx}>{st}</li>
                          ))}
                        </ol>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
