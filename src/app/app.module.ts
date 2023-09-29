import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaTextoComponent } from './pagina-texto/pagina-texto.component';
import { EntradaDadosInspecaoPagina01Component } from './entrada-dados-inspecao-pagina01/entrada-dados-inspecao-pagina01.component';
import { EntradaDadosInspecaoPagina02Component } from './entrada-dados-inspecao-pagina02/entrada-dados-inspecao-pagina02.component';
import { EntradaFoto01Component } from './entrada-foto01/entrada-foto01.component';
import { EntradaFoto02Component } from './entrada-foto02/entrada-foto02.component';
import { EntradaFoto03Component } from './entrada-foto03/entrada-foto03.component';
import { EntradaDados04Component } from './entrada-foto04/entrada-dados04.component';
import { EntradaDados05Component } from './entrada-foto05/entrada-dados05.component';
import { EntradaDados06Component } from './entrada-foto06/entrada-dados06.component';
import { EntradaDados07Component } from './entrada-foto07/entrada-dados07.component';
import { EntradaDados8Component } from './entrada-foto08/entrada-dados8.component';
import { EntradaDados9Component } from './entrada-foto09/entrada-dados9.component';
import { EntradaDados10Component } from './entrada-foto10/entrada-dados10.component';
import { EntradaDados11Component } from './entrada-foto11/entrada-dados11.component';
import { EntradaDados12Component } from './entrada-foto12/entrada-dados12.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaTextoComponent,
    EntradaDadosInspecaoPagina01Component,
    EntradaDadosInspecaoPagina02Component,
    EntradaFoto01Component,
    EntradaFoto02Component,
    EntradaFoto03Component,
    EntradaDados04Component,
    EntradaDados05Component,
    EntradaDados06Component,
    EntradaDados07Component,
    EntradaDados8Component,
    EntradaDados9Component,
    EntradaDados10Component,
    EntradaDados11Component,
    EntradaDados12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
