import { Action, createAction, props } from '@ngrx/store';

import { Results } from '../results.model';

// export const SET_RESULTS = `[Results] Set Results`;

// export class SetResults implements Action {
//   readonly type = SET_RESULTS;

//   constructor(public payload: Results) {}
// }

// export type ResultsActions = SetResults;

export const setResults = createAction(
  `[Results] Set Results`,
  props<{ results: Results }>
);

export type ResultsActions = ReturnType<typeof setResults>;
