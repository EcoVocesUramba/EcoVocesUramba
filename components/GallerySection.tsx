import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";

type GallerySectionProps = {
  images: string[];
};

export function GallerySection({ images }: GallerySectionProps) {
  return (
    <section id="galeria">
      <SectionTitle
        title="Galería Natural"
        description="Imágenes que representan la belleza del Pacífico colombiano."
      />

      <div className="gallery">
        {images.map((imageSrc, index) => (
          <Image key={imageSrc} src={imageSrc} alt={`Galería natural ${index + 1}`} width={400} height={300} />
        ))}
      </div>
    </section>
  );
}