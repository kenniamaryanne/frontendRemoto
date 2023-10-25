import { Component } from '@angular/core';

@Component({
  selector: 'app-entrada-foto11',
  templateUrl: './entrada-foto11.component.html',
  styleUrls: ['../../styles/telafoto-styles.css']
})
export class EntradaFoto11Component {
  showCameraCapture: boolean = false;
  editObservacao: string = '';
  nomeFoto: string = '';
  caminhoProximo: string = '';

  Capture() {
    this.showCameraCapture = true;
  }
  
}
