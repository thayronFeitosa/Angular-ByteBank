import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  valor: number = 0;
  destino: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    console.log(`valor: ${this.valor} \ndestino: ${this.destino}`);

  }

}
