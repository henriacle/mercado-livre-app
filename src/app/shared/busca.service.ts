import { Http, Response } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class BuscaService {
  listaResultados;
  loading = false;

  constructor(public http: HttpClient) {

  }

  searchProdutos(parameters) {
    const query = new HttpParams()
          .set('q', parameters);

    this.http.get(environment.apiUrl + '/api/items', {
      params: query
    }).subscribe( (resp: Response) => {
        this.loading = false;
        this.listaResultados = resp;
    });
  }

  searchSingleProduct(id) {
    return this.http.get(environment.apiUrl + '/api/items/' + id, {});
  }

  searchSingleProductDesription(id) {
    return this.http.get(environment.apiUrl + '/api/items/' + id + '/description', {});
  }
}
