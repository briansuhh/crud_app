import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css'],
})
export class UpdateDriverComponent implements OnInit {
  driverID: number;
  driver: Driver = new Driver();

  constructor(
    private driverService: DriverService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.driverID = 0;
  }

  ngOnInit(): void {
    this.driverID = this.route.snapshot.params['driverID'];

    this.driverService.getDriverById(this.driverID).subscribe({
      next: (data) => {
        this.driver = data;
      },
      error: (error) => console.log(error)
    });
  }

  onSubmit() {
    this.driverService.updateDriver(this.driverID, this.driver).subscribe({
      next: (data) => {
        this.goToDriverList();
      },
      error: (error) => console.log(error)
    });
  }

  goToDriverList() {
    this.router.navigate(['/show-all-drivers']);
  }
}
