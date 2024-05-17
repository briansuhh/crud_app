import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackinglogDetailsComponent } from './trackinglog-details.component';

describe('TrackinglogDetailsComponent', () => {
  let component: TrackinglogDetailsComponent;
  let fixture: ComponentFixture<TrackinglogDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackinglogDetailsComponent]
    });
    fixture = TestBed.createComponent(TrackinglogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
