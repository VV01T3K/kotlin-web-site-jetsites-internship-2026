import { ThemeProvider } from "@rescui/ui-contexts";

import { HeaderSection } from "./sections/header-section";
import { LatestFromKotlinSection } from "./sections/latest-from-kotlin-section";
import { WhyKotlinSection } from "./sections/why-kotlin-section";
import { UsageSection } from "./sections/usage-section";
import { StartSection } from "./sections/start-section";
import "./home-page.scss";

export function HomePage() {
  return (
    <ThemeProvider theme="dark">
      <div className="overview-page">
        <HeaderSection />
        <LatestFromKotlinSection />
        <WhyKotlinSection />
        <UsageSection />
        <StartSection />
      </div>
    </ThemeProvider>
  );
}
