import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminCommentComponent } from './admin-comment/admin-comment.component';
import { AdminCreateArticleComponent } from './admin-create-article/admin-create-article.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminManageArticleComponent } from './admin-manage-article/admin-manage-article.component';
import { AdminMessageComponent } from './admin-message/admin-message.component';
import { AdminSettingComponent } from './admin-setting/admin-setting.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminTagComponent } from './admin-tag/admin-tag.component';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AdminChangePasswordService } from './admin-change-password/admin-change-password.service';
import { AdminCategoryService } from './admin-category/admin-category.service';
import { AdminTagService } from './admin-tag/admin-tag.service';
import { AdminCreateArticleService } from './admin-create-article/admin-create-article.service';

import { routing } from './admin.routing';

@NgModule({
    declarations: [
        AdminComponent,
        AdminCommentComponent,
        AdminCreateArticleComponent,
        AdminHomeComponent,
        AdminManageArticleComponent,
        AdminMessageComponent,
        AdminSettingComponent,
        AdminUserComponent,
        AdminCategoryComponent,
        AdminTagComponent,
        AdminChangePasswordComponent,
        AdminInfoComponent,
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(),
    ],
    providers: [
        AdminChangePasswordService,
        AdminCategoryService,
        AdminTagService,
        AdminCreateArticleService,
    ]
})
export class AdminModule { }
