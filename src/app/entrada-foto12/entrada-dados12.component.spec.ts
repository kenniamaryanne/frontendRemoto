import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDados12Component } from './entrada-dados12.component';

describe('EntradaDados12Component', () => {
  let component: EntradaDados12Component;
  let fixture: ComponentFixture<EntradaDados12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaDados12Component]
    });
    fixture = TestBed.createComponent(EntradaDados12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
