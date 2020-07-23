import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllReportsByOneAgentService {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient){}

  getAllReportsbyAgent(findReportsbyOneAgentForm): Observable<any>{
    return this.http.get(this.baseurl + '/get_all_reports?agent=' + findReportsbyOneAgentForm['agentReportName'], {headers: this.httpHeaders})
  }
}

