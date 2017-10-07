import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { JwtService } from '../share/services/jwt.service';

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
        .catch(this.formatErrors)
        .map(res => {
            // console.log(res);
            return res;
        })
    }
}