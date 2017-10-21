import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { JwtService } from '../share/services/jwt.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    validateForm: FormGroup;
    // userID: string = "";
    // password: string = "";
    regxp: RegExp = new RegExp("^[A-Za-z0-9]+$");

    isLogining: boolean = false;
    isErrorShow: boolean = false;
    alertErrorText: string = "";

    login() {
        this.isLogining = true;
        this.isErrorShow =false;
        this.alertErrorText = "";

        const userID: string = this.validateForm.controls["userID"].value;
        const password: string = this.validateForm.controls["password"].value;

        this.loginService.login(userID, password)
            .subscribe(
                data => {
                    if (data.statusCode === 200) {
                        console.log("success");
                        console.log(data);
                        console.log(data.token);
                        this.isLogining = false;
                        this.jwtService.saveToken( userID + "_token", data.token);
                        this.router.navigateByUrl("/user/" + userID);
                        // this.articleList = data.articles;
                    }
                },
                err => {
                    console.log(err);
                    this.isLogining = false;
                    this.isErrorShow = true;
                    this.alertErrorText = err.message;
                    // this.isArticleAlertShow = true;
                    // this.alertArticleMessage = "获取文章列表失败";
                    // this.alertArticleDescription = err.message;
                }
            )
    }

    confirNumberCharValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (this.regxp.test(control.value) !== true) {
            console.log(false)
            return { incorrect: true, error: true }; 
        }
    }

    getFormControl(name) {
        return this.validateForm.controls[ name ];
    }
  
    constructor(
      private fb: FormBuilder,
      private router: Router,
      private loginService: LoginService,
      private jwtService: JwtService
    ) {}
  
    ngOnInit() {
        this.validateForm = this.fb.group({
            userID: [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(20), this.confirNumberCharValidator ] ],
            password: [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(20), this.confirNumberCharValidator ] ],
        });
    }
}