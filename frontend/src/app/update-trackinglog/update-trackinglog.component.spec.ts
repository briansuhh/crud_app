import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrackinglogComponent } from './update-trackinglog.component';

describe('UpdateTrackinglogComponent', () => {
  let component: UpdateTrackinglogComponent;
  let fixture: ComponentFixture<UpdateTrackinglogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTrackinglogComponent]
    });
    fixture = TestBed.createComponent(UpdateTrackinglogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
