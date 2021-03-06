import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
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


export const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {path: 'home', component: AdminHomeComponent},
            {path: 'create-article', component: AdminCreateArticleComponent},
            {path: 'manage-article', component: AdminManageArticleComponent},
            {path: 'comment', component: AdminCommentComponent},
            {path: 'message', component: AdminMessageComponent},
            {path: 'user', component: AdminUserComponent},
            {path: 'setting', component: AdminSettingComponent},
            {path: 'category', component: AdminCategoryComponent},
            {path: 'tag', component: AdminTagComponent},
            {path: 'change-password', component: AdminChangePasswordComponent},
            {path: 'admin-info', component: AdminInfoComponent},
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
