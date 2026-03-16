import Button from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { ThemeProvider } from "@rescui/ui-contexts";
import cn from "classnames";

import { Container, Section } from "~/components/layout/layout";
import { multiplatformImage, whyKotlinFeatures } from "~/features/home/content";

import { ProgrammingLanguage } from "./programming-language";
import "./index.scss";

function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="why-kotlin-section__youtube">
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
}

function renderTitle(lines: string[]) {
  return lines.map((line, index) => (
    <span key={line}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

function WhyKotlinContent() {
  const textCn = useTextStyles();

  return (
    <Section className="why-kotlin-section">
      <Container>
        <h2 className={textCn("rs-hero")}>Why Kotlin</h2>

        <ProgrammingLanguage />

        {whyKotlinFeatures.map((feature) => (
          <div
            key={feature.buttonText}
            className="kto-grid kto-grid-gap-32 kto-offset-top-96 kto-offset-top-md-48"
          >
            <div className="kto-col-4 kto-col-md-12">
              <h3 className={textCn("rs-h2")}>{renderTitle(feature.titleLines)}</h3>
              <p className={cn(textCn("rs-text-2"), "kto-offset-top-32")}>
                {feature.descriptionParagraphs.map((paragraph, index) => (
                  <span key={paragraph}>
                    {index > 0 ? (
                      <>
                        <br />
                        <br />
                      </>
                    ) : null}
                    {paragraph}
                  </span>
                ))}
              </p>
              <div className="kto-offset-top-32">
                <Button mode="outline" size="l" href={feature.buttonLink}>
                  {feature.buttonText}
                </Button>
              </div>
            </div>

            <div className="kto-col-8 kto-col-md-12">
              {feature.media === "youtube" && feature.youtubeId ? (
                <YouTubeEmbed id={feature.youtubeId} title={feature.titleLines.join(" ")} />
              ) : (
                <img
                  src={multiplatformImage}
                  alt="Kotlin Multiplatform"
                  className="why-kotlin-section__image"
                />
              )}
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}

export function WhyKotlinSection() {
  return (
    <ThemeProvider theme="light">
      <WhyKotlinContent />
    </ThemeProvider>
  );
}
