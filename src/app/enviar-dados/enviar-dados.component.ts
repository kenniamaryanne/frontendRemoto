import { Component } from '@angular/core';
import { deleteDB } from 'idb';

@Component({
  selector: 'app-enviar-dados',
  templateUrl: './enviar-dados.component.html',
  styleUrls: ['./enviar-dados.component.css']
})

export class EnviarDadosComponent {
  enviarInspecao() {
    deleteDB('formularioEfotos');
    console.log('Inspeção enviada!');
  }
}
