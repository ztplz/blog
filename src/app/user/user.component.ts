import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl
} from '@angular/forms';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { UserService } from './user.service';
import * as moment from 'moment';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit { 
    validateForm: FormGroup;
    userID: string = "";
    userName: string = "";
    password: string = "*****";
    regxp: RegExp = new RegExp("^[A-Za-z0-9]+$");
    
    isLoading: boolean = false;
    isLoaded: boolean = false;
    isError: boolean = false;

    userInfo: object = {};
    errorText: string = "";

    isIDChanging: boolean = false;
    isIDAlertShow: boolean = false;
    alertIDType: string = "";
    alertIDMessage: String = "";
    alertIDErrorText: string = "";
    
    isNameChanging: boolean = false;
    isNameAlertShow: boolean = false;
    alertNameType: string = "";
    alertNameMessage: string = "";
    alertNameErrorText: string  ="";
    
    isPasswordChanging: boolean = false;
    isPasswordAlertShow: boolean = false;
    alertPasswordErrorText: string = "";

    userAvatarurl = "http://zt-blog.oss-cn-shenzhen.aliyuncs.com/user/user.png";

    URL = "zt-blog.oss-cn-shenzhen.aliyuncs.com/user";

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

    timeFormat(time) {
        return moment(time).fromNow();
    }

    buttonClick() {
        console.log("asdgasdg");
    }

    getUser() {
        this.isLoading = true;
        this.isLoaded = false;
        this.isError = false;

        this.userService.getUser()
            .subscribe(
                data => {
                    if (data.statusCode === 200) {
                        console.log(data);
                        this.isLoading = false;
                        this.isLoaded = true;
                        this.userInfo = data.user;
                        this.userID = data.user.user_id;
                        this.userName = data.user.user_name;
                        // this.password = data.password;
                    }
                },
                err => {
                    console.log(err);
                    this.isLoading = false;
                    this.isError = true;
                    this.errorText = err.message;
                }
        )
    }

    changeUserID() {
        this.isIDChanging = true;
        this.isIDAlertShow = false;
        this.alertIDErrorText = "";
        
        this.userService.changeUserID(this.userID)
            .subscribe(
                data => {
                    if (data.statusCode === 200) {
                        console.log(data);
                        this.isIDChanging = false;
                        this.isIDAlertShow = true;
                        this.alertIDType = "success";
                        this.alertIDMessage = "修改用户ID成功";
                        this.alertIDErrorText = "";
                        // this.password = data.password;
                    }
                },
                err => {
                    console.log(err);
                    this.isIDChanging = false;
                    this.isIDAlertShow = true;
                    this.alertIDType = "error";
                    this.alertIDMessage = "修改用户ID失败";
                    this.alertIDErrorText = err.message;
                }
            )
    }

    changeUserName() {
        this.isNameChanging = true;
        this.isNameAlertShow = false;
        this.alertNameErrorText = "";
        
        this.userService.changeUserName(this.userName)
            .subscribe(
                data => {
                    if (data.statusCode === 200) {
                        console.log(data);
                        this.isNameChanging = false;
                        this.isNameAlertShow = true;
                        this.alertNameType = "success";
                        this.alertNameMessage = "修改用户名字成功";
                        this.alertNameErrorText = "";
                        // this.password = data.password;
                    }
                },
                err => {
                    console.log(err);
                    this.isNameChanging = false;
                    this.isNameAlertShow = true;
                    this.alertNameType = "error";
                    this.alertNameMessage = "修改用户名字失败";
                    this.alertNameErrorText = err.message;
                }
            )
    }

    changeUserPassword() {
        this.isPasswordChanging = true;
        this.isPasswordAlertShow = false;
        this.alertPasswordErrorText = "";
        
        this.userService.changeUserName(this.userName)
            .subscribe(
                data => {
                    if (data.statusCode === 200) {
                        console.log(data);
                        this.isPasswordChanging = false;
                        this.isPasswordAlertShow = true;
                        this.alertNameMessage = "修改用户名字成功";
                        // this.password = data.password;
                    }
                },
                err => {
                    console.log(err);
                    this.isPasswordChanging = false;
                    this.isPasswordAlertShow = true;
                    this.alertNameErrorText = err.message;
                }
            )
    }
    

    public uploader:FileUploader = new FileUploader({
        url: this.URL
    });
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    constructor(
        private fb: FormBuilder,
        private userService: UserService
    ) {}

    ngOnInit(){
        this.validateForm = this.fb.group({
            userID: [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(20), this.confirNumberCharValidator ] ],
            userName: [ null, [ Validators.required, Validators.minLength(2), Validators.maxLength(12) ] ],
            password: [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(20), this.confirNumberCharValidator ] ],
        });

        console.log(this.validateForm);
        
        this.getUser();
        
    }
}

// function getDataByActivityStatus() {
//     $("#activityState").change(function() {
//         var queryParam = $(this).val(); 
//         $.ajax("https://bendandandan.com", {
//             type: "GET",
//             error: function(error) {
//                 alert("丹丹是笨蛋！");
//             },
//             success: function(data) {
//                 console.log(data);
//             }
//         }) 
//     })
// }