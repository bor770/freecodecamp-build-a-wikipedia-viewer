type Result = { extract: string; pageid: number; title: string };

export type QueryResponse = { query: { pages: { [key: number]: Result } } };

export type Results = Result[];
