import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  private listaDeTransferencia: any[] = [];
  private url = "http://localhost:3000/transferencias";
  constructor(private httpClient: HttpClient) { }

  get transferencias() {
    return this.listaDeTransferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any): Observable<Transferencia> {
    this.hidratar(transferencia);
   return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

}
