import { InjectionToken } from '@angular/core';
import { ComponentDataSource } from './component-data-source.interface';

export const DataSourceToken = new InjectionToken<ComponentDataSource>('DataSourceToken');
