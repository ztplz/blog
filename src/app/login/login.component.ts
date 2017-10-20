import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    validateForm: FormGroup;
    userID: string = "";
    password: string = "";
    regxp: RegExp = new RegExp("^[A-Za-z0-9]+$");

    login() {
        this.loginService.login(this.userID, this.password)
            .subscribe(
                data => {
                    if (data.statusCode === 200) {
                        console.log("success");
                        console.log(data.token);
                        this.jwtService.saveToken(data.userID + "_token", data.token);
                        this.router.navigateByUrl("/user/" + data.userID);
                        // this.articleList = data.articles;
                    }
                },
                err => {
                    console.log(err);
                    this.isErrorShow = true;
                    this.errorText = err.message;
                    this.isButtonLoading = false;
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
      private loginService: LoginService
    ) {}
  
    ngOnInit() {
        this.validateForm = this.fb.group({
            userID: [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(20), this.confirNumberCharValidator ] ],
            password: [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(20), this.confirNumberCharValidator ] ],
        });
    }
}