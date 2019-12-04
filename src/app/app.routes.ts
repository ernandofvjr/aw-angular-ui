import { PaginaNaoEncontradaComponent } from './shared/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CadastroPessoaComponent } from './pessoa/cadastro-pessoa/cadastro-pessoa.component';
import { PesquisaPessoaComponent } from './pessoa/pesquisa-pessoa/pesquisa-pessoa.component';
import { Routes } from '@angular/router';

import { CadastroLancamentoComponent } from './lancamento/cadastro-lancamento/cadastro-lancamento.component';
import { PesquisaLancamentoComponent } from './lancamento/pesquisa-lancamento/pesquisa-lancamento.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'lancamentos',
    pathMatch: 'full'
  },
  {
    path: 'lancamentos',
    component: PesquisaLancamentoComponent
  },
  {
    path: 'lancamentos/novo',
    component: CadastroLancamentoComponent
  },
  {
    path: 'pessoas',
    component: PesquisaPessoaComponent
  },
  {
    path: 'pessoas/novo',
    component: CadastroPessoaComponent
  },
  {
    path: 'pessoas/:codigo',
    component: CadastroPessoaComponent
  },
  {
    path: 'lancamentos/:codigo',
    component: CadastroLancamentoComponent
  },
  {
    path: 'pagina-nao-encontrada',
    component: PaginaNaoEncontradaComponent
  },
  {
    path: '**',
    redirectTo: 'pagina-nao-encontrada',
    pathMatch: 'full'
  }


];
