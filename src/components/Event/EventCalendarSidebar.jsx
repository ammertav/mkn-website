import { FiSearch, FiChevronLeft, FiChevronRight, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { useT, useLanguage } from "../../i18n/languageContext";

const sidebarContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const sidebarItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function EventCalendarSidebar({
  currentMonthDate, // Date object representing the currently viewed month in the calendar
  onChangeMonth,
  selectedDate, // "YYYY-MM-DD" or null
  onSelectDate,
  searchKeyword,
  onSearchChange,
  onResetAll,
  eventDates = [], // array of "YYYY-MM-DD" that have events
  onSubmitEventClick,
}) {
  const t = useT();
  const { lang } = useLanguage();

  const monthNamesId = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  const monthNamesEn = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthNames = lang === "en" ? monthNamesEn : monthNamesId;

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  // Helper untuk kalkulasi hari dalam bulan
  const year = currentMonthDate.getFullYear();
  const month = currentMonthDate.getMonth(); // 0-indexed

  // Hari pertama bulan (0 = Minggu, 1 = Senin, ...)
  const firstDayIndex = new Date(year, month, 1).getDay();
  // Total hari dalam bulan ini
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
  // Total hari dalam bulan sebelumnya
  const prevMonthTotalDays = new Date(year, month, 0).getDate();

  // Membangun array sel hari
  const calendarCells = [];

  // Sel dari bulan sebelumnya
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    calendarCells.push({
      day: prevMonthTotalDays - i,
      isCurrentMonth: false,
      dateStr: null,
    });
  }

  // Sel bulan saat ini
  for (let day = 1; day <= totalDaysInMonth; day++) {
    const padMonth = String(month + 1).padStart(2, "0");
    const padDay = String(day).padStart(2, "0");
    const dateStr = `${year}-${padMonth}-${padDay}`;
    const hasEvents = eventDates.includes(dateStr);
    const isSelected = selectedDate === dateStr;

    calendarCells.push({
      day,
      isCurrentMonth: true,
      dateStr,
      hasEvents,
      isSelected,
    });
  }

  // Lengkapi sisa grid sampai kelipatan 7 (maks 35 atau 42)
  const remainingCells = 7 - (calendarCells.length % 7);
  if (remainingCells < 7) {
    for (let day = 1; day <= remainingCells; day++) {
      calendarCells.push({
        day,
        isCurrentMonth: false,
        dateStr: null,
      });
    }
  }

  return (
    <motion.aside
      variants={sidebarContainerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-full bg-[#111c24] text-white px-6 sm:px-8 lg:px-10 pt-12 sm:pt-16 lg:pt-20 pb-16 space-y-8 font-body"
    >
      {/* Header: Judul & Reset All */}
      <motion.div
        variants={sidebarItemVariants}
        className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4"
      >
        <h2 className="text-2xl sm:text-3xl font-heading font-normal tracking-tight text-white">
          {t({ id: "Kalender Agenda", en: "Events Calendar" })}
        </h2>
        <button
          type="button"
          onClick={onResetAll}
          className="text-xs text-gray-400 hover:text-white transition-colors cursor-pointer hover:underline"
        >
          {t({ id: "Reset semua", en: "Reset all" })}
        </button>
      </motion.div>

      {/* Input Pencarian Keyword */}
      <motion.div variants={sidebarItemVariants} className="space-y-2">
        <div className="relative">
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t({ id: "Cari kata kunci...", en: "Search by keyword" })}
            className="w-full bg-[#182733] text-sm text-white placeholder:text-gray-400 pl-4 pr-10 py-3 rounded-xs border border-white/15 focus:outline-none focus:border-white/40 transition-colors"
          />
          <FiSearch className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </motion.div>

      {/* Kalender Mini Interaktif */}
      <motion.div variants={sidebarItemVariants} className="space-y-4 pt-1">
        {/* Header Bulan & Navigasi Panah */}
        <div className="flex items-center justify-between">
          <div className="font-heading font-semibold text-base sm:text-lg text-white">
            {monthNames[month]} <span className="font-light text-gray-300">{year}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={() => onChangeMonth(-1)}
              title={t({ id: "Bulan Sebelumnya", en: "Previous Month" })}
              className="p-1.5 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <FiChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={() => onChangeMonth(1)}
              title={t({ id: "Bulan Berikutnya", en: "Next Month" })}
              className="p-1.5 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <FiChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Header Hari (S M T W T F S) */}
        <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-400 py-1 border-b border-white/10">
          {daysOfWeek.map((day, idx) => (
            <div key={idx} className="py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Grid Tanggal */}
        <div className="grid grid-cols-7 gap-y-1.5 text-center text-xs sm:text-sm">
          {calendarCells.map((cell, idx) => {
            if (!cell.isCurrentMonth) {
              return (
                <div key={idx} className="py-2 text-gray-600 select-none">
                  {cell.day}
                </div>
              );
            }

            return (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => onSelectDate(cell.dateStr)}
                className={`relative py-2 mx-auto w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer ${
                  cell.isSelected
                    ? "bg-primary text-white font-bold shadow-xs ring-2 ring-white/20"
                    : cell.hasEvents
                    ? "text-white font-bold hover:bg-white/15 hover:text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{cell.day}</span>
                {/* Titik indikator jika ada event dan tidak sedang terseleksi */}
                {cell.hasEvents && !cell.isSelected && (
                  <span className="absolute bottom-1 w-1 h-1 rounded-full bg-primary" />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Tombol Submit an Event (Ajukan Agenda) */}
      <motion.div variants={sidebarItemVariants} className="pt-2">
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={onSubmitEventClick}
          className="w-full py-3 px-5 bg-white text-[#111c24] font-heading font-semibold text-xs sm:text-sm rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
        >
          <FiPlus className="w-4 h-4" />
          <span>{t({ id: "Ajukan Agenda", en: "Submit an Event" })}</span>
        </motion.button>
      </motion.div>
    </motion.aside>
  );
}
