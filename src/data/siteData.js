/**
 * src/data/siteData.js
 * 
 * Configuration globale et données du site (Version Française avec CDN Images).
 */

export const companyConfig = {
  name: "HydroAssainissement",
  phone: "+33189204050",
  phoneFormatted: "01 89 20 40 50",
  whatsapp: "+33600000000",
  whatsappMessage: "Bonjour, j'ai besoin d'une intervention d'urgence pour mes canalisations.",
  email: "contact@hydro-assainissement.fr",
  address: {
    street: "12 Rue de la Paix",
    city: "Paris",
    zipCode: "75002",
    country: "France"
  },
  hours: "Disponibilité 24h/24 et 7j/7",
  geo: {
    latitude: 48.8698,
    longitude: 2.3315
  }
};

// روابط الصور والشعار عبر الـ CDN لضمان سرعة فائقة
export const assetsConfig = {
  logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=120&h=120&q=80",
  heroBg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80", // خلفية ورشة عمل احترافية مموهة
};

export const servicesData = [
  {
    id: "debouchage",
    title: "Débouchage Haute Pression",
    description: "Élimination radicale des bouchons complexes (lingettes, calcaire, graisses) via hydrocurage hydrodynamique.",
    imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&w=800&q=80", // صورة فني ومعدات ضغط
    price: "À partir de 90€",
    features: ["Intervention en 30 min", "Camion hydrocureur", "Garantie de résultat"]
  },
  {
    id: "curage",
    title: "Curage & Détartrage",
    description: "Nettoyage intégral de vos canalisations pour restaurer le diamètre initial et éviter les futurs engorgements.",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80", // صورة أدوات صناعية حديثة
    price: "À partir de 149€",
    features: ["Haute pression", "Élimination du tartre", "Rapport technique"]
  },
  {
    id: "inspection",
    title: "Inspection Caméra Vidéo",
    description: "Passage d'une caméra endoscopique HD pour localiser précisément les fissures, racines ou anomalies.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", // صورة كاميرا تشخيص وفحص
    price: "À partir de 109€",
    features: ["Rapport vidéo fourni", "Localisation précise", "Caméra étanche HD"]
  }
];

export const navigationLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#pourquoi" },
  { label: "Notre Process", href: "#process" },
  { label: "Avis", href: "#avis" },
  { label: "FAQ", href: "#faq" }
];