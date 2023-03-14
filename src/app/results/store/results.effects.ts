import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';

import { Results } from '../results.model';
import * as fromResults from './results.reducer';
import * as ResultsActions from './results.actions';

@Injectable()
export class ResultsEffects {
  fetchResults = createEffect(() =>
    this.actions$.pipe(
      ofType(ResultsActions.FETCH_RESULTS),
      concatLatestFrom(() => this.store.select(fromResults.getRouterState)),
      switchMap(([fetchResultsAction, routerState]) =>
        this.http
          .get<Results>(
            `https://www.mediawiki.org/w/api.php?action=query&format=json&list=search&srsearch=${routerState.state.root.firstChild.params.id}`
          )
          .pipe(map((results) => new ResultsActions.SetResults(results)))
      )
    )
  );

  constructor(
    private actions$: Actions<ResultsActions.ResultsActions>,
    private http: HttpClient,
    private store: Store
  ) {}
}
