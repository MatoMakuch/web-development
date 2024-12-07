import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from '../core/list/list.component';
import { ListNode } from '../core/list/list.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListComponent
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
      expanded: true,
      children: [
        {
          id: 2,
          data: 'Work',
          children: [
            { data: 'Expenses.doc' },
            { data: 'Resume.doc' },
          ],
        },
        {
          id: 3,
          data: 'Home',
          children: [
            { data: 'Invoices.txt' },
          ],
        },
      ],
    },
    {
      id: 4,
      data: 'Pictures',
      children: [
        { data: 'barcelona.jpg' },
        { data: 'logo.png' },
        { data: 'primeui.png' },
      ],
    },
  ];

  selectedNodes: ListNode[] = [];
}
