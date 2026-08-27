import { FiSearch, FiMail, FiX } from "react-icons/fi";

export default function TopBar({ currentLang, setCurrentLang, isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery }) {
  return (
    <div className="border-b border-gray-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs sm:text-sm">
        {/* Language Selector */}
        <div className="flex items-center space-x-2 font-medium tracking-wide">
          {["ID", "EN"].map((lang, i) => (
            <span key={lang} className="flex items-center space-x-2">
              {i > 0 && <span className="text-gray-300">|</span>}
              <button
                onClick={() => setCurrentLang(lang)}
                className={`transition-colors duration-150 cursor-pointer ${
                  currentLang === lang ? "text-primary font-bold" : "text-body/70 hover:text-heading"
                }`}
              >
                {lang}
              </button>
            </span>
          ))}
        </div>

        {/* Search & Webmail */}
        <div className="flex items-center space-x-6 text-body">
          {/* Search */}
          <div className="relative">
            {isSearchOpen ? (
              <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 border border-gray-300">
                <FiSearch className="text-body mr-2 text-sm" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari..."
                  className="bg-transparent text-xs text-heading focus:outline-none w-28 sm:w-44"
                  autoFocus
                />
                <button onClick={() => setIsSearchOpen(false)} className="text-body hover:text-heading ml-1 cursor-pointer">
                  <FiX className="text-xs" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-1.5 hover:text-primary transition-colors duration-150 font-normal cursor-pointer"
              >
                <FiSearch className="text-sm" />
                <span>Search</span>
              </button>
            )}
          </div>

          {/* Webmail */}
          <a
            href="https://webmail.unissula.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-primary transition-colors duration-150 font-normal"
          >
            <FiMail className="text-sm" />
            <span>Webmail</span>
          </a>
        </div>
      </div>
    </div>
  );
}
