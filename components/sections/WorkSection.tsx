import { loadMarkdownFile } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline, type TimelineItem } from "@/components/ui/Timeline";

type WorkFrontmatter = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: TimelineItem[];
};

export default async function WorkSection() {
  const { frontmatter } = await loadMarkdownFile<WorkFrontmatter>("work");

  return (
    <section id="work" className="w-full scroll-mt-28">
      <SectionHeading
        eyebrow={frontmatter.eyebrow ?? "Work"}
        title={frontmatter.title ?? "Work"}
        description={frontmatter.description}
      />
      <div className="mt-10">
        <Timeline items={frontmatter.items ?? []} />
      </div>
    </section>
  );
}

