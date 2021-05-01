import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  username: string | undefined;
  password: string | undefined;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.router.navigateByUrl("portal")
  }

}
