import React from 'react';
import { equipmentList } from '../data/solutionsData';

export default function EquipmentSection() {
  return (
    <section id="equipements" className="py-16 sm:py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#14a992] text-sm font-semibold tracking-wider uppercase">
            Nos Équipements
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
            Matériel &amp; Équipements d'Assainissement
          </h2>
          <div className="w-16 h-1 bg-[#14a992] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Un parc d'équipements modernes et performants pour répondre aux exigences techniques des réseaux d'eau et de plomberie lourde.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-52 bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#14a992] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2.5 py-1 text-xs font-medium bg-[#14a992]/10 text-[#14a992] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}