/**
 * src/components/sections/PageHeader.jsx
 *
 * Header principal de la page avec animations d'entrée.
 * Dynamique, réutilisable et optimisé pour le SEO.
 */

import React, { useEffect, useRef, useState } from "react";
import { Container } from "./ui/BaseComponents";
import { cn } from "../utils/cn";

// Image de fond par défaut
const DEFAULT_BG_IMAGE = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80";

export default function PageHeader({
  badge = "Solutions Techniques & Assainissement",
  title = "Matériel, Installation STEP & Traitements Anti-Nuisibles",
  description = "Découvrez nos équipements spécialisés pour la plomberie lourde, notre expertise dans les stations d’épuration (STEP), et nos solutions efficaces de traitement contre les insectes et nuisibles de canalisation.",
  bgImage = DEFAULT_BG_IMAGE,
  className,
  children
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [imgError, setImgError] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden border-b border-slate-800",
        className
      )}
    >
      {/* Background Image with Overlay & Smooth Zoom */}
      {!imgError && (
        <div className="absolute inset-0 z-0 opacity-25 overflow-hidden pointer-events-none">
          <img
            src={bgImage}
            alt={typeof title === "string" ? title : "Header Image"}
            className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-out ${
              isVisible ? "scale-105" : "scale-100"
            }`}
            onError={() => setImgError(true)}
          />
        </div>
      )}

      {/* Radial Light Effect & Bottom Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#14a992]/25 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-0 pointer-events-none" />

      {/* Main Content Container */}
      <Container className="relative z-10 text-center">
        {/* Badge */}
        {badge && (
          <div
            className={`transition-all duration-700 ease-out transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#14a992]/20 text-[#14a992] border border-[#14a992]/30 mb-6 backdrop-blur-sm hover:bg-[#14a992]/30 transition-colors duration-300">
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        {title && (
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto transition-all duration-700 delay-150 ease-out transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {title}
          </h1>
        )}

        {/* Paragraph */}
        {description && (
          <p
            className={`mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ease-out transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {description}
          </p>
        )}

        {/* Extra elements (Breadcrumbs / Custom CTA if needed) */}
        {children && (
          <div
            className={`mt-8 transition-all duration-700 delay-500 ease-out transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {children}
          </div>
        )}
      </Container>
    </header>
  );
}