/**
 * src/components/layout/Footer.jsx
 *
 * Pied de page
 */

import React from "react";
import { Phone } from "lucide-react";
import { Container } from "../ui/BaseComponents";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row justify-between gap-10">
          {/* Logo + Description */}
          <div className="max-w-sm">
            <img
              src="/assets/logo3.png"
              alt="Logo"
              className="h-10 w-auto object-contain mb-4"
            />

            <p className="text-sm leading-relaxed">
              Solutions professionnelles pour le débouchage,
              l'assainissement, le pompage et la vidange.
              Intervention rapide 24h/24 et 7j/7.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Navigation
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  Accueil
                </a>
              </li>

              <li>
                <a
                  href="/solutions-techniques"
                  className="hover:text-white transition-colors"
                >
                  Solutions Techniques
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href="tel:+212668029443"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={16} />
                +212 668 029 443
              </a>

              <a
                href="https://wa.me/212668029443"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <img
                  src="/assets/whatsapp.jpg"
                  alt="WhatsApp"
                  className="w-5 h-5 object-cover rounded-full"
                />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-center md:text-left">
          <p>© {currentYear} Tous droits réservés.</p>

          <p>Intervention rapide 24h/24 • 7j/7</p>
        </div>
      </Container>
    </footer>
  );
}