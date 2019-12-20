import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PesquisaLancamentoComponent } from './pesquisa-lancamento/pesquisa-lancamento.component';
import { CadastroLancamentoComponent } from './cadastro-lancamento/cadastro-lancamento.component';
import { LANCAMENTOS_ROUTES } from './lancamento.routes';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';

import { NgxCurrencyModule } from 'ngx-currency';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PesquisaLancamentoComponent, CadastroLancamentoComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,

    NgxCurrencyModule,

    SharedModule,
    RouterModule.forChild(LANCAMENTOS_ROUTES)
  ],
  exports: [
    PesquisaLancamentoComponent,
    CadastroLancamentoComponent
  ]
})
export class LancamentoModule { }
