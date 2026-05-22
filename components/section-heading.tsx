interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-slate-400">{subtitle}</p>
    </div>
  );
}
