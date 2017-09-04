import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AboutComponent } from './about.component';

export const routes: Routes = [
    {
      path: 'about',
      component: AboutComponent,
    },
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
