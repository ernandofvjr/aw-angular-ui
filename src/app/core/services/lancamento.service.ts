import { ResumoLancamento } from './../../domain/resumo-lancamento.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LancamentoFilter } from '../classes/lancamento-filter';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  LANCAMENTO_URL = `http://localhost:8080/lancamentos`;
  Auth = 'YWRtaW5AZ21haWwuY29tOmFkbWlu';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: LancamentoFilter): Observable<ResumoLancamento[]> {



    return this.http.get<ResumoLancamento[]>(`${this.LANCAMENTO_URL}?resumo`);
  }

}
