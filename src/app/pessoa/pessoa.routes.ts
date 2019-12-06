import { AuthGuard } from './../seguranca/guards/auth.guard';
import { Routes } from '@angular/router';


import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { PesquisaPessoaComponent } from './pesquisa-pessoa/pesquisa-pessoa.component';

export const PESSOAS_ROUTES: Routes = [

  {
    path: 'pessoas',
    component: PesquisaPessoaComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_PESQUISAR_PESSOA']}
  },
  {
    path: 'pessoas/novo',
    component: CadastroPessoaComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_CADASTRAR_PESSOA']}
  },
  {
    path: 'pessoas/:codigo',
    component: CadastroPessoaComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_CADASTRAR_PESSOA']}
  }
];
