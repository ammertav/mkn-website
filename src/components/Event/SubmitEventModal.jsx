import { useState, useEffect } from "react";
import { FiX, FiCheckCircle } from "react-icons/fi";
import { eventCategories } from "../../data/eventData";
import { useT } from "../../i18n/languageContext";

export default function SubmitEventModal({ isOpen, onClose }) {
  const t = useT();
  const [formData, setFormData] = useState({
    title: "",
    organizer: "",
    category: "Seminar & Konferensi",
    date: "",
    time: "",
    venue: "",
    speaker: "",
    description: "",
    contact: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs font-body animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl max-h-[90vh] bg-white rounded-sm shadow-2xl overflow-y-auto flex flex-col p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-heading transition-colors cursor-pointer"
        >
          <FiX className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <FiCheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-bold text-heading">
              {t({ id: "Pengajuan Agenda Berhasil Dikirim", en: "Event Proposal Successfully Submitted" })}
            </h3>
            <p className="text-sm text-body max-w-md mx-auto leading-relaxed">
              {t({
                id: "Terima kasih. Usulan agenda acara Anda telah diterima oleh Sekretariat Program Studi Magister Kenotariatan UNISSULA dan akan ditinjau dalam 1x24 jam kerja sebelum dipublikasikan.",
                en: "Thank you. Your event proposal has been received by the Master of Notarial Law Program Secretariat and will be reviewed within 1 business day before publication.",
              })}
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-primary hover:bg-[#680000] text-white text-xs sm:text-sm font-semibold rounded-xs uppercase tracking-wider transition-colors"
              >
                {t({ id: "Selesai", en: "Done" })}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block">
                {t({ id: "AGENDA KAMPUS", en: "CAMPUS AGENDA" })}
              </span>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-heading mt-1">
                {t({ id: "Pengajuan Agenda Acara", en: "Submit Event Proposal" })}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {t({
                  id: "Isi formulir berikut untuk mempublikasikan agenda seminar, kuliah umum, atau kegiatan kemahasiswaan.",
                  en: "Fill in the following form to submit a seminar, guest lecture, or student activity agenda.",
                })}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-heading mb-1">
                  {t({ id: "Nama / Judul Acara", en: "Event Title" })} <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder={t({ id: "Contoh: Seminar Nasional Hukum Waris Islam", en: "e.g., National Seminar on Islamic Inheritance Law" })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-heading mb-1">
                    {t({ id: "Penyelenggara / Unit", en: "Organizer / Unit" })} <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organizer}
                    onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
                    placeholder={t({ id: "Contoh: IMANU UNISSULA / Dosen", en: "e.g., IMANU UNISSULA / Faculty" })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-heading mb-1">
                    {t({ id: "Kategori Acara", en: "Event Category" })} <span className="text-primary">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                  >
                    {eventCategories
                      .filter((c) => (typeof c === "object" ? c.id : c) !== "Semua Kategori")
                      .map((cat) => {
                        const catVal = typeof cat === "object" ? cat.id : cat;
                        const catLabel = typeof cat === "object" ? t(cat) : cat;
                        return (
                          <option key={catVal} value={catVal}>
                            {catLabel}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-heading mb-1">
                    {t({ id: "Tanggal Pelaksanaan", en: "Event Date" })} <span className="text-primary">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-heading mb-1">
                    {t({ id: "Waktu (WIB)", en: "Time (WIB)" })} <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    placeholder="09:00 - 12:00 WIB"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-heading mb-1">
                  {t({ id: "Tempat / Ruangan / Link Zoom", en: "Venue / Room / Zoom Link" })} <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  placeholder={t({ id: "Contoh: Ruang Sidang Pascasarjana Lt. 3 / Zoom Meeting", en: "e.g., Postgraduate Hall 3rd Fl. / Zoom Meeting" })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block font-semibold text-heading mb-1">
                  {t({ id: "Narasumber / Pembicara", en: "Speaker / Presenter" })}
                </label>
                <input
                  type="text"
                  value={formData.speaker}
                  onChange={(e) => setFormData({ ...formData, speaker: e.target.value })}
                  placeholder={t({ id: "Nama pembicara & gelar akademis", en: "Speaker name & academic titles" })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block font-semibold text-heading mb-1">
                  {t({ id: "Deskripsi Ringkas Acara", en: "Brief Event Description" })} <span className="text-primary">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder={t({ id: "Ringkasan topik dan target peserta acara...", en: "Summary of event topic and target audience..." })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-heading mb-1">
                  {t({ id: "Narahubung / Kontak WhatsApp", en: "Contact Person / WhatsApp" })} <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="0812-3456-7890 (PIC)"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-gray-300 hover:bg-gray-50 text-heading font-medium rounded-xs transition-colors cursor-pointer"
                >
                  {t({ id: "Batal", en: "Cancel" })}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary hover:bg-[#680000] text-white font-semibold rounded-xs tracking-wider uppercase transition-colors shadow-2xs cursor-pointer"
                >
                  {t({ id: "Kirim Usulan", en: "Submit" })}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
