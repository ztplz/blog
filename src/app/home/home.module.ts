import { NgModule } from '@angular/core';
import { AppHeaderModule } from '../share/app-header/app-header.module';
import { AppFooterModule } from '../share/app-footer/app-footer.module';
import { HomeComponent } from './home.component';
import { ArticleRowComponent } from './article-row/article-row.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { routing } from './home.routing';

@NgModule({
    declarations: [
        HomeComponent,
        ArticleRowComponent,
    ],
    imports: [
        NgZorroAntdModule,
        AppHeaderModule,
        AppFooterModule,
        routing
    ],
})
export class HomeModule { }