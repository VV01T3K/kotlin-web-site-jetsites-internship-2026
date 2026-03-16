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
        "@rescui/card": "@rescui/card/lib/index.js",
      },
    },
    ssr: {
      noExternal: [/@rescui\/.*/, /@jetbrains\/kotlin-web-site-ui/],
    },
    plugins: [
      reactRouter(),
      babel({
        presets: [reactCompilerPreset()]
      } as Parameters<typeof babel>[0]),
    ],
  };
});
