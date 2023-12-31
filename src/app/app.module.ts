import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { IndexedDbService } from './indexed-db.service';
import { CameraCaptureComponent } from './camera-capture/camera-capture.component';
import { EntradaFotodocumentoComponent } from './entrada-fotodocumento/entrada-fotodocumento.component';
import { EntradaFoto11Component } from './entrada-foto11/entrada-foto11.component';
import { EnviarDadosComponent } from './enviar-dados/enviar-dados.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgrokInterceptor } from './config/ngrok.interceptor';
import { ConnectionServiceModule } from 'ng-connection-service';
import { VistoriaEnviadaComponent } from './vistoria-enviada/vistoria-enviada.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';







@NgModule({
  declarations: [
    AppComponent,
    PaginaTextoComponent,
    EntradaDadosInspecaoPagina01Component,
    EntradaDadosInspecaoPagina02Component,
    EntradaFoto01Component,
    EntradaFoto02Component,
    EntradaFoto03Component,
    EntradaFoto04Component,
    EntradaFoto05Component,
    EntradaFoto06Component,
    EntradaFoto07Component,
    EntradaFoto08Component,
    EntradaFoto09Component,
    EntradaFoto10Component,
    CameraCaptureComponent,
    EntradaFotodocumentoComponent,
    EntradaFoto11Component,
    EnviarDadosComponent,
    VistoriaEnviadaComponent,
    LoadingSpinnerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule
  ],
  providers: [IndexedDbService,
    { provide: HTTP_INTERCEPTORS, useClass: NgrokInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
