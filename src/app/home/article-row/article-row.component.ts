import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';
import 'moment/locale/zh-cn';

@Component({
  selector: 'article-row',
  templateUrl: './article-row.component.html',
  styleUrls: ['./article-row.component.scss']
})
export class ArticleRowComponent implements OnInit { 
    @Input() article: object;

    // test(str: string): string {
    //   console.log(str)
    //     return str.slice(0, 9)
    // }
    
    toArticle(id) {
        console.log(id);
        this.router.navigate(["article", id])
    }

    constructor(
        private router: Router
    ){}

    ngOnInit() {
        // console.log(moment.now());
        // console.log(moment("2017-10-15T19:12:34+08:00", "YYYY-MM-DD HH:mm").format());
        // console.log(this.article);
    }
}