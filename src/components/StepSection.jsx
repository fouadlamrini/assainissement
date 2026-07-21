import React from 'react';
import { stepProcess } from '../data/solutionsData';

export default function StepSection() {
  return (
    <section id="step" className="py-16 sm:py-20 bg-white border-t border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src="/assets/recyclage.jpg"
                alt="Station d'Épuration STEP"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 bg-[#14a992] text-xs font-semibold uppercase tracking-wider rounded-md mb-2">
                  Environnement &amp; Recyclage
                </span>
                <h3 className="text-xl font-bold">Traitement Écologique des Eaux</h3>
                <p className="text-xs text-slate-200 mt-1">Conforme aux normes environnementales marocaines et internationales.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Process Steps */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-[#14a992] text-sm font-semibold tracking-wider uppercase">Ingénierie Hydraulique</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Installation des Stations d’Épuration (STEP)
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Nous accompagnons les résidences, complexes touristiques et sites industriels dans la conception, la pose et la mise en marche de stations d’épuration autonomes.
              </p>
            </div>

            {/* Timeline Process */}
            <div className="space-y-6">
              {stepProcess.map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#14a992]/30 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#14a992] text-white font-bold text-lg flex items-center justify-center shadow-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}