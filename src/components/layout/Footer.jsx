/**
 * src/components/layout/Footer.jsx
 *
 * Pied de page
 */

import React from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Container } from "../ui/BaseComponents";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <Container>
        <div className="py-10 grid gap-10 lg:grid-cols-3">
          {/* Logo + Description */}
          <div className="max-w-sm">
            <Link to="/">
              <img
                src="/assets/logo3.png"
                alt="Logo"
                className="h-10 w-auto object-contain mb-4"
              />
            </Link>

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
                <Link
                  to="/"
                  className="hover:text-white transition-colors"
                >
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  to="/solutions-techniques"
                  className="hover:text-white transition-colors"
                >
                  Solutions Techniques
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>

              <li>
                <Link
                  to="/mentions-legales"
                  className="hover:text-white transition-colors"
                >
                  Mentions légales
                </Link>
              </li>

              <li>
                <Link
                  to="/conditions-generales-de-vente"
                  className="hover:text-white transition-colors"
                >
                  Conditions Générales de Vente
                </Link>
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
        <div className="border-t border-slate-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-center md:text-left">
            © {currentYear} Tous droits réservés.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Politique de confidentialité
            </Link>

            <Link
              to="/mentions-legales"
              className="hover:text-white transition-colors"
            >
              Mentions légales
            </Link>

            <Link
              to="/conditions-generales-de-vente"
              className="hover:text-white transition-colors"
            >
              CGV
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}