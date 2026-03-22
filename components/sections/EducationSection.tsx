import { loadMarkdownFile } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline, type TimelineItem } from "@/components/ui/Timeline";

type EducationFrontmatter = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: TimelineItem[];
};

export default async function EducationSection() {
  const { frontmatter } = await loadMarkdownFile<EducationFrontmatter>(
    "education",
  );

  return (
    <section id="education" className="w-full scroll-mt-28">
      <SectionHeading
        eyebrow={frontmatter.eyebrow ?? "School"}
        title={frontmatter.title ?? "Education"}
        description={frontmatter.description}
      />
      <div className="mt-10">
        <Timeline items={frontmatter.items ?? []} />
      </div>
    </section>
  );
}

