import type { Route } from "./+types/home";
import { HomePage } from "~/pages/home/home-page";
import { testimonialOrderCookie } from "~/cookies.server";

const title = "Kotlin Programming Language";
const description =
  "A modern programming language that makes developers happier.";
const image = "/assets/images/open-graph/general.png";

export async function loader({ request }: Route.LoaderArgs) {
  const cookie = await testimonialOrderCookie.parse(request.headers.get("Cookie"));
  const initialSortByName = cookie === "name";
  return { initialSortByName };
}

export function meta({ }: Route.MetaArgs) {
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

export default function Home({ loaderData }: Route.ComponentProps) {
  return <HomePage initialSortByName={loaderData.initialSortByName} />;
}
