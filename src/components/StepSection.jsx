/**
 * src/components/sections/StepSection.jsx
 *
 * Section Installation de Stations d'Épuration (STEP).
 * Interactive & Scroll-Triggered Staggered Animations.
 */

import React, { useEffect, useRef, useState } from "react";
import { Section, Container } from "../ui/BaseComponents";
import { stepProcess } from "../../data/solutionsData";

const FALLBACK_STEP_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80";

export default function StepSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState("/assets/recyclage.jpg");
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

  const hasProcessSteps = Array.isArray(stepProcess) && stepProcess.length > 0;

  return (
    <Section
      id="step"
      ref={sectionRef}
      className="bg-white border-t border-slate-100"
    >
      <Container>
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Banner */}
          <div className="lg:col-span-5 relative">
            <div
              className={`relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group transition-all duration-700 ease-out transform ${
                isVisible
                  ? "translate-x-0 opacity-100 scale-100"
                  : "-translate-x-12 opacity-0 scale-95"
              }`}
            >
              <img
                src={imgSrc}
                alt="Station d'épuration (STEP)"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={() => setImgSrc(FALLBACK_STEP_IMAGE)}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 bg-[#14a992] text-xs font-semibold uppercase tracking-wider rounded-md mb-2">
                  Traitement des Eaux
                </span>

                <h3 className="text-xl font-bold">
                  Installation de Stations d'Épuration (STEP)
                </h3>

                <p className="text-xs text-slate-200 mt-1">
                  Des solutions adaptées aux besoins des particuliers, des
                  professionnels et des collectivités.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            {/* Header Text */}
            <div
              className={`mb-8 transition-all duration-700 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="text-[#14a992] text-sm font-semibold tracking-wider uppercase">
                Nos Solutions
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
                Installation de Stations d'Épuration (STEP)
              </h2>

              <p className="mt-3 text-slate-600 leading-relaxed">
                Nous réalisons l'étude, l'installation et la mise en service de
                stations d'épuration (STEP) adaptées aux besoins des résidences,
                des établissements touristiques, des sites industriels et des
                collectivités.
              </p>
            </div>

            {/* Timeline Process */}
            {hasProcessSteps && (
              <div className="space-y-4 sm:space-y-6">
                {stepProcess.map((item, index) => {
                  const delay = `${index * 0.15 + 0.2}s`;

                  return (
                    <div
                      key={item.step || index}
                      className={`flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#14a992]/40 hover:bg-white hover:shadow-md transition-all duration-500 ease-out transform group ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-12 opacity-0"
                      }`}
                      style={{
                        transitionDelay: isVisible ? delay : "0s",
                      }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#14a992] text-white font-bold text-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        {item.step}
                      </div>

                      <div className="flex-1">
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-[#14a992] transition-colors duration-200">
                          {item.title}
                        </h4>

                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </Container>
    </Section>
  );
}