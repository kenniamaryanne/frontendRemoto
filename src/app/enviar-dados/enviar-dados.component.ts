import { Component } from '@angular/core';
import { deleteDB } from 'idb';
import { IndexedDbService } from '../indexed-db.service';
import { HttpClient } from '@angular/common/http';
import { ExibirMensagemService } from '../exibir-mensagem.service';
import { PosicaoPaginaService } from '../posicao-pagina.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-enviar-dados',
  templateUrl: './enviar-dados.component.html',
  styleUrls: ['./enviar-dados.component.css']
})



export class EnviarDadosComponent {
  constructor(private indexedDbService: IndexedDbService,private http: HttpClient,
  private exibirMensagemService: ExibirMensagemService,private posicaoService: PosicaoPaginaService,private router: Router){}


  async ngOnInit(): Promise<void> {

    const nome =  await this.indexedDbService.loadFormNomeVistoriador();
    const codigo = await this.indexedDbService.loadFormCodigoInspecao();
    const identificador = `${nome}-${codigo}`;
  
      // Salvar o estado ao sair da página
    console.log(this.router.url);
    this.posicaoService.salvarEstado(identificador, { url: this.router.url, /* outros dados de estado */ });
  }


  async  enviarInspecao() {

    if (await this.verificarConexao()) {
  
      const dados = await this.transformarFormulariosParaJSON();
     
      this.enviarfotosEinformacoesAPI();
  
      this.enviarFormulario(dados);
   
  
      deleteDB('formularioEfotos');
  
      
    } else {
      this.exibirMensagemService.exibirModalSemInternet();

     
    }

   
  }


  async verificarConexao(): Promise<boolean> {
    try {
     
      await this.http.get('http://ultron:8092/api/pergunta/buscar/8141655', { observe: 'response' }).toPromise(); //add https://www.google.com
      return true; 
    } catch (error) {
      return false; 
    }
  }





async enviarFormulario(dados: any[]) {
  const apiUrl = 'http://ultron:8092/api/pergunta/salvar';

  
  try {
    const resposta = await this.http.post(apiUrl, dados).toPromise();
    console.log('Resposta da API:', resposta);
  } catch (erro) {
    console.error('Erro ao enviar dados para a API:', erro);
  }

}





async enviarfotosEinformacoesAPI() {
  try {
    const fotos = await this.indexedDbService.getFotosFromIndexedDB();
    const codigoInspecao = await this.indexedDbService.loadFormCodigoInspecao();

    for (const foto of fotos) {
     
      this.enviarArquivo(foto.photoData,foto.descricao,foto.latitude,foto.longitude,foto.observacao,'AV',codigoInspecao,foto.data);
      
    }
  } catch (error) {
    console.error('Erro durante a transformação dos dados:', error);
    // ou algum valor padrão dependendo do seu caso
  }
}

enviarArquivo(blob: Blob, descricao: string, latitude: string, longitude: string, observacao: string, tipo: string, vistoria: number, data: string) {
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


  this.http.post('http://ultron:8095/inspecoes/processar', formData)
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
