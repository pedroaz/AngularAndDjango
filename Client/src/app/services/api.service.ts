import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoliceReport } from '../models/policeReport';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


   constructor(private httpClient: HttpClient, private state : AppStateService) { 

  }

  savePoliceReport(report : PoliceReport){
    console.log("hey")
    this.httpClient.post("http://127.0.0.1:8000/api/add-report", {
      "title": "OtherReport",
      "reportText": "LULUOUOU"
    }).subscribe(response => {
      console.log("Res: ")
      console.log(response)
    });
  }
}
