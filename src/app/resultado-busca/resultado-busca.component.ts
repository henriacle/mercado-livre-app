import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscaService } from '../shared/busca.service';

@Component({
  selector: 'ml-resultado-busca',
  templateUrl: './resultado-busca.component.html',
  styleUrls: ['./resultado-busca.component.scss']
})
export class ResultadoBuscaComponent implements OnInit {

  constructor(public buscaSrv: BuscaService, public router: Router) { }

  goToDescription(idProduto) {
    this.router.navigate(['/descricao', idProduto]);
  }

  ngOnInit() {

  }

}
