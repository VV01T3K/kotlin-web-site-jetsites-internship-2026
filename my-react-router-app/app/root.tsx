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
import Footer from "~/components/footer";
import Header from "~/components/header";

import "./app.scss";

export const links: Route.LinksFunction = () => [
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
      <Header />
      <main className="site-shell__content">{children}</main>
      <Footer />
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
