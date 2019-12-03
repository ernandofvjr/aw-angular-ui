import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaLancamentoComponent } from './pesquisa-lancamento/pesquisa-lancamento.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';



@NgModule({
  declarations: [PesquisaLancamentoComponent],
  imports: [
    CommonModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  exports: [
    PesquisaLancamentoComponent
  ]
})
export class LancamentoModule { }
