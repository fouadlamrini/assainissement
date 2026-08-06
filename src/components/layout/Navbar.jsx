import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Container } from "../ui/BaseComponents";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'home' | 'solutions' | 'mobile-home' | 'mobile-solutions' | null
  const location = useLocation();
  const navRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle Dropdown for Mobile & Desktop
  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close menus on navigation click
  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"
      aria-label="Navigation principale"
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-1">
            <Link
              to="/"
              onClick={handleLinkClick}
              aria-label="Letraci - Page d'accueil"
              className="inline-flex items-center h-12 focus:outline-none focus:ring-2 focus:ring-[#14a992] rounded-lg"
            >
              <img
                src="/assets/logo3.png"
                alt="Letraci - Société d'assainissement et débouchage au Maroc"
                width="160"
                height="48"
                className="h-12 w-auto object-contain"
                loading="eager"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8">
            
            {/* 1. Page Home + Dropdown Sections */}
            <div
              className="relative group"
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-1">
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className={`text-sm font-semibold transition-colors py-2 ${
                    location.pathname === "/" ? "text-[#14a992]" : "text-slate-600 hover:text-[#14a992]"
                  }`}
                >
                  Accueil
                </Link>
                <button
                  type="button"
                  onClick={() => toggleDropdown('home')}
                  onMouseEnter={() => setActiveDropdown('home')}
                  aria-expanded={activeDropdown === 'home'}
                  aria-label="Menu déroulant Accueil"
                  className="p-1 text-slate-500 hover:text-[#14a992] transition-colors focus:outline-none"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'home' ? 'rotate-180 text-[#14a992]' : ''}`} />
                </button>
              </div>

              {/* Home Submenu Dropdown */}
              {activeDropdown === 'home' && (
                <div 
                  className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-lg border border-slate-100 py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => setActiveDropdown('home')}
                >
                  <Link
                    to="/#services"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14a992] transition-colors"
                  >
                    Nos Services
                  </Link>
                  <Link
                    to="/#process"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14a992] transition-colors"
                  >
                    Notre Méthode
                  </Link>
                  <Link
                    to="/#faq"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14a992] transition-colors"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/#contact"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14a992] transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>

            {/* 2. Page Solutions Techniques + Dropdown Sections */}
            <div
              className="relative group"
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-1">
                <Link
                  to="/solutions-techniques"
                  onClick={handleLinkClick}
                  className={`text-sm font-semibold transition-colors py-2 ${
                    location.pathname === "/solutions-techniques" ? "text-[#14a992]" : "text-slate-600 hover:text-[#14a992]"
                  }`}
                >
                  Solutions Techniques
                </Link>
                <button
                  type="button"
                  onClick={() => toggleDropdown('solutions')}
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  aria-expanded={activeDropdown === 'solutions'}
                  aria-label="Menu déroulant Solutions Techniques"
                  className="p-1 text-slate-500 hover:text-[#14a992] transition-colors focus:outline-none"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180 text-[#14a992]' : ''}`} />
                </button>
              </div>

              {/* Solutions Submenu Dropdown */}
              {activeDropdown === 'solutions' && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-lg border border-slate-100 py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => setActiveDropdown('solutions')}
                >
                  <Link
                    to="/solutions-techniques#equipements"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14a992] transition-colors"
                  >
                    Matériel &amp; Équipements
                  </Link>
                  <Link
                    to="/solutions-techniques#step"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14a992] transition-colors"
                  >
                    Installation STEP
                  </Link>
                  <Link
                    to="/solutions-techniques#traitements"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14a992] transition-colors"
                  >
                    Traitement Anti-Nuisibles
                  </Link>
                </div>
              )}
            </div>

          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex flex-1 justify-end">
            <a
              href="tel:+212668029443"
              className="inline-flex items-center gap-2 bg-[#14a992] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#118f7c] transition-all shadow-md focus:ring-2 focus:ring-[#14a992] focus:ring-offset-2"
            >
              <Phone className="w-4 h-4" />
              <span>+212 668 029 443</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="md:hidden ml-auto p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#14a992]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 py-4 space-y-2 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
            
            {/* Mobile Home Accordion */}
            <div>
              <div className="flex items-center justify-between px-4 py-2 rounded-xl hover:bg-slate-50">
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="text-base font-semibold text-slate-700"
                >
                  Accueil
                </Link>
                <button
                  type="button"
                  onClick={() => toggleDropdown('mobile-home')}
                  aria-expanded={activeDropdown === 'mobile-home'}
                  aria-label="Sous-menu Accueil"
                  className="p-1 text-slate-500"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'mobile-home' ? 'rotate-180 text-[#14a992]' : ''}`} />
                </button>
              </div>

              {activeDropdown === 'mobile-home' && (
                <div className="pl-6 space-y-1 mt-1 border-l-2 border-[#14a992]/20 ml-4">
                  <Link to="/#services" onClick={handleLinkClick} className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#14a992]">
                    Nos Services
                  </Link>
                  <Link to="/#process" onClick={handleLinkClick} className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#14a992]">
                    Notre Méthode
                  </Link>
                  <Link to="/#faq" onClick={handleLinkClick} className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#14a992]">
                    FAQ
                  </Link>
                  <Link to="/#contact" onClick={handleLinkClick} className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#14a992]">
                    Contact
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Solutions Accordion */}
            <div>
              <div className="flex items-center justify-between px-4 py-2 rounded-xl hover:bg-slate-50">
                <Link
                  to="/solutions-techniques"
                  onClick={handleLinkClick}
                  className="text-base font-semibold text-slate-700"
                >
                  Solutions Techniques
                </Link>
                <button
                  type="button"
                  onClick={() => toggleDropdown('mobile-solutions')}
                  aria-expanded={activeDropdown === 'mobile-solutions'}
                  aria-label="Sous-menu Solutions Techniques"
                  className="p-1 text-slate-500"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'mobile-solutions' ? 'rotate-180 text-[#14a992]' : ''}`} />
                </button>
              </div>

              {activeDropdown === 'mobile-solutions' && (
                <div className="pl-6 space-y-1 mt-1 border-l-2 border-[#14a992]/20 ml-4">
                  <Link to="/solutions-techniques#equipements" onClick={handleLinkClick} className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#14a992]">
                    Matériel &amp; Équipements
                  </Link>
                  <Link to="/solutions-techniques#step" onClick={handleLinkClick} className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#14a992]">
                    Installation STEP
                  </Link>
                  <Link to="/solutions-techniques#traitements" onClick={handleLinkClick} className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#14a992]">
                    Traitement Anti-Nuisibles
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile CTA */}
            <div className="px-4 pt-4">
              <a
                href="tel:+212668029443"
                className="flex items-center justify-center gap-2 bg-[#14a992] text-white py-3 rounded-xl font-bold hover:bg-[#118f7c] transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+212 668 029 443</span>
              </a>
            </div>

          </div>
        )}
      </Container>
    </nav>
  );
}