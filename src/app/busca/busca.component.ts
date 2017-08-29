import { BuscaService } from '../shared/busca.service';
import { Form, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import "rxjs/Rx";


@Component({
  selector: 'ml-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {
  searchControl = new FormControl();

  constructor(public buscaSrv: BuscaService) { }

  ngOnInit() {
    this.searchControl.valueChanges
      .debounceTime(500)
      .subscribe(valor => {
        if (valor.length > 0) {
          this.buscaSrv.loading = true;
          this.buscaProduto(valor);
        }
      });

  }

  buscaProduto(valor) {
    this.buscaSrv.searchProdutos(valor);
  }
}
