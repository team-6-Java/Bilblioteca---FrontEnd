import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MibibliotecaComponent } from './mibiblioteca.component';

describe('MibibliotecaComponent', () => {
  let component: MibibliotecaComponent;
  let fixture: ComponentFixture<MibibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MibibliotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MibibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
