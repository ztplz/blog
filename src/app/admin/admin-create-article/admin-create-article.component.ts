import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms'; 
import { AdminCategoryService } from '../admin-category/admin-category.service';
import { AdminTagService } from "../admin-tag/admin-tag.service";
import { AdminCreateArticleService } from "./admin-create-article.service";

@Component({
  selector: 'admin-home',
  templateUrl: './admin-create-article.component.html',
  styleUrls: ['./admin-create-article.component.scss']
})
export class AdminCreateArticleComponent implements OnInit {
    // 建立表单模型 
    // validateForm: FormGroup;

    // 控制 alert 显示或隐藏
    isShow: boolean = false;

    // 控制 alert 的类型
    alertType: string = "error";

    // 控制 alert 的提示
    alertMessage: string = "修改失败";

    // 控制 alert 的描述
    alertDescription: string = "";

    // 分类选择的值
    categoryValue: number = 0;

    // 选择的标签
    tagsValue: number[] = [];

    // 传递给后台的标签数组
    tagsPost: string[] = [];

    // 文章标题
    articleTitleValue: string = "";

    // 正文预览
    articlePreviewTextValue: string = "";

    // 分类列表
    categoryList: object[] = [];

    // 标签列表
    tagList: object[] = [];

     // 富文本编辑器设置
    editorConfig: Object = {
        height: 500,
        placeholderText: '请在此输入!'
    };

    // 富文本编辑器内容
    editorContent: string = "";

    // 分类选择器
    options = [
        { value: '技术', label: '技术'},
        { value: '演讲', label: '演讲'},
        { value: '生活', label: '生活'},
        { value: '读书', label: '读书'},
        { value: '随笔', label: '随笔'},
    ];

    onClickMe() {
        console.log(this.editorContent)
    }

    submitForm() {
        // for (const i in this.validateForm.controls) {
        //     this.validateForm.controls[ i ].markAsDirty();
        // }
    }
    

    getAllCategory() {
        this.isShow = false;
        this.adminCategoryService.getAllCategory()
            .subscribe(
                data => {
                    console.log(data);
                    if (data.statusCode === 200) {
                        this.categoryList = data.categories;
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

    getAllTag() {
        this.isShow = false;
        this.adminTagService.getAllTag()
            .subscribe(
                data => {
                    console.log(data);
                    if (data.statusCode === 200) {
                        this.tagList = data.tags;
                    }                 
                },
              
                err => {
                    console.log(err);
                    this.isShow = true;
                    this.alertType = "error";
                    this.alertMessage = "获取标签失败";
                    this.alertDescription = err.message;
              }
          );
    }

    articleSubmit() {
        console.log(this.categoryValue);
        console.log(this.tagsValue);
        console.log(this.articleTitleValue);
        console.log(this.articlePreviewTextValue);
        console.log(this.editorContent);
        this.isShow = false;
        this.alertType = "";
        this.alertMessage = "";
        this.alertDescription = ""
        ;
        for (let i=0; i<this.tagsValue.length; i++) {
            this.tagsPost[i] = this.tagsValue[i].toString()
        }
        
        this.adminCreateArticleService.addArticle(this.categoryValue, this.tagsPost, this.articleTitleValue, this.articlePreviewTextValue, this.editorContent)
            .subscribe(
                data => {
                    console.log(data);
                    if (data.statusCode === 200) {
                        this.isShow = true;
                        this.alertType = "success";
                        this.alertMessage = "添加博文成功";
                    }                 
                },
                err => {
                    console.log(err);
                    this.isShow = true;
                    this.alertType = "error";
                    this.alertMessage = "添加博文失败";
                    this.alertDescription = err.message;
                }
            )
    }

    constructor(
        private fb: FormBuilder,
        private adminCategoryService: AdminCategoryService,
        private adminTagService: AdminTagService,
        private adminCreateArticleService: AdminCreateArticleService
    ) { }

    ngOnInit() {
        this.getAllCategory();
        this.getAllTag();
        // this.validateForm = this.fb.group({
        //     category: [null, [ Validators.required ]],
        //     tag: [null, [ Validators.required ]],
        //     articleTitle: [null, [ Validators.required, Validators.maxLength(25) ]],
        //     articlePreviewText: [null, [ Validators.required, Validators.maxLength(100) ]]
        // })
    }
}