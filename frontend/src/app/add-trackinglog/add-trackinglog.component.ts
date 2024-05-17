import { Component } from '@angular/core';
import { Trackinglog } from '../trackinglog';
import { Observable } from 'rxjs';
import { TrackinglogService } from '../trackinglog.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-trackinglog',
  templateUrl: './add-trackinglog.component.html',
  styleUrls: ['./add-trackinglog.component.css'],
})
export class AddTrackinglogComponent {
  constructor(
    private trackinglogService: TrackinglogService,
    private router: Router
  ) {}

  submitForm!: NgForm;
  private baseURL = 'http://localhost:8080/api/v1/trackinglogs';
  trackinglog: Trackinglog = new Trackinglog();

  saveTrackinglog() {
    this.trackinglogService.addTrackinglog(this.trackinglog).subscribe({
      next: (data) => {
        console.log(data);
        this.goToTrackinglogList();
      },
      error: (error) => console.log(error),
    });
  }

  goToTrackinglogList() {
    this.router.navigate(['/show-all-trackinglogs']);
  }

  ngOnInit(): void {}
  
  onSubmit() {
    console.log(this.trackinglog);
    this.saveTrackinglog();
  }
}
