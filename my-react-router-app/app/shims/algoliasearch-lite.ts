type SearchIndex = {
  initIndex: (_indexName: string) => {
    search: (_query?: string) => Promise<{ hits: never[]; nbHits: number }>;
  };
};

export default function algoliasearch(): SearchIndex {
  return {
    initIndex: () => ({
      search: async () => ({ hits: [], nbHits: 0 }),
    }),
  };
}
