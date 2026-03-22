import { loadMarkdownFile } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline, type TimelineItem } from "@/components/ui/Timeline";

type ActivitiesFrontmatter = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: TimelineItem[];
};

export default async function ActivitiesSection() {
  const { frontmatter } = await loadMarkdownFile<ActivitiesFrontmatter>(
    "activities",
  );

  return (
    <section id="activities" className="w-full scroll-mt-28">
      <SectionHeading
        eyebrow={frontmatter.eyebrow ?? "Activities"}
        title={frontmatter.title ?? "Activities"}
        description={frontmatter.description}
      />
      <div className="mt-10">
        <Timeline items={frontmatter.items ?? []} />
      </div>
    </section>
  );
}
