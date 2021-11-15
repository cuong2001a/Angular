import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainCarAddComponent } from './train-car-add.component';

describe('TrainCarAddComponent', () => {
  let component: TrainCarAddComponent;
  let fixture: ComponentFixture<TrainCarAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainCarAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainCarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
