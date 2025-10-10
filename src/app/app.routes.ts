import { Routes } from '@angular/router';
import { Main } from './main/main';
import { About } from './about/about';

export const routes: Routes = [
  {
    path: "",
    component: Main
  },
  {
    path: "sobre",
    component: About
  }
import { Support } from './support/support';
import { Main } from './main/main';

export const routes: Routes = [
    {
        path: "",
        component: Main
    },
    {
        path: "support",
        component: Support
    }
];
