import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalsListComponent } from './locals-list/locals-list.component';
import { LocalsDetailsComponent } from './locals-details/locals-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { HomeComponent } from './partials/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalsListComponent,
    LocalsDetailsComponent,
    EventsDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
