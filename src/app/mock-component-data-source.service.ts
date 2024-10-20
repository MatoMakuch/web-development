import { Injectable } from '@angular/core';
import { ComponentDataSource } from './component-data-source.interface';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements ComponentDataSource {
  private mockDataStore: { [key: string]: any } = {
    someKey: { name: 'Mock Data', value: 42 },
    anotherKey: 'Mock string value',
  };

  getValue(key: string): any {
    return this.mockDataStore[key] || null;
  }
}
