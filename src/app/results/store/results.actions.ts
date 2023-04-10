import { createAction, props } from '@ngrx/store';

import { Results } from '../results.model';

export const setResults = createAction(
  `[Results] Set Results`,
  props<{ results: Results }>()
);
