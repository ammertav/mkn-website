import { Helmet } from "react-helmet-async";
import { FaFilePdf } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { useT } from "../../i18n/languageContext";
import RichText from "../../components/ui/RichText";
import Img from "../../components/ui/Img";
import { timeline, halaman } from "../../data/profil/sejarahData";

export default function Sejarah() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <div className="space-y-16 sm:space-y-20">
        {/* Latar belakang pendirian */}
        <section className="space-y-4">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase block">
            {t(halaman.eyebrow)}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-2">
            <div className="lg:col-span-5">
              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] text-heading leading-tight">
                {t(halaman.judulLatar)}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-body leading-relaxed">
              {halaman.latarBelakang.map((paragraf, idx) => (
                <p key={idx}>
                  <RichText>{t(paragraf)}</RichText>
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Linimasa perjalanan program studi */}
        <section className="space-y-6">
          <div>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
              {t(halaman.judulLinimasa)}
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-3 mb-8" />
          </div>

          <ol className="relative border-l-2 border-gray-200 ml-2 space-y-9 sm:space-y-11">
            {timeline.map((item) => (
              <li key={item.year} className="relative pl-7 sm:pl-10">
                {/* Penanda titik pada garis */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[9px] top-2 rounded-full border-[3px] border-white ${
                    item.highlight
                      ? "w-4 h-4 bg-primary ring-4 ring-primary/15"
                      : "w-3.5 h-3.5 bg-gray-300"
                  }`}
                />

                {/* Naskah di kiri, sertifikat di kanan pada layar lebar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-start">
                  <div className={item.sertifikat ? "lg:col-span-7" : "lg:col-span-12"}>
                    <div className="font-heading font-bold text-xl sm:text-2xl text-primary leading-none tabular-nums">
                      {item.year}
                    </div>

                    <h3 className="mt-2 font-heading font-semibold text-base sm:text-lg text-heading leading-snug">
                      <RichText>{t(item.title)}</RichText>
                    </h3>

                    <p className="mt-1.5 text-sm sm:text-base text-body leading-relaxed max-w-3xl">
                      <RichText>{t(item.desc)}</RichText>
                    </p>

                    {item.meta && (
                      <p className="mt-2.5 text-xs text-gray-500 leading-relaxed">
                        {t(item.meta)}
                      </p>
                    )}
                  </div>

                  {/* Kartu sertifikat: gambar dibuka ukuran penuh di tab baru,
                      SK-nya menyusul sebagai tautan PDF di bawahnya. Orientasi
                      sertifikat berbeda-beda (potret & lanskap), jadi gambar
                      dipasang object-contain di dalam bingkai berukuran tetap. */}
                  {item.sertifikat && (
                    <figure className="lg:col-span-5 w-full max-w-sm lg:max-w-none border border-gray-200 bg-white rounded-xs shadow-2xs overflow-hidden">
                      <a
                        href={item.sertifikat.gambar}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={t(halaman.labelPerbesar)}
                        className="block bg-gray-50 aspect-3/2 p-3 group"
                      >
                        <Img
                          src={item.sertifikat.gambar}
                          alt={t(item.sertifikat.alt)}
                          className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-300"
                        />
                      </a>

                      <figcaption className="border-t border-gray-100 divide-y divide-gray-100">
                        <p className="px-4 py-2 text-[11px] uppercase tracking-[0.14em] font-bold text-gray-400">
                          {t(halaman.labelSertifikat)} {item.year}
                        </p>
                        <a
                          href={item.sertifikat.dokumen.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 px-4 py-3 text-xs sm:text-sm font-semibold text-heading hover:text-primary hover:bg-gray-50/70 transition-colors group/pdf"
                        >
                          <FaFilePdf className="text-base text-primary shrink-0" />
                          <span className="flex-1">{t(item.sertifikat.dokumen.label)}</span>
                          <FiExternalLink className="text-sm text-gray-400 group-hover/pdf:text-primary transition-colors" />
                        </a>
                      </figcaption>
                    </figure>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
