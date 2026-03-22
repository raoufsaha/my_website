import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type MarkdownFile<TFrontmatter extends Record<string, unknown>> = {
  frontmatter: TFrontmatter;
  content: string;
};

export async function loadMarkdownFile<
  TFrontmatter extends Record<string, unknown> = Record<string, unknown>,
>(slug: string): Promise<MarkdownFile<TFrontmatter>> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = matter(raw);

  return {
    frontmatter: parsed.data as TFrontmatter,
    content: parsed.content,
  };
}

