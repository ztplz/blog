import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHeaderModule } from '../share/app-header/app-header.module';
import { AppFooterModule } from '../share/app-footer/app-footer.module';
import { LoginComponent } from './login.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LoginService } from './login.service';

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
    providers: [
        LoginService
    ]
    // exports: [ LoginComponent ]
})
export class LoginModule { }
