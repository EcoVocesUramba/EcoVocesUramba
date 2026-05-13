import { BiodiversitySection } from "@/components/BiodiversitySection";
import { CardGridSection } from "@/components/CardGridSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { StatsSection } from "@/components/StatsSection";

const ecosystems = [
  {
    title: "Selvas Tropicales",
    description:
      "Bosques húmedos llenos de vida y color donde habitan miles de especies animales y vegetales.",
    imageSrc: "/selva.jpeg",
    imageAlt: "Selva tropical",
  },
  {
    title: "Manglares",
    description:
      "Ecosistemas esenciales para proteger las costas y conservar la fauna marina.",
    imageSrc: "/manglares.jpeg",
    imageAlt: "Manglar y costa",
  },
  {
    title: "Océano Pacífico",
    description:
      "Uno de los mares más importantes del mundo por su biodiversidad marina y avistamiento de ballenas.",
    imageSrc: "/oceano.jpeg",
    imageAlt: "Océano Pacífico",
  },
];

const actions = [
  {
    title: "Reciclar",
    description: "Reduce la contaminación separando correctamente los residuos.",
    icon: "♻️",
  },
  {
    title: "Cuidar los Océanos",
    description: "Mantener playas y ríos limpios protege la fauna marina.",
    icon: "🌊",
  },
  {
    title: "Reforestar",
    description:
      "Plantar árboles ayuda a mejorar la calidad del aire y conservar la biodiversidad.",
    icon: "🌱",
  },
];

const stats = [
  { value: "900+", label: "Especies de aves" },
  { value: "300+", label: "Especies marinas" },
  { value: "50%", label: "Oxígeno producido por océanos" },
  { value: "100%", label: "Compromiso ecológico" },
];

const galleryImages = [
  "/photo-gallery1.jpeg",
  "/photo-gallery2.jpeg",
  "/photo-gallery3.jpeg",
  "/photo-gallery4.jpeg",
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CardGridSection
        id="ecosistemas"
        title="Ecosistemas del Pacífico"
        description="El Pacífico colombiano es una de las regiones más biodiversas del planeta, hogar de selvas húmedas, manglares y una enorme riqueza marina."
        cards={ecosystems}
      />
      <BiodiversitySection />
      <StatsSection stats={stats} />
      <CardGridSection
        id="acciones"
        title="¿Cómo Podemos Ayudar?"
        description="Pequeñas acciones generan un gran impacto para proteger el medio ambiente."
        cards={actions}
        cardClassName="accion-card"
      />
      <GallerySection images={galleryImages} />
      <ContactSection />
      <Footer />
    </main>
  );
}