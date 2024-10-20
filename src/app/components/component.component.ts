// component-factory.component.ts
import { Component, Input, Inject } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { ComponentDataSource } from '../component-data-source.interface';
import { DataSourceToken } from '../component-data-source.token';

@Component({
  selector: 'app-factory-component',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './component.component.html'
})
export class ComponentFactoryComponent {
  @Input() componentType: string = ''; // Type of the component to display
  data: any;

  constructor(@Inject(DataSourceToken) private dataSource: ComponentDataSource) {}

  ngOnInit() {
    // Assuming the factory will ask for some 'key' to fetch data
    this.data = this.dataSource.getValue('someKey'); // Retrieve data based on key
  }
}
