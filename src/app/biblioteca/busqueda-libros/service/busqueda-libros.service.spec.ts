import { TestBed } from '@angular/core/testing';

import { BusquedaService } from './busqueda-libros.service';

describe('EmployeeService', () => {
  let service: BusquedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
