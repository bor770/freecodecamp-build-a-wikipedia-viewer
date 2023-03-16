import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing';
import { SearchEffects } from './app/shared/search/store/search.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideEffects(SearchEffects),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideStore(),
    provideStoreDevtools({ logOnly: !isDevMode() }),
  ],
});


