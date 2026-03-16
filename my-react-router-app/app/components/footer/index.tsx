import KotlinFooter from "@jetbrains/kotlin-web-site-ui/out/components/footer/index.js";
import { ThemeProvider } from "@rescui/ui-contexts";

export default function Footer() {
  return (
    <ThemeProvider theme="dark">
      <KotlinFooter />
    </ThemeProvider>
  );
}
