import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedanombreautorComponent } from './busquedanombreautor.component';

describe('BusquedanombreautorComponent', () => {
  let component: BusquedanombreautorComponent;
  let fixture: ComponentFixture<BusquedanombreautorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedanombreautorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedanombreautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
