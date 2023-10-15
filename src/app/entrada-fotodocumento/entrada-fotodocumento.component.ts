import { Component } from '@angular/core';

@Component({
  selector: 'app-entrada-fotodocumento',
  templateUrl: './entrada-fotodocumento.component.html',
  styleUrls: ['../../styles/telafoto-styles.css']
})
export class EntradaFotodocumentoComponent {
  showCameraCapture: boolean = false;
  editObservacao: string = '';
  nomeFoto: string = '';
  caminhoProximo: string = '';

  Capture() {
    this.showCameraCapture = true;
  }
}
