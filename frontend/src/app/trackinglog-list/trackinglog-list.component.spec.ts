import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackinglogListComponent } from './trackinglog-list.component';

describe('TrackinglogListComponent', () => {
  let component: TrackinglogListComponent;
  let fixture: ComponentFixture<TrackinglogListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackinglogListComponent]
    });
    fixture = TestBed.createComponent(TrackinglogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
