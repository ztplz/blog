import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { JwtService } from '../../share/services/jwt.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class AdminCreateArticleService {
    baseUrl: string = "http://127.0.0.1:8080/api/v1/articles";

    constructor (
        private http: HttpClient,
        private jwtService: JwtService
    ) {}
    
    private formatErrors(error: any) {
        return Observable.throw(error.error);
    }

    addArticle(categoryID: number, tags: string[], articleTitle: string, articlePreviewText: string, articleContent: string): Observable<any> {
        return this.http.post(this.baseUrl, JSON.stringify({
            article_title: articleTitle,
            article_previewtext: articlePreviewText,
            article_content: articleContent,
            category: categoryID,
            tags: tags
        }), {
            headers: this.jwtService.setHeader("admin_token")
        })
        .timeout(10000)
        .catch(err => {
            console.log(err);
            if (err.name === "TimeoutError") {
                return Observable.throw({message: "请求超时"});
            }

            return Observable.throw(err.error)
        })
        .map(res => {
            // console.log(res);
            return res;
        })
    }
    
}