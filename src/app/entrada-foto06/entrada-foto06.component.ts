import { Component } from '@angular/core';

@Component({
  selector: 'app-entrada-foto06',
  templateUrl: './entrada-foto06.component.html',
  styleUrls: ['../../styles/telafoto-styles.css']
})
export class EntradaFoto06Component {
  showCameraCapture: boolean = false;
  editObservacao: string = '';
  nomeFoto: string = '';
  caminhoProximo: string = '';

  Capture() {
    this.showCameraCapture = true;
  }
  
}
