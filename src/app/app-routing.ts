import { provideHttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideState } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { ResultsEffects } from './results/store/results.effects';
import * as fromResults from './results/store/results.reducer';

export const routes: Routes = [
  {
    loadComponent: () =>
      import(`./results/results.component`).then((m) => m.ResultsComponent),
    path: `:term`,
    providers: [
      provideEffects(ResultsEffects),
      provideHttpClient(),
      provideRouterStore(),
      provideState(`results`, fromResults.resultsReducer),
      provideStoreDevtools({ logOnly: !isDevMode() }),
    ],
  },
];
