import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import {
  FiDownload,
  FiSearch,
  FiChevronDown,
  FiFileText,
  FiFolder,
  FiInfo,
  FiLayers,
} from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { downloadHeader, downloadGroups } from "../../data/downloadData";

export default function Download() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");
  // Default: semua accordion terbuka
  const [openSections, setOpenSections] = useState({
    akademik: true,
    "undang-undang": true,
    "peraturan-pemerintah": true,
    "peraturan-menteri": true,
    "peraturan-lain": true,
    "peraturan-perkumpulan": true,
  });

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen = {};
    downloadGroups.forEach((g) => (allOpen[g.id] = true));
    setOpenSections(allOpen);
  };

  const collapseAll = () => {
    const allClosed = {};
    downloadGroups.forEach((g) => (allClosed[g.id] = false));
    setOpenSections(allClosed);
  };

  // Filter groups and documents based on tab and search query
  const filteredGroups = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return downloadGroups
      .filter((group) => {
        if (selectedTab === "all") return true;
        if (selectedTab === "akademik") return group.id === "akademik";
        if (selectedTab === "regulasi") return group.id !== "akademik";
        return group.id === selectedTab;
      })
      .map((group) => {
        if (!query) return group;
        const matchingDocs = group.documents.filter(
          (doc) =>
            doc.title.toLowerCase().includes(query) ||
            doc.category.toLowerCase().includes(query) ||
            (doc.updatedAt && doc.updatedAt.toLowerCase().includes(query))
        );
        return {
          ...group,
          documents: matchingDocs,
        };
      })
      .filter((group) => group.documents.length > 0);
  }, [searchQuery, selectedTab]);

  // Total count of all documents
  const totalDocsCount = useMemo(() => {
    return downloadGroups.reduce((acc, g) => acc + g.documents.length, 0);
  }, []);

  const totalFilteredCount = useMemo(() => {
    return filteredGroups.reduce((acc, g) => acc + g.documents.length, 0);
  }, [filteredGroups]);

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Pusat Unduhan & Dokumen Hukum | MKn UNISSULA</title>
        <meta
          name="description"
          content="Repositori resmi unduhan dokumen akademik MKn UNISSULA dan kompilasi lengkap Peraturan Perundang-undangan Notaris dan PPAT (UU, PP, Permen, Fatwa, Peraturan Perkumpulan INI-IPPAT)."
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        <Navbar />

        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb */}
          <Breadcrumb />

          {/* Header Title Section */}
          <div className="mb-10 sm:mb-12">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
              {downloadHeader.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
              {downloadHeader.title}
            </h1>
            <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
            <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
              {downloadHeader.description}
            </p>
          </div>

          {/* Search, Filter Bar & Stats */}
          <div className="bg-white border border-gray-200 rounded-sm p-4 sm:p-6 mb-8 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search Box */}
              <div className="relative flex-1 max-w-xl">
                <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari nama dokumen, nomor regulasi, kata kunci..."
                  className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-gray-200 rounded text-xs sm:text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-primary"
                  >
                    Hapus
                  </button>
                )}
              </div>

              {/* Expand / Collapse Control Buttons */}
              <div className="flex items-center gap-2 self-start md:self-auto text-xs">
                <button
                  onClick={expandAll}
                  className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-heading font-medium rounded transition-colors"
                >
                  Buka Semua
                </button>
                <button
                  onClick={collapseAll}
                  className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-heading font-medium rounded transition-colors"
                >
                  Tutup Semua
                </button>
              </div>
            </div>

            {/* Filter Tabs & Counter */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {[
                  { id: "all", label: "Semua Kategori" },
                  { id: "akademik", label: "Dokumen Akademik" },
                  { id: "regulasi", label: "Semua Peraturan Hukum" },
                  { id: "undang-undang", label: "Undang-Undang" },
                  { id: "peraturan-pemerintah", label: "Peraturan Pemerintah" },
                  { id: "peraturan-menteri", label: "Peraturan Menteri" },
                  { id: "peraturan-perkumpulan", label: "INI & IPPAT" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-3 py-1 text-xs font-semibold rounded-sm transition-colors ${
                      selectedTab === tab.id
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="text-xs text-body font-medium">
                Menampilkan <strong className="text-heading font-bold">{totalFilteredCount}</strong> dari {totalDocsCount} dokumen
              </div>
            </div>
          </div>

          {/* Groups & Documents Accordion */}
          <div className="space-y-6 sm:space-y-8">
            {filteredGroups.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-sm p-12 text-center space-y-3">
                <FiInfo className="w-8 h-8 text-gray-400 mx-auto" />
                <h3 className="text-base font-heading font-bold text-heading">
                  Dokumen Tidak Ditemukan
                </h3>
                <p className="text-xs sm:text-sm text-body max-w-md mx-auto">
                  Tidak ada dokumen yang cocok dengan kata kunci &quot;{searchQuery}&quot;. Silakan periksa kembali ejaan atau reset filter pencarian.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTab("all");
                  }}
                  className="mt-2 px-4 py-2 bg-primary text-white text-xs font-bold rounded uppercase tracking-wider hover:bg-primary-dark transition-colors"
                >
                  Reset Pencarian
                </button>
              </div>
            ) : (
              filteredGroups.map((group) => {
                const isOpen = openSections[group.id] ?? true;
                const isAkademik = group.id === "akademik";

                return (
                  <div
                    key={group.id}
                    id={group.id}
                    className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden transition-all"
                  >
                    {/* Accordion Header */}
                    <button
                      type="button"
                      onClick={() => toggleSection(group.id)}
                      className="w-full px-5 sm:px-6 py-4.5 bg-stone-50 hover:bg-stone-100/80 transition-colors flex items-center justify-between gap-4 text-left border-b border-gray-200"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 ${
                            isAkademik
                              ? "bg-red-100 text-primary"
                              : "bg-stone-200 text-heading"
                          }`}
                        >
                          {isAkademik ? <FiFileText /> : <FiLayers />}
                        </span>
                        <div>
                          <div className="flex items-center gap-2.5">
                            <h2 className="text-base sm:text-lg font-heading font-bold text-heading">
                              {group.title}
                            </h2>
                            <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-[11px] font-bold rounded-full">
                              {group.documents.length} Dokumen
                            </span>
                          </div>
                          {group.description && (
                            <p className="text-xs text-body mt-0.5 line-clamp-1">
                              {group.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-gray-500 font-medium hidden sm:inline">
                          {isOpen ? "Sembunyikan" : "Tampilkan"}
                        </span>
                        <FiChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* Accordion Content Table */}
                    {isOpen && (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-gray-200 bg-gray-50/40 text-[11px] font-bold text-heading uppercase tracking-wider">
                              <th className="py-3 px-5 sm:px-6 w-1/2">
                                NAMA DOKUMEN / REGULASI
                              </th>
                              <th className="py-3 px-5 sm:px-6 w-36">
                                KATEGORI
                              </th>
                              <th className="py-3 px-5 sm:px-6 w-28 text-center sm:text-left">
                                FORMAT / UKURAN
                              </th>
                              <th className="py-3 px-5 sm:px-6 w-24">
                                TAHUN
                              </th>
                              <th className="py-3 px-5 sm:px-6 w-40 text-center sm:text-right">
                                UNDUH
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                            {group.documents.map((doc) => (
                              <tr
                                key={doc.id}
                                className="hover:bg-gray-50/80 transition-colors"
                              >
                                {/* Title */}
                                <td className="py-4 px-5 sm:px-6 font-medium text-heading">
                                  <div className="flex items-start gap-2.5">
                                    <span className="text-primary font-bold text-xs mt-0.5 shrink-0">
                                      •
                                    </span>
                                    <span className="leading-snug">
                                      {doc.title}
                                    </span>
                                  </div>
                                </td>

                                {/* Category */}
                                <td className="py-4 px-5 sm:px-6 text-body whitespace-nowrap">
                                  <span className="inline-block px-2 py-0.5 bg-stone-100 text-gray-700 text-[11px] font-medium rounded">
                                    {doc.category}
                                  </span>
                                </td>

                                {/* Format & Size */}
                                <td className="py-4 px-5 sm:px-6 text-body whitespace-nowrap text-center sm:text-left">
                                  <span className="font-semibold text-heading uppercase text-xs">
                                    {doc.format}
                                  </span>
                                  {doc.size && (
                                    <span className="text-gray-400 text-xs ml-1.5">
                                      ({doc.size})
                                    </span>
                                  )}
                                </td>

                                {/* Year */}
                                <td className="py-4 px-5 sm:px-6 text-body whitespace-nowrap text-xs">
                                  {doc.updatedAt || "-"}
                                </td>

                                {/* Action Download Button */}
                                <td className="py-4 px-5 sm:px-6 whitespace-nowrap text-center sm:text-right">
                                  {doc.url ? (
                                    <a
                                      href={doc.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      download
                                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary text-white text-xs font-semibold rounded hover:bg-primary-dark transition-colors shadow-sm"
                                    >
                                      <FiDownload className="w-3.5 h-3.5" />
                                      <span>Unduh {doc.format}</span>
                                    </a>
                                  ) : (
                                    <button
                                      type="button"
                                      disabled
                                      aria-disabled="true"
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-400 text-xs font-medium rounded border border-gray-200 cursor-not-allowed select-none"
                                      title="Dokumen berkas belum tersedia untuk diunduh"
                                    >
                                      <FiDownload className="w-3.5 h-3.5 text-gray-400" />
                                      <span>Belum tersedia</span>
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Help & Information Callout Banner */}
          <div className="mt-12 p-6 bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <span className="w-10 h-10 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0">
                <FiFolder className="w-5 h-5" />
              </span>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-heading font-bold text-heading">
                  Memerlukan Dokumen / Arsip Lain?
                </h3>
                <p className="text-xs sm:text-sm text-body leading-relaxed max-w-2xl">
                  Apabila Anda memerlukan berkas peraturan hukum kenotariatan atau formulir akademik khusus yang belum tercantum di repositori ini, silakan hubungi sekretariat MKn UNISSULA.
                </p>
              </div>
            </div>

            <a
              href="mailto:mkn@unissula.ac.id"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white text-xs font-bold rounded uppercase tracking-wider hover:bg-primary-dark transition-colors shrink-0"
            >
              Hubungi Sekretariat
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
