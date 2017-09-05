import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CategoryComponent } from './category.component';

export const routes: Routes = [
    {
      path: 'category',
      component: CategoryComponent,
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
