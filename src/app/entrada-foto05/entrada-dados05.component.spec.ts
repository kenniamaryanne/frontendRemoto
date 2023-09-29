import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDados05Component } from './entrada-dados05.component';

describe('EntradaDados05Component', () => {
  let component: EntradaDados05Component;
  let fixture: ComponentFixture<EntradaDados05Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaDados05Component]
    });
    fixture = TestBed.createComponent(EntradaDados05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
