import React from 'react';

export default function CtaSection() {
  return (
    <section className="py-16 bg-[#14a992] text-white relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Besoin d'un Matériel Spécifique ou d'une Intervention Rapide ?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-emerald-50 max-w-2xl mx-auto leading-relaxed">
          Nos équipes techniques sont disponibles pour étudier vos projets d'assainissement, d'installation STEP ou de désinsectisation.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#14a992] font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-colors duration-200 text-center"
          >
            Demander un Devis Gratuit
          </a>
          <a
            href="tel:+212668029443"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#118f7c] hover:bg-[#0e7868] text-white font-semibold rounded-xl border border-white/20 transition-colors duration-200 text-center"
          >
            Appeler un Expert
          </a>
        </div>
      </div>
    </section>
  );
}