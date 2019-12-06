import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PessoaModule } from './pessoa/pessoa.module';
import { LancamentoModule } from './lancamento/lancamento.module';
import { PaginaNaoEncontradaComponent } from './shared/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SegurancaModule } from './seguranca/seguranca.module';


const ROUTES: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(ROUTES),
    LancamentoModule,
    PessoaModule,
    SegurancaModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
