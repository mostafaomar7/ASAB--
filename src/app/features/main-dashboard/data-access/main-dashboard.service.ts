import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainDashboardService {
  private readonly http = inject(HttpClient);

  getOverview(): Observable<unknown> {
    return this.http.get('/api/main-dashboard/overview');
  }
}
