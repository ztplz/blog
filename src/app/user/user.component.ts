import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit { 
    userAvatarurl = "http://zt-blog.oss-cn-shenzhen.aliyuncs.com/user/user.png";

    URL = "zt-blog.oss-cn-shenzhen.aliyuncs.com/user";
    

    public uploader:FileUploader = new FileUploader({
        url: this.URL
    });
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    ngOnInit(){}
}