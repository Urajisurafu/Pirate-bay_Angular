import { Component } from '@angular/core';
import { loginForm } from '../../interfaces/interfaces';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent {
  loginForm: loginForm = {
    login: '',
    password: '',
    isRemember: false,
  };

  constructor() {}

  printForm() {
    console.log(this.loginForm);
  }
}
