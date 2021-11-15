import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTripEditComponent } from './type-trip-edit.component';

describe('TypeTripEditComponent', () => {
  let component: TypeTripEditComponent;
  let fixture: ComponentFixture<TypeTripEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTripEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTripEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
