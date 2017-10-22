import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
    },
    // {
    //   path: 'home?code=**',
    //   component: HomeComponent,
    // }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);