import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { PessoaService } from './services/pessoa.service';
import { CategoriaService } from './services/categoria.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LancamentoService } from './services/lancamento.service';

import { JwtHelperService } from '@auth0/angular-jwt';
import { NaoAutorizadoComponent } from './nao-autorizado/nao-autorizado.component';


@NgModule({
  declarations: [NavbarComponent, NaoAutorizadoComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [NavbarComponent],
  providers: [LancamentoService, CategoriaService, PessoaService, AuthService, JwtHelperService]
})
export class CoreModule { }
