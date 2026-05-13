type SectionTitleProps = {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionTitle({
  title,
  description,
  titleClassName,
  descriptionClassName,
}: SectionTitleProps) {
  return (
    <div className="section-title">
      <h2 className={titleClassName}>{title}</h2>
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
}