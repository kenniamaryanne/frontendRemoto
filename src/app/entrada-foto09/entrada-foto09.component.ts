import { Component } from '@angular/core';

@Component({
  selector: 'app-entrada-dados09',
  templateUrl: './entrada-foto09.component.html',
  styleUrls: ['../../styles/telafoto-styles.css']
})
export class EntradaFoto09Component {
  showCameraCapture: boolean = false;
  editObservacao: string = '';
  nomeFoto: string = '';
  caminhoProximo: string = '';

  Capture() {
    this.showCameraCapture = true;
  }
  
}
