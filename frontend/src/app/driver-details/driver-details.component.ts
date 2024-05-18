import { Component } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css'],
})
export class DriverDetailsComponent {
  driverID: number;
  driver!: Driver;

  constructor(
    private route: ActivatedRoute,
    private driverService: DriverService
  ) {
    this.driverID = 0;
  }

  ngOnInit(): void {
    this.driverID = this.route.snapshot.params['driverID'];

    this.driver = new Driver();
    this.driverService.getDriverById(this.driverID).subscribe((data) => {
      this.driver = data;
    });
  }
}
