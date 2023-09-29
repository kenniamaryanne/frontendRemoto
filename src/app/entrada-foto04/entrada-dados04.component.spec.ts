import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDados04Component } from './entrada-dados04.component';

describe('EntradaDados04Component', () => {
  let component: EntradaDados04Component;
  let fixture: ComponentFixture<EntradaDados04Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaDados04Component]
    });
    fixture = TestBed.createComponent(EntradaDados04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
