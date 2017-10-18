import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    validateForm: FormGroup;
    userID: string = "";
    userName: string = "";
    password: string = "";
    regxp: RegExp = new RegExp("^[A-Za-z0-9]+$");

    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[ i ].markAsDirty();
        }
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

    register() {
        this.registerService.register(this.validateForm.controls['userID'].value, this.validateForm.controls['userName'].value, this.validateForm.controls['password'].value)
            .subscribe(
                data => {
                    if (data.statusCode === 200) {
                        console.log("success");
                        // this.articleList = data.articles;
                    }
                },
                err => {
                    console.log(err);
                    // this.isArticleAlertShow = true;
                    // this.alertArticleMessage = "获取文章列表失败";
                    // this.alertArticleDescription = err.message;
                }
            )
    }


    constructor(
        private fb: FormBuilder,
        private registerService: RegisterService
    ) {}

    ngOnInit() {
        this.validateForm = this.fb.group({
            userID: [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(20), this.confirNumberCharValidator ] ],
            userName: [ null, [ Validators.required, Validators.minLength(2), Validators.maxLength(12) ] ],
            password: [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(20), this.confirNumberCharValidator ] ],
        });
        
        console.log(this.validateForm);
    }
}