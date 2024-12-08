import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from '../core/list/list.component';
import { ListNode } from '../core/list/list.interface';
import { TabListComponent } from '../core/tablist/tablist.component';
import { TabsComponent } from '../core/tabs/tabs.component';
import { TabPanelComponent } from '../core/tabpanel/tabpanel.component';
import { TableComponent } from '../core/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListComponent,
    TabListComponent,
    TabsComponent,
    TabPanelComponent,
    TableComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cyberfab-web-development';
  nodes: ListNode[] = [
    {
      id: 1,
      data: 'Documents',
      name: 'Documents',
      expanded: true,
      children: [
        {
          id: 2,
          data: 'Work',
          name: 'Work',
          children: [
            { data: 'Expenses.doc' },
            { data: 'Resume.doc' },
          ],
        },
        {
          id: 3,
          data: 'Home',
          name: 'Home',
          children: [
            { data: 'Invoices.txt' },
          ],
        },
      ],
    },
    {
      id: 4,
      data: 'Pictures',
      name: 'Pictures',
      children: [
        { data: 'barcelona.jpg' },
        { data: 'logo.png' },
        { data: 'primeui.png' },
      ],
    },
  ];

  selectedNodes: ListNode[] = [];
  selectedItems: any[] = [];
  isChecked: boolean = false;
  activeTab: number = 0;
  onRowClicked(row: any): void {
  console.log('Row clicked:', row);
  }
}
