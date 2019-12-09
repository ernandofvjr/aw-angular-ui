import { environment } from './../../../environments/environment';
import { AppHttp } from 'src/app/seguranca/app-http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Categoria } from './../../domain/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  CATEGORIA_URL: string;

  constructor(private http: AppHttp) {
    this.CATEGORIA_URL = `${environment.apiURl}/categorias`;
  }

  buscarTodos(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.CATEGORIA_URL}`);
  }

}
