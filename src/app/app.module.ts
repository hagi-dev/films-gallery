import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { privateRoutingModule } from './page/private/private-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    privateRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
