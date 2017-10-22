import { NgModule } from '@angular/core';
import { GithubOauthComponent } from './github-oauth.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { routing } from './github-oauth.routing';


@NgModule({
    declarations: [
        GithubOauthComponent,
    ],
    imports: [
        NgZorroAntdModule,
        routing,
    ],
    // exports: [ AppFooterComponent ]
})

export class GithubOauthModule { }