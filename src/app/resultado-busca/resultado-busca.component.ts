import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { BuscaService } from '../shared/busca.service';

@Component({
  selector: 'ml-resultado-busca',
  templateUrl: './resultado-busca.component.html',
  styleUrls: ['./resultado-busca.component.scss']
})
export class ResultadoBuscaComponent implements OnInit {

  constructor(public buscaSrv: BuscaService, public router: Router, public activatedRoute: ActivatedRoute) { }

  goToDescription(idProduto) {
    this.router.navigate(['/descricao', idProduto]);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      const param = params['q'];
      console.log(param);
      if (params['q']) {
        this.buscaSrv.searchProdutos(param);
      }
    });
  }

}
