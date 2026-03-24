import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { loadMarkdownFile } from "@/lib/content";

type Frontmatter = {
  title?: string;
  eyebrow?: string;
  description?: string;
};

export default async function MarkdownSection({
  slug,
  className,
  id,
}: {
  slug: string;
  className?: string;
  id?: string;
}) {
  const { frontmatter, content } = await loadMarkdownFile<Frontmatter>(slug);

  return (
    <section id={id} className={className}>
      {frontmatter.eyebrow ? (
        <p className="text-sm font-medium tracking-wide text-foreground/60">
          {frontmatter.eyebrow}
        </p>
      ) : null}
      {frontmatter.title ? (
        <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-tight">
          {frontmatter.title}
        </h2>
      ) : null}
      {frontmatter.description ? (
        <p className="mt-3 max-w-2xl text-pretty text-zinc-600 dark:text-zinc-300">
          {frontmatter.description}
        </p>
      ) : null}
      <div
        className={[
          "mt-6 text-pretty text-foreground/80 leading-relaxed",
          "[&_p]:mb-4",
          "[&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4",
          "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4",
          "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4",
        ].join(" ")}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </section>
  );
}

