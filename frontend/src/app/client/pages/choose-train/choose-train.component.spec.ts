import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTrainComponent } from './choose-train.component';

describe('ChooseTrainComponent', () => {
  let component: ChooseTrainComponent;
  let fixture: ComponentFixture<ChooseTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
