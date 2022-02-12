import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent {
  loginForm: any = {
    login: '',
    password: '',
    isRemember: false,
  };

  constructor() {}

  printForm() {
    console.log(this.loginForm);
  }
}
