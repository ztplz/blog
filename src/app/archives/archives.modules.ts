import { NgModule } from '@angular/core';
import { AppHeaderModule } from '../share/app-header/app-header.module';
import { ArchivesComponent } from './archives.component';

import { routing } from './archives.routing';

@NgModule({
    declarations: [
        ArchivesComponent,
    ],
    imports: [
        AppHeaderModule,
        routing,
    ],
    // exports: [ ArchivesComponent ]
})
export class ArchivesModule { }