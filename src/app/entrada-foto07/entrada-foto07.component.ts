import { Component } from '@angular/core';

@Component({
  selector: 'app-entrada-foto07',
  templateUrl: './entrada-foto07.component.html',
  styleUrls: ['../../styles/telafoto-styles.css']
})
export class EntradaFoto07Component {
  showCameraCapture: boolean = false;
  editObservacao: string = '';
  nomeFoto: string = '';
  caminhoProximo: string = '';

  Capture() {
    this.showCameraCapture = true;
  }
}
