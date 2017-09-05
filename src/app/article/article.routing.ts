import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ArticleComponent } from './article.component';

export const routes: Routes = [
    {
      path: 'article',
      component: ArticleComponent,
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);