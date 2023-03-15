import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Results } from './results.model';
import * as fromResults from './store/results.reducer';
import * as ResultsActions from './store/results.actions';

@Component({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  selector: 'app-results',
  standalone: true,
  styleUrls: ['./results.component.css'],
  templateUrl: './results.component.html',
})
export class ResultsComponent implements OnInit {
  form = new FormGroup({ searchTerm: new FormControl() });
  results$: Observable<Results>;

  ngOnInit(): void {
    this.results$ = this.store.select(fromResults.getResultsState);
    this.store.dispatch(new ResultsActions.FetchResults());
    this.results$.subscribe(console.log);
  }

  constructor(private store: Store) {}
}
