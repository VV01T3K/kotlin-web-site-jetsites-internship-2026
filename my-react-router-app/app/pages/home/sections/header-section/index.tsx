import { Button } from "@rescui/button";
import { cardCn } from "@rescui/card";
import { useTextStyles } from "@rescui/typography";
import cn from "classnames";

import { Container, Section } from "~/components/layout/layout";

import { cardsData } from "./data";

import "./index.scss";

export const HeaderSection = () => {
  const textCn = useTextStyles();

  return (
    <div>
      <Section className="header-section">
        <Container>
          <h1 className={textCn("rs-hero")}>
            A modern programming language that makes developers happier
          </h1>
          <div className="header-section__actions">
            <div>
              <Button size="l" href="#">
                Get started
              </Button>
              <Button
                mode="outline"
                size="l"
                href="#"
                className="header-section__why-btn"
              >
                Why Kotlin
              </Button>
            </div>

            <div className="header-section__contributors">
              <img
                src="/assets/jetbrains-logo.svg"
                alt=""
                width="60"
                height="60"
                className="header-section__contributors-logo"
              />
              <p className={textCn("rs-text-2")}>
                Developed by{" "}
                <a
                  className={textCn("rs-link")}
                  href="https://www.jetbrains.com/"
                >
                  JetBrains
                </a>{" "}
                &amp; Open-source{" "}
                <a
                  className={textCn("rs-link")}
                  href="https://github.com/JetBrains/kotlin/graphs/contributors"
                >
                  Contributors
                </a>
              </p>
            </div>
          </div>

          <div className="kto-grid kto-grid-gap-16 kto-offset-top-48">
            {cardsData.map((card) => (
              <a
                key={card.id}
                href={card.link}
                className={cn(
                  cardCn({
                    isClickable: true,
                    mode: "classic",
                    theme: "dark",
                  }),
                  "header-section__card",
                  "kto-col-3 kto-col-md-6 kto-col-sm-12"
                )}
              >
                <img src={card.img} alt="" />
                <h2 className={cn(textCn("rs-h3"), "kto-offset-top-16")}>
                  {card.title}
                </h2>
                <p className={cn(textCn("rs-text-2"), "kto-offset-top-16")}>
                  {card.subTitle}
                </p>
              </a>
            ))}
          </div>

          <p className={cn(textCn("rs-text-2"), "kto-offset-top-16")}>
            <a className={textCn("rs-link")} href="/docs/multiplatform.html">
              Multiplatform for Other Platforms
            </a>
            {", "}
            <a
              className={textCn("rs-link")}
              href="/docs/data-science-overview.html"
            >
              Data Science
            </a>
          </p>
        </Container>
      </Section>
    </div>
  );
};
