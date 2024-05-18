import { Component } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css'],
})
export class DriverListComponent {
  drivers: Driver[];
  EnteredID!: number;

  constructor(
    private driverService: DriverService,
    private router: Router
  ) {
    this.drivers = [];
  }

  ngOnInit(): void {
    this.getDrivers();
  }

  addDriver() {
    this.router.navigate(['add-driver']);
  }

  goToDriver() {
    console.log(this.EnteredID);
    this.router.navigate(['driver-details', this.EnteredID]);
  }

  getDrivers() {
    this.driverService.getDriversList().subscribe((data) => {
      this.drivers = data;
    });
  }

  updateDriver(driverID: number) {
    this.router.navigate(['update-driver', driverID]);
  }

  deleteDriver(driverID: number) {
    if (confirm('Are you sure to delete Driver ID: ' + driverID)) {
      this.driverService.deleteDriver(driverID).subscribe((data) => {
        console.log(data);
        this.getDrivers();
      });
    }
  }

  detailsOfDriver(driverID: number) {
    this.router.navigate(['driver-details', driverID]);
  }
}
