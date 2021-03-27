import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaLibrosComponent } from './busqueda-libros.component';

describe('BusquedaLibrosComponent', () => {
  let component: BusquedaLibrosComponent;
  let fixture: ComponentFixture<BusquedaLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
