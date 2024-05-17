import { Component } from '@angular/core';
import { Trackinglog } from '../trackinglog';
import { TrackinglogService } from '../trackinglog.service';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-trackinglog-list',
  templateUrl: './trackinglog-list.component.html',
  styleUrls: ['./trackinglog-list.component.css'],
})
export class TrackinglogListComponent {
  trackinglogs: Trackinglog[];
  EnteredID!: number;

  constructor(
    private trackinglogService: TrackinglogService,
    private router: Router
  ) {
    this.trackinglogs = [];
  }

  ngOnInit(): void {
    this.getTrackinglogs();
  }

  addTrackinglog() {
    this.router.navigate(['add-trackinglog']);
  }

  goToTrackinglog() {
    console.log(this.EnteredID);
    this.router.navigate(['trackinglog-details', this.EnteredID]);
  }

  getTrackinglogs() {
    this.trackinglogService.getTrackinglogList().subscribe((data) => {
      this.trackinglogs = data;
    });
  }

  updateTrackinglog(trackinglogID: number) {
    this.router.navigate(['updating-by-id', trackinglogID]);
  }

  deleteTrackinglog(trackinglogID: number) {
    if (confirm('Are you sure to delete Trackinglog ID: ' + trackinglogID)) {
      this.trackinglogService.deleteTrackinglog(trackinglogID).subscribe((data) => {
        console.log(data);
        this.getTrackinglogs();
      });
    }
  }

  detailsOfTrackinglog(trackinglogID: number) {
    this.router.navigate(['trackinglog-details', trackinglogID]);
  }
}
