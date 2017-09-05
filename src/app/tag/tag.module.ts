import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { AppHeaderModule } from '../share/app-header/app-header.module';
import { AppFooterModule } from '../share/app-footer/app-footer.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { TagComponent } from './tag.component';

import { routing } from './tag.routing';

@NgModule({
    declarations: [
        TagComponent,
    ],
    imports: [
        NgZorroAntdModule,
        // CommonModule,
        // FormsModule,
        AppHeaderModule,
        AppFooterModule,
        routing,
    ],
})
export class TagModule { }
