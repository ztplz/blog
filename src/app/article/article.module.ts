import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppHeaderModule } from '../share/app-header/app-header.module';
import { AppFooterModule } from '../share/app-footer/app-footer.module';
import { ArticleComponent } from './article.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ArticleService } from './article.service';

import { routing } from './article.routing';

@NgModule({
    declarations: [
        ArticleComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppHeaderModule,
        AppFooterModule,
        NgZorroAntdModule,
        routing,
    ],
    providers: [
        ArticleService,
    ]
})
export class ArticleModule { }
