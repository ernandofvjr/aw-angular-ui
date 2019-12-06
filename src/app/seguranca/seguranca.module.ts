import { LogoutService } from './../core/services/logout.service';
import { AuthGuard } from './guards/auth.guard';
import { AppHttp } from 'src/app/seguranca/app-http';
import { FormsModule } from '@angular/forms';
import { SEGURANCA_ROUTES } from './seguranca.routes';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

import { LoginFormComponent } from './login-form/login-form.component';

import { JwtModule } from '@auth0/angular-jwt';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: [/localhost:8080/],
        blacklistedRoutes: [/\/oauth\/token/]
      }
    }),

    RouterModule.forChild(SEGURANCA_ROUTES)
  ],
  exports: [LoginFormComponent],
  providers: [AppHttp, AuthGuard, LogoutService]
})
export class SegurancaModule { }
