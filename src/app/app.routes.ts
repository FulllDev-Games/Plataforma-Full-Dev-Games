import { Routes } from '@angular/router';
import { Main } from './main/main';
import { About } from './about/about';
import { Support } from './support/support';

export const routes: Routes = [
  {
    path: "",
    component: Main
  },
  {
    path: "sobre",
    component: About
  },
  {
    path: "support",
    component: Support
  }
];
