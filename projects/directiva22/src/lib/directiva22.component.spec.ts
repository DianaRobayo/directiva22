import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directiva22Component } from './directiva22.component';

describe('Directiva22Component', () => {
  let component: Directiva22Component;
  let fixture: ComponentFixture<Directiva22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Directiva22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Directiva22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
