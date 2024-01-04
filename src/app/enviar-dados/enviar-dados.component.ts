import { Component } from '@angular/core';
import { deleteDB } from 'idb';
import { IndexedDbService } from '../indexed-db.service';
import { HttpClient } from '@angular/common/http';
import { ExibirMensagemService } from '../exibir-mensagem.service';
import { PosicaoPaginaService } from '../posicao-pagina.service'
import { Router } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { Observable } from 'rxjs/internal/Observable';



@Component({
  selector: 'app-enviar-dados',
  templateUrl: './enviar-dados.component.html',
  styleUrls: ['./enviar-dados.component.css']
})



export class EnviarDadosComponent {
  constructor(private indexedDbService: IndexedDbService,private http: HttpClient,
  private exibirMensagemService: ExibirMensagemService,private posicaoService: PosicaoPaginaService,
  private router: Router,private sw: ServiceWorkerModule){}


  async ngOnInit(): Promise<void> {

    const nome =  await this.indexedDbService.loadFormNomeVistoriador();
    const codigo = await this.indexedDbService.loadFormCodigoInspecao();
    const identificador = `${nome}-${codigo}`;
  
      // Salvar o estado ao sair da página
    console.log(this.router.url);
    this.posicaoService.salvarEstado(identificador, { url: this.router.url, /* outros dados de estado */ });
  }



  async  enviarInspecao() {

   // if (await this.verificarConexao()) {
  
      //const dados = await this.transformarFormulariosParaJSON();
     
      console.log('oi enviarvida202444parte33?');


      const respostas = [
        {
          pergunta: 'Quais bens foram afetados?',
          resposta: 'teste01',
          vistoria: 6556,
        },
        {
          pergunta: 'Medidas adotadas após o ocorrido:',
          resposta: 'teste02',
          vistoria: 5545,
        },
      ];



      this.enviarRespostas(respostas).subscribe(
        (response) => {
          console.log('Perguntas e respostas enviadas com sucesso!', response);
         
        },
        (error) => {
          console.error('Erro ao enviar perguntas e respostas:', error);
         
        }
      );

      // this.enviarfotosEinformacoesAPI();
  
     // await this.enviarFormulario(dados);
  
    //  deleteDB('formularioEfotos');
     // localStorage.clear();
      //this.clearCache();

      //this.router.navigate(['/vistoria-enviada']);
      
  //  } else {
  //    this.exibirMensagemService.exibirModalSemInternet();
  //  }   
  }

  clearCache() {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ command: 'clearCache' });
    }
  }
  

  async verificarConexao(): Promise<boolean> {
   // try {
   //   await this.http.get('https://14f6-138-36-100-145.ngrok-free.app/api/pergunta/buscar/132', { observe: 'response' }).toPromise(); //add https://www.google.com
     return true; 
   // } catch (error) {
   //  return false; 
   // }

  }


async enviarFormulario(dados: any[]) {
  const apiUrl = 'https://2f22-168-181-142-116.ngrok-free.app/api/pergunta/salvar'; 

  try {
    const resposta = this.http.post(apiUrl, dados).toPromise();
    console.log('Resposta da API:', resposta);
  } catch (erro) {
    console.error('Erro ao enviar dados para a API:', erro);
  }

}


enviarRespostas(perguntas: any[]): Observable<any> {
  console.log(perguntas)
  const apiUrl = 'https://2f22-168-181-142-116.ngrok-free.app/api/pergunta/salvar'; 
  return this.http.post<any>(apiUrl, perguntas);
}




async enviarfotosEinformacoesAPI() {

  

  try {
    const fotos = await this.indexedDbService.getFotosFromIndexedDB();
    const codigoInspecao = await this.indexedDbService.loadFormCodigoInspecao();

    for (const foto of fotos) {
    
    //  if (codigoInspecao == foto.inspecao){
      
          this.enviarArquivo(foto.photoData,foto.descricao,foto.latitude,foto.longitude,foto.observacao,'AV',codigoInspecao,foto.data);
   //   }
      
    }
  } catch (error) {
    console.error('Erro durante a transformação dos dados:', error);
    // ou algum valor padrão dependendo do seu caso
  }
}

 enviarArquivo(blob: Blob, descricao: string, latitude: string, longitude: string, observacao: string, tipo: string, vistoria: number, data: string) {
  console.log('oi enviar 06');
  
  
  const formData = new FormData();

  // Cria um objeto de arquivo a partir do Blob
  const file = new File([blob], 'teste', { type: blob.type });
  
  formData.append('foto', file);
  formData.append('descricao', descricao);
  formData.append('latitude', latitude);
  formData.append('longitude', longitude);
  formData.append('observacao', observacao);
  formData.append('tipo', tipo);
  formData.append('vistoria', vistoria.toString());
  formData.append('data', data);

  console.log('okvcefoda');


  this.http.post('https://76ed-168-181-142-116.ngrok-free.app/inspecoes/processar', formData) 
    .subscribe(
      (resposta) => {
        console.log('Resposta da API:', resposta);
      },
      (erro) => {
        console.error('Erro ao enviar dados para a API:', erro);
      }
    );

}


async transformarFormulariosParaJSON() {
  try {
    const dados = await this.indexedDbService.loadFormDados();
    const codigoInspecao = await this.indexedDbService.loadFormCodigoInspecao();

    if (dados && dados.length > 0) {
      const dadosFormatados = dados.map(dado => {

        if (dado.codigoInspecao == codigoInspecao) {

          const chavesThis = Object.keys(dado.this);

          return chavesThis.map(pergunta => {
            return {
              pergunta: pergunta,
              resposta: dado.this[pergunta],
              vistoria: codigoInspecao
            };
          });



        } else {

          return [];

        }

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

}
