// component-factory.component.ts
import { Component, Input } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-factory-component',
  template: './factory.component.html'
})
export class ComponentFactoryComponent {
  @Input() componentType: string = ''; // Type of the component to display
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Assuming the factory will ask for some 'key' to fetch data
    this.data = this.dataService.getValue('someKey'); // Retrieve data based on key
  }
}
