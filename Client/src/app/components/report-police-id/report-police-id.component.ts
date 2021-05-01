import { Component, OnInit } from '@angular/core';
import { PoliceId } from 'src/app/models/policeId';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-report-police-id',
  templateUrl: './report-police-id.component.html',
  styleUrls: ['./report-police-id.component.sass']
})
export class ReportPoliceIdComponent implements OnInit {

  public policeId!: PoliceId;

  constructor(state : AppStateService) {
    this.policeId = state.policeId.getValue();  
  }

  ngOnInit(): void {
  }

}
