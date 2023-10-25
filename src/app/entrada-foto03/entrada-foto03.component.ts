import { Component } from '@angular/core';

@Component({
  selector: 'app-entrada-foto03',
  templateUrl: './entrada-foto03.component.html',
  styleUrls: ['../../styles/telafoto-styles.css']
})
export class EntradaFoto03Component {
  showCameraCapture: boolean = false;
  editObservacao: string = '';
  nomeFoto: string = '';
  caminhoProximo: string = '';

  Capture() {
    this.showCameraCapture = true;
  }
  
}
