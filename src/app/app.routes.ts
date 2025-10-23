import { Routes } from '@angular/router';
import { Main } from './main/main';
import { About } from './about/about';
import { Support } from './support/support';
import { PersonalData } from './personal-data/personal-data';
import { DadosPessoais } from './personal-data/menu/dados-pessoais/dados-pessoais';
import { AlterarSenha } from './personal-data/menu/alterar-senha/alterar-senha';
import { AlterarEmail } from './personal-data/menu/alterar-email/alterar-email';
import { MinhaConta } from './personal-data/menu/minha-conta/minha-conta';

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
    path: "dados",
    component: PersonalData,
    children: [
      {
        path:"dados-pessoais",
        component: DadosPessoais
      },
      {
        path: "alterar-senha",
        component: AlterarSenha
      },
      {
        path: "alterar-email",
        component: AlterarEmail
      },
      {
        path: "minha-conta",
        component: MinhaConta
      }
    ]
  }
];
