import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BuscaService {
  resultado;

  constructor(public http: Http) {

  }

  searchProdutos(parameters) {
    this.http.get('https://api.mercadolibre.com/sites/MLA/search?q=celular', {})
    .subscribe( (resp) => {
        
      }
    )
  }
}
