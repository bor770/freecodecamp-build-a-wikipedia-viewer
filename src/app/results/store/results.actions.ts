import { Action } from '@ngrx/store';

import { Results } from '../results.model';

export const FETCH_RESULTS = `[Results] Fetch Results`;
export const SET_RESULTS = `[Results] Set Results`;

export class FetchResults implements Action {
  readonly type = FETCH_RESULTS;
}

export class SetResults implements Action {
  readonly type = SET_RESULTS;

  constructor(public payload: Results) {}
}

export type ResultsActions = FetchResults | SetResults;
