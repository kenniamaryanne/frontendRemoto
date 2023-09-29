import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDados07Component } from './entrada-dados07.component';

describe('EntradaDados07Component', () => {
  let component: EntradaDados07Component;
  let fixture: ComponentFixture<EntradaDados07Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaDados07Component]
    });
    fixture = TestBed.createComponent(EntradaDados07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
