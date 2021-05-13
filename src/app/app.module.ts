import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

import { PagesComponent } from './pages/pages.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NotPageFoundComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
