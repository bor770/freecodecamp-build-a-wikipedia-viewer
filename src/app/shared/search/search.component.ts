import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';

import * as SearchActions from './store/search.actions';

@Component({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  selector: 'app-search',
  standalone: true,
  styleUrls: ['./search.component.css'],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  @Input() value: string;
  open: boolean;

  ngOnInit(): void {
    this.open = !!this.value;
  }

  onSearch(event: KeyboardEvent) {
    if (event.key === `Enter`) {
      this.store.dispatch(
        new SearchActions.Search((<HTMLInputElement>event.target).value)
      );
    }
  }

  onToggle() {
    this.open = !this.open;
  }

  constructor(private store: Store) {}
}
