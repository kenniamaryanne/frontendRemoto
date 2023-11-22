import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ExibirMensagemService {

  constructor() { }


  exibirModalSemInternet(): void {
    Swal.fire({
      icon: 'error',
      title: 'Sem Conexão com a Internet',
      text: 'Por favor, verifique sua conexão com a internet e tente novamente.',
    });
  }
}
