import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDados11Component } from './entrada-dados11.component';

describe('EntradaDados11Component', () => {
  let component: EntradaDados11Component;
  let fixture: ComponentFixture<EntradaDados11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaDados11Component]
    });
    fixture = TestBed.createComponent(EntradaDados11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
