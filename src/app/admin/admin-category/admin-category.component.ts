import { Component, OnInit } from '@angular/core';
import { AdminCategoryService } from './admin-category.service';

@Component({
  selector: 'admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit { 
    newCategoryValue: string = "";
    updateCategoryValue: string = "";
    categoryObj: Object = {};
    categoryLength: number = 0;
    isShow: boolean = false;
    alertType: string = "error";
    alertMessage: string = "修改失败";
    alertDescription: string = "";

    newCategory = {
        active: true,
        name: '新增分类',
        customStyle: {
            'background': '#f7f7f7',
            'border-radius': '4px',
            'margin-bottom': '24px',
            'border': '0px'
        }
    };

    categoryList: Object[] = [];

    // categoryList = [
    //     {
    //         name: '技术'
    //     },
    //     {
    //         active: true,
    //         name: '感悟'
    //     },
    //     {
    //         active: true,
    //         name: '生活'
    //     },
    //     {
    //         active: true,
    //         name: '读书'
    //     },
    //     {
    //         active: true,
    //         name: '随笔'
    //     },
    // ];

    addNewCategory() {
        this.isShow = false;
        this.categoryObj = {
            category: this.newCategoryValue,
        };
        console.log(this.categoryObj);
        this.adminCategoryService.addCategory(this.categoryObj)
            .subscribe(
                data => {
                    if (data.statusCode === 200) {
                        console.log("success");
                        this.isShow = true;
                        this.alertType = "success";
                        this.alertMessage = "增加分类名成功";
                        this.alertDescription = "";
                    }
                },
                err => {
                    console.log(err);
                    this.isShow = true;
                    this.alertType = "error";
                    this.alertMessage = "添加分类名失败";
                    this.alertDescription = err.message;
                }
            )
    }

    getAllCategory() {
        this.isShow = false;
        this.adminCategoryService.getAllCategory()
            .subscribe(
                data => {
                    console.log(data);
                    if (data.statusCode === 200) {
                        this.categoryList = data.categories;
                        this.categoryLength = data.categories.length;
                    }                 
                },
                
                err => {
                    console.log(err);
                    this.isShow = true;
                    this.alertType = "error";
                    this.alertMessage = "获取分类名失败";
                    this.alertDescription = err.message;
                }
            )
    }

    updataCategory() {       
        this.adminCategoryService.updateCategory(this.updateCategoryValue)
            .subscribe(
                data => {
                    console.log(data);
                    if (data.statusCode === 200) {
                        this.isShow = true;
                        this.alertType = "success";
                        this.alertMessage = "修改分类名成功";
                    }                 
                },
                err => {
                    console.log(err);
                    this.isShow = true;
                    this.alertType = "error";
                    this.alertMessage = "修改分类名失败";
                    this.alertDescription = err.message;
                }
            )
    }

    constructor(
        private adminCategoryService: AdminCategoryService
    ) { }
    
    ngOnInit() { 
        this.getAllCategory();
    }
}