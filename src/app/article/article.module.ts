import { NgModule } from '@angular/core';
import { AppHeaderModule } from '../share/app-header/app-header.module';
import { AppFooterModule } from '../share/app-footer/app-footer.module';
import { ArticleComponent } from './article.component';

import { routing } from './article.routing';

@NgModule({
    declarations: [
        ArticleComponent,
    ],
    imports: [
        AppHeaderModule,
        AppFooterModule,
        routing,
    ],
})
export class ArticleModule { }