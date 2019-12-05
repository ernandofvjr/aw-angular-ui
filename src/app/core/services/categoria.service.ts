import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Categoria } from './../../domain/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  CATEGORIA_URL = `http://localhost:8080/categorias`;
  Auth = 'YWRtaW5AZ21haWwuY29tOmFkbWlu';

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Categoria[]> {

    let headers = new HttpHeaders();

    headers = headers.append('Authorization', `Basic ${this.Auth}`);

    return this.http.get<Categoria[]>(`${this.CATEGORIA_URL}`, {headers});
  }

}
