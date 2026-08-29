import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

import { navLinks } from "../data/navLinks";
import TopBar from "./Navbar/TopBar";
import DesktopNav from "./Navbar/DesktopNav";
import MobileNav from "./Navbar/MobileNav";

export default function Navbar() {
  const location = useLocation();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("ID");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const checkIsActive = (href) => {
    if (href.startsWith("/#") || href.startsWith("#")) return false;
    return location.pathname === href || (href !== "/" && location.pathname.startsWith(href));
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm font-body">
      <TopBar
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Navbar bar — h-16 fixed, shadow muncul saat isScrolled */}
      <div className={`bg-white h-16 transition-shadow duration-200 ${isScrolled ? "shadow-md" : ""}`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-primary font-heading text-xl font-bold tracking-normal hover:opacity-95 transition-opacity shrink-0"
          >
            MKn UNISSULA
          </Link>

          {/* Desktop Nav — items-stretch + h-full agar border-b-2 mepet bawah navbar */}
          <DesktopNav navLinks={navLinks} />

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md text-heading hover:text-primary hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navLinks={navLinks}
        checkIsActive={checkIsActive}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />
    </header>
  );
}
