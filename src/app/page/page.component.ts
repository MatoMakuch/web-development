import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  identifier: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve the 'identifier' from the route
    this.identifier = this.route.snapshot.paramMap.get('identifier'); 
  }
}
