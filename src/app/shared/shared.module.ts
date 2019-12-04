import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';



@NgModule({
  declarations: [MessageComponent, PaginaNaoEncontradaComponent],
  imports: [
    CommonModule
  ],
  exports: [MessageComponent, PaginaNaoEncontradaComponent]
})
export class SharedModule { }
