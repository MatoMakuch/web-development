import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ListComponent } from './components/list/list.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DropdownComponent,
    ListComponent,
    CheckboxComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cyberfab-web-development';
  products = [
    { id: 1, name: 'Bamboo Watch' },
    { id: 2, name: 'Black Watch' },
    { id: 3, name: 'Blue Band' },
    { id: 4, name: 'Blue T-Shirt' },
    { id: 5, name: 'Bracelet' },
    { id: 6, name: 'Brown Purse' },
  ];
  isChecked: boolean = false;
}
