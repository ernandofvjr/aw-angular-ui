import { ROUTES } from './app.routes';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { SegurancaModule } from './seguranca/seguranca.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { LancamentoModule } from './lancamento/lancamento.module';

import { ToastrModule } from 'ngx-toastr';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import { ErrorHandlerService } from './core/services/error-handler.service';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

    LancamentoModule,
    PessoaModule,
    SharedModule,
    CoreModule,
    SegurancaModule,

    ConfirmDialogModule,

    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),

  ],
  providers: [
    ConfirmationService,
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
