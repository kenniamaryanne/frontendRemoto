import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IndexedDbService } from '../indexed-db.service';

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
    private indexedDbService: IndexedDbService 
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      atividadePrincipal: ['', Validators.required],
      tipoEquipamento: ['', Validators.required],
      marcaEquipamento: ['', Validators.required],
      modeloEquipamento: ['', Validators.required],
      anoEquipamento: ['', Validators.required],
      numeroSerieEquipamento: ['', Validators.required],
      motorEquipamento: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      // Salvar os dados no banco de dados
      const formData = {
        id: new Date().getTime(), // Use um ID único para cada conjunto de dados
        this: this.formulario.value,
      };
  
      this.indexedDbService.saveFormData(formData);

      // Navegar para a próxima página
      this.router.navigate(['/entrada-dados-inspecao-pagina02']);
    } else {
      this.erroValidacao = 'Preencha todos os campos!';
    }
  }
}
