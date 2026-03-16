import KotlinHeader, {
  type KotlinHeaderProps,
  type KotlinHeaderSearchConfig,
} from "@jetbrains/kotlin-web-site-ui/out/components/header/index.js";

const EMPTY_SEARCH_CONFIG: KotlinHeaderSearchConfig = {
  searchAlgoliaId: "",
  searchAlgoliaApiKey: "",
  searchAlgoliaIndexName: "",
};

export default function Header(props: KotlinHeaderProps) {
  return (
    <KotlinHeader
      hasSearch={false}
      dropdownTheme="dark"
      currentUrl="/"
      searchConfig={EMPTY_SEARCH_CONFIG}
      {...props}
    />
  );
}
