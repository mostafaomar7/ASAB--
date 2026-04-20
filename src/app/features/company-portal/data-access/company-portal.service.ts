import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyPortalService {
  private readonly http = inject(HttpClient);

  getOverview(): Observable<unknown> {
    return this.http.get('/api/company-portal/overview');
  }
}
