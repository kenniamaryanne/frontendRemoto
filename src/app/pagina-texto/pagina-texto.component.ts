import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pagina-texto',
  templateUrl: './pagina-texto.component.html',
  styleUrls: ['./pagina-texto.component.css']
})


export class PaginaTextoComponent implements OnInit {
  nomeCliente: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nomeCliente = params['nome'];
    });
  }
}
