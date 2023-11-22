import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})




export class PosicaoPaginaService {
  private estados: { [key: string]: any } = {};

  salvarEstado(identificador: string, valor: any): void {
    this.estados[identificador] = valor;
    localStorage.setItem(identificador, JSON.stringify(valor));
  }

  obterEstado(identificador: string): any {
    console.log('identificador: '+identificador);
    const estadoPersistido = localStorage.getItem(identificador);
    console.log('estado persistido: '+ estadoPersistido)

    return estadoPersistido ? JSON.parse(estadoPersistido) : null;
  }
}
