import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateAgentService {

  baseurl = "http://127.0.0.1:8000";

  constructor(private http: HttpClient){}

  createAgent(createAgentFormGroup): Observable<any>{
    return this.http.post(this.baseurl + '/create_agent/' +
    createAgentFormGroup['agentName'] + '/' +
    createAgentFormGroup['agentHireDate'] + '/' +
    createAgentFormGroup['agentBirthday'] + '/' +
    createAgentFormGroup['agentCity'], null);
  }

}
