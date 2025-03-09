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
  title = 'maxterdev-web-development';
  nodes: ListNode[] = [
    {
      id: 1,
      label: 'Documents',
      expanded: true,
      children: [
        {
          id: 2,
          label: 'Work',
          children: [
            { 
              label: 'Expenses.doc',
              data: '...',
            },
            { 
              label: 'Resume.doc',
              data: '...',
            },
          ],
        },
        {
          id: 3,
          label: 'Home',
          children: [
            { 
              label: 'Invoices.txt',
              data: '...',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      label: 'Pictures',
      children: [
        { 
          label: 'barcelona.jpg',
          data: '...',
        },
        { 
          label: 'logo.png',
          data: '...',
        },
        { 
          label: 'primeui.png',
          data: '...',
        },
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
