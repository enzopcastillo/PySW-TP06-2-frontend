import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2Component } from './punto2.component';

describe('Punto2Component', () => {
  let component: Punto2Component;
  let fixture: ComponentFixture<Punto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
