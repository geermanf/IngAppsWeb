import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../model/Ilogin';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  model: ILogin = { userid: 'admin', password: 'admin123' };
  loginForm: FormGroup;
  message: string;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authService.logout();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  login() {
    this.formSubmitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      if (this.f.userid.value === this.model.userid && this.f.password.value === this.model.password) {
        console.log('Login successful');
        // this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', this.f.userid.value);
        this.router.navigate(['/items']);
      } else {
        this.message = 'Please check your userid and password';
      }
    }
  }
}
