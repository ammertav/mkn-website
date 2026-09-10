import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { FaTimes, FaRegComment, FaPaperPlane } from 'react-icons/fa';

const chatVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
    exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.2 } }
};

function ContohChat() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hai, ada yang bisa aku bantu?" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const toggleChat = () => setOpen(!open);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { from: "user", text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const response = await axios.post("https://api.codefy.my.id/chat", { prompt: input });
            const botMessage = { from: "bot", text: response.data.reply };
            setMessages(prev => [...prev, botMessage]);
        } catch (err) {
            const errorMessage = { from: "bot", text: "Maaf, terjadi kesalahan saat menghubungi asisten." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    return (
      <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={chatVariants}
            className="fixed bottom-5 right-4 md:right-8 z-50 w-5/6 md:w-96 h-4/5 md:h-2/3 bg-white border border-gray-200 rounded-2xl shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-white">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-wider uppercase text-primary">Assistant</span>
                <h3 className="text-sm font-heading font-bold text-heading">Chat Support</h3>
              </div>
              <button
                onClick={toggleChat}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Tutup Chat"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto px-4 py-4 text-sm space-y-4 bg-gray-50/50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`whitespace-pre-line px-4 py-2 rounded-2xl max-w-[80%] ${
                      msg.from === "user"
                        ? "bg-primary text-white rounded-tr-none"
                        : "bg-white text-body border border-gray-200 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <p className="text-gray-400 text-xs italic">Mengetik...</p>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tulis pesan..."
                className="flex-1 px-4 py-2 rounded-full border border-gray-200 text-sm text-body focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                disabled={loading}
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95"
                disabled={loading}
              >
                <FaPaperPlane size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      {!open && (
        <motion.div
          className="fixed bottom-5 right-4 md:right-8 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={toggleChat}
            className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
            aria-label="Buka Chat"
          >
            <FaRegComment size={28} />
          </button>
        </motion.div>
      )}
    </>
  );
}

export default ContohChat;