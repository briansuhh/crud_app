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

  getTrackinglogById(trackinglogID: number): Observable<Trackinglog> {
    return this.httpClient.get<Trackinglog>(`${this.baseURL}/${trackinglogID}`);
  }

  updateTrackinglog(trackinglogID: number, trackinglog: Trackinglog): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${trackinglogID}`, trackinglog);
  }

  deleteTrackinglog(trackinglogID: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${trackinglogID}`);
  }
}
