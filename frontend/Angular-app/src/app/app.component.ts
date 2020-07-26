import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CreateAgentService } from './service/create-agent/create-agent.service'
import { CreateReportService } from './service/create-report/create-report.service'

import { GetAllAgentsService } from './service/get-all-agents/get-all-agents.service'
import { GetAllReportsService } from './service/get-all-reports/get-all-reports.service'
import { GetAllReportsByOneAgentService } from './service/get-all-reports-by-one-agent/get-all-reports-by-one-agent.service'

import { throwError } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CreateAgentService, CreateReportService, GetAllReportsService, GetAllAgentsService, GetAllReportsByOneAgentService ]

})

export class AppComponent  {
  constructor(private http: HttpClient, private createAgentService: CreateAgentService, private createReportService: CreateReportService, private allAgents: GetAllAgentsService, private allReports: GetAllReportsService, private allReportsbyAgent: GetAllReportsByOneAgentService
) {}


  createAgentForm = new FormGroup( {
    agentName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    agentHireDate: new FormControl('', [Validators.required]),
    agentBirthday: new FormControl('', [Validators.required]),
    agentCity: new FormControl('', [Validators.required, Validators.minLength(1)])
  })

  createReportForm = new FormGroup( {
    reportName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    reportPeriod: new FormControl('', [Validators.required]),
    reportSalesVolume: new FormControl('', [Validators.required])
  })

  findReportsbyOneAgentForm = new FormGroup({
    agentReportName: new FormControl('', [Validators.required])
  })


  public createAgentResult;
  createNewAgentSubmit(){
    this.createAgentService.createAgent(this.createAgentForm.value).subscribe(
    (result) => {
      console.log(result);
      this.createAgentResult = result;
    },
    error => {
      console.log(error);
    }
     )
  }

  public createReportResult;
  createNewReportSubmit(){
    this.createReportService.createReport(this.createReportForm.value).subscribe(
    (result) => {
      console.log(result);
      this.createReportResult = result;
    },
    error => {
      console.log(error);
    }
     )

  }


  public data_list_agents;
  listAgentClick(){
    this.allAgents.getAllAgents().subscribe((result) => {
      console.log(result);
      this.data_list_agents = result;
    },
    error => {
      console.log(error);
    }
    )
  }



  public data_list_reports;
  listReportClick(){
    this.allReports.getAllReports().subscribe((result) => {
      console.log(result);
      this.data_list_reports = result;
    },
    error => {
      console.log(error);
    }
    )
  }


  public data_report_by_one_agent;
  public errorAgentNotFound;

  reportOneAgentClick(){
    this.allReportsbyAgent.getAllReportsbyAgent(this.findReportsbyOneAgentForm.value).subscribe((result) => {
      if (typeof result === "string"){
        this.errorAgentNotFound = result;
        this.data_report_by_one_agent = null;
      } else {
        this.data_report_by_one_agent = result;
        this.errorAgentNotFound = null;
      }
      console.log(result);
      },
      error => {
        console.log(error.error);
      }
     )

  }





}
