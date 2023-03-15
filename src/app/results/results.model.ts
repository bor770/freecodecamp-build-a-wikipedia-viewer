export type Results = {
  [key: number]: { extract: string; pageid: number; title: string };
}[];

export type QueryResponse = { query: { pages: Results } };
