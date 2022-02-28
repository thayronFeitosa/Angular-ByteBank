import { Component } from '@angular/core';
import { TransferenciasService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  constructor(private service: TransferenciasService) { }


  transferir($event: any) {
    this.service.adicionar($event);
  }
}
