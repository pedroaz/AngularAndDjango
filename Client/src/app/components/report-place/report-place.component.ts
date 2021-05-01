import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-report-place',
  templateUrl: './report-place.component.html',
  styleUrls: ['./report-place.component.sass']
})
export class ReportPlaceComponent implements OnInit {

  public place! : Place;

  constructor(state : AppStateService) { 

    this.place = state.place.getValue();
  }

  ngOnInit(): void {
  }

}
