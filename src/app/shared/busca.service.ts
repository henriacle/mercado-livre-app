import { Http, Response } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BuscaService {
  listaResultados = {};

  constructor(public http: HttpClient) {

  }

  searchProdutos(parameters) {
    const query = new HttpParams()
          .set('q', parameters);

    this.http.get('https://api.mercadolibre.com/sites/MLA/search', {
      params: query
    }).subscribe( (resp: Response) => {
        this.listaResultados = resp;
      }
    )
  }

  searchSingleProduct(id) {
    return this.http.get('https://api.mercadolibre.com/items/' + id, {})
  }

  searchSingleProductDesription(id) {
    return this.http.get('https://api.mercadolibre.com/items/'+id+'/description', {})
  }
}
