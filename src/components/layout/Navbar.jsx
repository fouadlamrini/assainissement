import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Container } from "../ui/BaseComponents";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'home' | 'solutions' | null
  const location = useLocation();

  // Toggle Dropdown f Mobile & Desktop
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Close menus on click
  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <Container>
        <div className="flex items-center h-20">
          
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" onClick={handleLinkClick} className="flex items-center h-12">
              <img
                src="/assets/logo3.png"
                alt="Logo"
                className="h-full w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8">
            
            {/* 1. Page Home + Dropdown Sections */}
            <div className="relative group" onMouseLeave={() => setActiveDropdown(null)}>
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
                  onClick={() => toggleDropdown('home')}
                  onMouseEnter={() => setActiveDropdown('home')}
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
                  <a
                    href="/#services"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14a992] transition-colors"
                  >
                    Nos Services
                  </a>
                  <a
                    href="/#process"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14a992] transition-colors"
                  >
                    Notre Méthode
                  </a>
                  <a
                    href="/#faq"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14a992] transition-colors"
                  >
                    FAQ
                  </a>
                  <a
                    href="/#contact"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14a992] transition-colors"
                  >
                    Contact
                  </a>
                </div>
              )}
            </div>

            {/* 2. Page Solutions Techniques + Dropdown Sections */}
            <div className="relative group" onMouseLeave={() => setActiveDropdown(null)}>
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
                  onClick={() => toggleDropdown('solutions')}
                  onMouseEnter={() => setActiveDropdown('solutions')}
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
                  <a
                    href="/solutions-techniques#equipements"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14a992] transition-colors"
                  >
                    Matériel &amp; Équipements
                  </a>
                  <a
                    href="/solutions-techniques#step"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14a992] transition-colors"
                  >
                    Installation STEP
                  </a>
                  <a
                    href="/solutions-techniques#traitements"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#14a992] transition-colors"
                  >
                    Traitement Anti-Nuisibles
                  </a>
                </div>
              )}
            </div>

          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex flex-1 justify-end">
            <a
              href="tel:+212668029443"
              className="inline-flex items-center gap-2 bg-[#85ca51] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#118f7c] transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              +212 668 029 443
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 py-4 space-y-2 pb-6">
            
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
                  onClick={() => toggleDropdown('mobile-home')}
                  className="p-1 text-slate-500"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'mobile-home' ? 'rotate-180 text-[#14a992]' : ''}`} />
                </button>
              </div>

              {activeDropdown === 'mobile-home' && (
                <div className="pl-6 space-y-1 mt-1 border-l-2 border-[#14a992]/20 ml-4">
                  <a href="/#services" onClick={handleLinkClick} className="block px-3 py-2 text-sm font-medium text-slate-600">
                    Nos Services
                  </a>
                  <a href="/#process" onClick={handleLinkClick} className="block px-3 py-2 text-sm font-medium text-slate-600">
                    Notre Méthode
                  </a>
                  <a href="/#faq" onClick={handleLinkClick} className="block px-3 py-2 text-sm font-medium text-slate-600">
                    FAQ
                  </a>
                  <a href="/#contact" onClick={handleLinkClick} className="block px-3 py-2 text-sm font-medium text-slate-600">
                    Contact
                  </a>
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
                  onClick={() => toggleDropdown('mobile-solutions')}
                  className="p-1 text-slate-500"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'mobile-solutions' ? 'rotate-180 text-[#14a992]' : ''}`} />
                </button>
              </div>

              {activeDropdown === 'mobile-solutions' && (
                <div className="pl-6 space-y-1 mt-1 border-l-2 border-[#14a992]/20 ml-4">
                  <a href="/solutions-techniques#equipements" onClick={handleLinkClick} className="block px-3 py-2 text-sm font-medium text-slate-600">
                    Matériel &amp; Équipements
                  </a>
                  <a href="/solutions-techniques#step" onClick={handleLinkClick} className="block px-3 py-2 text-sm font-medium text-slate-600">
                    Installation STEP
                  </a>
                  <a href="/solutions-techniques#traitements" onClick={handleLinkClick} className="block px-3 py-2 text-sm font-medium text-slate-600">
                    Traitement Anti-Nuisibles
                  </a>
                </div>
              )}
            </div>

            {/* Mobile CTA */}
            <div className="px-4 pt-4">
              <a
                href="tel:+212668029443"
                className="flex items-center justify-center gap-2 bg-[#14a992] text-white py-3 rounded-xl font-bold hover:bg-[#118f7c] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +212 668 029 443
              </a>
            </div>

          </div>
        )}
      </Container>
    </nav>
  );
}