import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";

type CardItem = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  icon?: string;
};

type CardGridSectionProps = {
  id: string;
  title: string;
  description: string;
  cards: CardItem[];
  cardClassName?: string;
};

export function CardGridSection({
  id,
  title,
  description,
  cards,
  cardClassName,
}: CardGridSectionProps) {
  return (
    <section id={id}>
      <SectionTitle title={title} description={description} />

      <div className="cards">
        {cards.map((card) => (
          <article key={card.title} className={`card ${cardClassName ?? ""}`.trim()}>
            {card.imageSrc ? (
              <Image src={card.imageSrc} alt={card.imageAlt ?? card.title} width={400} height={300} />
            ) : null}

            {card.icon ? <div className="icon">{card.icon}</div> : null}

            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}