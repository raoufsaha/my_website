import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { SectionReveal } from "@/components/SectionReveal";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import EducationSection from "@/components/sections/EducationSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SocialLinks from "@/components/SocialLinks";


export default function Home() {
  // const features = [
  //   {
  //     title: "Sleek, minimal UI",
  //     description:
  //       "A clean layout with readable typography and subtle depth (no gimmicks).",
  //   },
  //   {
  //     title: "Subtle scroll motion",
  //     description:
  //       "Section headings and cards reveal as you scroll, designed to stay lightweight.",
  //   },
  //   {
  //     title: "Markdown-first content",
  //     description:
  //       "Update your bio, work, and school from `content/*.md` without touching component code.",
  //   },
  // ];

  return (
    <div className="min-h-full bg-zinc-50 font-sans text-foreground dark:bg-black">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-zinc-50/80 backdrop-blur dark:border-white/10 dark:bg-black/70">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-6 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
            <span className="text-sm font-semibold tracking-tight">
              AbderRaouf Saha
            </span>
          </div>
          <nav className="flex items-center gap-5 text-sm font-medium">
            <a
              href="#about"
              className="text-foreground/70 hover:text-foreground"
            >
              About
            </a>
            <a
              href="#work"
              className="text-foreground/70 hover:text-foreground"
            >
              Work
            </a>
            <a
              href="#project"
              className="text-foreground/70 hover:text-foreground"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-foreground/70 hover:text-foreground"
            >
              Education
            </a>
            <a
              href="#activities"
              className="text-foreground/70 hover:text-foreground"
            >
              Activities
            </a>
            <Link
              href="#contact"
              className="text-foreground/70 hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-24 px-6 py-14">
        <section className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 px-6 py-14 shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/40 sm:px-10">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-foreground/10 blur-3xl dark:bg-foreground/15" />
            <div className="absolute -right-24 -bottom-28 h-72 w-72 rounded-full bg-foreground/10 blur-3xl dark:bg-foreground/15" />
          </div>

          <div className="relative flex flex-col gap-10">
            <SectionReveal>
              <div className="flex flex-col gap-4">
                <p className="text-sm font-medium tracking-wide text-foreground/60">
                  Honours Mathematics Student at University of Waterloo
                </p>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  I value{" "}
                  <span className="text-foreground">clear thinking</span>,{" "}
                  <span className="text-foreground">teamwork</span>, and{" "}
                  <span className="text-foreground">follow-through</span>.
                </h1>
                <p className="max-w-2xl text-pretty text-zinc-600 dark:text-zinc-300">
                  This site summarizes my work experience, education,
                  activities, and a bit about who I am. 
                </p>
              </div>
            </SectionReveal>

            {/* <div className="relative grid gap-4 sm:grid-cols-3">
              {features.map((f, idx) => (
                <SectionReveal key={f.title} delayMs={idx * 120}>
                  <Card className="h-full p-5 transition-transform duration-300 hover:-translate-y-[2px] hover:opacity-95">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {f.title}
                      </h3>
                      <p className="text-pretty text-foreground/70">
                        {f.description}
                      </p>
                    </div>
                  </Card>
                </SectionReveal>
              ))}
            </div> */}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#work"
                className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-background transition-transform hover:-translate-y-[1px] hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/25 sm:w-auto"
              >
                See my work
              </a>
              <a
                href="mailto:saharaouf.w@gmail.com"
                className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-background transition-transform hover:-translate-y-[1px] hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/25 sm:w-auto"
              >
                Email me
              </a>
            </div>
          </div>
        </section>

        <AboutSection />
        <WorkSection />
        <ProjectSection />
        <EducationSection />
        <ActivitiesSection />
        <ContactSection />
      </main>

      <footer className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 pb-10 pt-2 text-xs text-foreground/50 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} AbderRaouf Saha</p>
        <SocialLinks />
      </footer>
    </div>
  );
}
