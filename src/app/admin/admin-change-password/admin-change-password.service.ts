import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { JwtService } from '../../share/services/jwt.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class AdminChangePasswordService {

    constructor (
        private http: HttpClient,
        private jwtService: JwtService
    ) {}

    private formatErrors(error: any) {
        return Observable.throw(error.error);
    }
    
    changeAdminPassword(oldPassword: string, newPassword: string): Observable<any> {
        const body = {
            old_password: oldPassword,
            new_password: newPassword,
        };
        return this.http.put("http://127.0.0.1:8080/api/v1/admin/password", JSON.stringify(body), {
            headers: this.jwtService.setHeader("admin_token"),
        })
        .catch(this.formatErrors)
        .map(res => {
            // console.log(res);
            return res;
        })
    }
}