import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UserComponent } from './user.component';

export const routes: Routes = [
    {
      path: 'user',
      component: UserComponent,
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
