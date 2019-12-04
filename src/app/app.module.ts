import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { SharedModule } from './shared/shared.module';
import { LancamentoModule } from './lancamento/lancamento.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    LancamentoModule,
    PessoaModule,
    SharedModule,
    CoreModule,

    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
