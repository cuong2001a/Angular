import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTripComponent } from './type-trip.component';

describe('TypeTripComponent', () => {
  let component: TypeTripComponent;
  let fixture: ComponentFixture<TypeTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
