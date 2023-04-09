import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { getRouterSelectors, ROUTER_NAVIGATED } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';

import { QueryResponse } from '../results.model';
import * as ResultsActions from './results.actions';

@Injectable()
export class ResultsEffects {
  fetchResults = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      concatLatestFrom(() =>
        this.store.select(getRouterSelectors().selectRouteParam(`term`))
      ),
      switchMap(([, term]) =>
        this.http
          .get<QueryResponse>(
            `https://en.wikipedia.org/w/api.php?action=query&format=json&exintro&exlimit=max&explaintext&generator=search&gsrsearch=${term}&origin=*&prop=extracts`
          )
          .pipe(
            map((response) =>
              response.query
                ? new ResultsActions.SetResults(
                    Object.values(response.query.pages)
                  )
                : { type: `DUMMY` }
            )
          )
      )
    );
  });

  constructor(
    private actions$: Actions<ResultsActions.ResultsActions>,
    private http: HttpClient,
    private store: Store
  ) {}
}
