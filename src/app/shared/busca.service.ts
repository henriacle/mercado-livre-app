import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BuscaService {
  listaResultados;

  constructor(public http: Http) {

  }

  searchProdutos(parameters) {
    this.http.get('https://api.mercadolibre.com/sites/MLA/search?q=celular', {})
    .subscribe( (resp: Response) => {
        this.listaResultados = resp.json().results;
      }
    )
  }
}
