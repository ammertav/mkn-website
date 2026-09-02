import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiCalendar, FiChevronLeft, FiChevronRight, FiCheck } from "react-icons/fi";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EventCalendarSidebar from "../../components/Event/EventCalendarSidebar";
import EventCard from "../../components/Event/EventCard";
import EventDetailModal from "../../components/Event/EventDetailModal";
import SubmitEventModal from "../../components/Event/SubmitEventModal";
import { eventData, formatIndoDate, getIndoDayName } from "../../data/eventData";

export default function EventPage() {
  const navigate = useNavigate();

  // Tanggal default: 1 September 2026 (sesuai screenshot Harvard)
  const defaultYear = 2026;
  const defaultMonth = 8; // 0-indexed: 8 = September

  const [currentMonthDate, setCurrentMonthDate] = useState(
    new Date(defaultYear, defaultMonth, 1)
  );

  // Filter state
  const [selectedDate, setSelectedDate] = useState("2026-09-01");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCompactView, setIsCompactView] = useState(false);
  const [viewMode, setViewMode] = useState("all"); // "day" or "all"

  // Modal states
  const [activeEventModal, setActiveEventModal] = useState(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Ambil semua daftar tanggal unik yang memiliki event
  const allEventDates = useMemo(() => {
    return Array.from(new Set(eventData.map((e) => e.date)));
  }, []);

  // Filter event berdasarkan kriteria
  const filteredEvents = useMemo(() => {
    return eventData.filter((item) => {
      // Filter tanggal (jika viewMode === "day" atau user memilih tanggal tertentu)
      if (viewMode === "day" && selectedDate && item.date !== selectedDate) {
        return false;
      }
      if (viewMode === "all" && selectedDate && item.date !== selectedDate) {
        // Jika ada selectedDate aktif, prioritaskan tanggal terpilih
        return false;
      }

      // Filter kategori
      if (selectedCategory && item.category !== selectedCategory) {
        return false;
      }

      // Filter keyword
      if (searchKeyword.trim()) {
        const q = searchKeyword.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchSpeaker = item.speaker?.toLowerCase().includes(q);
        const matchVenue = item.venue?.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchSpeaker && !matchVenue) {
          return false;
        }
      }

      return true;
    });
  }, [viewMode, selectedDate, selectedCategory, searchKeyword]);

  // Kelompokkan event berdasarkan tanggal
  const groupedEvents = useMemo(() => {
    const groups = {};
    filteredEvents.forEach((ev) => {
      if (!groups[ev.date]) {
        groups[ev.date] = [];
      }
      groups[ev.date].push(ev);
    });

    // Urutkan berdasarkan tanggal
    return Object.keys(groups)
      .sort()
      .map((dateKey) => ({
        date: dateKey,
        events: groups[dateKey],
      }));
  }, [filteredEvents]);

  // Handler pergantian bulan kalender
  const handleChangeMonth = (offset) => {
    setCurrentMonthDate((prev) => {
      const nextDate = new Date(prev.getFullYear(), prev.getMonth() + offset, 1);
      return nextDate;
    });
  };

  // Handler tombol "Today"
  const handleTodayClick = () => {
    const todayStr = "2026-09-01";
    setSelectedDate(todayStr);
    setCurrentMonthDate(new Date(2026, 8, 1));
  };

  // Handler Prev / Next day
  const handleStepDay = (direction) => {
    if (!selectedDate) {
      setSelectedDate("2026-09-01");
      return;
    }

    const current = new Date(selectedDate + "T00:00:00");
    current.setDate(current.getDate() + direction);

    const y = current.getFullYear();
    const m = String(current.getMonth() + 1).padStart(2, "0");
    const d = String(current.getDate()).padStart(2, "0");
    const nextDateStr = `${y}-${m}-${d}`;

    setSelectedDate(nextDateStr);
    setCurrentMonthDate(new Date(y, current.getMonth(), 1));
  };

  // Reset all filters
  const handleResetAll = () => {
    setSelectedDate(null);
    setSearchKeyword("");
    setSelectedCategory(null);
    setViewMode("all");
    setCurrentMonthDate(new Date(defaultYear, defaultMonth, 1));
  };

  return (
    <>
      <Helmet>
        <title>Agenda & Kalender Kegiatan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Kalender kegiatan akademik, seminar nasional, kuliah pakar, workshop akta, dan agenda kemahasiswaan Magister Kenotariatan UNISSULA."
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-white font-body text-body">
        {/* Header Navbar */}
        <Navbar />

        {/* Konten Utama: Full-bleed Split Layout Harvard Law School (Mentok Kiri & Kanan Penuh) */}
        <div className="w-full flex-grow flex flex-col lg:flex-row items-stretch border-t border-gray-200">
          {/* Kolom Kiri: Sidebar Dark Panel (Mentok Kiri Layar Penuh) */}
          <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 bg-[#111c24] border-r border-black/20">
            <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto scrollbar-thin">
              <EventCalendarSidebar
                currentMonthDate={currentMonthDate}
                onChangeMonth={handleChangeMonth}
                selectedDate={selectedDate}
                onSelectDate={(date) => {
                  setSelectedDate(date === selectedDate ? null : date);
                }}
                searchKeyword={searchKeyword}
                onSearchChange={setSearchKeyword}
                onResetAll={handleResetAll}
                eventDates={allEventDates}
                onSubmitEventClick={() => setIsSubmitModalOpen(true)}
              />
            </div>
          </div>

          {/* Kolom Kanan: Feed Acara (Mentok Kanan Layar Penuh) */}
          <div className="flex-grow min-w-0 bg-white px-4 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 space-y-8">
            {/* Bar Kontrol Atas (Persis Baris Atas di Screenshot Harvard) */}
            <div className="pb-4 border-b border-gray-200 flex flex-wrap items-center justify-between gap-4">
              {/* Bagian Kiri: Tombol Today */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleTodayClick}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs border border-gray-300 hover:border-primary hover:text-primary text-heading text-xs sm:text-sm font-medium transition-colors cursor-pointer bg-white"
                >
                  <FiCalendar className="w-4 h-4 text-primary" />
                  <span>Hari Ini (Today)</span>
                </button>

                {/* Tombol Tampilkan Semua */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDate(null);
                    setViewMode("all");
                  }}
                  className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-xs font-medium transition-colors cursor-pointer ${
                    !selectedDate
                      ? "bg-primary text-white"
                      : "text-body hover:text-heading bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Semua Agenda Mendatang
                </button>
              </div>

                {/* Bagian Kanan: Navigasi Prev/Next & Toggle Compact View */}
                <div className="flex items-center gap-5 text-xs sm:text-sm">
                  {/* Panah Prev / Next */}
                  <div className="flex items-center gap-3 text-heading font-medium">
                    <button
                      type="button"
                      onClick={() => handleStepDay(-1)}
                      className="inline-flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
                    >
                      <FiChevronLeft className="w-4 h-4" />
                      <span>Prev</span>
                    </button>
                    <span className="text-gray-300">|</span>
                    <button
                      type="button"
                      onClick={() => handleStepDay(1)}
                      className="inline-flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
                    >
                      <span>Next</span>
                      <FiChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Toggle Compact View */}
                  <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
                    <span className="text-gray-600 text-xs">Compact View</span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={isCompactView}
                      onClick={() => setIsCompactView(!isCompactView)}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        isCompactView ? "bg-primary" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                          isCompactView ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Status Filter Aktif (jika ada filter yang sedang aktif) */}
              {(selectedDate || searchKeyword) && (
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-gray-500">Filter aktif:</span>
                  {selectedDate && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-primary border border-red-200 rounded-full font-medium">
                      Tanggal: {formatIndoDate(selectedDate)}
                      <button
                        type="button"
                        onClick={() => setSelectedDate(null)}
                        className="hover:font-bold cursor-pointer"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {searchKeyword && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-heading border border-gray-300 rounded-full font-medium">
                      Kata Kunci: "{searchKeyword}"
                      <button
                        type="button"
                        onClick={() => setSearchKeyword("")}
                        className="hover:font-bold cursor-pointer"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleResetAll}
                    className="text-primary hover:underline ml-1 font-medium cursor-pointer"
                  >
                    Reset semua
                  </button>
                </div>
              )}

              {/* Feed Agenda (Dikelompokkan Berdasarkan Tanggal) */}
              {groupedEvents.length > 0 ? (
                isCompactView ? (
                  /* COMPACT VIEW: Persis Sesuai Screenshot yang Dikirimkan */
                  <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
                    {groupedEvents.map((group) => (
                      <div
                        key={group.date}
                        className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8 items-start"
                      >
                        {/* Kolom 1: Tanggal & Jumlah Acara */}
                        <div className="md:col-span-3 lg:col-span-3 space-y-0.5">
                          <h3 className="font-heading font-bold text-sm sm:text-base text-heading">
                            {formatIndoDate(group.date)}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {getIndoDayName(group.date)} • {group.events.length} events
                          </p>
                        </div>

                        {/* Kolom 2 & 3: Jam dan Judul Acara Berdampingan */}
                        <div className="md:col-span-9 lg:col-span-9 space-y-3">
                          {group.events.map((event) => (
                            <div
                              key={event.id}
                              onClick={() => navigate(`/event/${event.slug}`)}
                              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 group cursor-pointer"
                            >
                              <span className="text-xs sm:text-sm text-body sm:w-44 shrink-0 font-medium">
                                {event.time}
                              </span>
                              <h4 className="font-heading font-bold text-xs sm:text-sm text-heading group-hover:text-primary transition-colors leading-relaxed">
                                {event.title}
                              </h4>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* STANDARD VIEW: Persis Sesuai Screenshot (Tanggal di Kiri, Acara di Kanan) */
                  <div className="space-y-14 divide-y divide-gray-200/80">
                    {groupedEvents.map((group) => (
                      <div
                        key={group.date}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pt-12 first:pt-2 items-start"
                      >
                        {/* Kolom Kiri: Tanggal & Jumlah Event (Persis Screenshot) */}
                        <div className="lg:col-span-3 lg:sticky lg:top-32 space-y-1">
                          <h2 className="text-2xl sm:text-3xl font-heading font-medium text-heading tracking-tight">
                            {formatIndoDate(group.date)}
                          </h2>
                          <p className="text-xs sm:text-sm text-gray-500 font-normal">
                            {getIndoDayName(group.date)} • {group.events.length} events
                          </p>
                        </div>

                        {/* Kolom Kanan: Daftar Acara di Tanggal Ini */}
                        <div className="lg:col-span-9 space-y-12 sm:space-y-14">
                          {group.events.map((event) => (
                            <EventCard
                              key={event.id}
                              event={event}
                              onSelect={() => navigate(`/event/${event.slug}`)}
                              compact={false}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                /* Empty State Ketika Tidak Ada Event yang Sesuai */
                <div className="bg-white border border-gray-200 rounded-sm p-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 mx-auto flex items-center justify-center">
                    <FiCalendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-heading">
                    Tidak Ada Agenda Ditemukan
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
                    Tidak ada agenda kegiatan yang cocok dengan kriteria filter atau tanggal yang Anda pilih.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleResetAll}
                      className="px-5 py-2.5 bg-primary hover:bg-[#680000] text-white text-xs sm:text-sm font-semibold rounded-xs transition-colors cursor-pointer"
                    >
                      Tampilkan Semua Agenda
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        {/* Modal Detail Event */}
        {activeEventModal && (
          <EventDetailModal
            event={activeEventModal}
            onClose={() => setActiveEventModal(null)}
          />
        )}

        {/* Modal Submit Event */}
        <SubmitEventModal
          isOpen={isSubmitModalOpen}
          onClose={() => setIsSubmitModalOpen(false)}
        />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
