import { Button } from "@rescui/button";
import { cardCn } from "@rescui/card";
import { useTextStyles } from "@rescui/typography";
import { ThemeProvider } from "@rescui/ui-contexts";
import cn from "classnames";
import { useCallback, useState } from "react";

import { Container, Section } from "~/components/layout/layout";

import { testimonials } from "./data";

import "./index.scss";

const UsageSectionContent = ({
  initialSortByName,
}: {
  initialSortByName: boolean;
}) => {
  const textCn = useTextStyles();
  const [sortByName, setSortByName] = useState(initialSortByName);

  const sortedTestimonials = sortByName
    ? [...testimonials].toSorted((a, b) => a.company.localeCompare(b.company))
    : testimonials;

  const handleSortClick = useCallback(() => {
    const next = !sortByName;
    setSortByName(next);
    // eslint-disable-next-line unicorn/no-document-cookie
    document.cookie = `kotlin-testimonials-order=${JSON.stringify(next ? "name" : "default")}; path=/; max-age=31536000`;
  }, [sortByName]);

  return (
    <Section className="usage-section">
      <Container>
        <h2 className={textCn("rs-hero")}>Kotlin Usage Highlights</h2>

        <div className="usage-section__sort kto-offset-top-16">
          <Button mode="outline" size="s" onClick={handleSortClick}>
            Sort: {sortByName ? "A-Z" : "Default"}
          </Button>
        </div>

        <div className="kto-grid kto-grid-gap-16 kto-offset-top-48">
          {sortedTestimonials.map((item) => (
            <a
              key={item.company}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                cardCn({ isClickable: true, mode: "classic", theme: "light" }),
                "usage-section__card",
                "kto-col-4 kto-col-md-6 kto-col-sm-12"
              )}
            >
              <img
                src={item.logo}
                alt={item.company}
                loading="lazy"
                className={cn("usage-section__logo", {
                  "usage-section__logo_spring": item.company === "Spring",
                })}
              />
              <p className={cn(textCn("rs-text-2"), "kto-offset-top-8")}>
                {item.text}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export const UsageSection = ({
  initialSortByName,
}: {
  initialSortByName: boolean;
}) => (
  <ThemeProvider theme="light">
    <UsageSectionContent initialSortByName={initialSortByName} />
  </ThemeProvider>
);
