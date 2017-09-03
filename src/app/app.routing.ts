import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: 'home'
    }
];
  
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });