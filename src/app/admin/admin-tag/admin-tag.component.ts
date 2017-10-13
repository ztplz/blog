import { Component, OnInit } from '@angular/core';
import { AdminTagService } from './admin-tag.service';

@Component({
  selector: 'admin-tag',
  templateUrl: './admin-tag.component.html',
  styleUrls: ['./admin-tag.component.scss']
})
export class AdminTagComponent implements OnInit { 
    newTagColor: string = "";
    newTagTitle: string = "";
    updateCategoryValue: string = "";
    isShow: boolean = false;
    alertType: string = "error";
    alertMessage: string = "修改失败";
    alertDescription: string = "";
    options = [
        "pink",
        "red",
        "orange",
        "green",
        "cyan",
        "blue",
        "purple"
    ]
    
    addTag() {
        this.isShow = false;
        console.log(this.newTagColor);
        console.log(this.newTagTitle);
        this.adminTagService.addTag(this.newTagColor, this.newTagTitle)
            .subscribe(
              data => {
                if (data.statusCode === 200) {
                    console.log("success");
                    this.isShow = true;
                    this.alertType = "success";
                    this.alertMessage = "增加标签名成功";
                    this.alertDescription = "";
                }
            },
            err => {
                console.log(err);
                this.isShow = true;
                this.alertType = "error";
                this.alertMessage = "添加标签名失败";
                this.alertDescription = err.message;
            }
            )
    }

    // getAllTag() {
    //   this.isShow = false;
    //   this.adminTagService.getAllCategory()
    //       .subscribe(
    //           data => {
    //               console.log(data);
    //               if (data.statusCode === 200) {
    //                   this.TagList = data.categories;
    //                   this.tagsLength = data.tags.length;
    //               }                 
    //           },
              
    //           err => {
    //               console.log(err);
    //               this.isShow = true;
    //               this.alertType = "error";
    //               this.alertMessage = "获取分类名失败";
    //               this.alertDescription = err.message;
    //           }
    //       )
    // }

    constructor(
      private adminTagService: AdminTagService
    ) {}
    
    ngOnInit() { 
      // this.getAllTag();
    }
}