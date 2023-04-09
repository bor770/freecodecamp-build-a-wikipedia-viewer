import { createFeatureSelector } from '@ngrx/store';

import { Results } from '../results.model';
import * as ResultsActions from './results.actions';

export type ResultsState = Results;

const initialState: ResultsState = null;

export function resultsReducer(
  state = initialState,
  action: ResultsActions.ResultsActions
) {
  switch (action.type) {
    case ResultsActions.SET_RESULTS:
      return JSON.parse(JSON.stringify(action.payload));
    default:
      return state;
  }
}

export const getResultsState = createFeatureSelector<ResultsState>(`results`);
