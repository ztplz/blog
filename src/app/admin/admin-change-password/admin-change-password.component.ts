import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminChangePasswordService } from './admin-change-password.service';

@Component({
  selector: 'admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.scss']
})
export class AdminChangePasswordComponent implements OnInit {
    // regxp = "^[A-Za-z0-9]+$";
    validateForm: FormGroup;
    regxp: RegExp = new RegExp("^[A-Za-z0-9]+$");
    isSuccess: boolean = false;
    alertType: string = 'error';
    alertMessage: string = '登录失败'
    // statusType: string = "";
    isErrorShow: boolean = false;
    alertText: string = "";
    // statusMessage: string = "";
    // oldPassword: string = "";
    // newPassword: string = "";

    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
        }
        console.log("asdgas");
    }

    submit() {
        this.adminChangePasswordService.changeAdminPassword(this.validateForm.controls["oldPassword"].value, this.validateForm.controls["newPassword"].value)
            .subscribe(
                result => {
                    if (result.statusCode === 200) {
                        this.router.navigateByUrl('/admin-login');
                    } 
                },
                error => {    
                    this.isErrorShow = true;
                    this.alertText = error.message;
                }
            );
    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
          return { required: true };
        } else if (control.value !== this.validateForm.controls[ 'newPassword' ].value) {
          return { confirm: true, error: true };
        }
    };

    confirNumberCharValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (this.regxp.test(control.value) !== true) {
            console.log(false)
            return { incorrect: true, error: true }; 
        }
    }
    
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private adminChangePasswordService: AdminChangePasswordService
    ) {}

    ngOnInit() {
        // this.isSuccess = false;
        // this.statusType = "";
        // this.statusMessage = "";
        // this.alertText = "";
        this.validateForm = this.fb.group({
            oldPassword: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20), this.confirNumberCharValidator]],
            newPassword: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20), this.confirNumberCharValidator]],
            checkPassword: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20), this.confirmationValidator, this.confirNumberCharValidator]]
            // password: new FormControl(null, [Validators.minLength(5), Validators.maxLength(20)]),
        })
        
    }

    getFormControl(name) {
        return this.validateForm.controls[name];
    }
}