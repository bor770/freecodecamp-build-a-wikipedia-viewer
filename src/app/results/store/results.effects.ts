import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { getRouterSelectors } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';

import { QueryResponse } from '../results.model';
import * as ResultsActions from './results.actions';

@Injectable()
export class ResultsEffects {
  fetchResults = createEffect(() =>
    this.actions$.pipe(
      ofType(ResultsActions.FETCH_RESULTS),
      concatLatestFrom(() =>
        this.store.select(getRouterSelectors().selectRouteParam(`term`))
      ),
      switchMap(([fetchResultsAction, term]) =>
        this.http
          .get<QueryResponse>(
            `https://en.wikipedia.org/w/api.php?action=query&format=json&exintro&exlimit=max&explaintext&generator=search&gsrsearch=${term}&origin=*&prop=extracts`
          )
          .pipe(
            map(
              (response) => new ResultsActions.SetResults(response.query.pages)
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions<ResultsActions.ResultsActions>,
    private http: HttpClient,
    private store: Store
  ) {}
}
