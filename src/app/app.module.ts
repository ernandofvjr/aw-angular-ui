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

    LancamentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
