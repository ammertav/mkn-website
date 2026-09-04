import {
  FiBookOpen,
  FiExternalLink,
  FiDownload,
} from "react-icons/fi";
import { useT } from "../../../i18n/languageContext";

export default function KartuRpsAccordion({ mk }) {
  const t = useT();

  return (
    <div className="bg-white border border-gray-200 rounded-xs p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-8 hover:border-gray-300 transition-all duration-200 shadow-2xs group">
      {/* Sisi Kiri: Ikon Buku + Badge Semester + Judul + Deskripsi */}
      <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
        <div className="text-primary text-2xl sm:text-3xl mt-0.5 shrink-0 p-2.5 bg-primary/5 rounded-xs border border-primary/10 group-hover:bg-primary/10 transition-colors">
          <FiBookOpen />
        </div>

        <div className="space-y-2 flex-1 min-w-0 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-medium px-2 py-0.5 bg-gray-100 text-heading border border-gray-200 rounded-xs">
              Semester {mk.semester}
            </span>
          </div>

          <h3 className="font-heading font-bold text-base sm:text-[18px] text-heading leading-snug group-hover:text-primary transition-colors">
            {t(mk.nama)}
          </h3>

          <p className="text-xs sm:text-sm text-body leading-relaxed">
            {t(mk.deskripsi)}
          </p>
        </div>
      </div>

      {/* Sisi Kanan: Tombol Unduh Berkas */}
      <div className="shrink-0 flex items-center self-start sm:self-center pl-14 sm:pl-0">
        <a
          href={mk.folderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-xs text-xs sm:text-sm font-semibold transition-colors shadow-2xs group/btn"
        >
          <FiDownload className="text-base group-hover/btn:-translate-y-0.5 transition-transform" />
          <span>Unduh Berkas</span>
          <FiExternalLink className="text-xs opacity-80" />
        </a>
      </div>
    </div>
  );
}
