import { NgModule } from '@angular/core';
import { AppHeaderModule } from '../share/app-header/app-header.module';
import { AppFooterModule } from '../share/app-footer/app-footer.module';
import { LoginComponent } from './login.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { routing } from './login.routing';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        NgZorroAntdModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AppHeaderModule,
        AppFooterModule,
        routing,
    ],
    // exports: [ LoginComponent ]
})
export class LoginModule { }
