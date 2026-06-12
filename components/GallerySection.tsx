"use client";

import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";
import { useEffect, useState } from "react";

type GallerySectionProps = {
  images: string[];
};

const captions = [
  {
    title: "Selvas Tropicales",
    description: "Uno de los ecosistemas más biodiversos del planeta.",
  },
  {
    title: "Costas del Pacífico",
    description: "Playas vírgenes rodeadas de naturaleza.",
  },
  {
    title: "Botón de oro",
    description: "Protección de especies únicas y ecosistemas estratégicos.",
  },
  {
    title: "Vida Silvestre",
    description: "Fauna y flora que hacen único al Pacífico colombiano.",
  },
  {
    title: "Mielero Patirojo",
    description: "Ave de color azul brillante que se alimenta de néctar, frutas e insectos pequeños."
  },
  {
    title: "Guatín",
    description: "Mamífero de pelaje café y patas largas que vive en los bosques. Se alimenta de frutas, semillas y raíces, ayudando a dispersar semillas en el ecosistema."
  },
    {
    title: "Iguana Verde",
    description: "Reptil arborícola que vive en bosques y manglares y se alimenta principalmente de hojas y frutos."
  },
    {
    title: "Saltamontes gigante",
    description: "Insecto tropical de colores llamativos que usa su coloración para defenderse de los depredadores."
  },
   {
    title: "Perezoso de tres dedos",
    description: "Mamífero que pasa la mayor parte de su vida en los árboles y se caracteriza por sus movimientos lentos."
  },
];

export function GallerySection({ images }: GallerySectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showNextSlide = () => {
    setCurrentSlide((current) => (current + 1) % images.length);
  };

  const showPreviousSlide = () => {
    setCurrentSlide((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const autoSlide = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(autoSlide);
  }, [images.length]);

  if (images.length === 0) {
    return null;
  }

  return (
    <section id="galeria">
      <SectionTitle
        title="Galería Natural"
        description="Imágenes que representan la belleza del Pacífico colombiano."
      />

      <div className="slider" aria-label="Galería natural">
        {images.map((imageSrc, index) => (
          <div className={`slide ${index === currentSlide ? "active" : ""}`} key={imageSrc}>
            <Image src={imageSrc} alt={`Galería natural ${index + 1}`} fill sizes="82vw" priority={index === 0} />

            <div className="caption">
              <h3>{captions[index]?.title ?? "Galería Natural"}</h3>
              <p>{captions[index]?.description ?? "Paisajes naturales del Pacífico colombiano."}</p>
            </div>
          </div>
        ))}

        <button className="prev" type="button" aria-label="Imagen anterior" onClick={showPreviousSlide}>
          &#10094;
        </button>
        <button className="next" type="button" aria-label="Imagen siguiente" onClick={showNextSlide}>
          &#10095;
        </button>

        <div className="dots" aria-label="Seleccionar imagen">
          {images.map((imageSrc, index) => (
            <button
              className={`dot ${index === currentSlide ? "active" : ""}`}
              key={imageSrc}
              type="button"
              aria-label={`Mostrar imagen ${index + 1}`}
              aria-current={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
