import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaPessoaComponent } from './pesquisa-pessoa/pesquisa-pessoa.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {InputMaskModule} from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PesquisaPessoaComponent, CadastroPessoaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,

    SharedModule
  ],
  exports: [PesquisaPessoaComponent, CadastroPessoaComponent]
})
export class PessoaModule { }
