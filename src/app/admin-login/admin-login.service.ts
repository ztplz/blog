import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/timeout'



@Injectable()
export class AdminLoginService {
    constructor (private http: HttpClient) {}

    private formatErrors(error: any) {
        return Observable.throw(error.error);
    }
    
    login(adminID: string, password: string) {
        return this.http.post("http://127.0.0.1:8080/api/v1/admin", {
            admin_id: adminID,
            password: password
        })
        .timeout(10000)
        // .catch(err => {
        // }
        // this.formatErrors)
        .catch(err => {
            if (err.name === "TimeoutError") {
                return Observable.throw("请求超时");
            }

            return Observable.throw(err.error)
        })
        .map(res => {
            // console.log(res);
            return res;
        })
    }

}