/**
 * src/components/sections/Services.jsx
 * 
 * Section Services - Présentation des prestations clés en assainissement.
 * Redirection directe vers WhatsApp avec message personnalisé par service.
 */


import { 
  Droplet, 
  Wrench, 
  Truck, 
  Eye, 
  ShieldAlert, 
  Building2 
} from "lucide-react";
import { Container, Section, SectionTitle } from "../ui/BaseComponents";

const servicesList = [
  {
    icon: Wrench,
    title: "Débouchage de Canalisation",
    description: "Intervention rapide pour déboucher vos éviers, WC, lavabos, douches et regards extérieurs. Élimination radicale de tous types de bouchons.",
    tag: "Urgence 24h/7j",
    image: "/assets/Debouchage.jpg"
  },
  {
    icon: Droplet,
    title: "Curage de Réseaux & Canalisations",
    description: "Nettoyage haute pression (hydrocurage) pour détartrer les parois, éliminer les graisses et prévenir les futurs engorgements ou mauvaises odeurs.",
    tag: "Prévention & Entretien",
    image: "/assets/curage.jpg"
  },
  {
    icon: Truck,
    title: "Vidange & Pompage de Fosses",
    description: "Pompage et vidange complète de fosses septiques, bacs à graisse et stations de relevage avec transport des déchets vers des centres agréés.",
    tag: "Matériel Professionnel",
    image: "/assets/vidange.jpg"
  },
  {
    icon: Eye,
    title: "Inspection Caméra Vidéo HD",
    description: "Exploration endoscopique de vos réseaux pour localiser précisément les bouchons, les fissures, les racines ou l'affaissement des canalisations.",
    tag: "Diagnostic Précis",
    image: "/assets/camera.jpg"
  },
  {
    icon: ShieldAlert,
    title: "Réparation & Dépannage d'Égouts",
    description: "Intervention sur les réseaux d'eaux usées et eaux vannes endommagés. Réparation de regards cassés et fuites enterrées.",
    tag: "Solutions Durables",
    image: "/assets/depannage.jpg"
  },
  {
    icon: Building2,
    title: "Assainissement Collectif & Syndics",
    description: "Contrats d'entretien pour les copropriétés, immeubles et industries. Nettoyage des colonnes générales de vide-ordures et d'eaux usées.",
    tag: "Offre Pro",
    image: "/assets/collectif.jpg"
  }
];

export default function Services() {
  // إعدادات الواتساب الأساسية
  const whatsappNumber = "+212668029443"; // عوّض هاد الرقم برقم الواتساب الحقيقي ديال الخدمة
  const baseUrl = "https://assainissement-theta.vercel.app/"; // الدومين ديالك باش يخدم الـ Preview ديال الصور ف الواتساب

  return (
    <Section id="services" className="bg-slate-50">
      <Container>
        <SectionTitle
          subtitle="Nos Prestations Professionnelles"
          title="Solutions Complètes d'Assainissement & Débouchage"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            
            // 1. بناء نص الرسالة بالترتيب المطلوب
            const textMessage = `سلام اريد هذه الخدمة: *${service.title}*\n\nرابط الصورة للمعاينة:\n${baseUrl}${service.image}`;
            
            // 2. ترميز النص بـ URL Encode باش يقبله الرابط بشكل صحيح ومقاد
            const encodedText = encodeURIComponent(textMessage);
            const whatsappServiceUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

            return (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-lg bg-white/95 text-slate-800 shadow-sm backdrop-blur-sm border border-slate-200/50">
                      {service.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a 
                    href={whatsappServiceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-blue-600 border border-blue-600 text-sm font-bold text-white hover:bg-blue-700 hover:border-blue-700 transition-all duration-200 shadow-md shadow-blue-200/50"
                  >
                    Demander ce service
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}