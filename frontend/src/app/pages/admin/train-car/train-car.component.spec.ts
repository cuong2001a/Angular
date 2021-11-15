import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainCarComponent } from './train-car.component';

describe('TrainCarComponent', () => {
  let component: TrainCarComponent;
  let fixture: ComponentFixture<TrainCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
