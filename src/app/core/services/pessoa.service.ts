import { map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pessoa } from 'src/app/domain/pessoa.model';
import { PessoaFilter } from './../classes/pessoa-filter';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  PESSOA_URL = `http://localhost:8080/pessoas`;
  Auth = 'YWRtaW5AZ21haWwuY29tOmFkbWlu';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: PessoaFilter): Observable<any[]> {

    let headers = new HttpHeaders();
    let params = new HttpParams();

    headers = headers.append('Authorization', `Basic ${this.Auth}`);

    params = params.append('page', filtro.pagina.toString());
    params = params.append('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any[]>(`${this.PESSOA_URL}`, {params, headers});
  }

  buscarTodos(): Observable<Pessoa[]> {

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Basic ${this.Auth}`);

    return this.http.get<Pessoa[]>(`${this.PESSOA_URL}`, {headers})
    .pipe(
      map((response) => {
        return response['content'];
      })
    );
  }

  deletar(codigo: string): Observable<string> {

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Basic ${this.Auth}`);

    return this.http.delete<string>(`${this.PESSOA_URL}/${codigo}`, {headers});
  }

  mudarStatus(codigo: number, ativo: boolean): Observable <void> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Basic ${this.Auth}`);
    headers = headers.append('Content-Type', 'application/json');

    return this.http.put<any>(`${this.PESSOA_URL}/${codigo}/ativo`, ativo, {headers});
  }
  salvar(pessoa: Pessoa): Observable<Pessoa> {

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Basic ${this.Auth}`);
    headers = headers.append('Content-Type', 'application/json');

    return this.http.post<Pessoa>(`${this.PESSOA_URL}`, pessoa, {headers});
  }

  atualizar(codigoPessoa: number, pessoa: any): Observable<Pessoa> {

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Basic ${this.Auth}`);
    headers = headers.append('Content-Type', 'application/json');

    return this.http.put<Pessoa>(`${this.PESSOA_URL}/${codigoPessoa}`, pessoa, {headers});
  }


  buscarPorCodigo(codigo: number): Observable<Pessoa> {

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Basic ${this.Auth}`);
    headers = headers.append('Content-Type', 'application/json');

    return this.http.get<Pessoa>(`${this.PESSOA_URL}/${codigo}`, {headers});
  }

}
