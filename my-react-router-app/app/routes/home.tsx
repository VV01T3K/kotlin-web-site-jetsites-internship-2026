import type { Route } from "./+types/home";
import { HomePage } from "~/features/home/home-page";

const title = "Kotlin Programming Language";
const description =
  "A modern programming language that makes developers happier.";
const image = "/assets/images/open-graph/general.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@kotlin" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

export default function Home() {
  return <HomePage />;
}
