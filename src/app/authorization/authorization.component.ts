import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent {
  loginForm: any;

  constructor(private router: Router) {
    this._createForm();
  }

  private _createForm() {
    this.loginForm = new FormGroup({
      login: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      isSave: new FormControl(false),
    });
  }

  get _login() {
    return this.loginForm.get('login');
  }

  get _password() {
    return this.loginForm.get('password');
  }

  printForm() {
    const controls = this.loginForm.controls;
    if (this.loginForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    this.router.navigate(['/main']);

    console.log(this.loginForm.value);
    console.log('Valid: ', this.loginForm.valid);
  }
}
