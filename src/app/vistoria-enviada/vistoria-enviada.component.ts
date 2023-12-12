import { Component } from '@angular/core';
import { deleteDB } from 'idb';
import { IndexedDbService } from '../indexed-db.service';
import { HttpClient } from '@angular/common/http';
import { ExibirMensagemService } from '../exibir-mensagem.service';
import { PosicaoPaginaService } from '../posicao-pagina.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-vistoria-enviada',
  templateUrl: './vistoria-enviada.component.html',
  styleUrls: ['./vistoria-enviada.component.css']
})
export class VistoriaEnviadaComponent {
  



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





}
