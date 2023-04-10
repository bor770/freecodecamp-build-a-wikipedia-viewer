import { createFeatureSelector, createReducer, on } from '@ngrx/store';

import { Results } from '../results.model';
import * as ResultsActions from './results.actions';

export type ResultsState = Results;

const initialState: ResultsState = null;

// export function resultsReducer(
//   state = initialState,
//   action: ResultsActions.ResultsActions
// ) {
//   switch (action.type) {
//     case ResultsActions.setResults.type:
//       return JSON.parse(JSON.stringify(action.res));
//     default:
//       return state;
//   }
// }

export const resultsReducer = createReducer(
  initialState,
  on(
    ResultsActions.setResults,
    (_, { results }): ResultsState => JSON.parse(JSON.stringify(results))
  )
);

export const getResultsState = createFeatureSelector<ResultsState>(`results`);
