import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHeaderModule } from '../share/app-header/app-header.module';
import { AppFooterModule } from '../share/app-footer/app-footer.module';
import { RegisterComponent } from './register.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { CommonModule } from '@angular/common';

import { RegisterService } from './register.service';

import { routing } from './register.routing';

@NgModule({
    declarations: [
        RegisterComponent,
    ],
    imports: [
        NgZorroAntdModule,
        AppHeaderModule,
        AppFooterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        routing,
    ],
    providers: [
        RegisterService,
    ]
})
export class RegisterModule { }
