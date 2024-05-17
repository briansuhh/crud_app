import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrackinglogComponent } from './add-trackinglog.component';

describe('AddTrackinglogComponent', () => {
  let component: AddTrackinglogComponent;
  let fixture: ComponentFixture<AddTrackinglogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTrackinglogComponent]
    });
    fixture = TestBed.createComponent(AddTrackinglogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
