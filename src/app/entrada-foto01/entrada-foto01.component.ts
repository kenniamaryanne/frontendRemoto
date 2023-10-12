import { Component, Renderer2 } from '@angular/core';
import { IndexedDbService } from '../indexed-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada-foto01',
  templateUrl: './entrada-foto01.component.html',
  styleUrls: ['./entrada-foto01.component.css']
})
export class EntradaFoto01Component {
  private mediaStream: MediaStream | null = null; // Armazenar referência ao objeto MediaStream
  public showTakePhotoButton: boolean = false;


  constructor(
    private renderer: Renderer2,
    private indexedDbService: IndexedDbService,
    private router: Router
  ) {}

  capturedImage: string | null = null; // Inicialmente, não há imagem capturada
  showCapturedImage = false; // Inicialmente, a visualização da imagem é ocultada

  openCamera() {
    const constraints: MediaStreamConstraints = {
      video: { facingMode: 'user' } // Use a câmera frontal, se disponível
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        this.showTakePhotoButton = true;
        // Armazenar a referência ao objeto MediaStream

        // Obtenha a referência para o elemento de vídeo
        const videoElement = document.getElementById(
          'camera-preview'
        ) as HTMLVideoElement;

        // Configure o elemento de vídeo para exibir a visualização da câmera
        videoElement.srcObject = stream;
        this.mediaStream = stream;
        // Adicione um evento de clique ao botão para tirar a foto
        const takePhotoButton = document.getElementById('take-photo');
        if (takePhotoButton) {
          takePhotoButton.addEventListener('click', () => this.takePhoto());
        }
      })
      .catch((error) => {
        if (error.name === 'NotAllowedError') {
          console.error('Permissão para acessar a câmera negada pelo usuário');
          // Trate o caso em que o usuário negou a permissão aqui
        } else {
          console.error('Erro ao acessar a câmera:', error);
        }
      });
  }

  takePhoto() {
    // Obtenha a referência para o elemento de vídeo
    const videoElement = document.getElementById(
      'camera-preview'
    ) as HTMLVideoElement;

    // Obtenha uma captura de quadro do vídeo
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    context?.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    // Converta o quadro capturado em uma imagem
    this.capturedImage = canvas.toDataURL('image/jpeg');

    // Exiba a visualização da imagem
    this.showCapturedImage = true;
  }


  saveImage() {
    if (this.capturedImage) {
      // Obter a localização do dispositivo usando a API Geolocation
      this.getLocation()
        .then((position) => {
          if (position) {
            const photoInfo = {
              name: 'placa-fazenda', // Substitua pelo nome da foto
              date: new Date().toISOString(), // Data e hora atual
              latitude: position.latitude.toString(), // Usar latitude real
              longitude: position.longitude.toString() // Usar longitude real
            };
            console.log('Latitude:', position.latitude);
            console.log('Longitude:', position.longitude);
  
            // Verificar se this.capturedImage não é nulo antes de executar split()
            if (this.capturedImage) {
              const byteCharacters = atob(this.capturedImage.split(',')[1]);
              const byteNumbers = new Array(byteCharacters.length);
              for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
              }
              const byteArray = new Uint8Array(byteNumbers);
              const blob = new Blob([byteArray], { type: 'image/jpeg' });
  
              // Salve a imagem no banco de dados com informações adicionais
              this.indexedDbService
                .savePhoto(blob, photoInfo)
                .then(() => {
                  console.log('Imagem salva no banco de dados local.');
                  // Limpe a imagem capturada e oculte a visualização
                  this.capturedImage = null;
                  this.showCapturedImage = false;
  
                  // Feche a câmera antes de navegar para a próxima página
                  this.closeCamera();
                  this.router.navigate(['/entrada-foto02']);
                })
                .catch((error) => {
                  console.error('Erro ao salvar a imagem:', error);
                });
            }
          } else {
            console.error('Não foi possível obter a localização do dispositivo.');
          }
        })
        .catch((error) => {
          console.error('Erro ao obter a localização do dispositivo:', error);
        });
    }
  }
  


  discardImage() {
    // Adicione aqui a lógica para descartar a imagem
    // Por exemplo, você pode simplesmente limpar a imagem capturada.
    // Em seguida, oculte a visualização da imagem.
    this.capturedImage = null;
    this.showCapturedImage = false;
  }

  closeCamera() {
    // Verifique se há um objeto MediaStream e pare-o
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
      this.mediaStream = null; // Limpe a referência
    }
  }

  getLocation(): Promise<GeolocationCoordinates | null> {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position.coords),
          (error) => reject(error)
        );
      } else {
        resolve(null); // Navegador não suporta geolocalização
      }
    });
  }
}
