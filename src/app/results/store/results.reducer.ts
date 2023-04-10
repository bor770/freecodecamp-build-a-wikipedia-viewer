import { createFeatureSelector, createReducer, on } from '@ngrx/store';

import { Results } from '../results.model';
import * as ResultsActions from './results.actions';

export type ResultsState = Results;

const initialState: ResultsState = null;

export const resultsReducer = createReducer(
  initialState,
  on(
    ResultsActions.setResults,
    (_, { results }): ResultsState => JSON.parse(JSON.stringify(results))
  )
);

export const selectResultsState = createFeatureSelector<ResultsState>(`results`);
