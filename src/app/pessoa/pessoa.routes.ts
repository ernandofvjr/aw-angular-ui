import { AuthGuard } from './../seguranca/guards/auth.guard';
import { Routes } from '@angular/router';


import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { PesquisaPessoaComponent } from './pesquisa-pessoa/pesquisa-pessoa.component';

export const PESSOAS_ROUTES: Routes = [

  {
    path: '',
    component: PesquisaPessoaComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_PESQUISAR_PESSOA']}
  },
  {
    path: 'novo',
    component: CadastroPessoaComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_CADASTRAR_PESSOA']}
  },
  {
    path: ':codigo',
    component: CadastroPessoaComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_CADASTRAR_PESSOA']}
  }
];
