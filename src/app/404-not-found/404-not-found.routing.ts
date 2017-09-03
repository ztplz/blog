import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './404-not-found.component';

export const routes: Routes = [
    {
      path: '404-not-found',
      component: NotFoundComponent,
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
