import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentoService } from './services/lancamento.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [NavbarComponent],
  providers: [LancamentoService]
})
export class CoreModule { }
