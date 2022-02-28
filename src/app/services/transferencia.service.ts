import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  private listaDeTransferencia: any[] = [];

  constructor() { }

  get transferencias() {
    return this.listaDeTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.listaDeTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

}
