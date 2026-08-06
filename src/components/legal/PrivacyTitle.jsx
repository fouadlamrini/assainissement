/**
 * src/components/privacy/PrivacyTitle.jsx
 * 
 * Titre de section pour les pages légales (Politique de Confidentialité, Mentions Légales).
 * Flexible, accessible et prenant en charge les ancres de navigation (id).
 */

import React from "react";

export default function PrivacyTitle({
  children,
  className = "",
  id,
  ...props
}) {
  return (
    <div className="group relative mb-4 md:mb-5">
      <h2
        id={id}
        className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#14a992] tracking-tight scroll-mt-28 ${className}`}
        {...props}
      >
        {children}
      </h2>
      
      {/* Ligne décorative discrète aux couleurs de la marque */}
      <div className="mt-2 h-0.5 w-10 bg-gradient-to-r from-[#14a992] to-[#85ca51] rounded-full transition-all duration-300 group-hover:w-16" />
    </div>
  );
}