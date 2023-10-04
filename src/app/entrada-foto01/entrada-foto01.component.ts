import { Component,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-entrada-foto01',
  templateUrl: './entrada-foto01.component.html',
  styleUrls: ['./entrada-foto01.component.css']
})
export class EntradaFoto01Component {
  constructor(private renderer: Renderer2) { }

  openCamera() {
    const constraints: MediaStreamConstraints = {
      video: { facingMode: 'user' } // Use a câmera frontal, se disponível
    };
  
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        // Crie um elemento de vídeo para exibir a visualização da câmera
        const videoElement = this.renderer.createElement('video');
        videoElement.srcObject = stream;
        videoElement.setAttribute('autoplay', 'true');
  
        // Adicione o elemento de vídeo ao DOM (por exemplo, a um modal)
        const cameraModal = document.getElementById('camera-modal');
        if (cameraModal) {
          this.renderer.appendChild(cameraModal, videoElement);
        }
      })
      .catch((error) => {
        console.error('Erro ao acessar a câmera:', error);
      });
  }
  

}