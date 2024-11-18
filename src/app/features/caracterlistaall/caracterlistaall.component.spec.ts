import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterlistaallComponent } from './caracterlistaall.component';

describe('CaracterlistaallComponent', () => {
  let component: CaracterlistaallComponent;
  let fixture: ComponentFixture<CaracterlistaallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracterlistaallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracterlistaallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
