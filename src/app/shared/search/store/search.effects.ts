import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

import * as SearchActions from './search.actions';

@Injectable()
export class SearchEffects {
  search = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SearchActions.search),
        tap((searchAction) => {
          this.router.navigate([searchAction.searchTerm]);
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
