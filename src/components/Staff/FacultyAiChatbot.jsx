import { useState, useRef, useEffect } from "react";
import { FiSend, FiX, FiRotateCcw, FiMessageSquare } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

/**
 * Logika cerdas penjawab pertanyaan seputar data dosen spesifik
 */
function generateBotAnswer(rawQuery, faculty) {
  const q = rawQuery.toLowerCase().trim();

  // Mata kuliah / Perkuliahan / SKS / Semester
  if (
    q.includes("mata kuliah") ||
    q.includes("kuliah") ||
    q.includes("ajar") ||
    q.includes("mengampu") ||
    q.includes("sks") ||
    q.includes("semester")
  ) {
    if (faculty.courses && faculty.courses.length > 0) {
      const list = faculty.courses
        .map((c) => `• ${c.name} (${c.placement}, ${c.sks} SKS)`)
        .join("\n");
      return `Mata kuliah yang diampu oleh ${faculty.shortName || faculty.name}:\n\n${list}\n\nSeluruh perkuliahan berlangsung di Program Magister Kenotariatan UNISSULA.`;
    }
    return `Saat ini daftar mata kuliah spesifik untuk ${faculty.shortName || faculty.name} belum tercatat dalam sistem informasi.`;
  }

  // Riwayat Pendidikan / Lulusan / S1 / S2 / S3 / Gelar
  if (
    q.includes("pendidikan") ||
    q.includes("lulusan") ||
    q.includes("alumni") ||
    q.includes("s1") ||
    q.includes("s2") ||
    q.includes("s3") ||
    q.includes("sekolah") ||
    q.includes("gelar") ||
    q.includes("universitas") ||
    q.includes("ugm") ||
    q.includes("undip")
  ) {
    if (faculty.education && faculty.education.length > 0) {
      const list = faculty.education
        .map((e) => `• ${e.degree} (${e.year}) — ${e.university}`)
        .join("\n");
      return `Riwayat pendidikan tinggi ${faculty.shortName || faculty.name}:\n\n${list}`;
    }
    return `Informasi riwayat pendidikan ${faculty.shortName || faculty.name} dapat dikonfirmasi langsung melalui sekretariat program studi.`;
  }

  // Publikasi / Jurnal / Riset / Penelitian / Scopus / Sinta / Karya
  if (
    q.includes("publikasi") ||
    q.includes("jurnal") ||
    q.includes("penelitian") ||
    q.includes("riset") ||
    q.includes("scopus") ||
    q.includes("sinta") ||
    q.includes("karya") ||
    q.includes("buku") ||
    q.includes("artikel") ||
    q.includes("tulisan")
  ) {
    if (faculty.publications && faculty.publications.length > 0) {
      const list = faculty.publications
        .map((p) => `• [${p.year}] "${p.title}"\n  ${p.journal}`)
        .join("\n\n");
      return `Publikasi dan penelitian terpilih dari ${faculty.shortName || faculty.name}:\n\n${list}`;
    }
    return `Publikasi ilmiah ${faculty.shortName || faculty.name} terdokumentasi dalam pangkalan data SINTA Kemendikbudristek dan repositori institusi UNISSULA.`;
  }

  // Pengabdian / Saksi Ahli / Komunitas / Layanan
  if (
    q.includes("pengabdian") ||
    q.includes("masyarakat") ||
    q.includes("saksi ahli") ||
    q.includes("kegiatan") ||
    q.includes("komunitas")
  ) {
    if (faculty.communityServices && faculty.communityServices.length > 0) {
      const list = faculty.communityServices
        .map((s) => `• ${s.role} di ${s.institution} (${s.period})`)
        .join("\n");
      return `Riwayat pengabdian kepada masyarakat oleh ${faculty.shortName || faculty.name}:\n\n${list}`;
    }
    return `${faculty.shortName || faculty.name} aktif dalam berbagai kegiatan pengabdian masyarakat dan pendampingan hukum di tingkat daerah maupun nasional.`;
  }

  // Kontak / Email / Surel / NIDN / Konsultasi / Bimbingan / Kantor
  if (
    q.includes("kontak") ||
    q.includes("email") ||
    q.includes("surel") ||
    q.includes("hubungi") ||
    q.includes("nidn") ||
    q.includes("kantor") ||
    q.includes("telepon") ||
    q.includes("konsultasi") ||
    q.includes("bimbingan") ||
    q.includes("temu")
  ) {
    const lines = [];
    if (faculty.email) lines.push(`• Surel Resmi: ${faculty.email}`);
    if (faculty.nidn) lines.push(`• NIDN: ${faculty.nidn}`);
    if (faculty.joinedYear) lines.push(`• Tahun Bergabung: ${faculty.joinedYear}`);
    lines.push(`• Lokasi: Ruang Dosen Magister Kenotariatan, Gedung Pascasarjana Lt. 3 UNISSULA`);
    lines.push(`• Jadwal Konsultasi: Mahasiswa dapat menghubungi via surel atau sekretariat prodi untuk penjadwalan bimbingan.`);
    return `Informasi kontak & konsultasi akademik ${faculty.shortName || faculty.name}:\n\n${lines.join("\n")}`;
  }

  // Biodata / Profil / Siapa / Jabatan / Pakar / Keahlian
  if (
    q.includes("siapa") ||
    q.includes("profil") ||
    q.includes("biodata") ||
    q.includes("jabatan") ||
    q.includes("pakar") ||
    q.includes("bidang") ||
    q.includes("keahlian")
  ) {
    return `${faculty.name} adalah ${faculty.title} di Program Studi Magister Kenotariatan UNISSULA.\n\n${faculty.bio || (faculty.fullBio && faculty.fullBio[0]) || ""}`;
  }

  // Salam / Sapaan
  if (
    q.includes("halo") ||
    q.includes("hai") ||
    q.includes("assalamualaikum") ||
    q.includes("pagi") ||
    q.includes("siang") ||
    q.includes("sore") ||
    q.includes("malam")
  ) {
    return `Halo! Saya asisten AI informasi profil dosen. Ada yang ingin Anda ketahui seputar mata kuliah, riset, atau kontak ${faculty.shortName || faculty.name}?`;
  }

  // Jawaban Default / Petunjuk
  return `Terima kasih. Sebagai asisten informasi profil akademik untuk ${faculty.name}, Anda dapat menanyakan tentang:\n\n1. Mata kuliah yang diampu\n2. Riwayat pendidikan tinggi (S1, S2, S3)\n3. Publikasi dan topik penelitian terbaru\n4. Pengabdian masyarakat\n5. Kontak surel & jadwal konsultasi akademik`;
}

export default function FacultyAiChatbot({ faculty }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initial greeting message
  const initialGreeting = {
    id: "init-1",
    sender: "bot",
    text: `Halo! Saya asisten informasi profil **${faculty.name}**. Tanyakan apa saja seputar mata kuliah, riset, publikasi, riwayat pendidikan, atau konsultasi akademik beliau.`,
    time: "Baru saja",
  };

  const [messages, setMessages] = useState([initialGreeting]);

  // Reset messages when faculty changes
  useEffect(() => {
    setMessages([
      {
        id: `init-${faculty.id}`,
        sender: "bot",
        text: `Halo! Saya asisten informasi profil **${faculty.name}**. Tanyakan apa saja seputar mata kuliah, riset, publikasi, riwayat pendidikan, atau konsultasi akademik beliau.`,
        time: "Baru saja",
      },
    ]);
  }, [faculty.id, faculty.name]);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Preset suggestions for quick questions
  const quickSuggestions = [
    "Mata kuliah yang diampu?",
    "Riwayat pendidikan beliau?",
    "Topik riset & publikasi?",
    "Kontak & konsultasi?",
  ];

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulasi respons AI dengan jeda natural (450ms)
    setTimeout(() => {
      const botResponseText = generateBotAnswer(text, faculty);
      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botResponseText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `init-${Date.now()}`,
        sender: "bot",
        text: `Percakapan telah direset. Ada yang ingin Anda tanyakan lagi seputar profil ${faculty.shortName || faculty.name}?`,
        time: "Baru saja",
      },
    ]);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* FLOATING CHAT WINDOW (Panjang & Lebar Menyesuaikan Sidebar / Gambar) */}
      {/* ========================================================================= */}
      {isOpen && (
        <div
          role="dialog"
          aria-label={`Chatbot AI ${faculty.name}`}
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-w-[400px] h-[520px] max-h-[calc(100vh-7rem)] bg-white border border-gray-200/90 rounded-2xl shadow-xl flex flex-col overflow-hidden font-body animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          {/* Header Chat: Desain Elegan & Tidak Mencolok */}
          <div className="bg-white border-b border-gray-100 px-4 py-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200 shrink-0 bg-gray-100">
                {faculty.image ? (
                  <img
                    src={faculty.image}
                    alt={faculty.shortName || faculty.name}
                    className="w-full h-full object-cover object-top grayscale"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary text-xs font-bold">
                    AI
                  </div>
                )}
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full ring-1 ring-white" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-heading truncate">
                    Tanya AI Dosen
                  </h3>
                  <HiSparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                </div>
                <p className="text-[11px] text-body truncate">
                  {faculty.shortName || faculty.name}
                </p>
              </div>
            </div>

            {/* Aksi Header: Reset & Close */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={handleResetChat}
                title="Reset Percakapan"
                className="p-1.5 text-gray-400 hover:text-heading hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <FiRotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Tutup Chat"
                className="p-1.5 text-gray-400 hover:text-heading hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Area Pesan Chat */}
          <div className="flex-grow overflow-y-auto p-4 space-y-3 bg-[#fafafa]/80 scrollbar-thin">
            {messages.map((msg) => {
              const isUser = msg.sender === "user";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"} space-y-1`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed whitespace-pre-line ${
                      isUser
                        ? "bg-neutral-800 text-white rounded-tr-xs"
                        : "bg-white text-heading border border-gray-200/90 rounded-tl-xs shadow-2xs"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-gray-400 px-1">
                    {msg.time}
                  </span>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white border border-gray-200/80 rounded-2xl rounded-tl-xs px-3.5 py-2.5 w-fit shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Preset Suggestions (Pilihan Pertanyaan Cepat) */}
          <div className="px-3 py-2 bg-white border-t border-gray-100 overflow-x-auto scrollbar-none flex gap-1.5 shrink-0">
            {quickSuggestions.map((suggestion, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(suggestion)}
                className="text-[11px] whitespace-nowrap bg-gray-50 hover:bg-red-50 text-body hover:text-primary border border-gray-200 hover:border-primary/40 rounded-full px-2.5 py-1 transition-colors cursor-pointer shrink-0"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Form Input Pesan */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-gray-100 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Tanya seputar mata kuliah, riset..."
              className="flex-grow bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-xs sm:text-[13px] text-heading placeholder:text-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="p-2.5 bg-primary hover:bg-[#680000] disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-full transition-colors shrink-0 cursor-pointer disabled:cursor-not-allowed shadow-2xs"
              title="Kirim Pertanyaan"
            >
              <FiSend className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* ========================================================================= */}
      {/* FLOATING TRIGGER BUTTON: Floating Kanan, Desain Tidak Mencolok, Rounded  */}
      {/* ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Buka Chatbot AI Dosen"
          className="group flex items-center gap-2.5 bg-white hover:bg-gray-50 text-heading hover:text-primary border border-gray-300 hover:border-primary/50 shadow-md hover:shadow-lg rounded-full px-4 py-2.5 transition-all duration-200 cursor-pointer"
        >
          {/* Avatar / Icon Bulat */}
          <div className="relative w-6 h-6 rounded-full overflow-hidden border border-gray-200 shrink-0 bg-gray-100 flex items-center justify-center">
            {faculty.image ? (
              <img
                src={faculty.image}
                alt={faculty.shortName || faculty.name}
                className="w-full h-full object-cover object-top grayscale"
              />
            ) : (
              <FiMessageSquare className="w-3 h-3 text-primary" />
            )}
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-emerald-500 rounded-full ring-1 ring-white" />
          </div>

          {/* Teks Label Bersih */}
          <span className="text-xs sm:text-[13px] font-semibold tracking-tight text-heading group-hover:text-primary transition-colors">
            {isOpen ? "Tutup Tanya AI" : `Tanya AI ${faculty.shortName || "Dosen"}`}
          </span>

          {/* Sparkle Aksen Halus */}
          <HiSparkles className="w-3.5 h-3.5 text-primary shrink-0 opacity-80 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </>
  );
}
