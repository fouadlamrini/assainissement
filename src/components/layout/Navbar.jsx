/**
 * src/components/layout/Navbar.jsx
 *
 * Barre de navigation fixe avec intégration du logo officiel de la marque.
 */

import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "../ui/BaseComponents";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <Container>
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex-1">
            <a href="#" className="flex items-center h-12">
              <img
                src="/assets/logo3.png"
                alt="Logo"
                className="h-full w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8">
            <a
              href="#services"
              className="text-sm font-semibold text-slate-600 hover:text-[#14a992] transition-colors"
            >
              Nos Services
            </a>

            <a
              href="#process"
              className="text-sm font-semibold text-slate-600 hover:text-[#14a992] transition-colors"
            >
              Notre Méthode
            </a>

            <a
              href="#faq"
              className="text-sm font-semibold text-slate-600 hover:text-[#14a992] transition-colors"
            >
              FAQ
            </a>

            <a
              href="#contact"
              className="text-sm font-semibold text-slate-600 hover:text-[#14a992] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex flex-1 justify-end">
            <a
              href="tel:+212668029443"
              className="inline-flex items-center gap-2 bg-[#14a992] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#118f7c] transition-all shadow-md"
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
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 py-4 space-y-3 pb-6">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-xl"
            >
              Nos Services
            </a>

            <a
              href="#process"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-xl"
            >
              Notre Méthode
            </a>

            <a
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-xl"
            >
              FAQ
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-xl"
            >
              Contact
            </a>

            <div className="px-4 pt-2">
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