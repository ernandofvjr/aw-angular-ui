import { PaginaNaoEncontradaComponent } from './shared/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { Routes } from '@angular/router';
export const ROUTES: Routes = [
  {
    path: 'lancamentos',
    loadChildren: () => import('./lancamento/lancamento.module').then(m => m.LancamentoModule)
  },
  {
    path: 'pessoas',
    loadChildren: () => import('./pessoa/pessoa.module').then(m => m.PessoaModule)
  },
  {
    path: '',
    redirectTo: 'lancamentos',
    pathMatch: 'full'
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
