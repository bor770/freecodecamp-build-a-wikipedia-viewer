import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { getRouterSelectors } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SearchComponent } from '../shared/search/search.component';
import * as fromResults from './store/results.reducer';

@Component({
  imports: [CommonModule, MatCardModule, MatListModule, SearchComponent],
  selector: 'app-results',
  standalone: true,
  styleUrls: ['./results.component.css'],
  templateUrl: './results.component.html',
})
export class ResultsComponent implements OnInit {
  results$: Observable<fromResults.ResultsState>;
  term$: Observable<string>;

  ngOnInit(): void {
    this.term$ = this.store.select(
      getRouterSelectors().selectRouteParam(`term`)
    );
    this.results$ = this.store.select(fromResults.selectResultsState);
  }

  constructor(private store: Store) {}
}
