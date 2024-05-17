import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  private baseURL = 'http://localhost:8080/api/v1/drivers';

  constructor(private httpClient: HttpClient) {}

  getDriversList(): Observable<Driver[]> {
    return this.httpClient.get<Driver[]>(`${this.baseURL}`);
  }

  addDriver(driver: Driver): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, driver);
  }

  getDriverById(driverID: number): Observable<Driver> {
    return this.httpClient.get<Driver>(`${this.baseURL}/${driverID}`);
  }

  updateDriver(driverID: number, driver: Driver): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${driverID}`, driver);
  }

  deleteDriver(driverID: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${driverID}`);
  }
}
