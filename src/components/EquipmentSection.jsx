/**
 * src/components/sections/EquipmentSection.jsx
 *
 * Section Nos Équipements.
 * Interactive & Scroll-Triggered Staggered Animations.
 */

import React, { useEffect, useRef, useState } from "react";
import { equipmentList } from "../data/solutionsData";

export default function EquipmentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="equipements"
      ref={sectionRef}
      className="py-16 sm:py-20 bg-slate-50 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Animé */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-[#14a992] text-sm font-semibold tracking-wider uppercase">
            Nos Équipements
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
            Des équipements adaptés à chaque intervention
          </h2>

          <div className="w-16 h-1 bg-[#14a992] mx-auto mt-3 rounded-full" />

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Nous utilisons des équipements professionnels afin de réaliser les
            interventions de débouchage, de curage, de pompage et d'inspection
            des réseaux d'assainissement dans les meilleures conditions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentList.map((item, index) => {
            const delay = `${(index % 3) * 0.15 + 0.1}s`;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-xl hover:border-[#14a992]/40 hover:-translate-y-2 transition-all duration-700 ease-out flex flex-col group transform ${
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-16 opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: isVisible ? delay : "0s",
                }}
              >
                {/* Image */}
                <div className="relative h-52 bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#14a992] transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2.5 py-1 text-xs font-medium bg-[#14a992]/10 text-[#14a992] rounded-md transition-colors duration-200 group-hover:bg-[#14a992] group-hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}