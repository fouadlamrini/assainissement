/**
 * src/components/sections/Services.jsx
 *
 * Section Services - Présentation des prestations d'assainissement.
 */

import {
  Droplet,
  Wrench,
  Truck,
  Eye,
  ShieldAlert,
  Building2,
} from "lucide-react";
import { Container, Section, SectionTitle } from "../ui/BaseComponents";

const servicesList = [
  {
    icon: Wrench,
    title: "Débouchage de Canalisation",
    description:
      "Débouchage des éviers, WC, lavabos, douches et canalisations extérieures à l'aide d'un matériel adapté pour rétablir un écoulement normal.",
    tag: "Dépannage",
    image: "/assets/Debouchage.jpg",
  },
  {
    icon: Droplet,
    title: "Curage de Réseaux & Canalisations",
    description:
      "Nettoyage des canalisations par hydrocurage afin d'éliminer les dépôts, les graisses et les résidus susceptibles de provoquer des obstructions.",
    tag: "Entretien",
    image: "/assets/curage.jpg",
  },
  {
    icon: Truck,
    title: "Vidange & Pompage de Fosses",
    description:
      "Vidange et pompage des fosses septiques, bacs à graisse et autres ouvrages d'assainissement avec un matériel professionnel adapté.",
    tag: "Pompage",
    image: "/assets/vidange.jpg",
  },
  {
    icon: Eye,
    title: "Inspection des Canalisations",
    description:
      "Inspection par caméra lorsque cela est nécessaire afin d'identifier l'origine d'un bouchon, d'une fuite ou d'une anomalie sur le réseau.",
    tag: "Diagnostic",
    image: "/assets/camera.jpg",
  },
  {
    icon: ShieldAlert,
    title: "Réparation de Réseaux d'Assainissement",
    description:
      "Travaux de réparation et de remise en état des réseaux d'eaux usées, des regards et des canalisations endommagées.",
    tag: "Réparation",
    image: "/assets/depannage.jpg",
  },
  {
    icon: Building2,
    title: "Entretien pour Professionnels & Copropriétés",
    description:
      "Prestations d'entretien destinées aux immeubles, copropriétés, commerces, entreprises et collectivités selon leurs besoins.",
    tag: "Professionnels",
    image: "/assets/collectif.jpg",
  },
];

export default function Services() {
  const whatsappNumber = "+212668029443";
  const baseUrl = "https://assainissement-theta.vercel.app/";

  return (
    <Section id="services" className="bg-slate-50">
      <Container>
        <SectionTitle
          subtitle="Nos Services"
          title="Des prestations adaptées à vos besoins en assainissement"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;

            const textMessage = `Bonjour, je souhaite obtenir des informations concernant le service : *${service.title}*.\n\nImage de référence :\n${baseUrl}${service.image}`;
            const encodedText = encodeURIComponent(textMessage);
            const whatsappServiceUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#85ca51]/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
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
                    <div className="w-12 h-12 rounded-xl bg-[#85ca51]/10 text-[#85ca51] flex items-center justify-center mb-4 group-hover:bg-[#85ca51] group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-[#14a992] mb-3 group-hover:text-[#108c79] transition-colors duration-200">
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
                    className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-[#14a992] border border-[#14a992] text-sm font-bold text-white hover:bg-[#118f7c] hover:border-[#118f7c] transition-all duration-200 shadow-md shadow-[#14a992]/20"
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