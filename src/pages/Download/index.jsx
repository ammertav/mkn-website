import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
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
import { useT, useLanguage } from "../../i18n/languageContext";

/* =========================
   Animation Settings
========================= */

const viewportSettings = {
  once: true,
  amount: 0.15,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const accordionContentVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const tbodyVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const tableRowVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Download() {
  const t = useT();
  const { lang } = useLanguage();
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
        const matchingDocs = group.documents.filter((doc) => {
          const docTitleId = typeof doc.title === "object" ? (doc.title.id || "") : (doc.title || "");
          const docTitleEn = typeof doc.title === "object" ? (doc.title.en || "") : "";
          const docCatId = typeof doc.category === "object" ? (doc.category.id || "") : (doc.category || "");
          const docCatEn = typeof doc.category === "object" ? (doc.category.en || "") : "";
          return (
            docTitleId.toLowerCase().includes(query) ||
            docTitleEn.toLowerCase().includes(query) ||
            docCatId.toLowerCase().includes(query) ||
            docCatEn.toLowerCase().includes(query) ||
            (doc.updatedAt && doc.updatedAt.toLowerCase().includes(query))
          );
        });
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

  const tabs = [
    { id: "all", label: { id: "Semua Kategori", en: "All Categories" } },
    { id: "akademik", label: { id: "Dokumen Akademik", en: "Academic Documents" } },
    { id: "regulasi", label: { id: "Semua Peraturan Hukum", en: "All Legal Regulations" } },
    { id: "undang-undang", label: { id: "Undang-Undang", en: "Statutes / Acts" } },
    { id: "peraturan-pemerintah", label: { id: "Peraturan Pemerintah", en: "Government Regulations" } },
    { id: "peraturan-menteri", label: { id: "Peraturan Menteri", en: "Ministerial Regulations" } },
    { id: "peraturan-perkumpulan", label: { id: "INI & IPPAT", en: "INI & IPPAT" } },
  ];

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{lang === "en" ? "Download Center & Legal Documents | MKn UNISSULA" : "Pusat Unduhan & Dokumen Hukum | MKn UNISSULA"}</title>
        <meta
          name="description"
          content={t({
            id: "Repositori resmi unduhan dokumen akademik MKn UNISSULA dan kompilasi lengkap Peraturan Perundang-undangan Notaris dan PPAT (UU, PP, Permen, Fatwa, Peraturan Perkumpulan INI-IPPAT).",
            en: "Official repository for MKn UNISSULA academic documents and comprehensive compilation of Notary and Land Title Registrar (PPAT) statutory regulations.",
          })}
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        <Navbar />

        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb */}
          <Breadcrumb />

          {/* Header Title Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mb-10 sm:mb-12"
          >
            <motion.span
              variants={headerItemVariants}
              className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2"
            >
              {t(downloadHeader.category)}
            </motion.span>
            <motion.h1
              variants={headerItemVariants}
              className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal"
            >
              {t(downloadHeader.title)}
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              viewport={viewportSettings}
              className="h-[2px] bg-primary mt-4 mb-5"
            />
            <motion.p
              variants={fadeUpVariants}
              className="text-sm sm:text-base text-body leading-relaxed"
            >
              {t(downloadHeader.description)}
            </motion.p>
          </motion.div>

          {/* Search, Filter Bar & Stats */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="bg-white border border-gray-200 rounded-sm p-4 sm:p-6 mb-8 shadow-sm space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search Box */}
              <div className="relative flex-1 max-w-xl">
                <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t({
                    id: "Cari nama dokumen, nomor regulasi, kata kunci...",
                    en: "Search document name, regulation number, keywords...",
                  })}
                  className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-gray-200 rounded text-xs sm:text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-primary"
                  >
                    {t({ id: "Hapus", en: "Clear" })}
                  </button>
                )}
              </div>

              {/* Expand / Collapse Control Buttons */}
              <div className="flex items-center gap-2 self-start md:self-auto text-xs">
                <button
                  onClick={expandAll}
                  className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-heading font-medium rounded transition-colors"
                >
                  {t({ id: "Buka Semua", en: "Expand All" })}
                </button>
                <button
                  onClick={collapseAll}
                  className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-heading font-medium rounded transition-colors"
                >
                  {t({ id: "Tutup Semua", en: "Collapse All" })}
                </button>
              </div>
            </div>

            {/* Filter Tabs & Counter */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`px-3 py-1 text-xs font-semibold rounded-sm transition-colors ${
                      selectedTab === tab.id
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {t(tab.label)}
                  </motion.button>
                ))}
              </div>

              <div className="text-xs text-body font-medium">
                {lang === "en" ? (
                  <>
                    Showing <strong className="text-heading font-bold">{totalFilteredCount}</strong> of {totalDocsCount} documents
                  </>
                ) : (
                  <>
                    Menampilkan <strong className="text-heading font-bold">{totalFilteredCount}</strong> dari {totalDocsCount} dokumen
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Groups & Documents Accordion */}
          <div className="space-y-6 sm:space-y-8">
            {filteredGroups.length === 0 ? (
              <motion.div
                variants={fadeUpVariants}
                className="bg-white border border-gray-200 rounded-sm p-12 text-center space-y-3"
              >
                <FiInfo className="w-8 h-8 text-gray-400 mx-auto" />
                <h3 className="text-base font-heading font-bold text-heading">
                  {t({ id: "Dokumen Tidak Ditemukan", en: "Document Not Found" })}
                </h3>
                <p className="text-xs sm:text-sm text-body max-w-md mx-auto">
                  {t({
                    id: `Tidak ada dokumen yang cocok dengan kata kunci "${searchQuery}". Silakan periksa kembali ejaan atau reset filter pencarian.`,
                    en: `No documents match the keyword "${searchQuery}". Please check your spelling or reset search filter.`,
                  })}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTab("all");
                  }}
                  className="mt-2 px-4 py-2 bg-primary text-white text-xs font-bold rounded uppercase tracking-wider hover:bg-primary-dark transition-colors"
                >
                  {t({ id: "Reset Pencarian", en: "Reset Search" })}
                </button>
              </motion.div>
            ) : (
              filteredGroups.map((group) => {
                const isOpen = openSections[group.id] ?? true;
                const isAkademik = group.id === "akademik";

                return (
                  <motion.div
                    key={group.id}
                    id={group.id}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.08 }}
                    className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden"
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
                              {t(group.title)}
                            </h2>
                            <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-[11px] font-bold rounded-full">
                              {group.documents.length} {t({ id: "Dokumen", en: "Documents" })}
                            </span>
                          </div>
                          {group.description && (
                            <p className="text-xs text-body mt-0.5 line-clamp-1">
                              {t(group.description)}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-gray-500 font-medium hidden sm:inline">
                          {isOpen ? t({ id: "Sembunyikan", en: "Hide" }) : t({ id: "Tampilkan", en: "Show" })}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className={`flex items-center ${isOpen ? "text-primary" : "text-gray-500"}`}
                        >
                          <FiChevronDown className="w-5 h-5" />
                        </motion.span>
                      </div>
                    </button>

                    {/* Accordion Content Table */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          variants={accordionContentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="overflow-hidden"
                        >
                          <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                              <thead>
                                <tr className="border-b border-gray-200 bg-gray-50/40 text-[11px] font-bold text-heading uppercase tracking-wider">
                                  <th className="py-3 px-5 sm:px-6 w-1/2">
                                    {t({ id: "NAMA DOKUMEN / REGULASI", en: "DOCUMENT / REGULATION NAME" })}
                                  </th>
                                  <th className="py-3 px-5 sm:px-6 w-36">
                                    {t({ id: "KATEGORI", en: "CATEGORY" })}
                                  </th>
                                  <th className="py-3 px-5 sm:px-6 w-28 text-center sm:text-left">
                                    {t({ id: "FORMAT / UKURAN", en: "FORMAT / SIZE" })}
                                  </th>
                                  <th className="py-3 px-5 sm:px-6 w-24">
                                    {t({ id: "TAHUN", en: "YEAR" })}
                                  </th>
                                  <th className="py-3 px-5 sm:px-6 w-40 text-center sm:text-right">
                                    {t({ id: "UNDUH", en: "DOWNLOAD" })}
                                  </th>
                                </tr>
                              </thead>
                              <motion.tbody
                                className="divide-y divide-gray-100 text-xs sm:text-sm"
                                variants={tbodyVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                              >
                                {group.documents.map((doc) => (
                                  <motion.tr
                                    key={doc.id}
                                    variants={tableRowVariants}
                                    className="hover:bg-gray-50/80 transition-colors"
                                  >
                                    {/* Title */}
                                    <td className="py-4 px-5 sm:px-6 font-medium text-heading">
                                      <div className="flex items-start gap-2.5">
                                        <span className="text-primary font-bold text-xs mt-0.5 shrink-0">
                                          •
                                        </span>
                                        <span className="leading-snug">
                                          {t(doc.title)}
                                        </span>
                                      </div>
                                    </td>

                                    {/* Category */}
                                    <td className="py-4 px-5 sm:px-6 text-body whitespace-nowrap">
                                      <span className="inline-block px-2 py-0.5 bg-stone-100 text-gray-700 text-[11px] font-medium rounded">
                                        {t(doc.category)}
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
                                        <motion.a
                                          href={doc.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          download
                                          whileHover={{ scale: 1.05 }}
                                          whileTap={{ scale: 0.96 }}
                                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary text-white text-xs font-semibold rounded hover:bg-primary-dark transition-colors shadow-sm"
                                        >
                                          <FiDownload className="w-3.5 h-3.5" />
                                          <span>{t({ id: "Unduh", en: "Download" })} {doc.format}</span>
                                        </motion.a>
                                      ) : (
                                        <button
                                          type="button"
                                          disabled
                                          aria-disabled="true"
                                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-400 text-xs font-medium rounded border border-gray-200 cursor-not-allowed select-none"
                                          title={t({ id: "Dokumen berkas belum tersedia untuk diunduh", en: "Document file not yet available for download" })}
                                        >
                                          <FiDownload className="w-3.5 h-3.5 text-gray-400" />
                                          <span>{t({ id: "Belum tersedia", en: "Not available" })}</span>
                                        </button>
                                      )}
                                    </td>
                                  </motion.tr>
                                ))}
                              </motion.tbody>
                            </table>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </div>

          {/* Help & Information Callout Banner */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-12 p-6 bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3.5">
              <span className="w-10 h-10 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0">
                <FiFolder className="w-5 h-5" />
              </span>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-heading font-bold text-heading">
                  {t({ id: "Memerlukan Dokumen / Arsip Lain?", en: "Need Other Documents / Archives?" })}
                </h3>
                <p className="text-xs sm:text-sm text-body leading-relaxed max-w-2xl">
                  {t({
                    id: "Apabila Anda memerlukan berkas peraturan hukum kenotariatan atau formulir akademik khusus yang belum tercantum di repositori ini, silakan hubungi sekretariat MKn UNISSULA.",
                    en: "If you need specific notarial legal regulations or academic forms not yet listed in this repository, please contact the MKn UNISSULA secretariat.",
                  })}
                </p>
              </div>
            </div>

            <motion.a
              href="mailto:mkn@unissula.ac.id"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white text-xs font-bold rounded uppercase tracking-wider hover:bg-primary-dark transition-colors shrink-0"
            >
              {t({ id: "Hubungi Sekretariat", en: "Contact Secretariat" })}
            </motion.a>
          </motion.div>
        </div>

        <Footer />
      </main>
    </>
  );
}
