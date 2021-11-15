import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTripAddComponent } from './type-trip-add.component';

describe('TypeTripAddComponent', () => {
  let component: TypeTripAddComponent;
  let fixture: ComponentFixture<TypeTripAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTripAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTripAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
