import { ThemeProvider } from "@rescui/ui-contexts";

import { HeaderSection } from "./sections/header-section";
import { LatestFromKotlinSection } from "./sections/latest-from-kotlin-section";
import { StartSection } from "./sections/start-section";
import { UsageSection } from "./sections/usage-section";
import { WhyKotlinSection } from "./sections/why-kotlin-section";

import "./home-page.scss";

interface HomePageProps {
  initialSortByName: boolean;
}

export function HomePage({ initialSortByName }: HomePageProps) {
  return (
    <ThemeProvider theme="dark">
      <div className="overview-page">
        <HeaderSection />
        <LatestFromKotlinSection />
        <WhyKotlinSection />
        <UsageSection initialSortByName={initialSortByName} />
        <StartSection />
      </div>
    </ThemeProvider>
  );
}
