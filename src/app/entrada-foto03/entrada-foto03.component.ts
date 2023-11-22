import { Component } from '@angular/core';
import { PosicaoPaginaService } from '../posicao-pagina.service'
import { IndexedDbService } from '../indexed-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada-foto03',
  templateUrl: './entrada-foto03.component.html',
  styleUrls: ['../../styles/telafoto-styles.css']
})
export class EntradaFoto03Component {
  constructor(private posicaoService: PosicaoPaginaService,private indexedDbService: IndexedDbService,private router: Router){};

  showCameraCapture: boolean = false;
  editObservacao: string = '';
  nomeFoto: string = '';
  caminhoProximo: string = '';

  async ngOnInit(): Promise<void> {

    const nome =  await this.indexedDbService.loadFormNomeVistoriador();
    const codigo = await this.indexedDbService.loadFormCodigoInspecao();
    const identificador = `${nome}-${codigo}`;

    // Salvar o estado ao sair da página
    console.log(this.router.url);
    this.posicaoService.salvarEstado(identificador, { url: this.router.url, /* outros dados de estado */ });
  }


  Capture() {
    this.showCameraCapture = true;
  }
  
}
