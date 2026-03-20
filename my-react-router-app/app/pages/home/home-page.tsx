import { ThemeProvider } from "@rescui/ui-contexts";

import { HeaderSection } from "./sections/header-section";
import { LatestFromKotlinSection } from "./sections/latest-from-kotlin-section";
import { StartSection } from "./sections/start-section";
import { UsageSection } from "./sections/usage-section";
import { WhyKotlinSection } from "./sections/why-kotlin-section";

import "./home-page.scss";

interface HomePageProps {
  initialProgrammingLanguageTab: number;
  initialSortByName: boolean;
}

export const HomePage = ({
  initialProgrammingLanguageTab,
  initialSortByName,
}: HomePageProps) => (
  <ThemeProvider theme="dark">
    <div className="overview-page">
      <HeaderSection />
      <LatestFromKotlinSection />
      <WhyKotlinSection
        initialProgrammingLanguageTab={initialProgrammingLanguageTab}
      />
      <UsageSection initialSortByName={initialSortByName} />
      <StartSection />
    </div>
  </ThemeProvider>
);
