/**
 * src/components/sections/EquipmentSection.jsx
 *
 * Section Nos Équipements.
 * Interactive & Scroll-Triggered Staggered Animations.
 */

import React, { useEffect, useRef, useState } from "react";
import { Section, Container, SectionTitle } from "./ui/BaseComponents";
import { equipmentList } from "../data/solutionsData";

// Image de secours standard en cas d'erreur d'affichage
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80";

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

  const hasEquipment = Array.isArray(equipmentList) && equipmentList.length > 0;

  return (
    <Section
      id="equipements"
      ref={sectionRef}
      className="bg-slate-50 border-y border-slate-100"
    >
      <Container>
        {/* Section Title Animé */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <SectionTitle
            subtitle="Nos Équipements"
            title="Des équipements adaptés à chaque intervention"
            centered={true}
          />
          <p className="-mt-8 mb-12 text-center text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Nous utilisons des équipements professionnels afin de réaliser les
            interventions de débouchage, de curage, de pompage et d'inspection
            des réseaux d'assainissement dans les meilleures conditions.
          </p>
        </div>

        {/* Cards Grid */}
        {hasEquipment && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentList.map((item, index) => {
              const delay = `${(index % 3) * 0.15 + 0.1}s`;

              return (
                <div
                  key={item.id || index}
                  className={`bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-xl hover:border-[#14a992]/40 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col group transform ${
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
                      src={item.image || FALLBACK_IMAGE}
                      alt={item.title || "Équipement d'assainissement"}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = FALLBACK_IMAGE;
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
                    {Array.isArray(item.tags) && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 mt-auto">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2.5 py-1 text-xs font-semibold bg-[#14a992]/10 text-[#14a992] rounded-md transition-colors duration-200 group-hover:bg-[#14a992] group-hover:text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </Section>
  );
}