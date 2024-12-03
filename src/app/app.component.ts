import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ListComponent } from './components/list/list.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CyberfabUploadDirective } from './components/upload/upload.directive';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabListComponent } from './components/tablist/tablist.component';
import { TabPanelComponent } from './components/tabpanel/tabpanel.component';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DropdownComponent,
    ListComponent,
    CheckboxComponent,
    CyberfabUploadDirective,
    TabsComponent,
    TabListComponent,
    TabPanelComponent,
    TableComponent

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
  activeTab: number = 0;
  onRowClicked(row: any): void {
    console.log('Row clicked:', row);}
  selectedItems: any[] = [];
}
