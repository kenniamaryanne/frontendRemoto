import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDados10Component } from './entrada-dados10.component';

describe('EntradaDados10Component', () => {
  let component: EntradaDados10Component;
  let fixture: ComponentFixture<EntradaDados10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaDados10Component]
    });
    fixture = TestBed.createComponent(EntradaDados10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
