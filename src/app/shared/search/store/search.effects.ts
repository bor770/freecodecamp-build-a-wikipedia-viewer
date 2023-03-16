import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

import * as SearchActions from './search.actions';

@Injectable()
export class SearchEffects {
  search = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SearchActions.SEARCH),
        tap((searchAction) => {
          this.router.navigate([searchAction.payload]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions<SearchActions.SearchActions>,
    private router: Router
  ) {}
}
