import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  ],
  selector: 'app-search-box',
  standalone: true,
  styleUrls: ['./search-box.component.css'],
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Input() open: boolean;

  onOpen() {
    this.open = true;
  }

  onClose() {
    this.router.navigate([`/d`]);
  }

  constructor(private router: Router) {}
}
