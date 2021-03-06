import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RegisterComponent } from './register.component';

export const routes: Routes = [
    {
      path: 'register',
      component: RegisterComponent,
    },
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
