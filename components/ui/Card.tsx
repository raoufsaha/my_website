import type { ReactNode } from "react";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm",
        "backdrop-blur supports-[backdrop-filter]:bg-white/60",
        "dark:border-white/10 dark:bg-black/40",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

