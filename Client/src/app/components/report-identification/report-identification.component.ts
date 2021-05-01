import { Component, OnInit } from '@angular/core';
import { Identification } from 'src/app/models/identification';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-report-identification',
  templateUrl: './report-identification.component.html',
  styleUrls: ['./report-identification.component.sass']
})
export class ReportIdentificationComponent implements OnInit {

  public identification! : Identification;

  constructor(state : AppStateService) { 

    this.identification = state.identification.getValue();
  }

  ngOnInit(): void {
  }

}
