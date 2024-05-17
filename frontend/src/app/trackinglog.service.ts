import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Trackinglog } from './trackinglog';

@Injectable({
  providedIn: 'root',
})
export class TrackinglogService {
  private baseURL = 'http://localhost:8080/api/v1/trackinglogs';

  constructor(private httpClient: HttpClient) {}

  getTrackinglogList(): Observable<Trackinglog[]> {
    return this.httpClient.get<Trackinglog[]>(`${this.baseURL}`);
  }

  addTrackinglog(trackinglog: Trackinglog): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, trackinglog);
  }

  getTrackinglogById(trackingID: number): Observable<Trackinglog> {
    return this.httpClient.get<Trackinglog>(`${this.baseURL}/${trackingID}`);
  }

  updateTrackinglog(trackingID: number, trackinglog: Trackinglog): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${trackingID}`, trackinglog);
  }

  deleteTrackinglog(trackingID: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${trackingID}`);
  }
}
