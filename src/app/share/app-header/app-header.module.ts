import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
    declarations: [
        AppHeaderComponent,
    ],
    imports: [
        NgZorroAntdModule,
    ],
    exports: [ AppHeaderComponent ]
})

export class AppHeaderModule { }