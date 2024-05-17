import { Component } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css'],
})
export class AddDriverComponent {
  selectedYear!: Date;
  driver: Driver = new Driver();

  constructor(
    private driverService: DriverService,
    private router: Router
  ) {}

  saveDriver() {
    this.driverService.addDriver(this.driver).subscribe({
      next: (data) => {
        console.log(data);
        this.goToDriverList();
      },
      error: (error) => console.log(error),
    });
  }

  goToDriverList() {
    this.router.navigate(['/show-all-drivers']);
  }

  ngOnInit(): void {}

  onYearSelected(event: any) {
    this.selectedYear = event;
  }

  onSubmit() {
    console.log(this.driver);
    this.saveDriver();
  }
}
