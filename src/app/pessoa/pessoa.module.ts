import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaPessoaComponent } from './pesquisa-pessoa/pesquisa-pessoa.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';



@NgModule({
  declarations: [PesquisaPessoaComponent],
  imports: [
    CommonModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  exports: [PesquisaPessoaComponent]
})
export class PessoaModule { }
