import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloModuloComponent } from './titulo-modulo.component';

describe('TituloModuloComponent', () => {
  let component: TituloModuloComponent;
  let fixture: ComponentFixture<TituloModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloModuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
