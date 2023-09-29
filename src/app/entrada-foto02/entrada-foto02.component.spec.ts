import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaFoto02Component } from './entrada-foto02.component';

describe('EntradaFoto02Component', () => {
  let component: EntradaFoto02Component;
  let fixture: ComponentFixture<EntradaFoto02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaFoto02Component]
    });
    fixture = TestBed.createComponent(EntradaFoto02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
