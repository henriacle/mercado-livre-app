import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ml-resultado-busca-item',
  templateUrl: './resultado-busca-item.component.html',
  styleUrls: ['./resultado-busca-item.component.scss']
})
export class ResultadoBuscaItemComponent implements OnInit {
  @Input() resultado;

  constructor() { }

  ngOnInit() {
  }

}
