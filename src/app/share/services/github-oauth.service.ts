import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
// import { JwtService } from '../share/services/jwt.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class GithubOauthService {
    constructor(
        private http: HttpClient
    ){}

    githubOauth() {
        console.log(222222);
        this.http.get("https://github.com/login/oauth/authorizea?client_id=bb34e765fc8abfa3f157&redirect_uri=http://localhost:4200/#/article/4&scope=user")
            .map(res => {
                console.log(res)
            });
    }
}