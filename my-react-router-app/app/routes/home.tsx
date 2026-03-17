import { testimonialOrderCookie } from "~/cookies.server";
import { HomePage } from "~/pages/home/home-page";

import type { Route } from "./+types/home";

const title = "Kotlin Programming Language";
const description =
  "A modern programming language that makes developers happier.";
const image = "/assets/images/open-graph/general.png";

export async function loader({ request }: Route.LoaderArgs) {
  const cookie = await testimonialOrderCookie.parse(
    request.headers.get("Cookie")
  );
  const initialSortByName = cookie === "name";
  return { initialSortByName };
}

export function meta({}: Route.MetaArgs) {
  return [
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
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <HomePage initialSortByName={loaderData.initialSortByName} />;
}
