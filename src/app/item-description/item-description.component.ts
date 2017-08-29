import { BuscaService } from '../shared/busca.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ml-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.scss']
})
export class ItemDescriptionComponent implements OnInit {
  item;
  itemDescription;

  constructor(public activatedRoute: ActivatedRoute, public buscaSrv: BuscaService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];

      this.buscaSrv.searchSingleProduct(id).subscribe((res: Response) => {
        this.item = res;
      });

      this.buscaSrv.searchSingleProductDesription(id).subscribe((res: Response) => {
        this.itemDescription = res;
      });
    });
  }

}
