import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { JwtService } from '../share/services/jwt.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {
    baseUrl = "http://127.0.0.1:8080/api/v1/user/";

    constructor (
        private http: HttpClient,
        private route: ActivatedRoute,
        private jwtService: JwtService
    ) {}

    getUser(): Observable<any> {
        const userID: string = this.route.snapshot.children[0].params["userID"];
        const tokenKey = userID + "_token";

        return this.http.get(this.baseUrl + userID, {
            headers: this.jwtService.setHeader(tokenKey)
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

    changeUserID(newUserID: string): Observable<any> {
        const userID: string = this.route.snapshot.children[0].params["userID"];
        const tokenKey = userID + "_token";

        return this.http.put(this.baseUrl + userID + "?user_id=" + newUserID, {
            headers: this.jwtService.setHeader(tokenKey)
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

    
    changeUserName(newUserName: string): Observable<any> {
        const userID: string = this.route.snapshot.children[0].params["userID"];
        const tokenKey = userID + "_token";

        return this.http.put(this.baseUrl + userID + "?user_name=" + newUserName, {
            headers: this.jwtService.setHeader(tokenKey)
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

    changeUserPassword(newPassword: string): Observable<any> {
        const userID: string = this.route.snapshot.children[0].params["userID"];
        const tokenKey = userID + "_token";

        return this.http.put(this.baseUrl + userID, JSON.stringify({
            password: newPassword,
        }), {
            headers: this.jwtService.setHeader(tokenKey)
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

    register(userID: string, userName: string, password: string) {
        return this.http.post(this.baseUrl, JSON.stringify({
            user_id: userID,
            user_name: userName,
            password: password
        }))
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