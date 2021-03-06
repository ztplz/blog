import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { JwtService } from '../../share/services/jwt.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class AdminCategoryService {
    baseUrl: string = "http://127.0.0.1:8080/api/v1/categories";
 
    constructor (
        private http: HttpClient,
        private jwtService: JwtService
    ) {}

    addCategory(category: object): Observable<any> {
        return this.http.post(this.baseUrl, JSON.stringify(category), {
            headers: this.jwtService.setHeader("admin_token"),
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

    getAllCategory(): Observable<any> {
        return this.http.get(this.baseUrl, {
            headers: this.jwtService.setHeader("admin_token"),
        })
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

    updateCategory(category: string): Observable<any> {
        return this.http.put(this.baseUrl + "/" + category, JSON.stringify({category: category}), {
            headers: this.jwtService.setHeader("admin_token"),
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