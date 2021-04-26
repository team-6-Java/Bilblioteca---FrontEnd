import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaAutorComponent } from './busqueda-autor.component';

describe('BusquedaAutorComponent', () => {
  let component: BusquedaAutorComponent;
  let fixture: ComponentFixture<BusquedaAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
