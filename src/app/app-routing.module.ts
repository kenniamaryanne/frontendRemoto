import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaTextoComponent } from './pagina-texto/pagina-texto.component';
import { EntradaDadosInspecaoPagina01Component } from './entrada-dados-inspecao-pagina01/entrada-dados-inspecao-pagina01.component';
import { EntradaDadosInspecaoPagina02Component } from './entrada-dados-inspecao-pagina02/entrada-dados-inspecao-pagina02.component';
import { EntradaFoto01Component } from './entrada-foto01/entrada-foto01.component';
import { EntradaFoto02Component } from './entrada-foto02/entrada-foto02.component';
import { EntradaFoto03Component } from './entrada-foto03/entrada-foto03.component';
import { EntradaFoto04Component } from './entrada-foto04/entrada-foto04.component';
import { EntradaFoto05Component } from './entrada-foto05/entrada-foto05.component';
import { EntradaFoto06Component } from './entrada-foto06/entrada-foto06.component';
import { EntradaFoto07Component } from './entrada-foto07/entrada-foto07.component';
import { EntradaFoto08Component } from './entrada-foto08/entrada-foto08.component';
import { EntradaFoto09Component } from './entrada-foto09/entrada-foto09.component';
import { EntradaFoto10Component } from './entrada-foto10/entrada-foto10.component';
import { EntradaFoto11Component } from './entrada-foto11/entrada-foto11.component';
import { EntradaFotodocumentoComponent } from './entrada-fotodocumento/entrada-fotodocumento.component';
import { EnviarDadosComponent } from './enviar-dados/enviar-dados.component';

const routes: Routes = [
  { path: 'pagina-texto/:nome/:codigo', component: PaginaTextoComponent },
  { path: 'entrada-dados-inspecao-pagina01', component: EntradaDadosInspecaoPagina01Component }, 
  { path: 'entrada-dados-inspecao-pagina02', component: EntradaDadosInspecaoPagina02Component },
  { path: 'entrada-foto01', component: EntradaFoto01Component },
  { path: 'entrada-foto02', component: EntradaFoto02Component },
  { path: 'entrada-foto03', component: EntradaFoto03Component },
  { path: 'entrada-foto04', component: EntradaFoto04Component },
  { path: 'entrada-foto05', component: EntradaFoto05Component },
  { path: 'entrada-foto06', component: EntradaFoto06Component },
  { path: 'entrada-foto07', component: EntradaFoto07Component },
  { path: 'entrada-foto08', component: EntradaFoto08Component },
  { path: 'entrada-foto09', component: EntradaFoto09Component },
  { path: 'entrada-foto10', component: EntradaFoto10Component }, 
  { path: 'entrada-foto11', component: EntradaFoto11Component }, 
  { path: 'entrada-fotodocumento', component: EntradaFotodocumentoComponent }, 
  { path: 'enviar-dados', component: EnviarDadosComponent },       
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
