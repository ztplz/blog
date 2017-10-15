import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { JwtService } from '../share/services/jwt.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class HomeService {
    baseArticleUrl: string = "http://127.0.0.1:8080/api/v1/articles";
    baseCategoryUrl: string = "http://127.0.0.1:8080/api/v1/categories"
    baseTagUrl: string = "http://127.0.0.1:8080/api/v1/tags"
 
    constructor (
        private http: HttpClient,
        private jwtService: JwtService
    ) {}

    getAllArticle(): Observable<any> {
        return this.http.get(this.baseArticleUrl)
            .timeout(10000)
            .catch(err => {
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

    getAllCategory() {
        return this.http.get(this.baseCategoryUrl)
        .timeout(10000)
        .catch(err => {
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

    getAllTag() {
        return this.http.get(this.baseTagUrl)
        .timeout(10000)
        .catch(err => {
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