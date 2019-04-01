import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PolygonSpinnerModule } from 'polygon-spinner';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PolygonSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
