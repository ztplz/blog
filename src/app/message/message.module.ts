import { NgModule } from '@angular/core';
import { AppHeaderModule } from '../share/app-header/app-header.module';
import { MessageComponent } from './message.component';

import { routing } from './message.routing';

@NgModule({
    declarations: [
        MessageComponent,
    ],
    imports: [
        AppHeaderModule,
        routing,
    ],
    // exports: [ LoginComponent ]
})
export class MessageModule { }
