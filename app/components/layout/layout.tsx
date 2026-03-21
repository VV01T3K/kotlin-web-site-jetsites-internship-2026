import type { PropsWithChildren } from "react";

export const Section = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <section className={`kto-layout-section ${className}`.trim()}>
    {children}
  </section>
);

export const Container = ({ children }: PropsWithChildren) => (
  <div className="kto-layout-container">{children}</div>
);
