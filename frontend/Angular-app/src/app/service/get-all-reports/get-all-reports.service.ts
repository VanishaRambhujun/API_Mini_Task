import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetAllReportsService {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient){}

  getAllReports(): Observable<any>{
    return this.http.get(this.baseurl + '/get_all_reports/', {headers: this.httpHeaders})
  }


}
