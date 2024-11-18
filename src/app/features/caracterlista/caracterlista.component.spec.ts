import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterlistaComponent } from './caracterlista.component';

describe('CaracterlistaComponent', () => {
  let component: CaracterlistaComponent;
  let fixture: ComponentFixture<CaracterlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracterlistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracterlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
