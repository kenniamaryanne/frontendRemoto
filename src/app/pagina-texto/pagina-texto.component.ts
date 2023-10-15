import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndexedDbService } from '../indexed-db.service';


@Component({
  selector: 'app-pagina-texto',
  templateUrl: './pagina-texto.component.html',
  styleUrls: ['./pagina-texto.component.css']
})


export class PaginaTextoComponent implements OnInit {
  nomeCliente: string = '';
  codigoInspecao: string = '';


  constructor(private indexedDbService: IndexedDbService,private route: ActivatedRoute) { }

   ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nomeCliente = params['nome'];
      this.codigoInspecao = params['codigo']; 
      
    });
  }

  async saveInspecao() {

    await this.indexedDbService.saveInspecaoData(this.nomeCliente, this.codigoInspecao);

  }

}
