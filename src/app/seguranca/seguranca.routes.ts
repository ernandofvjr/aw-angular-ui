import { NaoAutorizadoComponent } from './../core/nao-autorizado/nao-autorizado.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { Routes } from '@angular/router';


export const SEGURANCA_ROUTES: Routes = [

  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'acesso-negado',
    component: NaoAutorizadoComponent
  }
];
