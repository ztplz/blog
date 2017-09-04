import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ArchivesComponent } from './archives.component';

export const routes: Routes = [
    {
      path: 'archives',
      component: ArchivesComponent,
    },
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
