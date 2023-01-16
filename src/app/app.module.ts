import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainInterceptor } from './core/interceptors/main.interceptor';
import { SharedModule } from './shared/shared.module';
import { UiComponentsModule } from './ui-components/ui-components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UiComponentsModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass : MainInterceptor, multi : true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
