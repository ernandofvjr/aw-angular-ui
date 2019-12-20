import { Routes} from '@angular/router';

import { PesquisaLancamentoComponent } from './pesquisa-lancamento/pesquisa-lancamento.component';
import { CadastroLancamentoComponent } from './cadastro-lancamento/cadastro-lancamento.component';
import { AuthGuard } from '../seguranca/guards/auth.guard';

export const LANCAMENTOS_ROUTES: Routes = [

  {
    path: '',
    component: PesquisaLancamentoComponent,
    canActivate: [AuthGuard],
    data : {roles: ['ROLE_PESQUISAR_LANCAMENTO']}
  },
  {
    path: 'novo',
    component: CadastroLancamentoComponent,
    canActivate: [AuthGuard],
    data : {roles: ['ROLE_CADASTRAR_LANCAMENTO']}
  },
  {
    path: ':codigo',
    component: CadastroLancamentoComponent,
    canActivate: [AuthGuard],
    data : {roles: ['ROLE_CADASTRAR_LANCAMENTO']}
  }
];
