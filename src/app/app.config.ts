import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { MockDataService } from './mock-component-data-source.service.js'; // Mock service
import { DataSourceToken } from './component-data-source.token.js';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [{ provide: DataSourceToken, useClass: MockDataService }, provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
