import "./server-shims";

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import type { ReactNode } from "react";
import { Header } from "@jetbrains/kotlin-web-site-ui/out/components/header/header.js";
import { Footer } from "@jetbrains/kotlin-web-site-ui/out/components/footer/footer.js";
import { ThemeProvider } from "@rescui/ui-contexts";

import "./app.scss";

const PRODUCT_WEB_URL =
  "https://github.com/JetBrains/kotlin/releases/tag/v1.6.20";
const SEARCH_CONFIG = {
  searchAlgoliaId: "",
  searchAlgoliaApiKey: "",
  searchAlgoliaIndexName: "",
};

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: "/vendor/rescui-font-jb-sans-auto.css" },
  { rel: "stylesheet", href: "/vendor/jetbrains-header.css" },
  { rel: "stylesheet", href: "/vendor/jetbrains-footer.css" },
  { rel: "icon", type: "image/svg+xml", href: "/assets/images/favicon.svg" },
  { rel: "alternate icon", href: "/assets/images/favicon.ico" },
  { rel: "apple-touch-icon", href: "/assets/images/apple-touch-icon.png" },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/assets/images/apple-touch-icon-72x72.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/assets/images/apple-touch-icon-114x114.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/assets/images/apple-touch-icon-144x144.png",
  },
];

function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <Header
        productWebUrl={PRODUCT_WEB_URL}
        hasSearch={false}
        dropdownTheme="dark"
        currentUrl="/"
        onSearchClick={() => {}}
        searchConfig={SEARCH_CONFIG}
      />
      <main className="site-shell__content">{children}</main>
      <ThemeProvider theme="dark">
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="page__index-new page_restyled_v2">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="page_js_yes">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <SiteChrome>
      <Outlet />
    </SiteChrome>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <SiteChrome>
      <section className="route-error">
        <div className="route-error__container">
          <h1>{message}</h1>
          <p>{details}</p>
          {stack ? (
            <pre className="route-error__stack">
              <code>{stack}</code>
            </pre>
          ) : null}
        </div>
      </section>
    </SiteChrome>
  );
}
