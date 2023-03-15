import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SearchBoxComponent } from '../shared/search-box/search-box.component';

@Component({
  imports: [CommonModule, SearchBoxComponent],
  selector: 'app-search',
  standalone: true,
  styleUrls: ['./search.component.css'],
  templateUrl: './search.component.html',
})
export class SearchComponent {}
