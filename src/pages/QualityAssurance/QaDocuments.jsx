import { Helmet } from "react-helmet-async";
import { FiDownload } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";

const documents = [
  {
    id: 1,
    title: "MKn Internal Audit Report 2023",
    type: "PDF Document",
    size: "1.2 MB",
    updated: "Updated Jan 15, 2024",
    url: "#",
  },
  {
    id: 2,
    title: "ACQUIN Self-Evaluation Report",
    type: "PDF Document",
    size: "4.5 MB",
    updated: "Updated Dec 01, 2023",
    url: "#",
  },
  {
    id: 3,
    title: "Standard Operating Procedures for Quality Monitoring",
    type: "PDF Document",
    size: "850 KB",
    updated: "Updated Nov 10, 2023",
    url: "#",
  },
  {
    id: 4,
    title: "Buku Kebijakan SPMI Magister Kenotariatan",
    type: "PDF Document",
    size: "2.1 MB",
    updated: "Updated Feb 20, 2024",
    url: "#",
  },
  {
    id: 5,
    title: "Pedoman Evaluasi & Pengendalian Standar Pendidikan",
    type: "PDF Document",
    size: "1.8 MB",
    updated: "Updated Mar 12, 2024",
    url: "#",
  },
];

export default function QaDocuments() {
  return (
    <>
      <Helmet>
        <title>Dokumen Penjaminan Mutu | MKn UNISSULA</title>
        <meta
          name="description"
          content="A comprehensive repository of institutional quality assurance policies, evaluation standards, and formal audit documentation to maintain international academic rigor."
        />
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-heading tracking-tight leading-tight">
            Dokumen Penjaminan Mutu
          </h1>
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            A comprehensive repository of institutional quality assurance policies, evaluation standards,
            and formal audit documentation to maintain international academic rigor.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-800 my-4" />

        {/* Document Items List */}
        <div className="divide-y divide-gray-200 pt-2">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-gray-50/50 px-2 sm:px-3 rounded transition-colors"
            >
              <div className="flex items-start space-x-4">
                {/* PDF Red Badge Icon */}
                <div className="p-2.5 bg-red-50 text-primary rounded shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaFilePdf className="text-xl" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-semibold text-base sm:text-[17px] text-heading group-hover:text-primary transition-colors leading-snug">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1.5 flex-wrap">
                    <span>{doc.type}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>{doc.updated}</span>
                  </p>
                </div>
              </div>

              {/* Download Action Button */}
              <button
                onClick={() => alert(`Mengunduh: ${doc.title}`)}
                className="shrink-0 inline-flex items-center justify-center space-x-1.5 px-4 py-2 border border-gray-300 hover:border-primary text-heading hover:text-primary bg-white text-xs font-semibold rounded-xs shadow-2xs hover:shadow-xs transition-all cursor-pointer"
              >
                <span>Unduh</span>
                <FiDownload className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
