import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaFoto03Component } from './entrada-foto03.component';

describe('EntradaFoto03Component', () => {
  let component: EntradaFoto03Component;
  let fixture: ComponentFixture<EntradaFoto03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaFoto03Component]
    });
    fixture = TestBed.createComponent(EntradaFoto03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
