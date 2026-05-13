import { SectionTitle } from "@/components/SectionTitle";

type Stat = {
  value: string;
  label: string;
};

type StatsSectionProps = {
  stats: Stat[];
};

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="stats">
      <SectionTitle
        title="Impacto Ambiental"
        description="Datos que reflejan la importancia ecológica del Pacífico colombiano."
        titleClassName="stats-title"
        descriptionClassName="stats-description"
      />

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}