import { NgModule } from '@angular/core';
import { AppHeaderModule } from '../share/app-header/app-header.module';
import { NotFoundComponent } from './not-found.component';

import { routing } from './404-not-found.routing';

@NgModule({
    declarations: [
        NotFoundComponent,
    ],
    imports: [
        AppHeaderModule,
        routing,
    ],
    // exports: [ LoginComponent ]
})
export class NotFoundModule { }
