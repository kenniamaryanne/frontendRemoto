import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDados8Component } from './entrada-dados8.component';

describe('EntradaDados8Component', () => {
  let component: EntradaDados8Component;
  let fixture: ComponentFixture<EntradaDados8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaDados8Component]
    });
    fixture = TestBed.createComponent(EntradaDados8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
