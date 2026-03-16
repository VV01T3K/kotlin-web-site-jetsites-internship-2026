import { reactRouter } from "@react-router/dev/vite";
import babel from "@rolldown/plugin-babel";
import { reactCompilerPreset } from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createLogger, defineConfig } from "vite";

const rootDir = dirname(fileURLToPath(import.meta.url));

// Temporarily suppress the warning about the deprecated `esbuild` option until React Router supports vite 8
const logger = createLogger();
const reactRouterEsbuildWarning =
  '`esbuild` option was specified by "react-router" plugin. This option is deprecated, please use `oxc` instead.';
const warn = logger.warn.bind(logger);
logger.warn = (msg, options) => {
  if (typeof msg === "string" && msg.includes(reactRouterEsbuildWarning)) {
    return;
  }
  warn(msg, options);
};

export default defineConfig(async () => {
  return {
    customLogger: logger,
    resolve: {
      tsconfigPaths: true,
      alias: {
        "airbnb-prop-types": resolve(rootDir, "app/shims/airbnb-prop-types.ts"),
        "algoliasearch/lite": resolve(
          rootDir,
          "app/shims/algoliasearch-lite.ts",
        ),
        "react-outside-click-handler":
          "react-outside-click-handler/esm/OutsideClickHandler.js",
        "react-scrollbar-size": resolve(
          rootDir,
          "app/shims/react-scrollbar-size.ts",
        ),
      },
    },
    ssr: {
      noExternal: [
        "@jetbrains/kotlin-web-site-ui",
        "@react-hook/resize-observer",
        "@rescui/button",
        "@rescui/card",
        "@rescui/checkbox",
        "@rescui/focus-manager",
        "@rescui/icons",
        "@rescui/input",
        "@rescui/menu",
        "@rescui/switcher",
        "@rescui/tab-list",
        "@rescui/tooltip",
        "@rescui/typography",
        "@rescui/ui-contexts",
        "airbnb-prop-types",
        "algoliasearch",
        "bem-cn-fast",
        "body-scroll-lock",
        "cookie",
        "query-string",
        "react-modal",
        "react-outside-click-handler",
        "react-remove-scroll-bar",
        "react-scrollbar-size",
        "react-swipeable-views-react-18-fix",
        "sha.js",
        "the-platform",
      ],
    },
    plugins: [
      reactRouter(),
      babel({
        presets: [reactCompilerPreset()]
      } as Parameters<typeof babel>[0]),
    ],
  };
});
