import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoliceReport } from '../models/policeReport';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseApiUrl = "";

  constructor(private httpClient: HttpClient, private state : AppStateService) { 

  }

  savePoliceReport(report : PoliceReport){
    this.httpClient.post(this.baseApiUrl + "policeReport", report);
  }
}
