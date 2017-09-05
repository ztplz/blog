import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TagComponent } from './tag.component';

export const routes: Routes = [
    {
      path: 'tag',
      component: TagComponent,
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
