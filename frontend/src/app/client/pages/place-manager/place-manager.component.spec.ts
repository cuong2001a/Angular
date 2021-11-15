import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceManagerComponent } from './place-manager.component';

describe('PlaceManagerComponent', () => {
  let component: PlaceManagerComponent;
  let fixture: ComponentFixture<PlaceManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
