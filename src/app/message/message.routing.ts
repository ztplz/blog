import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MessageComponent } from './message.component';

export const routes: Routes = [
    {
      path: 'message',
      component: MessageComponent,
    },
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
