import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDados9Component } from './entrada-dados9.component';

describe('EntradaDados9Component', () => {
  let component: EntradaDados9Component;
  let fixture: ComponentFixture<EntradaDados9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaDados9Component]
    });
    fixture = TestBed.createComponent(EntradaDados9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
