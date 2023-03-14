import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  selector: 'app-search-box',
  standalone: true,
  styleUrls: ['./search-box.component.css'],
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  form = new FormGroup({ searchTerm: new FormControl() });
  searchBox = false;

  showSearchBox() {
    this.searchBox = true;
  }

  hideSearchBox() {
    this.searchBox = false;
    this.form.reset();
  }

  onSubmit() {
    this.router.navigate([this.form.value.searchTerm]);
  }

  constructor(private router: Router) {}
}
