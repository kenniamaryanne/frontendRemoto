import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDados06Component } from './entrada-dados06.component';

describe('EntradaDados06Component', () => {
  let component: EntradaDados06Component;
  let fixture: ComponentFixture<EntradaDados06Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaDados06Component]
    });
    fixture = TestBed.createComponent(EntradaDados06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
