import { tabs } from "./data";

export const getRandomProgrammingLanguageTabIndex = () =>
  Math.floor(Math.random() * tabs.length);
