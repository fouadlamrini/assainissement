/**
 * src/components/common/FloatingTriggers.jsx
 * 
 * Composants interactifs flottants fixes.
 * Contient le bouton d'accès rapide WhatsApp (avec image locale) et le bouton de retour en haut (Back To Top).
 * S'affiche et s'estompe de manière fluide en fonction de la position du défilement.
 */

import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { cn } from "../../utils/cn";

export default function FloatingTriggers() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Configuration WhatsApp
  const rawPhoneNumber = "+212668029443";
  const cleanPhoneNumber = rawPhoneNumber.replace(/[^\d]/g, ""); // Removal of '+' and non-digits for wa.me URL standard
  const defaultMessage = "Bonjour, je souhaite demander un devis en urgence pour un service d'assainissement.";
  
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;

  // Écoute du défilement pour afficher le bouton de retour en haut (Optimisé avec passive listener)
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 pointer-events-none">
      
      {/* 1. Bouton Flottant WhatsApp - Avec image personnalisée & Fallback */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-600/20 transition-all duration-300 hover:scale-110 active:scale-95 group relative border border-slate-100"
        aria-label="Discuter en direct avec un dépanneur sur WhatsApp"
      >
        {/* Effet d'onde radar permanent */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        
        {/* Image WhatsApp locale ou Icône de secours en cas d'erreur */}
        {!imageError ? (
          <img 
            src="/assets/whatsapp.jpg" 
            alt="WhatsApp" 
            onError={() => setImageError(true)}
            className="w-full h-full object-cover relative z-10 rounded-full"
          />
        ) : (
          <div className="w-full h-full bg-[#25D366] rounded-full flex items-center justify-center relative z-10 text-white shadow-inner">
            <MessageCircle className="w-7 h-7 fill-current" />
          </div>
        )}
        
        {/* Tooltip élégant au survol sur desktop */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md shadow-slate-950/20 hidden sm:inline-block pointer-events-none z-20">
          Urgence WhatsApp
        </span>
      </a>

      {/* 2. Bouton Retour en Haut (Back To Top) */}
      <button
        onClick={scrollToTop}
        className={cn(
          "pointer-events-auto w-11 h-11 bg-white border border-slate-200 text-slate-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-slate-50 hover:text-[#14a992] hover:border-[#14a992]/30 active:scale-95 cursor-pointer",
          showBackToTop 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        )}
        aria-label="Retourner en haut de la page"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    </div>
  );
}