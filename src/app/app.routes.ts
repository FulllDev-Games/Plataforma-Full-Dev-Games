import { Routes } from '@angular/router';
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
