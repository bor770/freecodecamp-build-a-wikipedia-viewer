import { Routes } from '@angular/router';
import { provideRouterStore } from '@ngrx/router-store';

export const routes: Routes = [
  {
    loadComponent: () =>
      import(`./results/results.component`).then((m) => m.ResultsComponent),
    path: `:term`,
    providers: [provideRouterStore()],
  },
];
