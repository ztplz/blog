import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { JwtService } from '../share/services/jwt.service';
import { GithubOauthService } from '../share/services/github-oauth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ArticleService {
    baseUrl: string = "http://127.0.0.1:8080/api/v1/articles/";

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private http: HttpClient,
        private githubOauthService: GithubOauthService
        
    ){}

    // getParams(): Observable<any> {
    //     return this.activatedRoute.snapshot.paramMap;
    // }

    getArticleByID() {
        const id: string = this.route.snapshot.children[0].params["id"];
        
        return this.http.get(this.baseUrl + id, {
                //      headers: new HttpHeaders({
                //         'Access-Control-Allow-Origin': '*',
                //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                // })
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

    githunOauth() {
        this.githubOauthService.githubOauth();
    }
}