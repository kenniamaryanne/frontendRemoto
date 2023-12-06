import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { IndexedDbService } from '../indexed-db.service';
import { PosicaoPaginaService } from '../posicao-pagina.service'

@Component({
  selector: 'app-entrada-dados-inspecao-pagina02',
  templateUrl: './entrada-dados-inspecao-pagina02.component.html',
  styleUrls: ['./entrada-dados-inspecao-pagina02.component.css']
})

export class EntradaDadosInspecaoPagina02Component implements OnInit {
  formulario!: FormGroup;
  erroValidacao: string = ''; 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private indexedDbService: IndexedDbService,
    private posicaoService: PosicaoPaginaService 
    ) { }

    async ngOnInit(): Promise<void> {
    this.formulario = this.formBuilder.group({
      numeroCharci: ['', Validators.required],
      confirmacaoNumeroChassi: ['', Validators.required],
      valorEstimado: ['', Validators.required],
      tipo: ['', Validators.required],
      possuiDocumentacao: ['', Validators.required],
    });


    const nome =  await this.indexedDbService.loadFormNomeVistoriador();
    const codigo = await this.indexedDbService.loadFormCodigoInspecao();
    const identificador = `${nome}-${codigo}`;

    // Salvar o estado ao sair da página
    console.log('Identificador: '+identificador);
    console.log(this.router.url);
    this.posicaoService.salvarEstado(identificador, { url: this.router.url, /* outros dados de estado */ });
  }

  async ngOnDestroy(): Promise<void> {}

  onSubmit() {
    if (this.formulario.valid) {
      const formData = {
        id: new Date().getTime(), // Use um ID único para cada conjunto de dados
        this: this.formulario.value,
      };
      this.indexedDbService.saveFormData(formData);

      this.router.navigate(['/entrada-foto01']);
    } else {
      this.erroValidacao = 'Preencha todos os campos!';
    }
  }
}