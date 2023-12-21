import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndexedDbService } from '../indexed-db.service';
import { LocationService } from '../location.service';
import { ExibirMensagemService } from '../exibir-mensagem.service';
import { PosicaoPaginaService } from '../posicao-pagina.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { deleteDB } from 'idb';



@Component({
  selector: 'app-pagina-texto',
  templateUrl: './pagina-texto.component.html',
  styleUrls: ['./pagina-texto.component.css']
})


export class PaginaTextoComponent implements OnInit {
  nomeCliente: string = '';
  codigoInspecao: string = '';
  latitude:String = '';
  longitude:String = '';

  constructor(private indexedDbService: IndexedDbService,private route: ActivatedRoute,
  private locationService:LocationService,private exibirMensagemService: ExibirMensagemService,
  private http: HttpClient,private router: Router,private posicaoService: PosicaoPaginaService) { }

   ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.nomeCliente = params['nome'];
      this.codigoInspecao = params['codigo']; 
      
    });



    const nomeInspetor = this.nomeCliente;
    const codigoInspetor = this.codigoInspecao;
    const identificador = `${nomeInspetor}-${codigoInspetor}`;
    

    const estadoSalvo = this.posicaoService.obterEstado(identificador);


    if (estadoSalvo && estadoSalvo.url) {
      this.router.navigateByUrl(estadoSalvo.url);
    }
  
  }

  ngOnDestroy(): void {
    const nome = this.route.snapshot.paramMap.get('nome');
    const codigo = this.route.snapshot.paramMap.get('codigo');
    const identificador = `${nome}-${codigo}`;

    // Salvar o estado ao sair da página
    this.posicaoService.salvarEstado(identificador, { url: this.router.url, /* outros dados de estado */ });
  }



  async saveInspecao() {

    if (await this.verificarConexao()) {

      localStorage.clear();

      await this.indexedDbService.saveInspecaoData(this.nomeCliente, this.codigoInspecao);

      this.router.navigate(['/entrada-dados-inspecao-pagina01']);

   } else {

      this.exibirMensagemService.exibirModalSemInternet();

    }

  }

  async verificarConexao(): Promise<boolean> {
  // try {
     
    //  await this.http.get('https://14f6-138-36-100-145.ngrok-free.app/api/pergunta/buscar/132', { observe: 'response' }).toPromise(); //add https://www.google.com
      return true; 

  //  } catch (error) {
   //   return false; 
   // }
  }


}
