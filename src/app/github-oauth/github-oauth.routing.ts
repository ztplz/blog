import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { GithubOauthComponent } from './github-oauth.component';

export const routes: Routes = [
    {
      path: 'github-oauth',
      component: GithubOauthComponent,
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);