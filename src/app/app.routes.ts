import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

export const routes: Routes = [
  { path: 'page/:identifier', component: PageComponent }
];
