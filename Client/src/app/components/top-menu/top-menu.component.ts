import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.sass']
})
export class TopMenuComponent implements OnInit {

  items: MenuItem[];

  constructor(private router : Router) { 
    this.items = [
      {label: 'Início', icon: 'pi pi-fw pi-home', command: () => this.navigateTo("portal")},
      {label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar', command: () => this.navigateTo("")},
      {label: 'Ocorrências', icon: 'pi pi-fw pi-desktop', command: () => this.navigateTo("")},
      {label: 'Aprovação', icon: 'pi pi-fw pi-check', command: () => this.navigateTo("")},
    ];
  }

  ngOnInit() {
      
  }

  navigateTo(url: string){
    this.router.navigateByUrl(url);
  }

}
