import type { PropsWithChildren } from "react";

export function Section({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return <section className={`kto-layout-section ${className}`.trim()}>{children}</section>;
}

export function Container({ children }: PropsWithChildren) {
  return <div className="kto-layout-container">{children}</div>;
}
