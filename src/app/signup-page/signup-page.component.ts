import { Component, OnInit } from '@angular/core';
import { SuccessfulLoginService } from '../services/successful-login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersDataBaseService } from '../services/users-data-base-service.service';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignUpPageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userDataBaseService: UsersDataBaseService,
    private successfulLogin: SuccessfulLoginService,
    private router: Router
  ) {}

  alreadyExists: boolean = false;
  valid: boolean = false;
  loginClick: boolean = false;

  signUpForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  userEmail = this.signUpForm.get('email');
  userPassword = this.signUpForm.get('password');

  // Function to Put user data in database if they have not signed up else tell them they have not registered

  signUpUser(): void {
    this.userDataBaseService
      .insertUserData(
        this.signUpForm.value.email!,
        this.signUpForm.value.password!
      )
      .subscribe((data) => {
        if (data.status == 'error') {
          this.router.navigate(['./error']);
        } else {
          this.alreadyExists = !data.valid;
        }
      });
    this.loginClick = false;
  }

  // Check whether the given credentials are correct and navigate to next page else tell them the credentials are wrong

  checkValidityInputCredentials(): void {
    this.userDataBaseService
      .isLoginValid(
        this.signUpForm.value.email!,
        this.signUpForm.value.password!
      )
      .subscribe((data) => {
        if (data.status == 'error') {
          this.router.navigate(['./error']);
        } else {
          this.valid = data.valid;
          if (this.valid) {
            this.successfulLogin.setLoginStatus('done');
            this.router.navigate(['./prediction']);
          } else {
            this.loginClick = true;
            this.alreadyExists = false;
            this.successfulLogin.setLoginStatus('notDone');
          }
        }
      });
  }

  ngOnInit(): void {
    this.successfulLogin.setLoginStatus('notDone');
  }
}
