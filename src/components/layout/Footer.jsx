import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { Container } from "../ui/BaseComponents";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <Container>
        <div className="py-12 grid gap-10 lg:grid-cols-3">
          
          {/* Logo + Description */}
          <div className="max-w-sm">
            <Link 
              to="/" 
              aria-label="Letraci - Page d'accueil" 
              className="inline-block focus:outline-none focus:ring-2 focus:ring-[#14a992] rounded-lg mb-4"
            >
              <img
                src="/assets/logo3.png"
                alt="Letraci - Assainissement et Débouchage Maroc"
                width="160"
                height="40"
                loading="lazy"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-sm leading-relaxed text-slate-400">
              Solutions professionnelles pour le débouchage, l'assainissement, 
              le pompage et la vidange. Des interventions rapides et adaptées à vos besoins partout au Maroc.
            </p>
          </div>

          {/* Liens utiles */}
          <nav aria-label="Navigation de pied de page">
            <h3 className="text-white font-semibold text-base mb-4">
              Liens utiles
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#14a992] transition-colors focus:outline-none focus:underline"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions-techniques"
                  className="hover:text-[#14a992] transition-colors focus:outline-none focus:underline"
                >
                  Solutions Techniques
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#14a992] transition-colors focus:outline-none focus:underline"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  to="/mentions-legales"
                  className="hover:text-[#14a992] transition-colors focus:outline-none focus:underline"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  to="/conditions-generales-de-vente"
                  className="hover:text-[#14a992] transition-colors focus:outline-none focus:underline"
                >
                  Conditions Générales de Vente
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact (Semantic Address Block) */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">
              Contact &amp; Urgences
            </h3>

            <address className="not-italic space-y-3 text-sm">
              <a
                href="tel:+212668029443"
                className="flex items-center gap-2.5 hover:text-[#14a992] transition-colors focus:outline-none focus:underline"
                aria-label="Appeler le +212 668 029 443"
              >
                <Phone size={18} className="text-[#14a992] shrink-0" />
                <span>+212 668 029 443</span>
              </a>

              <a
                href="mailto:contact@letraci.com"
                className="flex items-center gap-2.5 hover:text-[#14a992] transition-colors focus:outline-none focus:underline"
                aria-label="Envoyer un email à contact@letraci.com"
              >
                <Mail size={18} className="text-[#14a992] shrink-0" />
                <span>contact@letraci.com</span>
              </a>

              <a
                href="https://wa.me/212668029443"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-green-400 transition-colors focus:outline-none focus:underline"
                aria-label="Discuter sur WhatsApp (S'ouvre dans une nouvelle fenêtre)"
              >
                <img
                  src="/assets/whatsapp.jpg"
                  alt="WhatsApp Letraci"
                  width="20"
                  height="20"
                  loading="lazy"
                  className="w-5 h-5 rounded-full object-cover shrink-0"
                />
                <span>WhatsApp Instantané</span>
              </a>
            </address>
          </div>
        </div>

        {/* Copyright & Sub-links */}
        <div className="border-t border-slate-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-center md:text-left text-slate-500">
            © {currentYear} LETRACI. Tous droits réservés.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/privacy-policy"
              className="hover:text-[#14a992] transition-colors focus:outline-none focus:underline"
            >
              Confidentialité
            </Link>
            <Link
              to="/mentions-legales"
              className="hover:text-[#14a992] transition-colors focus:outline-none focus:underline"
            >
              Mentions Légales
            </Link>
            <Link
              to="/conditions-generales-de-vente"
              className="hover:text-[#14a992] transition-colors focus:outline-none focus:underline"
            >
              CGV
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}