import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainCarEditComponent } from './train-car-edit.component';

describe('TrainCarEditComponent', () => {
  let component: TrainCarEditComponent;
  let fixture: ComponentFixture<TrainCarEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainCarEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainCarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
