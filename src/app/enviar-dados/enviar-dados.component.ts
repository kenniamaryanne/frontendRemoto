import { Component } from '@angular/core';
import { deleteDB } from 'idb';

@Component({
  selector: 'app-enviar-dados',
  templateUrl: './enviar-dados.component.html',
  styleUrls: ['./enviar-dados.component.css']
})

export class EnviarDadosComponent {
  enviarInspecao() {
    if (navigator.onLine) {
      // O navegador está online, pode executar a ação
      deleteDB('formularioEfotos');
      console.log('Inspeção enviada!');
    } else {
      // O navegador está offline, trate esse caso
      console.log('Você está offline. A inspeção não pode ser enviada no momento.');
    }
  }
}
