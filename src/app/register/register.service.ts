import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { JwtService } from '../share/services/jwt.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class RegisterService {
    baseUrl = "http://127.0.0.1:8080/api/v1/user";

    constructor (
        private http: HttpClient,
        private jwtService: JwtService
    ) {}

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