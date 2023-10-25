import { Component } from '@angular/core';


@Component({
  selector: 'app-entrada-foto01',
  templateUrl: './entrada-foto01.component.html',
  styleUrls: ['../../styles/telafoto-styles.css']
})

export class EntradaFoto01Component  {
  showCameraCapture: boolean = false;
  editObservacao: string = '';
  nomeFoto: string = '';
  caminhoProximo: string = '';

  Capture() {
    this.showCameraCapture = true;
  }
}
