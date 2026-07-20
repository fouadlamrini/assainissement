/**
 * src/components/layout/Footer.jsx
 * 
 * Pied de page avec intégration du logo de la marque et informations légales standard.
 */

import React from "react";
import { Container } from "../ui/BaseComponents";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8">
          
          {/* Footer Logo */}
          <div className="h-10 block">
            <img 
              src="/assets/logo3.png" 
              alt="Logo" 
              className="h-full w-auto object-contain " 
              /* brightness-0 invert كتحول اللوغو للون الأبيض باش يجي متناسق مع الخلفية المظلمة */
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-white transition-colors">Notre Méthode</a>
            <a href="#faq" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs gap-4 text-center sm:text-left">
          <p>© {currentYear} Tous droits réservés. Intervention rapide 24h/7j.</p>
          <p>Développé avec soin pour une visibilité SEO maximale.</p>
        </div>
      </Container>
    </footer>
  );
}