import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromResults from './store/results.reducer';
import * as ResultsActions from './store/results.actions';

@Component({
  imports: [CommonModule],
  selector: 'app-results',
  standalone: true,
  styleUrls: ['./results.component.css'],
  templateUrl: './results.component.html',
})
export class ResultsComponent implements OnInit {
  results$: Observable<fromResults.ResultsState>;

  ngOnInit(): void {
    this.results$ = this.store.select(fromResults.getResultsState);
    this.store.dispatch(new ResultsActions.FetchResults());
  }

  constructor(private store: Store) {}
}
