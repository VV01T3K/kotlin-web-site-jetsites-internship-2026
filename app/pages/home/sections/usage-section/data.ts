import atlassianLogo from "../../images/companies/atlassian.svg";
import cordaLogo from "../../images/companies/corda.svg";
import courseraLogo from "../../images/companies/coursera.svg";
import evernoteLogo from "../../images/companies/evernote.svg";
import gradleLogo from "../../images/companies/gradle.svg";
import springLogo from "../../images/companies/spring.svg";

export interface Testimonial {
  company: string;
  logo: string;
  url: string;
  text: string;
}

export const testimonials = [
  {
    company: "Gradle",
    logo: gradleLogo,
    text: "Gradle is introducing Kotlin as a language for writing build scripts",
    url: "https://blog.gradle.org/kotlin-meets-gradle",
  },
  {
    company: "Corda",
    logo: cordaLogo,
    text: "Corda is an open-source distributed ledger platform, supported by major banks, and built entirely in Kotlin",
    url: "https://www.corda.net/2017/01/10/kotlin/",
  },
  {
    company: "Evernote",
    logo: evernoteLogo,
    text: "Evernote recently integrated Kotlin into their Android client",
    url: "https://blog.evernote.com/tech/2017/01/26/android-state-library/",
  },
  {
    company: "Coursera",
    logo: courseraLogo,
    text: "Coursera Android app is partially written in Kotlin",
    url: "https://building.coursera.org/blog/2016/03/16/becoming-bilingual-coursera/",
  },
  {
    company: "Spring",
    logo: springLogo,
    text: "Spring makes use of Kotlin's language features to offer more concise APIs",
    url: "https://spring.io/blog/2017/01/04/introducing-kotlin-support-in-spring-framework-5-0",
  },
  {
    company: "Atlassian",
    logo: atlassianLogo,
    text: "All new code in the Trello Android app is in Kotlin",
    url: "https://twitter.com/danlew42/status/809065097339564032",
  },
] satisfies Testimonial[];
