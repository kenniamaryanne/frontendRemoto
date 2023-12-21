import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IndexedDbService } from '../indexed-db.service';
import { PosicaoPaginaService } from '../posicao-pagina.service'

@Component({
  selector: 'app-entrada-dados-inspecao-pagina01',
  templateUrl: './entrada-dados-inspecao-pagina01.component.html',
  styleUrls: ['./entrada-dados-inspecao-pagina01.component.css']
})

export class EntradaDadosInspecaoPagina01Component implements OnInit {
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
      atividadePrincipal: ['', Validators.required],
      tipoEquipamento: ['', Validators.required],
      marcaEquipamento: ['', Validators.required],
      modeloEquipamento: ['', Validators.required],
      anoEquipamento: ['', Validators.required],
      numeroSerieEquipamento: ['', Validators.required],
      motorEquipamento: ['', Validators.required],
    });

    const nome =  await this.indexedDbService.loadFormNomeVistoriador();
    const codigo = await this.indexedDbService.loadFormCodigoInspecao();
    const identificador = `${nome}-${codigo}`;

    // Salvar o estado ao sair da página
    console.log(this.router.url);
    this.posicaoService.salvarEstado(identificador, { url: this.router.url, /* outros dados de estado */ });

  }




  async onSubmit() {
    if (this.formulario.valid) {
      const codigo = await this.indexedDbService.loadFormCodigoInspecao();

      // Salvar os dados no banco de dados
      const formData = {
        id: new Date().getTime(), // Use um ID único para cada conjunto de dados
        this: this.formulario.value,
        codigoVistoria: codigo,
      };
  
      this.indexedDbService.saveFormData(formData);

      // Navegar para a próxima página
      this.router.navigate(['/entrada-dados-inspecao-pagina02']);
    } else {
      this.erroValidacao = 'Preencha todos os campos!';
    }
  }
}
