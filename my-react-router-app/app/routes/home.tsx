import { testimonialOrderCookie } from "~/cookies.server";
import { HomePage } from "~/pages/home/home-page";
import { getRandomProgrammingLanguageTabIndex } from "~/pages/home/sections/why-kotlin-section/programming-language/state";

import type { Route } from "./+types/home";

const title = "Kotlin Programming Language";
const description =
  "A modern programming language that makes developers happier.";
const image = "/assets/images/open-graph/general.png";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookie = await testimonialOrderCookie.parse(
    request.headers.get("Cookie")
  );
  const initialSortByName = cookie === "name";
  const initialProgrammingLanguageTab = getRandomProgrammingLanguageTabIndex();
  return { initialProgrammingLanguageTab, initialSortByName };
};

export const meta = (_: Route.MetaArgs) => [
  { title },
  { content: description, name: "description" },
  { content: title, property: "og:title" },
  { content: description, property: "og:description" },
  { content: "website", property: "og:type" },
  { content: image, property: "og:image" },
  { content: "summary_large_image", name: "twitter:card" },
  { content: "@kotlin", name: "twitter:site" },
  { content: title, name: "twitter:title" },
  { content: description, name: "twitter:description" },
  { content: image, name: "twitter:image" },
];

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <HomePage
      initialProgrammingLanguageTab={loaderData.initialProgrammingLanguageTab}
      initialSortByName={loaderData.initialSortByName}
    />
  );
}
