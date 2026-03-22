import { SectionReveal } from "@/components/SectionReveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <SectionReveal className={className}>
      <div className="flex flex-col gap-2">
        {eyebrow ? (
          <p className="text-sm font-medium tracking-wide text-foreground/60">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold leading-tight tracking-tight">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-pretty text-zinc-600 dark:text-zinc-300">
            {description}
          </p>
        ) : null}
      </div>
    </SectionReveal>
  );
}

