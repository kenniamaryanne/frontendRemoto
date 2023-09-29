import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaFoto01Component } from './entrada-foto01.component';

describe('EntradaFoto01Component', () => {
  let component: EntradaFoto01Component;
  let fixture: ComponentFixture<EntradaFoto01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaFoto01Component]
    });
    fixture = TestBed.createComponent(EntradaFoto01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
