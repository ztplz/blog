import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit { 
    isLoading: boolean = false;
    isLoaded: boolean = false;
    isError: boolean = false;
    errorText: string = "";
    article: object = {};
    commentValue: string = "";

    timeFormat(time) {
        return moment(time).format("YYYY-MM-DD");
    }

    github() {
        console.log(11111);
        window.open("https://github.com/login/oauth/authorize?client_id=bb34e765fc8abfa3f157&redirect_uri=http://localhost:4200/#/article/4&scope=user:email")
        this.articleService.githunOauth();
    }

    constructor(
        private articleService: ArticleService,
        private route: ActivatedRoute
    ){}

    ngOnInit() {
        this.isLoading = true;
        this.isLoaded = false;
        this.isError = false;
        this.errorText = "";

        this.articleService.getArticleByID()
            .subscribe(
                data => {
                    if (data.statusCode === 200) {
                        console.log("success");
                        this.isLoading = false;
                        this.isLoaded = true;
                        this.article = data.article;
                        // this.isShow = true;
                        // this.alertType = "success";
                        // this.alertMessage = "增加分类名成功";
                        // this.alertDescription = "";
                    }
                },
                err => {
                    console.log(err);
                    this.isLoading = false;
                    this.isError = true;
                    this.errorText = err.message;
                    
                    // this.isShow = true;
                    // this.alertType = "error";
                    // this.alertMessage = "添加分类名失败";
                    // this.alertDescription = err.message;
                }
            );
    }
}