import { Component } from '@angular/core';

@Component({
  selector: 'app-entrada-foto04',
  templateUrl: './entrada-foto04.component.html',
  styleUrls: ['../../styles/telafoto-styles.css']
})
export class EntradaFoto04Component {
  showCameraCapture: boolean = false;
  editObservacao: string = '';
  nomeFoto: string = '';
  caminhoProximo: string = '';

  Capture() {
    this.showCameraCapture = true;
  }
}
