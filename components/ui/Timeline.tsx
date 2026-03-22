import type { ReactNode } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import { Card } from "@/components/ui/Card";

export type TimelineItem = {
  title: string;
  subtitle?: string;
  dateRange?: string;
  description?: ReactNode;
  href?: string;
};

export function Timeline({
  items,
}: {
  items: TimelineItem[];
}) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <SectionReveal key={`${item.title}-${item.dateRange ?? ""}`}>
          <Card className="p-5">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex flex-col gap-0.5">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-semibold tracking-tight hover:underline"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <h3 className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>
                  )}
                  {item.subtitle ? (
                    <p className="text-sm font-medium text-foreground/60">
                      {item.subtitle}
                    </p>
                  ) : null}
                </div>
                {item.dateRange ? (
                  <p className="text-sm font-medium text-foreground/50">
                    {item.dateRange}
                  </p>
                ) : null}
              </div>
              {item.description ? (
                <div className="text-pretty text-foreground/80 leading-relaxed">
                  {item.description}
                </div>
              ) : null}
            </div>
          </Card>
        </SectionReveal>
      ))}
    </div>
  );
}

