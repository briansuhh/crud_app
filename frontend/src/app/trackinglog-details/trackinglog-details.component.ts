import { Component } from '@angular/core';
import { Trackinglog } from '../trackinglog';
import { TrackinglogService } from '../trackinglog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trackinglog-details',
  templateUrl: './trackinglog-details.component.html',
  styleUrls: ['./trackinglog-details.component.css'],
})
export class TrackinglogDetailsComponent {
  trackingID: number;
  trackinglog!: Trackinglog;

  constructor(
    private route: ActivatedRoute,
    private trackinglogService: TrackinglogService
  ) {
    this.trackingID = 0;
  }

  ngOnInit(): void {
    this.trackingID = this.route.snapshot.params['trackingID'];

    this.trackinglog = new Trackinglog();
    this.trackinglogService.getTrackinglogById(this.trackingID).subscribe((data) => {
      this.trackinglog = data;
    });
  }
}
