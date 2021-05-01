import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-report-doctor',
  templateUrl: './report-doctor.component.html',
  styleUrls: ['./report-doctor.component.sass']
})
export class ReportDoctorComponent implements OnInit {

  items: MenuItem[] = [];
  public activeIndex: number = 0;
  public steps = [0, 1, 2]

  constructor() { 
    this.items = [
      {
        label: 'Identificação',
      },
      {
          label: 'Local',
      },
      {
          label: 'Médico',
      }
    ];
  }


  ngOnInit(): void {
  }

  onNext(){
    if(this.activeIndex < 2){
      this.activeIndex++;
    }
  }

  onPrevious(){
    if(this.activeIndex > 0){
      this.activeIndex--;
    }
  }

}
