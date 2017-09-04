import { NgModule } from '@angular/core';
import { AppHeaderModule } from '../share/app-header/app-header.module';
import { AboutComponent } from './about.component';

import { routing } from './about.routing';

@NgModule({
    declarations: [
        AboutComponent,
    ],
    imports: [
        AppHeaderModule,
        routing,
    ],
    // exports: [ AboutComponent ]
})
export class AboutModule { }
