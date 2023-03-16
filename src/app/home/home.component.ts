import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SearchComponent } from '../shared/search/search.component';

@Component({
  imports: [CommonModule, SearchComponent],
  selector: 'app-home',
  standalone: true,
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
