import { TestBed } from '@angular/core/testing';

import { RegistrarLibroService } from './registrar-libro.service';

describe('RegistrarLibroService', () => {
  let service: RegistrarLibroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarLibroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
