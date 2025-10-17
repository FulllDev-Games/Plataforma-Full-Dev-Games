import { Routes } from '@angular/router';
import { Main } from './main/main';
import { About } from './about/about';
import { Support } from './support/support';
import { Ranking } from './ranking/ranking';
import { Players } from './ranking/players/players';
import { Guild } from './ranking/guild/guild';

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
    path: "suporte",
    component: Support
  },
  {
    path: "ranking",
    component: Ranking,
    children: [
      {
        path: "players",
        component: Players
      },
      {
        path: "guild",
        component: Guild
      },
      { 
        path: "", redirectTo: "players", pathMatch: "full" 
      }
    ]
  }
];
