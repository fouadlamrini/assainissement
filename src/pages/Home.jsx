/**
 * src/pages/Home.jsx
 * 
 * Page d'accueil principale de l'application (Landing Page).
 * Orchestre les sections dans un ordre sémantique et marketing optimisé
 * pour la conversion de leads. Injecte les balises de métadonnées SEO.
 */

import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Process from "../components/sections/Process";
import Statistics from "../components/sections/Statistics";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import ContactCTA from "../components/sections/ContactCTA";
import Footer from "../components/layout/Footer";
import FloatingTriggers from "../components/common/FloatingTriggers";

// كائن الـ SEO محلياً لإنهاء مشكلة الـ Import وضمان اشتغال الصفحة فوراً
const localSeoConfig = {
  title: "Débouchage Canalisation 24h/7j - Intervention Rapide 30 Min",
  description: "Entreprise d'assainissement et débouchage de canalisation en urgence. Camion hydrocureur haute pression, inspection caméra vidéo HD. Devis gratuit.",
  keywords: "débouchage canalisation, curage évier, urgence plombier, hydrocurage, inspection caméra, assainissement fosse septique, toilette bouchée",
  url: "https://assainissement-theta.vercel.app",
  // تحديث الصورة باش تولي تقرأ اللوغو ديالك مباشرة من Vercel ملي السيت يتبارطاجا
  ogImage: "https://assainissement-theta.vercel.app/assets/logo.png"
};

export default function Home() {
  // Injection dynamique des métadonnées SEO et Open Graph pour le client
  useEffect(() => {
    document.title = localSeoConfig.title;
    
    // Mise à jour ou création de la méta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = localSeoConfig.description;

    // Mise à jour des mots-clés
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = localSeoConfig.keywords;

    // Configuration Open Graph pour le partage sur les réseaux (WhatsApp, Facebook...)
    const ogTags = [
      { property: "og:title", content: localSeoConfig.title },
      { property: "og:description", content: localSeoConfig.description },
      { property: "og:url", content: localSeoConfig.url },
      { property: "og:image", content: localSeoConfig.ogImage },
      { property: "og:type", content: "website" }
    ];

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.content = tag.content;
    });

  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Composant de Navigation global */}
      <Navbar />

      {/* Main sémantique regroupant le flux de contenu */}
      <main id="contenu-principal">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Statistics />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>

      {/* Pied de page institutionnel */}
      <Footer />

      {/* Éléments d'action persistants flottants */}
      <FloatingTriggers />
    </div>
  );
}