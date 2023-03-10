import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

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
export class SearchComponent {
  searchBox = false;

  toggleSearchBox() {
    this.searchBox = !this.searchBox;
  }
}
