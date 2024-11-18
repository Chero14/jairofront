import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterisComponent } from './caracteris.component';

describe('CaracterisComponent', () => {
  let component: CaracterisComponent;
  let fixture: ComponentFixture<CaracterisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracterisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracterisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
