import { Action } from '@ngrx/store';

import { Results } from '../results.model';

export const SET_RESULTS = `[Results] Set Results`;

export class SetResults implements Action {
  readonly type = SET_RESULTS;

  constructor(public payload: Results) {}
}

export type ResultsActions = SetResults;
