import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTextoComponent } from './pagina-texto.component';

describe('PaginaTextoComponent', () => {
  let component: PaginaTextoComponent;
  let fixture: ComponentFixture<PaginaTextoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaTextoComponent]
    });
    fixture = TestBed.createComponent(PaginaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
