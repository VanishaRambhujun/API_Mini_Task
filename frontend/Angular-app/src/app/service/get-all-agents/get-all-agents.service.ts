import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetAllAgentsService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient){}

  getAllAgents(): Observable<any>{
    return this.http.get(this.baseurl + '/get_all_agents/', {headers: this.httpHeaders})
  }



}
