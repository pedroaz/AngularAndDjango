import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.sass']
})
export class ReportPageComponent implements OnInit {

  target: string | undefined;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.target = params['target'];
    });
  }

  ngOnInit(): void {
  }

  isReportType(t: string){
    return t == this.target;
  }

}
