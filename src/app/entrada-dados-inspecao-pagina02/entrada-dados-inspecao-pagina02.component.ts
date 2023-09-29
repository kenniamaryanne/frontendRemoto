import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

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
    private router: Router 
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      numeroCharci: ['', Validators.required],
      confirmacaoNumeroChassi: ['', Validators.required],
      valorEstimado: ['', Validators.required],
      tipo: ['', Validators.required],
      possuiDocumentacao: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.router.navigate(['/entrada-foto01']);
    } else {
      this.erroValidacao = 'Preencha todos os campos!';
    }
  }
}