import { Action } from '@ngrx/store';

export const SEARCH = `[Search] Search`;

export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) {}
}

export type SearchActions = Search;
