import { map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LancamentoFilter } from '../classes/lancamento-filter';
import { Lancamento } from 'src/app/domain/lancamento.model';

import * as moment from 'moment';
import { AppHttp } from 'src/app/seguranca/app-http';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  LANCAMENTO_URL = `http://localhost:8080/lancamentos`;
  // Auth = 'YWRtaW5AZ21haWwuY29tOmFkbWlu';

  constructor(private http: AppHttp) { }

  pesquisar(filtro: LancamentoFilter): Observable<any[]> {

    // let headers = new HttpHeaders();
    let params = new HttpParams();

    // headers = headers.append('Authorization', `Basic ${this.Auth}`);

    params = params.append('page', filtro.pagina.toString());
    params = params.append('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }
    if (filtro.dataVencimentoDe) {
      params = params.append('dataVencimentoDe' , moment(filtro.dataVencimentoDe).format('YYYY-MM-DD'));
    }
    if (filtro.dataVencimentoAte) {
      params = params.append('dataVencimentoAte' , moment(filtro.dataVencimentoAte).format('YYYY-MM-DD'));
    }

    return this.http.get<any[]>(`${this.LANCAMENTO_URL}?resumo`, {params});
  }

  deletar(codigo: string): Observable<string> {

    return this.http.delete<string>(`${this.LANCAMENTO_URL}/${codigo}`);
  }

  salvar(lancamento: Lancamento): Observable<Lancamento> {

    let headers = new HttpHeaders();
    // headers = headers.append('Authorization', `Basic ${this.Auth}`);
    headers = headers.append('Content-Type', 'application/json');

    return this.http.post<Lancamento>(`${this.LANCAMENTO_URL}`, lancamento, {headers});
  }

  atualizar(codigoLancamento: number, lancamento: any): Observable<Lancamento> {

    let headers = new HttpHeaders();
    // headers = headers.append('Authorization', `Basic ${this.Auth}`);
    headers = headers.append('Content-Type', 'application/json');

    return this.http.put<Lancamento>(`${this.LANCAMENTO_URL}/${codigoLancamento}`, lancamento, {headers})
      .pipe(
        map((response) => {
          const lancamentoEditado = response;
          this.converterStringsParaDatas([lancamentoEditado]);
          return lancamentoEditado;
        })
      );
  }


  buscarPorCodigo(codigo: number): Observable<Lancamento> {

    let headers = new HttpHeaders();
    // headers = headers.append('Authorization', `Basic ${this.Auth}`);
    headers = headers.append('Content-Type', 'application/json');

    return this.http.get<Lancamento>(`${this.LANCAMENTO_URL}/${codigo}`, {headers})
    .pipe(
      map((response) => {
        const lancamento = response;
        this.converterStringsParaDatas([lancamento]);
        return lancamento;
      })
    );
  }

  private converterStringsParaDatas(lancamentos: Lancamento[]) {
    for (const lancamento of lancamentos) {

      if (lancamento.dataVencimento) {
        lancamento.dataVencimento = moment(lancamento.dataVencimento, 'YYYY-MM-DD').toDate();
      }
      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(lancamento.dataPagamento, 'YYYY-MM-DD').toDate();
      }
    }
  }

}
