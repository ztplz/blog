import { NgModule } from '@angular/core';
import { AppHeaderModule } from '../share/app-header/app-header.module';
import { AppFooterModule } from '../share/app-footer/app-footer.module';
import { ArchivesComponent } from './archives.component';

import { routing } from './archives.routing';

@NgModule({
    declarations: [
        ArchivesComponent,
    ],
    imports: [
        AppHeaderModule,
        AppFooterModule,
        routing,
    ],
    // exports: [ ArchivesComponent ]
})
export class ArchivesModule { }