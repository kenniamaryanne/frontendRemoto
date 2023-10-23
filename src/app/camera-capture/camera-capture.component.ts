import { Component,Input, OnInit } from '@angular/core';
import { IndexedDbService } from '../indexed-db.service';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-camera-capture',
  templateUrl: './camera-capture.component.html',
  styleUrls: ['./camera-capture.component.css']
})
export class CameraCaptureComponent  implements OnInit{
  @Input()observacaoFoto!: string;
  @Input()nomeFoto!: string;
  @Input()caminhoProximo!: string;
  constructor(private indexedDbService: IndexedDbService, private router: Router,private locationService:LocationService) {}
  
  private mediaStream: MediaStream | null = null;
  public showTakePhotoButton: boolean = false;
  public capturedImage: string | null = null;
  public showCapturedImage: boolean = false;
  cameraIsOpen: boolean = false;

  ngOnInit() {
    this.openCamera()
      .then(() => {
        this.cameraIsOpen = true;
      })
      .catch((error) => {
        console.error("Erro ao abrir a câmera:", error);
      });
  }
  

  openCamera(): Promise<void> {
    const constraints: MediaStreamConstraints = {
      video: { facingMode: 'user' }
    };
  
    return new Promise((resolve, reject) => {
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          // Inicialize o elemento de vídeo aqui, se necessário
          const videoElement = document.getElementById('camera-preview') as HTMLVideoElement;
          if (videoElement) {
            videoElement.srcObject = stream;
            videoElement.onloadedmetadata = () => {
              resolve(); // Resolva a Promise quando a câmera estiver pronta
            };
          } else {
            reject("Elemento de vídeo não encontrado");
          }
        })
        .catch((error) => {
          reject(error);
        });
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
    const position = await this.locationService.getLocation();

    if (position) {
      const photoInfo = {
        name: this.nomeFoto,
        date: new Date().toISOString(),
        latitude: position.latitude.toString(),
        longitude: position.longitude.toString(),
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
    

    } else {
      console.error('Não foi possível obter a localização do dispositivo.');
    }

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

}