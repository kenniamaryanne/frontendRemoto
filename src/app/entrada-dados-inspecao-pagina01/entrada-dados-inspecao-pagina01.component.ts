import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router 
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
      this.router.navigate(['/entrada-dados-inspecao-pagina02']);
    } else {
      this.erroValidacao = 'Preencha todos os campos!';
    }
  }
}
