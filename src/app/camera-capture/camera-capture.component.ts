import { Component,Input, OnInit } from '@angular/core';
import { IndexedDbService } from '../indexed-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera-capture',
  templateUrl: './camera-capture.component.html',
  styleUrls: ['./camera-capture.component.css']
})
export class CameraCaptureComponent  implements OnInit{
  @Input()observacaoFoto!: string;
  @Input()nomeFoto!: string;
  @Input()caminhoProximo!: string;
  constructor(private indexedDbService: IndexedDbService, private router: Router) {}
  
  private mediaStream: MediaStream | null = null;
  public showTakePhotoButton: boolean = false;
  public capturedImage: string | null = null;
  public showCapturedImage: boolean = false;


  ngOnInit() {
    this.openCamera(); // Chama o método openCamera() quando o componente é inicializado.
  }

  openCamera() {
    const constraints: MediaStreamConstraints = {
      video: { facingMode: 'user' }
    };

    

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        this.showTakePhotoButton = true;
        this.mediaStream = stream;

        const videoElement = document.getElementById(
          'camera-preview'
        ) as HTMLVideoElement;

        videoElement.srcObject = stream;
      })
      .catch((error) => {
        if (error.name === 'NotAllowedError') {
          console.error('Permissão para acessar a câmera negada pelo usuário');
        } else {
          console.error('Erro ao acessar a câmera:', error);
        }
      });
  }

  takePhoto()   {  
    const videoElement = document.getElementById(
      'camera-preview'
    ) as HTMLVideoElement;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    context?.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    this.capturedImage = canvas.toDataURL('image/jpeg');
    this.showCapturedImage = true;
  }

  async saveImage() {
   // const position = await this.getLocation();

    //if (position) {
      const photoInfo = {
        name: this.nomeFoto,
        date: new Date().toISOString(),
        latitude: '1212',//position.latitude.toString(),
        longitude:'2121',// position.longitude.toString(),
        observacao: this.observacaoFoto 
      };

      if (this.capturedImage){

        const byteCharacters = atob(this.capturedImage.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/jpeg' });
  
        try {
          await this.indexedDbService.savePhoto(blob, photoInfo);
          console.log('Imagem salva no banco de dados local.');
        } catch (error) {
          console.error('Erro ao salvar a imagem:', error);
        }
      }
    

   // } else {
   //   console.error('Não foi possível obter a localização do dispositivo.');
   // }

    // Limpe a imagem capturada e oculte a visualização
    // Fecha a câmera antes de navegar para a próxima página
    // Navegue para a próxima página com base na rota específica
    this.closeCamera();
    this.router.navigate([this.caminhoProximo]);
  }

  cancelCapture() {
    // Implemente a ação de cancelar a captura, se necessário

    // Resetar o estado da captura
    this.capturedImage = null;
    this.showCapturedImage = false;
    this.closeCamera();
  }

  closeCamera() {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
      this.mediaStream = null;
    }
  }

  /*getLocation(): Promise<GeolocationCoordinates | null> {
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
  }*/
}
