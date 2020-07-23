import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateReportService {
  baseurl = "http://127.0.0.1:8000";

  constructor(private http: HttpClient){}

  createReport(createReportFormGroup): Observable<any>{
    return this.http.post(this.baseurl + '/create_report/'
              + createReportFormGroup['reportName'] + '/'
              + createReportFormGroup['reportPeriod'] + '/'
              + createReportFormGroup['reportSalesVolume'], null);

  }

}


