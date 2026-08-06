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

// Configuration SEO locale pour la page d'accueil
const localSeoConfig = {
  title: "Débouchage Canalisation 24h/7j - Intervention Rapide 30 Min",
  description:
    "Entreprise d'assainissement et débouchage de canalisation en urgence. Camion hydrocureur haute pression, inspection caméra vidéo HD. Devis gratuit.",
  keywords:
    "débouchage canalisation, curage évier, urgence plombier, hydrocurage, inspection caméra, assainissement fosse septique, toilette bouchée",
  url: "https://assainissement-theta.vercel.app",
  ogImage: "https://assainissement-theta.vercel.app/assets/logo.png",
};

export default function Home() {
  // Injection dynamique des métadonnées SEO et Open Graph pour le client
  useEffect(() => {
    // 1. Titre de la page
    document.title = localSeoConfig.title;

    // 2. Méta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = localSeoConfig.description;

    // 3. Mots-clés
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = localSeoConfig.keywords;

    // 4. Balise Canonique (Canonical URL)
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = localSeoConfig.url;

    // 5. Configuration Open Graph (Partage Réseaux Sociaux)
    const ogTags = [
      { property: "og:title", content: localSeoConfig.title },
      { property: "og:description", content: localSeoConfig.description },
      { property: "og:url", content: localSeoConfig.url },
      { property: "og:image", content: localSeoConfig.ogImage },
      { property: "og:type", content: "website" },
    ];

    ogTags.forEach((tag) => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", tag.property);
        document.head.appendChild(element);
      }
      element.content = tag.content;
    });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#14a992] selection:text-white flex flex-col justify-between">
      {/* Composant de Navigation global */}
      <Navbar />

      {/* Main sémantique regroupant le flux de contenu principal */}
      <main id="contenu-principal" className="flex-grow">
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

      {/* Éléments d'action persistants flottants (Appel & WhatsApp) */}
      <FloatingTriggers />
    </div>
  );
}