export type Results = { extract: string; pageid: number; title: string }[];

export type QueryResponse = { query: { pages: Results } };
