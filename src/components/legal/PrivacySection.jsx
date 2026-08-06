/**
 * src/components/privacy/PrivacySection.jsx
 * 
 * Composant de section pour les pages Politique de Confidentialité / Mentions Légales.
 * Gère l'affichage structuré des titres, paragraphes, listes et contenus personnalisés.
 */

import React from "react";
import PrivacyTitle from "./PrivacyTitle";

export default function PrivacySection({
  title,
  content,
  list,
  children,
  className = "",
}) {
  const hasList = Array.isArray(list) && list.length > 0;

  return (
    <section className={`mb-10 md:mb-12 ${className}`}>
      {/* Titre de la section */}
      {title && <PrivacyTitle>{title}</PrivacyTitle>}

      {/* Paragraphe principal */}
      {content && (
        <p className="text-slate-600 leading-relaxed text-base sm:text-lg whitespace-pre-line">
          {content}
        </p>
      )}

      {/* Liste à puces avec puces personnalisées au couleur du thème */}
      {hasList && (
        <ul className="mt-4 space-y-2.5 pl-5 list-disc marker:text-[#14a992] text-slate-600 text-base sm:text-lg">
          {list.map((item, index) => (
            <li 
              key={typeof item === "string" ? `${item.substring(0, 20)}-${index}` : index} 
              className="leading-relaxed pl-1"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Contenu personnalisé facultatif transmis via children */}
      {children && (
        <div className="mt-4 text-slate-600 leading-relaxed">
          {children}
        </div>
      )}
    </section>
  );
}