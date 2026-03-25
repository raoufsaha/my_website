import { Card } from "@/components/ui/Card";
import { SectionReveal } from "@/components/SectionReveal";

export default function ContactSection() {
  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const hasFormProvider =
    typeof formEndpoint === "string" && formEndpoint.trim().length > 0;

  const emailFallback = process.env.NEXT_PUBLIC_CONTACT_EMAIL
    ? process.env.NEXT_PUBLIC_CONTACT_EMAIL
    : "saharaouf.w@gmail.com";

  return (
    <section id="contact" className="w-full scroll-mt-28">
      <Card className="rounded-3xl p-8">
        <div className="flex flex-col gap-6">
          <SectionReveal>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight">
                Contact
              </h2>
              <p className="text-pretty text-zinc-600 dark:text-zinc-300">
                Send a message using the form below, or email me directly.
              </p>
            </div>
          </SectionReveal>

          <div className="grid gap-8 lg:grid-cols-2">
            {hasFormProvider ? (
              <div className="rounded-2xl border border-black/5 bg-white/60 p-5 dark:border-white/10 dark:bg-black/30">
                <form
                  method="POST"
                  action={formEndpoint}
                  className="flex flex-col gap-4"
                >
                  {/* Basic fields for Formspree-style handlers */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium tracking-tight">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-foreground/10 dark:border-white/10 dark:bg-black/20"
                      type="text"
                      autoComplete="name"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium tracking-tight">
                      Email
                    </label>
                    <input
                      name="email"
                      required
                      className="w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-foreground/10 dark:border-white/10 dark:bg-black/20"
                      type="email"
                      autoComplete="email"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium tracking-tight">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-foreground/10 dark:border-white/10 dark:bg-black/20"
                    />
                  </div>

                  {/* Honeypot to reduce spam (safe even if provider ignores it). */}
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    autoComplete="off"
                    tabIndex={-1}
                  />

                  <button
                    type="submit"
                    className="mt-1 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2.5 text-background transition-transform hover:-translate-y-[1px] hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/25"
                  >
                    Send message
                  </button>

                  <p className="text-xs text-foreground/60">
                    By submitting, you agree to be contacted about your
                    message.
                  </p>
                </form>
              </div>
            ) : (
              <div className="rounded-2xl border border-black/5 bg-white/60 p-5 dark:border-white/10 dark:bg-black/30 lg:col-span-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  Prefer email?
                </h3>
                <p className="mt-2 text-pretty text-foreground/70">
                  Since you don’t have a form endpoint configured yet, email is
                  the fastest way to reach you.
                </p>
                <a
                  href={`mailto:${emailFallback}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold tracking-tight underline underline-offset-4 hover:opacity-90"
                >
                  {emailFallback}
                </a>
              </div>
            )}

            <div className="flex flex-col gap-4">
              {hasFormProvider ? (
                <SectionReveal>
                  <div className="rounded-2xl border border-black/5 bg-white/60 p-5 dark:border-white/10 dark:bg-black/30">
                    <h3 className="text-lg font-semibold tracking-tight">
                      Prefer email?
                    </h3>
                    <p className="mt-2 text-pretty text-foreground/70">
                      Email me directly and I’ll respond as soon as possible.
                    </p>
                    <a
                      href={`mailto:${emailFallback}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold tracking-tight underline underline-offset-4 hover:opacity-90"
                    >
                      {emailFallback}
                    </a>
                  </div>
                </SectionReveal>
              ) : null}

              <SectionReveal delayMs={80}>
                <div className="rounded-2xl border border-black/5 bg-white/60 p-5 dark:border-white/10 dark:bg-black/30">
                  <h3 className="text-lg font-semibold tracking-tight">
                    View Resume
                  </h3>
                  <p className="mt-2 text-pretty text-foreground/70">
                    Download my resume to see my experience, skills, and education.
                  </p>
                  <a
                    href="/resume.pdf"
                    download="Abderraouf_Saha_Resume.pdf"
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2.5 text-background transition-transform hover:-translate-y-[1px] hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/25"
                  >
                    Download Resume
                  </a>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

