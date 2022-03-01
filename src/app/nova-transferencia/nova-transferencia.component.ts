import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciasService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciasService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe((result) => {
      this.router.navigateByUrl('extrato')
    });
    // this.aoTransferir.emit(valorEmitir);


  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
