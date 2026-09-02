import { motion } from "framer-motion";

function Loading() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-white"
      role="status"
      aria-live="polite"
    >
      <motion.div
        className="w-12 h-12 border-[3px] border-gray-200 border-t-primary rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
      />
      <span className="sr-only">Memuat halaman…</span>
    </div>
  );
}

export default Loading;
