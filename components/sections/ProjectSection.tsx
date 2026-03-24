import { loadMarkdownFile } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline, type TimelineItem } from "@/components/ui/Timeline";

type ProjectsFrontmatter = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: TimelineItem[];
};

export default async function ProjectSection() {
  const { frontmatter } = await loadMarkdownFile<ProjectsFrontmatter>(
    "projects",
  );

    return (
        <section id="project" className="w-full scroll-mt-28">
      <SectionHeading
        eyebrow={frontmatter.eyebrow ?? "Projects"}
        title={frontmatter.title ?? "Coding"}
        description={frontmatter.description}
      />
      <div className="mt-10">
        <Timeline items={frontmatter.items ?? []} />
      </div>
    </section>
    )

}