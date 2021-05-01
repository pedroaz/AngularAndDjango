import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-page',
  templateUrl: './portal-page.component.html',
  styleUrls: ['./portal-page.component.sass']
})
export class PortalPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onReport(target: string){
    if(target == 'police'){
      this.router.navigateByUrl('/report?target=police')
    }
    else if(target == 'doctor'){
      this.router.navigateByUrl('/report?target=doctor')
    }
  }

}
