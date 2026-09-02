import { useState, useEffect } from "react";
import { FiX, FiCheckCircle } from "react-icons/fi";
import { eventCategories } from "../../data/eventData";

export default function SubmitEventModal({ isOpen, onClose }) {
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
              Pengajuan Agenda Berhasil Dikirim
            </h3>
            <p className="text-sm text-body max-w-md mx-auto leading-relaxed">
              Terima kasih. Usulan agenda acara Anda telah diterima oleh Sekretariat Program Studi
              Magister Kenotariatan UNISSULA dan akan ditinjau dalam 1x24 jam kerja sebelum dipublikasikan.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-primary hover:bg-[#680000] text-white text-xs sm:text-sm font-semibold rounded-xs uppercase tracking-wider transition-colors"
              >
                Selesai
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block">
                AGENDA KAMPUS
              </span>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-heading mt-1">
                Pengajuan Agenda Acara
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Isi formulir berikut untuk mempublikasikan agenda seminar, kuliah umum, atau kegiatan kemahasiswaan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-heading mb-1">
                  Nama / Judul Acara <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Contoh: Seminar Nasional Hukum Waris Islam"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-heading mb-1">
                    Penyelenggara / Unit <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organizer}
                    onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
                    placeholder="Contoh: HMP MKn / Dosen"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-heading mb-1">
                    Kategori Acara <span className="text-primary">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                  >
                    {eventCategories
                      .filter((c) => c !== "Semua Kategori")
                      .map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-heading mb-1">
                    Tanggal Pelaksanaan <span className="text-primary">*</span>
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
                    Waktu (WIB) <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    placeholder="Contoh: 09:00 - 12:00 WIB"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-heading mb-1">
                  Tempat / Ruangan / Link Zoom <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  placeholder="Contoh: Ruang Sidang Pascasarjana Lt. 3 / Zoom Meeting"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block font-semibold text-heading mb-1">
                  Narasumber / Pembicara
                </label>
                <input
                  type="text"
                  value={formData.speaker}
                  onChange={(e) => setFormData({ ...formData, speaker: e.target.value })}
                  placeholder="Nama pembicara & gelar akademis"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block font-semibold text-heading mb-1">
                  Deskripsi Ringkas Acara <span className="text-primary">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Ringkasan topik dan target peserta acara..."
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-heading mb-1">
                  Narahubung / Kontak WhatsApp <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="Contoh: 0812-3456-7890 (Nama PIC)"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-heading focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-gray-300 hover:bg-gray-50 text-heading font-medium rounded-xs transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary hover:bg-[#680000] text-white font-semibold rounded-xs tracking-wider uppercase transition-colors shadow-2xs cursor-pointer"
                >
                  Kirim Usulan
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
