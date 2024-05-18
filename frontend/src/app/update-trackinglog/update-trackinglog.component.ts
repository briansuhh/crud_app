import { Component, OnInit } from '@angular/core';
import { Trackinglog } from '../trackinglog';
import { ActivatedRoute, Router } from '@angular/router';
import { TrackinglogService } from '../trackinglog.service';

@Component({
  selector: 'app-update-trackinglog',
  templateUrl: './update-trackinglog.component.html',
  styleUrls: ['./update-trackinglog.component.css'],
})
export class UpdateTrackinglogComponent implements OnInit {
  trackingID: number;
  trackinglog: Trackinglog = new Trackinglog();

  constructor(
    private trackinglogService: TrackinglogService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.trackingID = 0;
  }

  ngOnInit(): void {
    this.trackingID = this.route.snapshot.params['trackingID'];

    this.trackinglogService.getTrackinglogById(this.trackingID).subscribe({
      next: (data) => {
        this.trackinglog = data;
      },
      error: (error) => console.log(error)
    });
  }

  onSubmit() {
    this.trackinglogService.updateTrackinglog(this.trackingID, this.trackinglog).subscribe({
      next: (data) => {
        this.goToTrackinglogList();
      },
      error: (error) => console.log(error)
    });
  }

  goToTrackinglogList() {
    this.router.navigate(['/show-all-trackinglogs']);
  }
}
