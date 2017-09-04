import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { ArchivesModule } from './archives/archives.module';
import { MessageModule } from './message/message.module';
import { AboutModule } from './about/about.module'
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { NotFoundModule } from './404-not-found/404-not-found.module';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    HomeModule,
    ArchivesModule,
    MessageModule,
    AboutModule,
    RegisterModule,
    LoginModule,
    NotFoundModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
