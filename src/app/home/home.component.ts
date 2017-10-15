import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    // 正在加载
    isLoading: boolean = false;

    // 是否成功下载
    isLoaded: boolean = false;

    articleList: object[] = [];
    categoryList: object[] = [];
    tagList: object[] = [];

    // 控制alert是否显示
    isArticleAlertShow: boolean = false;
    isCategoryAlertShow: boolean = false;
    isTagAlertShow: boolean = false;

    // alert 提示内容
    alertArticleMessage: string = "";
    alertCategoryMessage: string = "";
    alertTagMessage: string = "";

    // alert 描述
    alertArticleDescription: string = "";
    alertCategoryDescription: string = "";
    alertTagDescription: string = "";
    
    
    // 获取文章列表
    getAllArticle() {
        this.isArticleAlertShow = false;

        this.homeService.getAllArticle()
            .subscribe(
                data => {
                    if (data.statusCode === 200) {
                        console.log("success");
                        this.articleList = data.articles;
                    }
                },
                err => {
                    console.log(err);
                    this.isArticleAlertShow = true;
                    this.alertArticleMessage = "获取文章列表失败";
                    this.alertArticleDescription = err.message;
                }
            )
    }

    // 获取分类信息
    getAllCategory() {
      this.isCategoryAlertShow = false;

      this.homeService.getAllCategory()
          .subscribe(
              data => {
                  if (data.statusCode === 200) {
                      console.log("success");
                      this.categoryList = data.categories;
                  }
              },
              err => {
                  console.log(err);
                  this.isCategoryAlertShow = true;
                  this.alertCategoryMessage = "获取分类统计失败";
                  this.alertCategoryDescription = err.message;
              }
          )
    }

    // 获取标签信息
    getAllTag() {
        this.isTagAlertShow = false;

        this.homeService.getAllTag()
            .subscribe(
                data => {
                    if (data.statusCode === 200) {
                        console.log("success");
                        this.tagList = data.tags;
                    }
                },
                err => {
                    console.log(err);
                    this.isCategoryAlertShow = true;
                    this.alertCategoryMessage = "获取分类统计失败";
                    this.alertCategoryDescription = err.message;
                }
            )
    }



    constructor(
        private homeService: HomeService
    ){ }

    ngOnInit() {
        this.isLoading =true;

        Promise.all([
          this.getAllCategory(),
          this.getAllTag(),
          this.getAllArticle()
        ])
        .then(
            (data) => {
              console.log(11111111);
              this.isLoading = false;
              this.isLoaded = true;
            }
        )
        .catch(error => {
            
        })
        
    }  
}