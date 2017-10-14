import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { JwtService } from '../../share/services/jwt.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class AdminTagService {
    baseUrl: string = "http://127.0.0.1:8080/api/v1/tags";
 
    constructor (
        private http: HttpClient,
        private jwtService: JwtService
    ) {}

    addTag(color: string, title: string): Observable<any> {
        return this.http.post(this.baseUrl, JSON.stringify({
            color: color,
            tag_title: title
        }), {
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

    getAllTag(): Observable<any> {
        console.log("111111");
        return this.http.get(this.baseUrl)
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

    updateTag(color: string, tagTitle: string): Observable<any> {
        return this.http.put(this.baseUrl + "/" + tagTitle, JSON.stringify({
            color: color,
            tag_title: tagTitle,
        }), {
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