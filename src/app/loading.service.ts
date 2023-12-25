import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSubject.asObservable();

  constructor() { }

  startLoading() {
    console.log("Iniciando carregamento");
    this.isLoadingSubject.next(true);
  }
  
  stopLoading() {
    console.log("Parando carregamento");
    this.isLoadingSubject.next(false);
  }
}
