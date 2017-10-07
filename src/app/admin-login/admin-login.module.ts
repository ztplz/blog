import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login.component';
import { AppHeaderModule } from '../share/app-header/app-header.module';
import { AppFooterModule } from '../share/app-footer/app-footer.module';

import { AdminLoginService } from './admin-login.service';
import { JwtService } from '../share/services/jwt.service';

import { routing } from './admin-login.routing';

@NgModule({
    declarations: [
        AdminLoginComponent,
    ],
    imports: [
        NgZorroAntdModule,
        AppHeaderModule,
        AppFooterModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        routing,
    ],
    providers: [
        AdminLoginService,
        JwtService,
    ]
})
export class AdminLoginModule { }
