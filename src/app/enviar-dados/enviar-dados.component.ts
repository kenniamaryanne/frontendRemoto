import { Component } from '@angular/core';
import { deleteDB } from 'idb';
import { IndexedDbService } from '../indexed-db.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enviar-dados',
  templateUrl: './enviar-dados.component.html',
  styleUrls: ['./enviar-dados.component.css']
})



export class EnviarDadosComponent {
  constructor(private indexedDbService: IndexedDbService,private http: HttpClient){}

  async  enviarInspecao() {
 
    const dados = await this.transformarDadosParaJSON();
   
      this.enviarFormulario(dados);
      //deleteDB('formularioEfotos');
      
      
   
  }

async enviarFormulario(dados: any[]) {
  const apiUrl = 'http://ultron:8092/api/pergunta/salvar';

  const dadosFormatados = [
    { pergunta: 'atividadePrincipal', resposta: 'Agrícola', vistoria: '788' }
    // ... outros dados
  ];


  console.log(dados);

  
  try {
    const resposta = await this.http.post(apiUrl, dados).toPromise();
    console.log('Resposta da API:', resposta);
  } catch (erro) {
    console.error('Erro ao enviar dados para a API:', erro);
  }

}


async transformarDadosParaJSON() {
  try {
    const dados = await this.indexedDbService.loadFormDados();
    const codigoInspecao = await this.indexedDbService.loadFormCodigoInspecao();

    if (dados && dados.length > 0) {
      const dadosFormatados = dados.map(dado => {
        const chavesThis = Object.keys(dado.this);

        return chavesThis.map(pergunta => {
          return {
            pergunta: pergunta,
            resposta: dado.this[pergunta],
            vistoria: codigoInspecao
          };
        });
      });

      const resultadoFinal = dadosFormatados.flat();
      return resultadoFinal;
    } else {
      console.error("Erro ao obter dados do IndexedDB");
      return []; // ou algum valor padrão dependendo do seu caso
    }
  } catch (error) {
    console.error("Erro durante a transformação dos dados:", error);
    return []; // ou algum valor padrão dependendo do seu caso
  }
}



// Função para obter os dados da tabela 'codigoInspecao' do IndexedDB
async  getCodigoInspecaoFromIndexedDB() {
  
}


  



}
