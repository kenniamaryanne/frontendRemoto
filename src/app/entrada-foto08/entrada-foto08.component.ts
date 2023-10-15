import { Component } from '@angular/core';

@Component({
  selector: 'app-entrada-foto08',
  templateUrl: './entrada-foto08.component.html',
  styleUrls: ['../../styles/telafoto-styles.css']
 })
export class EntradaFoto08Component {
  showCameraCapture: boolean = false;
  editObservacao: string = '';
  nomeFoto: string = '';
  caminhoProximo: string = '';

  Capture() {
    this.showCameraCapture = true;
  }
}
