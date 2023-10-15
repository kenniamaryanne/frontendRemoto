import { Component } from '@angular/core';

@Component({
  selector: 'app-entrada-Foto10',
  templateUrl: './entrada-foto10.component.html',
  styleUrls: ['../../styles/telafoto-styles.css']
})
export class EntradaFoto10Component {
  showCameraCapture: boolean = false;
  editObservacao: string = '';
  nomeFoto: string = '';
  caminhoProximo: string = '';

  Capture() {
    this.showCameraCapture = true;
  }
}
