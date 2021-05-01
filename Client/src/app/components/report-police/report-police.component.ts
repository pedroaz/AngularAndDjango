import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-report-police',
  templateUrl: './report-police.component.html',
  styleUrls: ['./report-police.component.sass']
})
export class ReportPoliceComponent implements OnInit {

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
          label: 'Policial',
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
