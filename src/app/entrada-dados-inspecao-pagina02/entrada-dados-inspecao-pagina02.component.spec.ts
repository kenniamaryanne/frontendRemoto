import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDadosInspecaoPagina02Component } from './entrada-dados-inspecao-pagina02.component';

describe('EntradaDadosInspecaoPagina02Component', () => {
  let component: EntradaDadosInspecaoPagina02Component;
  let fixture: ComponentFixture<EntradaDadosInspecaoPagina02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaDadosInspecaoPagina02Component]
    });
    fixture = TestBed.createComponent(EntradaDadosInspecaoPagina02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
