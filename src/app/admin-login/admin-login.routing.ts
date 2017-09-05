import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminLoginComponent } from './admin-login.component';

export const routes: Routes = [
    {
      path: 'admin-login',
      component: AdminLoginComponent,
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
