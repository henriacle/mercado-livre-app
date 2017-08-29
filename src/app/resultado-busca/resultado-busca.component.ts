import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../shared/busca.service';

@Component({
  selector: 'ml-resultado-busca',
  templateUrl: './resultado-busca.component.html',
  styleUrls: ['./resultado-busca.component.scss']
})
export class ResultadoBuscaComponent implements OnInit {

  constructor(public buscaSrv: BuscaService) { }

  ngOnInit() {
    this.buscaSrv.searchProdutos('teste');
  }

}
