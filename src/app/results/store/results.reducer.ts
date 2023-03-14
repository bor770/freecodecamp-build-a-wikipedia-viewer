import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';

import { Results } from '../results.model';
import * as ResultsActions from './results.actions';

export interface ResultsState {
  results: Results;
  router: RouterReducerState;
}

const initialState: ResultsState = null;

export function resultsReducer(
  state = initialState,
  action: ResultsActions.ResultsActions
) {
  switch (action.type) {
    case ResultsActions.SET_RESULTS:
      return { ...state, results: JSON.parse(JSON.stringify(action.payload)) };
    default:
      return state;
  }
}

export const getResultsState = createFeatureSelector<ResultsState>(`results`);

export const getRouterState =
  createFeatureSelector<RouterReducerState>(`router`);
