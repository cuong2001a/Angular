import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGoComponent } from './add-go.component';

describe('AddGoComponent', () => {
  let component: AddGoComponent;
  let fixture: ComponentFixture<AddGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
