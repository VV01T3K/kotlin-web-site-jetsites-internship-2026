import KotlinHeader, {
  type KotlinHeaderSearchConfig,
} from "@jetbrains/kotlin-web-site-ui/out/components/header/index.js";

const PRODUCT_WEB_URL =
  "https://github.com/JetBrains/kotlin/releases/tag/v1.6.20";

const SEARCH_CONFIG: KotlinHeaderSearchConfig = {
  searchAlgoliaId: "",
  searchAlgoliaApiKey: "",
  searchAlgoliaIndexName: "",
};

export default function Header() {
  return (
    <KotlinHeader
      productWebUrl={PRODUCT_WEB_URL}
      hasSearch={false}
      dropdownTheme="dark"
      currentUrl="/"
      searchConfig={SEARCH_CONFIG}
    />
  );
}
