import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { AdminLoginService } from './admin-login.service';
import { JwtService } from '../share/services/jwt.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit { 
  adminValue = "";
  passwordValue = "";
  loading = false;
  isErrorShow = false;
  errorText = "";

  constructor(
    private http: HttpClient,
    private adminLoginService: AdminLoginService,
    private jwtService: JwtService
  ){ }

  ngOnInit(): void {
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
  }
  
  login() {
    this.loading = true;
    this.isErrorShow = false;
    this.errorText = "";
    this.adminLoginService.login(this.adminValue, this.passwordValue)
      .subscribe(
        result => {
          if (result.statusCode === 200) {
            this.loading = false;
            this.jwtService.saveToken("admin_token", result.token);
          } else {
            this.loading = false;
            this.isErrorShow = true;       
          }
        },
        error => {
          this.loading = false;
          this.isErrorShow = true;
          this.errorText = error.message;
        }
      );
  }
}