import { NgModule } from '@angular/core';
import { AppFooterComponent } from './app-footer.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
    declarations: [
        AppFooterComponent,
    ],
    imports: [
        NgZorroAntdModule,
    ],
    exports: [ AppFooterComponent ]
})

export class AppFooterModule { }