import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideState } from '@ngrx/store';

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
      provideState(`router`, routerReducer),
    ],
  },
];
