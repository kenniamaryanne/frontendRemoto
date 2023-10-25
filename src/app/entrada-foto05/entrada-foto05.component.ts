import { Component } from '@angular/core';

@Component({
  selector: 'app-entrada-foto05',
  templateUrl: './entrada-foto05.component.html',
  styleUrls: ['../../styles/telafoto-styles.css']
})
export class EntradaFoto05Component {
  showCameraCapture: boolean = false;
  editObservacao: string = '';
  nomeFoto: string = '';
  caminhoProximo: string = '';

  Capture() {
    this.showCameraCapture = true;
  }
  
}
