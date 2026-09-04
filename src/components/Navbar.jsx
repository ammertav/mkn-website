import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

import { navLinks } from "../data/navLinks";
import logoUnissula from "../assets/images/logo-unissula-crest.png";
import TopBar from "./Navbar/TopBar";
import DesktopNav from "./Navbar/DesktopNav";
import MobileNav from "./Navbar/MobileNav";
import Img from "./ui/Img";

export default function Navbar() {
  const location = useLocation();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBrandHidden, setIsBrandHidden] = useState(false);

  /**
   * Baris identitas menyusut saat halaman digulir ke bawah dan muncul lagi
   * begitu digulir ke atas, supaya baris menu tetap dekat dengan konten.
   *
   * Ambang 6px meredam getaran gulir (trackpad, scroll-anchoring) yang bisa
   * membuat baris ini berkedip; ambang 80px menjaga identitas tetap terlihat
   * di puncak halaman.
   */
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);

      if (Math.abs(y - lastY) < 6) return;
      setIsBrandHidden(y > lastY && y > 80);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const checkIsActive = (href) => {
    if (href.startsWith("/#") || href.startsWith("#")) return false;
    return location.pathname === href || (href !== "/" && location.pathname.startsWith(href));
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm font-body">
      <TopBar
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Navbar dua baris: identitas di tengah atas, menu membentang di bawahnya.
          Tinggi totalnya dikunci lewat --header-h di index.css karena dipakai
          sebagai offset elemen sticky di banyak halaman. */}
      <div className={`bg-white transition-shadow duration-200 ${isScrolled ? "shadow-md" : ""}`}>

        {/* Baris 1 — Logo & nama. Di mobile tetap kiri agar tombol menu muat,
            dan tidak ikut menyusut karena tombol menu ada di baris ini. */}
        <div
          className={`max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between lg:justify-center lg:overflow-hidden lg:transition-all lg:duration-300 lg:ease-out ${
            isBrandHidden ? "lg:h-0 lg:opacity-0 lg:-translate-y-1.5" : "lg:opacity-100"
          }`}
        >
          <Link
            to="/"
            className="flex items-center gap-2.5 hover:opacity-95 transition-opacity shrink-0"
          >
            <Img
              eager
              src={logoUnissula}
              alt=""
              aria-hidden="true"
              className="h-10 sm:h-11 w-auto object-contain shrink-0"
            />
            <span className="flex flex-col justify-center text-primary font-heading font-bold leading-tight tracking-normal">
              <span className="text-[13px] sm:text-[15px]">MAGISTER KENOTARIATAN</span>
              <span className="text-[13px] sm:text-[15px]">FAKULTAS HUKUM UNISSULA</span>
            </span>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md text-heading hover:text-primary hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Baris 2 — Menu utama, rata kanan-kiri dengan jarak antaritem sama rata */}
        <div className="hidden lg:block">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-11">
            <DesktopNav navLinks={navLinks} />
          </div>
        </div>
      </div>

      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navLinks={navLinks}
        checkIsActive={checkIsActive}
      />
    </header>
  );
}
