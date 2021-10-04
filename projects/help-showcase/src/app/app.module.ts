import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  SkyThemeService
} from '@skyux/theme';

import { BBHelpModule } from 'projects/help/src/bb-help.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosModule } from './demos/demos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemosModule,
    BBHelpModule
  ],
  providers: [
    SkyThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
