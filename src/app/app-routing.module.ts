import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaTextoComponent } from './pagina-texto/pagina-texto.component';
import { EntradaDadosInspecaoPagina01Component } from './entrada-dados-inspecao-pagina01/entrada-dados-inspecao-pagina01.component';
import { EntradaDadosInspecaoPagina02Component } from './entrada-dados-inspecao-pagina02/entrada-dados-inspecao-pagina02.component';
import { EntradaFoto01Component } from './entrada-foto01/entrada-foto01.component';
import { EntradaFoto02Component } from './entrada-foto02/entrada-foto02.component';

const routes: Routes = [
  { path: 'pagina-texto/:nome', component: PaginaTextoComponent },
  { path: 'entrada-dados-inspecao-pagina01', component: EntradaDadosInspecaoPagina01Component }, 
  { path: 'entrada-dados-inspecao-pagina02', component: EntradaDadosInspecaoPagina02Component },
  { path: 'entrada-foto01', component: EntradaFoto01Component },
  { path: 'entrada-foto02', component: EntradaFoto02Component }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
