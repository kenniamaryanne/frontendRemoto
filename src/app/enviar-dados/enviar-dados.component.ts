import { Component } from '@angular/core';

@Component({
  selector: 'app-enviar-dados',
  templateUrl: './enviar-dados.component.html',
  styleUrls: ['./enviar-dados.component.css']
})
export class EnviarDadosComponent {
  enviarInspecao() {
    // Coloque aqui o código que você deseja executar quando o botão for clicado
    console.log('Inspeção enviada!');
  }
}
