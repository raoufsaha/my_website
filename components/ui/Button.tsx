import Link from "next/link";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
};

export function Button({
  children,
  className,
}: BaseProps & { href?: never; type?: never; onClick?: never }) {
  return (
    <button
      type="button"
      className={[
        "inline-flex items-center justify-center rounded-full",
        "bg-foreground px-5 py-2.5 text-background",
        "transition-transform hover:-translate-y-[1px] hover:opacity-95",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/25",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  className,
}: BaseProps & { href: string }) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full",
        "bg-foreground px-5 py-2.5 text-background",
        "transition-transform hover:-translate-y-[1px] hover:opacity-95",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/25",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

