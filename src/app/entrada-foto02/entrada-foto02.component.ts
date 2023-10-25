import { Component } from '@angular/core';

@Component({
  selector: 'app-entrada-foto02',
  templateUrl: './entrada-foto02.component.html',
  styleUrls: ['../../styles/telafoto-styles.css']
})
export class EntradaFoto02Component {
  showCameraCapture: boolean = false;
  editObservacao: string = '';
  nomeFoto: string = '';
  caminhoProximo: string = '';

  Capture() {
    this.showCameraCapture = true;
  }
  
}
