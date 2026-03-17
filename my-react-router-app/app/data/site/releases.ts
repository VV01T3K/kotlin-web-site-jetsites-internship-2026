export interface Releases {
  url: string;
  latest: {
    version: string;
    url: string;
  };
}

export const releases = {
  latest: {
    version: "1.6.20",
    url: "https://github.com/JetBrains/kotlin/releases/tag/v1.6.20",
  },
  url: "https://github.com/JetBrains/kotlin/releases",
} as const satisfies Releases;
