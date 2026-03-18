// Local module declarations for JetBrains UI package entry points that do not
// expose the component types we want to consume in this app.

declare module "@jetbrains/kotlin-web-site-ui/out/components/header/index.js" {
  import type { ComponentType } from "react";

  export interface KotlinHeaderSearchConfig {
    searchAlgoliaApiKey: string;
    searchAlgoliaId: string;
    searchAlgoliaIndexName: string;
  }

  export interface KotlinHeaderProps {
    currentUrl?: string;
    dropdownTheme?: "dark" | "light";
    hasSearch?: boolean;
    productWebUrl?: string;
    searchConfig?: KotlinHeaderSearchConfig;
  }

  const Header: ComponentType<KotlinHeaderProps>;
  export default Header;
}

declare module "@jetbrains/kotlin-web-site-ui/out/components/footer-compact/index.js" {
  import type { ComponentType } from "react";

  const Footer: ComponentType<Record<string, never>>;
  export default Footer;
}
