import { AppHttp } from 'src/app/seguranca/app-http';
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

  constructor(private http: AppHttp) { }

  pesquisar(filtro: PessoaFilter): Observable<any[]> {

    let params = new HttpParams();

    params = params.append('page', filtro.pagina.toString());
    params = params.append('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any[]>(`${this.PESSOA_URL}`, {params});
  }

  buscarTodos(): Observable<Pessoa[]> {


    return this.http.get<Pessoa[]>(`${this.PESSOA_URL}`)
    .pipe(
      map((response) => {
        return response['content'];
      })
    );
  }

  deletar(codigo: string): Observable<string> {

    return this.http.delete<string>(`${this.PESSOA_URL}/${codigo}`);
  }

  mudarStatus(codigo: number, ativo: boolean): Observable <void> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.put<any>(`${this.PESSOA_URL}/${codigo}/ativo`, ativo, {headers});
  }
  salvar(pessoa: Pessoa): Observable<Pessoa> {

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.post<Pessoa>(`${this.PESSOA_URL}`, pessoa, {headers});
  }

  atualizar(codigoPessoa: number, pessoa: any): Observable<Pessoa> {

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.put<Pessoa>(`${this.PESSOA_URL}/${codigoPessoa}`, pessoa, {headers});
  }


  buscarPorCodigo(codigo: number): Observable<Pessoa> {

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.get<Pessoa>(`${this.PESSOA_URL}/${codigo}`, {headers});
  }

}
