import { Button } from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { ThemeProvider } from "@rescui/ui-contexts";
import cn from "classnames";

import { Container, Section } from "~/components/layout/layout";

import multiplatformImg from "../../images/index/multiplatform.svg";
import { ProgrammingLanguage } from "./programming-language";
import { sections } from "./sections-data";

import "./index.scss";

const YouTubeEmbed = ({ id, title }: { id: string; title: string }) => (
  <div className="why-kotlin-section__youtube">
    {/* oxlint-disable-next-line react/iframe-missing-sandbox -- YouTube embeds require allow-same-origin to function */}
    <iframe
      width="560"
      height="315"
      title={title}
      loading="lazy"
      frameBorder="0"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
      src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  </div>
);

const WhyKotlinContent = () => {
  const textCn = useTextStyles();

  return (
    <Section className="why-kotlin-section">
      <Container>
        <h2 className={textCn("rs-hero")}>Why Kotlin</h2>

        <ProgrammingLanguage />

        {sections.map((section) => (
          <div
            key={section.buttonLink}
            className="kto-grid kto-grid-gap-32 kto-offset-top-96 kto-offset-top-md-48"
          >
            <div className="kto-col-4 kto-col-md-12">
              <h3 className={textCn("rs-h2")}>{section.title}</h3>
              <p className={cn(textCn("rs-text-2"), "kto-offset-top-32")}>
                {section.description}
              </p>
              <div className="kto-offset-top-32">
                <Button mode="outline" size="l" href={section.buttonLink}>
                  {section.buttonText}
                </Button>
              </div>
            </div>

            <div className="kto-col-8 kto-col-md-12">
              {section.media === "youtube" && section.youtubeId ? (
                <YouTubeEmbed
                  id={section.youtubeId}
                  title={section.buttonText}
                />
              ) : (
                <img
                  src={multiplatformImg}
                  alt="Kotlin Multiplatform"
                  loading="lazy"
                  className="why-kotlin-section__image"
                />
              )}
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
};

export const WhyKotlinSection = () => (
  <ThemeProvider theme="light">
    <WhyKotlinContent />
  </ThemeProvider>
);
