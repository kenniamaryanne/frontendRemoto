import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDadosInspecaoPagina01Component } from './entrada-dados-inspecao-pagina01.component';

describe('EntradaDadosInspecaoPagina01Component', () => {
  let component: EntradaDadosInspecaoPagina01Component;
  let fixture: ComponentFixture<EntradaDadosInspecaoPagina01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaDadosInspecaoPagina01Component]
    });
    fixture = TestBed.createComponent(EntradaDadosInspecaoPagina01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
