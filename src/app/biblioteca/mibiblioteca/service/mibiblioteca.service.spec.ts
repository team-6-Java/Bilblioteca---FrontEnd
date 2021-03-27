import { TestBed } from '@angular/core/testing';

import { MiBibliotecaService } from './mibiblioteca.service';

describe('EmployeeService', () => {
  let service: MiBibliotecaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiBibliotecaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
