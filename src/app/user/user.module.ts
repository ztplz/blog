import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { AppHeaderModule } from '../share/app-header/app-header.module';
import { AppFooterModule } from '../share/app-footer/app-footer.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FileUploadModule } from "ng2-file-upload"; 

import { UserComponent } from './user.component';

import { routing } from './user.routing';

@NgModule({
    declarations: [
        UserComponent,
    ],
    imports: [
        NgZorroAntdModule,
        // CommonModule,
        // FormsModule,
        AppHeaderModule,
        AppFooterModule,
        FileUploadModule,
        routing,
    ],
})
export class UserModule { }
